let router = new Router();
let codeBiz = require('./../bizs/codeBiz');
let authBiz = require('./../bizs/authBiz');

router.get('/:codeId', codeBiz.getCode);

router.get('/:codeId/:rev');

router.post('/', authBiz.validateUser, codeBiz.createCode);

router.put('/:codeId', authBiz.validateUser, codeBiz.updateCode);

module.exports = {
  priority: 0,
  router: router,
  prefix: '/code'
};