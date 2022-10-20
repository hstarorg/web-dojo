import { Router } from 'express';

import { gistBiz } from '../bizs/gistBiz';
import { authBiz } from '../bizs/authBiz';

const router = Router();

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
  prefix: '/gist',
};
