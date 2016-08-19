'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decode = exports.verify = exports.sign = undefined;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sign = exports.sign = function sign() {
  var payload = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var secretOrPrivateKey = arguments.length <= 1 || arguments[1] === undefined ? 'secret' : arguments[1];
  var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  return new Promise(function (resolve, reject) {
    _jsonwebtoken2.default.sign(payload, secretOrPrivateKey, options, function (error, success) {
      if (error) {
        return reject(error);
      }
      return resolve(success);
    });
  });
};

var verify = exports.verify = function verify() {
  var token = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
  var secretOrPublicKey = arguments.length <= 1 || arguments[1] === undefined ? 'secret' : arguments[1];
  var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  return new Promise(function (resolve, reject) {
    _jsonwebtoken2.default.verify(token, secretOrPublicKey, function (error, success) {
      if (error) {
        return reject(error);
      }
      return resolve(success);
    });
  });
};

var decode = exports.decode = function decode() {
  var token = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  return Promise.resolve(_jsonwebtoken2.default.decode(token, options));
};

exports.default = { sign: sign, verify: verify, decode: decode };