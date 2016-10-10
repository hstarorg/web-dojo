import Vue from 'vue';
import Vuex from 'vuex';
import { actions } from './actions';
import { getters } from './getters';
import { store, mutations } from './mutations';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  store,
  mutations,
  actions,
  getters,
  // modules: {
  //   test
  // },
  strict: debug,
  plugins: debug ? [] : []
})