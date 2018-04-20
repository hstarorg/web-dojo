const router = new Router();
const { util } = require('../common');
const authBiz = require('./../bizs/authBiz');

router
  // 自动登录
  .post('/autologin', util.asyncBusinessFn(authBiz.doAutoLogin))
  // SSO登录
  .post('/ssologin', util.asyncBusinessFn(authBiz.doSsoLogin));

module.exports = {
  priority: 0,
  router: router,
  prefix: '/auth'
};
