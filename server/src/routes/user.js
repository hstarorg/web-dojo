let router = new Router();
let userBiz = require('./../bizs/userBiz');

router.post('/', userBiz.doRegister);

module.exports = {
  priority: 0,
  router: router,
  prefix: '/user'
};