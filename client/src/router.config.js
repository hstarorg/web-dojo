import Vue from 'vue';
import VueRouter from 'vue-router';

import { layer } from './common';
import Code from './pages/codes/Code.vue';
import MyCode from './pages/codes/MyCode.vue';
import Square from './pages/codes/Square.vue';
import NotFound from './pages/error/NotFound.vue';
import AddGist from './pages/gists/AddGist.vue';
import GistDetail from './pages/gists/GistDetail.vue';
import MyGist from './pages/gists/MyGist.vue';
import Layout from './pages/layout/Layout.vue';
import Login from './pages/login/Login.vue';
import RedirectToCode from './pages/RedirectToCode.vue';
import Register from './pages/register/Register.vue';
import { auth } from './services';

Vue.use(VueRouter);
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
    path: '/',
    component: Layout,
    meta: { auth: true },
    children: [
      { path: '', component: Code },
      { path: 'new', component: RedirectToCode },
      { path: 'mycodes', component: MyCode },
      { path: 'square', component: Square },
      { path: 'mygists', component: MyGist },
      { path: 'newgist', component: AddGist },
      { path: ':id([a-z0-9]{12})', component: Code },
      { path: 'gist/:id([a-z0-9]{12})', component: GistDetail }
    ]
  },
  { path: '*', redirect: '/', component: NotFound }
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
