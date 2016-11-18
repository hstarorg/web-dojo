import { auth } from './../../services';
import { storage } from './../../common';

const rememberKey = 'dojo-user-name';

export default {
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
      remember: false,
      error: false,
      isLogining: false
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
      this.isLogining = true;
      auth.login(this.user.username, this.user.password)
        .then(loggedIn => {
          if (!loggedIn) {
            this.error = true;
            this.isLogining = false;
          } else {
            this.rememberUser();
            this.$router.push(this.$route.query.redirect || '/');
          }
        }).catch(() => {
          this.isLogining = false;
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