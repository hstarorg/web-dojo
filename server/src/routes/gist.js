let router = new Router();
let gistBiz = require('./../bizs/gistBiz');
let authBiz = require('./../bizs/authBiz');

router
  // 创建Gist
  .post('/', authBiz.validateUser, gistBiz.createGist)
  // 获取我的gist
  .get('/mygists', authBiz.validateUser, gistBiz.getGists)
  // 获取特定的gist
  .get('/:gistId', gistBiz.getGist);

module.exports = {
  priority: 0,
  router: router,
  prefix: '/gist'
};
