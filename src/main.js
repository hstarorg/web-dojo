import Vue from 'vue';
import App from './App.vue';

// import { router } from './routes'; 

new Vue({
  // router,
  template: `
    <div id="app">
    ABC
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#app');