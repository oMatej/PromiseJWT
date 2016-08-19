'use strict'
import jwt from 'jsonwebtoken';

export const sign = (payload = {}, secretOrPrivateKey = 'secret', options = {}) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, secretOrPrivateKey, options, (error, success) => {
      if (error) {
        return reject(error);
      }
      return resolve(success);
    });
  });
}

export const verify = (token = null, secretOrPublicKey = 'secret', options = {}) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secretOrPublicKey, (error, success) => {
      if (error) {
        return reject(error);
      }
      return resolve(success);
    });
  });
}

export const decode = (token = null, options = {}) => {
  return Promise.resolve(jwt.decode(token, options));
}

export default { sign, verify, decode };
