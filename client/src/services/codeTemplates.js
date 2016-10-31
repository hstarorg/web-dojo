export const codeTemplates = {
  vue: {
    javascript: `new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  }
})`,
    html: `<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title>Web Dojo Code</title>
    <script src="//cdnjs.cloudflare.com/ajax/libs/vue/1.0.28/vue.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/vuex/1.0.0/vuex.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/vue-router/0.7.13/vue-router.js"></script>
  </head>
  <body>
    <div id="app">
      <h1>{{ message }}</h1>
    </div>
  </body>
</html>`,
    css: ``
  },
  vue2: {
    javascript: `new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!（Vue2）'
  }
})`,
    html: `<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title>Web Dojo Code</title>
    <script src="//cdnjs.cloudflare.com/ajax/libs/vue/2.0.3/vue.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/vuex/2.0.0/vuex.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/vue-router/2.0.1/vue-router.js"></script>
  </head>
  <body>
    <div id="app">
      <h1>{{ message }}</h1>
    </div>
  </body>
</html>`,
    css: ``
  },
  jquery: {
    javascript: `$(function() {
  //do something
});`,
    html: `<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title>Web Dojo Code</title>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.js"></script>
  </head>
  <body>
    <div>
      <h1>Hello Dojo(jQuery)</h1>
    </div>
  </body>
</html>`,
    css: ''
  },
  normal: {
    javascript: ``,
    html: `<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title>Web Dojo Code</title>
  </head>
  <body>
    <div>
      <h1>Hello Dojo</h1>
    </div>
  </body>
</html>`,
    css: ``
  },
  angular: {
    javascript: `angular.module('app', [])
.controller('DefaultController', ['$scope', function($scope){
  $scope.message = 'Hello Angular!';
}]);

angular.bootstrap(document, ['app']);`,
    html: `<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title>Good</title>
    <script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular.js"></script>
  </head>
  <body>
    <div ng-controller="DefaultController">
      <h1>{{ message }}</h1>
    </div>
  </body>
</html>`,
    css: ``
  }
};