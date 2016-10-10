import { types } from './mutation-types';

export const state = {
  isNewCode: true
};

export const mutations = {
  [types.SET_CODE_STATUS](state, isNew) {
    state.isNewCode = isNew;
  }
};