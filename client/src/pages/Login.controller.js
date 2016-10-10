import { auth } from './../services';
export default {
  replace: true,
  data() {
    return {
      user: {
        username: 'admin',
        password: ''
      },
      remember: false,
      error: false
    }
  },
  methods: {
    login() {
      auth.login(this.user.username, this.user.password)
        .then(loggedIn => {
          if (!loggedIn) {
            this.error = true
          } else {
            this.$router.push(this.$route.query.redirect || '/')
          }
        });
    }
  }
};