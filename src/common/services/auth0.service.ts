import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

import { loadEnvConfig, readEnvironmentVariable } from '@source/utils';

// Load config from .env
loadEnvConfig();


export interface ICreateUserData {
  email: string;
  name?: string;
  password: string;
  picture?: string;
}


@Injectable()
export class Auth0Service {

  private accessToken: string | null;
  private accessTokenResetter: any;

  private apiUrl: string;

  constructor() {
    this.accessToken = null;
    this.accessTokenResetter = null;

    const domain = readEnvironmentVariable('AUTH0_CLIENT_DOMAIN');
    this.apiUrl = `https://${domain}/api/v2`;
  }

  /**
   * Get user profile from Auth0 API for given email. If user doesn't exists
   * returns null
   *
   * @param {string} email
   */
  public async getUserByEmail(email: string) {
    const accessToken = await this.getAccessToken();

    const options = {
      headers: {
        'authorization': `Bearer ${accessToken}`,
      },
      method: 'get',
    };

    const url = `${this.apiUrl}/users-by-email?email=${email}`;

    return fetch(url, options)
    .then(res => res.json())
    .then((...args) => this.handleUnauthorizedError(...args))
    .then((json: any[] | null | undefined) => {
      if (!json || json.length < 1) {
        return Promise.resolve(null);
      }

      if (json.length === 1) {
        return Promise.resolve(json[0]);
      }

      // More then one user.. It's because user is registered with more services
      // (Google, Facebook, Auth0, etc) with the same email. So just get user profile
      // associated with Auth0 service
      const filtered = json.filter((usr) => this.getUserIdType(usr.user_id) === 'auth0');
      if (filtered.length < 1) {
        // User is registered with some service (Google, Facebook, etc), but not in Auth0
        // so do another filtering... Needs to be specified, now just returns null
        return Promise.resolve(null);
      }

      return Promise.resolve(filtered[0]);
    });
  }

  /**
   * Simple method that returns all users registered in Auth0
   */
  public async getAllUsers() {
    const accessToken = await this.getAccessToken();

    const options = {
      headers: {
        'authorization': `Bearer ${accessToken}`,
      },
      method: 'get',
    };

    const url = `${this.apiUrl}/users`;

    return fetch(url, options)
    .then(res => res.json())
    .then((...args) => this.handleUnauthorizedError(...args))
    .then(json => {
      if (!json || !Array.isArray(json)) {
        return Promise.resolve([]);
      }

      return Promise.resolve(json);
    });
  }

  /**
   * Create a new user in Auth0 with given email.
   */
  public async createUser(data: ICreateUserData) {
    if (!data.name || data.name.length < 2) {
      data.name = data.email;
    }
    if (!data.picture || data.picture.length < 2) {
      delete data.picture;
    }

    const accessToken = await this.getAccessToken();

    const connection = readEnvironmentVariable('AUTH0_CONNECTION');

    const options = {
      body: JSON.stringify({ ...data, connection }),
      headers: {
        'authorization': `Bearer ${accessToken}`,
        'content-type': 'application/json',
      },
      method: 'post',
    };

    const url = `${this.apiUrl}/users`;

    return fetch(url, options)
    .then(res => res.json())
    .then((...args) => this.handleUnauthorizedError(...args))
    .then(json => {
      if (!json) {
        return Promise.resolve(null);
      }
      if (json.error) {
        if (json.statusCode === 409) {
          // User already exists, return it
          return this.getUserByEmail(data.email);
        }

        throw new Error(json.message);
      }

      return Promise.resolve(json);
    });
  }

  /**
   * Delete user from Auth0 by given email
   *
   * @param {string} email
   */
  public async deleteUserByEmail(email: string) {
    const user = await this.getUserByEmail(email);
    if (!user) { return Promise.resolve(true); }

    return this.deleteUserById(user.user_id);
  }

  /**
   * Delete user from Auth0 by given id. Notice, that this id is full auth0 user_id, so
   * it's in format "type|id", example auth0|fdfsesf907863kjdsf or google-oauth2|kjsdlkf9843inklj9823
   *
   * @param {string} id
   */
  public async deleteUserById(id: string) {
    const accessToken = await this.getAccessToken();

    const options = {
      headers: {
        'authorization': `Bearer ${accessToken}`,
      },
      method: 'delete',
    };

    const url = `${this.apiUrl}/users/${id}`;

    return fetch(url, options)
    .then(res => {
      this.handleUnauthorizedError({ statusCode: res.status });
      if (res.status === 204) {
        return Promise.resolve(true);
      }

      return Promise.resolve(false);
    });
  }

  /**
   * Change password for user with given email.
   *
   * @param {string} email
   * @param {string} password
   */
  public async updateUserPasswordByEmail(email: string, password: string) {
    const user = await this.getUserByEmail(email);
    if (!user) { return Promise.resolve(null); }

    return this.updateUserPasswordById(user.user_id, password);
  }

