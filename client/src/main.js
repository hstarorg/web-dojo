import './styl/all.styl';

import Vue from 'vue';

import 'lodash';
import axios from 'axios';
window.axios = axios;

import App from './App.vue';
import router from './router.config';
import store from './store';
import { i18nHelper } from './common';

// 导入I18N
import './i18n';

const app = new Vue({
  el: '#web-dojo-app',
  router,
  store,
  i18n: i18nHelper.getInstance(),
  render(bootstrap) {
    return bootstrap(App);
  }
});
