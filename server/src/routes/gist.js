let router = new Router();
let gistBiz = require('./../bizs/gistBiz');
let authBiz = require('./../bizs/authBiz');

router.post('/', authBiz.validateUser, gistBiz.createGist);

router.get('/gists', authBiz.validateUser, gistBiz.getGists);

router.get('/gist/:gistId', gistBiz.getGist);

module.exports = {
  priority: 0,
  router: router,
  prefix: '/gist'
};