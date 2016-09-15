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
  if (!auth.loggedIn()) {
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
      path: '/', component: Layout,
      children: [
        { path: '', component: Code },
        { path: 'foo', component: Foo },
        { path: 'mycode', component: MyCode },
        { path: 'square', component: Square }
      ]
    }
  ]
});