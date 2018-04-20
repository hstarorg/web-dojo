const localConfig = require('./local.config');

module.exports = Object.assign(
  {
    port: 7411,
    apiPrefix: '/api/v1'
  },
  localConfig
);
