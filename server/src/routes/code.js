let router = new Router();
let codeBiz = require('./../bizs/codeBiz');
let authBiz = require('./../bizs/authBiz');
let { util } = require('../common');


router.get('/mycodes', authBiz.validateUser, codeBiz.getMyCodes);

router.get('/:codeId', codeBiz.getCode);

router.get('/:codeId/:rev');

router.post('/', authBiz.validateUser, codeBiz.createCode);

router.put('/:codeId', authBiz.validateUser, util.asyncBusinessFn(codeBiz.updateCode));


module.exports = {
  priority: 0,
  router: router,
  prefix: '/code'
};
