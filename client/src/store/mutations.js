import { types } from './mutation-types';

export const store = {
  isNewCode: true
};

export const mutations = {
  [types.ADD_TO_CART](state, isNew) {
    state.isNewCode = isNew;
  }
};