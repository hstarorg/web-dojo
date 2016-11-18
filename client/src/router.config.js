import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import { layer } from './common';
import { auth } from './services';

import Login from './pages/login/Login.vue';
import Register from './pages/register/Register.vue';

import Layout from './pages/layout/Layout.vue';
import MyCode from './pages/codes/MyCode.vue';
import Square from './pages/codes/Square.vue';
import Code from './pages/codes/Code.vue';
import NotFound from './pages/error/NotFound.vue';
import RedirectToCode from './pages/RedirectToCode.vue';
import MyGist from './pages/gists/MyGist.vue';

const routes = [
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  {
    path: '/logout',
    beforeEnter(to, from, next) {
      auth.logout();
      next('/');
    }
  },
  {
    path: '/', component: Layout, meta: { auth: true },
    children: [
      { path: '', component: Code },
      { path: 'new', component: RedirectToCode },
      { path: 'mycode', component: MyCode },
      { path: 'square', component: Square },
      { path: 'mygist', component: MyGist },
      { path: ':id([a-z0-9]{12})', component: Code }
    ]
  },
  { path: '*', component: NotFound }
];

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes
});

router.beforeEach((to, from, next) => {
  layer.closeAll();
  // 如果菜单需要授权
  if (to.matched.some(record => record.meta.auth)) {
    auth.requireAuth(to, from, next);
  } else {
    next();
  }
});

export default router;