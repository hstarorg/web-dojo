const crypto = require('crypto');

module.exports = {
  buildHash(key, len) {
    key = `${key}_${Date.now()}_${Math.random()}`;
    let hash = crypto.createHash('md5').update(key).digest('hex');
    return hash.substring(0, len || 12);
  },

  asyncBusinessFn(fn) {
    return async (req, res, next) => {
      fn(req, res, next).catch((err) => {
        next(err);
      });
    };
  },
};
