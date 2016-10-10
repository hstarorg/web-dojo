import { types } from './mutation-types';

export const actions = {
  setCodeStatus({ commit }, isCodeNew) {
    commit(types.SET_CODE_STATUS, isCodeNew);
  }
};