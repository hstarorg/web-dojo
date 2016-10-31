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
    <title>Good</title>
    <!-- 请不要删除以下标记，用于加载CSS -->
    <!--dojo-css-->
    <script src="//cdnjs.cloudflare.com/ajax/libs/vue/1.0.28/vue.js"></script>
  </head>
  <body>
    <div id="app">
      <h1>{{ message }}</h1>
    </div>
    <!-- 请不要删除以下标记，用于加载JS -->
    <!--dojo-js-->
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
    <title>Good</title>
    <!-- 请不要删除以下标记，用于加载CSS -->
    <!--dojo-css-->
    <script src="//cdnjs.cloudflare.com/ajax/libs/vue/2.0.1/vue.js"></script>
  </head>
  <body>
    <div id="app">
      <h1>{{ message }}</h1>
    </div>
    <!-- 请不要删除以下标记，用于加载JS -->
    <!--dojo-js-->
  </body>
</html>`,
    css: ``
  },
  normal: {
    javascript: ``,
    html: `<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title>Good</title>
    <!-- 请不要删除以下标记，用于加载CSS -->
    <!--dojo-css-->
  </head>
  <body>
    <div>
      <h1>Hello Dojo</h1>
    </div>
    <!-- 请不要删除以下标记，用于加载JS -->
    <!--dojo-js-->
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
    <!-- 请不要删除以下标记，用于加载CSS -->
    <!--dojo-css-->
    <script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular.js"></script>
  </head>
  <body>
    <div ng-controller="DefaultController">
      <h1>{{ message }}</h1>
    </div>
    <!-- 请不要删除以下标记，用于加载JS -->
    <!--dojo-js-->
  </body>
</html>`,
    css: ``
  }
};