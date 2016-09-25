let router = new Router();
let authBiz = require('./../bizs/authBiz');

router.post('/login', authBiz.doLogin);

router.post('/autologin', authBiz.doAutoLogin);

module.exports = {
  priority: 0,
  router: router,
  prefix: '/auth'
};