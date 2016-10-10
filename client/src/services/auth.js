import Vue from 'vue';
import { ajax, storage, eventBus } from './../common';

export const auth = {
  isLogged: false,
  user: {},
  _token: '',
  login(username, password) {
    return ajax.post(`${AppConf.apiHost}/auth/login`, { username: username, password: password })
      .then(data => {
        this.user = data.user;
        this._token = data.token;
        storage.local.set('x-token', data.token);
        this._setHttpTokenHeader(data.token);
        this.isLogged = true;
        eventBus.emit('user.logined');
        return this.isLogged;
      });
  },


  _setHttpTokenHeader(token) {
    Vue.http.headers.common['x-token'] = token;
  },

  autoLogin(token) {
    return new Promise((resolve, reject) => {
      if (!token) {
        return resolve(false);
      }
      ajax.post(`${AppConf.apiHost}/auth/autologin`, { token: token })
        .then(data => {
          this.user = data.user;
          this._token = data.token;
          storage.local.set('x-token', data.token);
          this._setHttpTokenHeader(data.token);
          this.isLogged = true;
          eventBus.emit('user.logined');
          resolve(true);
        }).catch(reason => {
          resolve(false);
        });
    });
  },

  getToken() {
    return this._token;
  },

  getLocalToken() {
    return localStorage.getItem('x-token');
  },

  logout() {
    this.isLogged = false;
  },

  loggedIn() {
    return !!localStorage.token
  },

  onChange() {

  }
};