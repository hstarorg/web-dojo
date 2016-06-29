import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './components/App.vue';
import Foo from './components/Foo.vue';

Vue.use(VueRouter);

let router = new VueRouter({
  history: true
});

router.map({
  '/foo': {component: Foo}
});

router.start(App, '#js-dojo-app');