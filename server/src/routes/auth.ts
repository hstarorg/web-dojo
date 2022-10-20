import { Router } from 'express';
import { util } from '../common';
import { authBiz } from '../bizs/authBiz';

const router = Router();

router
  // 自动登录
  .post('/autologin', util.asyncBusinessFn(authBiz.doAutoLogin))
  // SSO登录
  .post('/ssologin', util.asyncBusinessFn(authBiz.doSsoLogin));

module.exports = {
  priority: 0,
  router: router,
  prefix: '/auth',
};
