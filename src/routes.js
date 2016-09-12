import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import { App, Foo, Square, MyCode, Code } from './pages';

export const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: App },
    { path: '/square', component: Square },
    { path: '/mycode', component: MyCode }
  ]
});