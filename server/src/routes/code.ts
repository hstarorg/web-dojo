import { Router } from 'express';

import { codeBiz } from '../bizs/codeBiz';
import { authBiz } from '../bizs/authBiz';
import { util } from '../common';

const router = Router();

router
  // 获取项目列表
  .get('/mycodes', authBiz.validateUser, codeBiz.getMyCodes)
  // 获取具体的项目
  .get('/:codeId', codeBiz.getCode)
  // 根据具体项目的特定版本
  .get('/:codeId/:rev')
  // 创建项目
  .post('/', authBiz.validateUser, codeBiz.createCode)
  // 更新项目内容
  .put('/:codeId', authBiz.validateUser, util.asyncBusinessFn(codeBiz.updateCode));

module.exports = {
  priority: 0,
  router: router,
  prefix: '/code',
};
