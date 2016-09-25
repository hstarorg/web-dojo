import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import { auth } from './../services';

import Login from './../pages/Login.vue';

import Layout from './../pages/Layout.vue';
import Home from './../pages/Home.vue';
import Foo from './../pages/Foo.vue';
import MyCode from './../pages/MyCode.vue';
import Square from './../pages/Square.vue';
import Code from './../pages/Code.vue';

let requireAuth = (route, redirect, next) => {
  console.log(auth);
  if (!auth.isLogged) {
    redirect({
      path: '/login',
      query: { redirect: route.fullPath }
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
    {
      path: '/logout',
      beforeEnter(route, redirect) {
        auth.logout();
        redirect('/');
      }
    },
    {
      path: '/', component: Layout, meta: { auth: true },
      children: [
        { path: '', component: Code },
        { path: 'foo', component: Foo },
        { path: 'mycode', component: MyCode },
        { path: 'square', component: Square }
      ]
    }
  ]
});

let isTheFirst = true;

router.beforeEach((route, redirect, next) => {
  if (route.matched.some(record => record.meta.auth)) {
    if (isTheFirst) {
      auth.autoLogin(auth.getLocalToken())
        .then(() => {
          requireAuth(route, redirect, next);
        });
      isTheFirst = false;
      return;
    }
    requireAuth(route, redirect, next);
  } else {
    next();
  }
});