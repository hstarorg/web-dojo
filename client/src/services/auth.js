import { ajax, storage } from './../common';

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
        this.isLogged = true;
        return this.isLogged;
      });
  },

  autoLogin(token) {

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