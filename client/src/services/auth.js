import { ajax } from './../common';

export const auth = {
  isLogged: false,
  login(username, password) {
    this.isLogged = true;
    return Promise.resolve(this.isLogged);
  },

  autoLogin(token) {

  },

  getToken() {
    return localStorage.token
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