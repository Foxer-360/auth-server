import { CanActivate, ExecutionContext, Inject, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import * as jwt from 'jsonwebtoken';
import { JwksClient } from 'jwks-rsa';

import { Colors, getSigningPublicKey, loadEnvConfig, readEnvironmentVariable } from '@source/utils';

// Load config from .env
loadEnvConfig();

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(@Inject('JwksClient') private readonly client: JwksClient) {}

  public canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const ctx = GqlExecutionContext.create(context).getContext();
    if (!ctx.headers || !ctx.headers.authorization) {
      return false;
    }

    const regex = /^Bearer\s*([^\s]+)$/i;
    const match = regex.exec(ctx.headers.authorization);
    if (!match || !match[1]) {
      return false;
    }

    const accessToken = match[1];

    // Verify env properties
    const audience = readEnvironmentVariable('auth0_audience');

    // Verify JWT access token
    const options = {
      algorithms: ['RS256'],
      audience,
    };

    return new Promise((resolve) => {
      jwt.verify(accessToken, getSigningPublicKey(this.client), options, (err, decode) => {
        if (err) {
          const prefix = Colors.red(Colors.bright('[Auth Error]'));
          const msg = Colors.red(err.toString());
          // tslint:disable-next-line:no-console
          console.log(`${prefix} ${msg}`);

          return resolve(false);
        }

        return resolve(true);
      });
    });
  }

}
