import { types } from './mutation-types';

export const state = {
  isLogged: false,
  token: '',
  userInfo: {
    username: ''
  },
  isNewCode: true
};

export const mutations = {
  [types.SET_CODE_STATUS](state, isNew) {
    state.isNewCode = isNew;
  },

  [types.SET_USER_TOKEN](state, token) {
    state.isLogged = !!token;
    state.token = token;
  },

  [types.SET_USER_INFO](state, userInfo) {
    Object.keys(userInfo).forEach(key => {
      state.userInfo[key] = userInfo[key];
    });
  }
};