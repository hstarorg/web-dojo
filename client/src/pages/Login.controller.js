import { auth } from './../services';
import { storage } from './../common';

const rememberKey = 'dojo-user-name';

export default {
  replace: true,
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
      remember: false,
      error: false
    }
  },
  created() {
    let username = storage.local.get(rememberKey);
    if (username) {
      this.user.username = username;
      this.remember = true;
    }
  },
  methods: {
    login() {
      auth.login(this.user.username, this.user.password)
        .then(loggedIn => {
          if (!loggedIn) {
            this.error = true
          } else {
            this.rememberUser();
            this.$router.push(this.$route.query.redirect || '/')
          }
        });
    },

    rememberUser() {
      if (this.remember) {
        storage.local.set(rememberKey, this.user.username);
      } else {
        storage.local.remove(rememberKey);
      }
    }
  }
};