  /**
   * Change password for user with given id. Notice, that this id is full auth0 user_id, so
   * it's in format "type|id", example auth0|fdfsesf907863kjdsf or google-oauth2|kjsdlkf9843inklj9823
   *
   * @param {string} email
   * @param {string} password
   */
  public async updateUserPasswordById(id: string, password: string) {
    const accessToken = await this.getAccessToken();

    const options = {
      body: JSON.stringify({ password }),
      headers: {
        'authorization': `Bearer ${accessToken}`,
        'content-type': 'application/json',
      },
      method: 'patch',
    };

    const url = `${this.apiUrl}/users/${id}`;

    return fetch(url, options)
    .then(res => res.json())
    .then((...args) => this.handleUnauthorizedError(...args))
    .then(json => {
      if (!json) {
        return Promise.resolve(null);
      }

      if (json.error) {
        throw new Error(json.message);
        return Promise.resolve(null);
      }

      return Promise.resolve(json);
    });
  }

  /**
   * Simple helper that extract user id type (Auth0, Google, etc) from user_id property
   * in auth0 user object. This property has format like "type|id"
   *
   * @param {string | null | udefined} userId directly from auth0 user object
   * @return {string | null} null if userId is invalid or empty
   */
  public getUserIdType(userId: string | null | undefined) {
    if (!userId) { return null; }

    const regex = /^([^\|]+)/i;
    const match = regex.exec(userId);

    if (!match || !match[1]) {
      return null;
    }

    return match[1];
  }

  /**
   * Simple helper that extract just ID from user_id property in auth0 user object.
   * This property has format like "type|id"
   *
   * @param {string | null | udefined} userId directly from auth0 user object
   * @return {string | null} null if userId is invalid or empty
   */
  public getUserId(userId: string | null | undefined) {
    if (!userId) { return null; }

    const regex = /\|([^\|]+)$/i;
    const match = regex.exec(userId);

    if (!match || !match[1]) {
      return null;
    }

    return match[1];
  }

  /**
   * Simple helper that decode auth0 ID from given access token
   *
   * @param {string} token a valid access token
   * @return {string | null}
   */
  public getAuth0IdFromAccessToken(token: string): string | null {
    const decoded = jwt.decode(token);

    if (!decoded || !decoded.sub) {
      return null;
    }

    const auth0Id = this.getUserId(decoded.sub);
    if (!auth0Id) {
      return null;
    }

    return auth0Id;
  }

  /**
   * This method just looks for errors in response from API and
   * handle unauthorized access.
   */
  private handleUnauthorizedError(...args: any[]) {
    if (args[0] && args[0].statusCode === 401) {
      // tslint:disable-next-line:no-console
      console.log('Reseting access token');
      this.resetAccessToken();
      return Promise.resolve(null);
    }

    if (args.length > 1) {
      return Promise.resolve([ ...args ]);
    }

    return Promise.resolve(args[0]);
  }

  /**
   * Get access token for Management API. If token is already set in local
   * variable (works like cache), then returns it from this variable, otherwise
   * token will be gathered from Auth0 API.
   */
  private async getAccessToken() {
    if (this.accessToken) {
      return Promise.resolve(this.accessToken);
    }

    const clientId = readEnvironmentVariable('AUTH0_CLIENT_ID');
    const clientSecret = readEnvironmentVariable('AUTH0_CLIENT_SECRET');
    const domain = readEnvironmentVariable('AUTH0_CLIENT_DOMAIN');

    const credentials = {
      audience: `https://${domain}/api/v2/`,
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: 'client_credentials'
    };

    const options = {
      body: JSON.stringify(credentials),
      headers: {
        'content-type': 'application/json',
      },
      method: 'post',
    };

    const url = `https://${domain}/oauth/token`;

    return fetch(url, options)
    .then(res => res.json(), err => {
      this.setAccessToken(null, 0);
      return Promise.resolve(null);
    })
    .then(json => {
      if (!json || !json.access_token || !json.expires_in) {
        this.setAccessToken(null, 0);
        return Promise.resolve(null);
      }

      this.setAccessToken(json.access_token, json.expires_in);
      return Promise.resolve(json.access_token);
    });
  }

  /**
   * Set access token into local variable (works like cache) and setup timer to
   * reset this access token after expiration
   *
   * @param {string | null} token which will be set into "cache", if null, reset current
   * @param {number} expiresIn in seconds
   */
  private setAccessToken(token: string | null, expiresIn: number) {
    if (this.accessTokenResetter) {
      clearTimeout(this.accessTokenResetter);
    }

    if (!token) { return; }

    this.accessToken = token;
    this.accessTokenResetter = setTimeout(this.resetAccessToken, expiresIn);
  }

  /**
   * Reset access token in local variable (works like cache) and also reset timer
   * which resets access token after expiration
   */
  private resetAccessToken() {
    this.accessToken = null;

    if (this.accessTokenResetter) {
      clearTimeout(this.accessTokenResetter);
    }
    this.accessTokenResetter = null;
  }

}
