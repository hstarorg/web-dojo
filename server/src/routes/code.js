let router = new Router();
let userBiz = require('./../bizs/codeBiz');

router.get('/:codeId');

router.get('/:codeId/:rev');

router.post('/');

router.put('/:codeId');

module.exports = {
  priority: 0,
  router: router,
  prefix: '/code'
};