import { GetPublicKeyOrSecret } from 'jsonwebtoken';
import { JwksClient } from 'jwks-rsa';


const getSigningPublicKey = (client: JwksClient): GetPublicKeyOrSecret => (header, callback) => {
  if (!header || !header.kid) {
    return callback('Invalid or none signing key id (kid) in access token!', undefined);
  }

  client.getSigningKey(header.kid, (err, key) => {
    if (err) {
      return callback(`${err}`, undefined);
    }
    if (!key) {
      return callback('No signing key was downloaded from jwks!', undefined);
    }

    const signingKey = key.publicKey || key.rsaPublicKey;
    if (!signingKey) {
      return callback('Invalid signing key was downloaded from jwks!', undefined);
    }

    callback(null, signingKey);
  });
};


export {
  getSigningPublicKey,
};
