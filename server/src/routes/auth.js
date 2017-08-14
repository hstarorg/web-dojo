const router = new Router();
const { util } = require('../common');
const authBiz = require('./../bizs/authBiz');

router.post('/login', authBiz.doLogin);

router.post('/autologin', authBiz.doAutoLogin);

router.post('/ssologin', util.asyncBusinessFn(authBiz.doSsoLogin));

// router.post('/register', authBiz.doRegister);

module.exports = {
  priority: 0,
  router: router,
  prefix: '/auth'
};
