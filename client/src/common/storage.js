export const storage = {
  local: {
    get(key) {
      return localStorage.getItem(key);
    },

    set(key, value) {
      return localStorage.setItem(key, value);
    },

    remove(key) {
      return localStorage.removeItem(key);
    },

    removeAll() {
      localStorage.clear();
    }
  },
  session: {
    get(key) {
      return sessionStorage.getItem(key);
    },

    set(key, value) {
      return sessionStorage.setItem(key, value);
    },

    remove(key) {
      return sessionStorage.removeItem(key);
    },

    removeAll() {
      sessionStorage.clear();
    }
  },
  cookie: {
    get(key) {

    },

    set(key, value, expire) {

    },

    remove(key) {

    },

    removeAll() {

    }
  },
};
