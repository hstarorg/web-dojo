import './css/main.css';
import Vue from 'vue';
import 'lodash';

import { router } from './router';
import App from './App.vue';

let app = new Vue(Vue.util.extend({ router }, App));
app.$mount('#web-dojo-app');