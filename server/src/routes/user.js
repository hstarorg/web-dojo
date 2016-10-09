const router = new Router();
const userBiz = require('./../bizs/userBiz');
const authBiz = require('./../bizs/authBiz');

router.get('/codes', authBiz.validateUser, userBiz.getMyCodes);

module.exports = {
  priority: 0,
  router: router,
  prefix: '/user'
};