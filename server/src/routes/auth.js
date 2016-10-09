let router = new Router();
let authBiz = require('./../bizs/authBiz');

router.post('/login', authBiz.doLogin);

router.post('/autologin', authBiz.doAutoLogin);

router.post('/register', authBiz.doRegister);

module.exports = {
  priority: 0,
  router: router,
  prefix: '/auth'
};