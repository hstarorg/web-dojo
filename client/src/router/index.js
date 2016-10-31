import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import { layer } from './../common';
import { auth } from './../services';

import Login from './../pages/Login.vue';
import Register from './../pages/Register.vue';

import Layout from './../pages/Layout.vue';
import MyCode from './../pages/MyCode.vue';
import Square from './../pages/Square.vue';
import Code from './../pages/Code.vue';
import NotFound from './../pages/NotFound.vue';
import RedirectToCode from './../pages/RedirectToCode.vue';

let requireAuth = (to, from, next) => {
  if (!auth.isLogged) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    });
  } else {
    next();
  }
};

export const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
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
        { path: ':id', component: Code }
      ]
    },
    { path: '*', component: NotFound }
  ]
});

let isTheFirst = true;

router.beforeEach((to, from, next) => {
  layer.closeAll();
  if (to.matched.some(record => record.meta.auth)) {
    if (isTheFirst) {
      auth.autoLogin(auth.getLocalToken())
        .then(() => {
          requireAuth(to, from, next);
        });
      isTheFirst = false;
      return;
    }
    requireAuth(to, from, next);
  } else {
    next();
  }
});