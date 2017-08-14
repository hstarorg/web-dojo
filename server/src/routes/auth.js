const router = new Router();
const { util } = require('../common');
const authBiz = require('./../bizs/authBiz');

router.post('/autologin', util.asyncBusinessFn(authBiz.doAutoLogin));
router.post('/ssologin', util.asyncBusinessFn(authBiz.doSsoLogin));

module.exports = {
  priority: 0,
  router: router,
  prefix: '/auth'
};
