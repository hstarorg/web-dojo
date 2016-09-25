import Vue from 'vue';

import 'lodash';

import './config/config.dev';

import { router } from './router';
import App from './App.vue';

let app = new Vue(Vue.util.extend({ router }, App));
app.$mount('#js-dojo-app');