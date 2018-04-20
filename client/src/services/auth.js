import store from './../store';
import types from './../store/mutation-types';
import { ajax, storage, eventBus } from './../common';

export const auth = {
  requireAuthFirst: true,

  _processLoginData(data, isAutoLogin) {
    storage.local.set('x-token', data.token);
    store.commit(types.SET_USER_TOKEN, data.token);
    store.commit(types.SET_USER_INFO, data.user);
    ajax.setCommonHeader('x-token', data.token);
    eventBus.emit('$loginSucceed');
  },

  login(username, password) {
    return ajax.post(`${AppConf.apiHost}/auth/login`, { username, password }).then(data => {
      this._processLoginData(data);
      return true;
    });
  },

  doSsoLogin(code) {
    return ajax.post(`${AppConf.apiHost}/auth/ssologin`, { code }).then(data => {
      this._processLoginData(data);
      return true;
    });
  },

  autoLogin() {
    let token = storage.local.get('x-token');
    if (!token) {
      return Promise.resolve();
    }
    return ajax
      .post(`${AppConf.apiHost}/auth/autologin`, { token }, { notNotifyError: true })
      .then(data => {
        this._processLoginData(data, true);
        return true;
      })
      .catch(() => {
        return Promise.resolve(false);
      });
  },

  requireAuth(to, from, next) {
    let p = Promise.resolve();
    if (this.requireAuthFirst) {
      this.requireAuthFirst = false;
      p = this.autoLogin();
    }
    p.then(() => {
      if (!store.state.isLogged) {
        storage.session.set('redirect_url', to.fullPath);
        location.href = `${AppConf.ssoAddress}`;
        return;
        // return next({ path: '/login', query: { redirect: to.fullPath } });
      }
      next();
    });
  },

  getLocalToken() {
    return store.local.get('x-token');
  },

  logout() {
    store.commit(types.SET_USER_TOKEN, '');
  },

  isLogged() {
    return store.state.isLogged;
  }
};
