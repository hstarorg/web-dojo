((app) => {
  'use strict';
  let App = Vue.extend({});
  var Foo = Vue.extend({
    template: 'AAA'
  });
  var Bar = Vue.extend({
    template: 'Bar'
  });
  var router = new VueRouter({ history: true });
  router.map({
    '/foo': { component: Foo },
    '/bar': { component: Bar }
  });
  router.start(App, '#js-dojo-app');
})(window.App);
