import { types } from './mutation-types';

export const state = {
  isNewCode: true,
  userInfo: {
    username: ''
  }
};

export const mutations = {
  [types.SET_CODE_STATUS](state, isNew) {
    state.isNewCode = isNew;
  },

  [types.SET_USER_INFO](state, userInfo) {
    Object.keys(userInfo).forEach(key => {
      state.userInfo[key] = userInfo[key];
    });
  }
};