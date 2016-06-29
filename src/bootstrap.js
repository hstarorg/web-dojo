import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './components/App.vue';
import Foo from './components/Foo.vue';
import Square from './components/Square.vue';
import MyCode from './components/MyCode.vue';

Vue.use(VueRouter);

let router = new VueRouter({
  history: true
});

router.map({
  '/square': { component: Square },
  '/mycode': { component: MyCode },
  '/:id': { component: Foo },

});

router.redirect({
  '*': '/square'
})

router.start(App, '#js-dojo-app');