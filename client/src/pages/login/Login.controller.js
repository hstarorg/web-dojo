import { auth } from './../../services';
import { storage, util } from './../../common';

const rememberKey = 'dojo-user-name';

export default {
  created() {
    this.doSsoLogin();
  },
  methods: {
    doSsoLogin() {
      let code = util.getQuery('code');
      if (!code) {
        return (location.href = '/');
      }
      // login
      auth
        .doSsoLogin(code)
        .then(() => {
          let redirectUrl = storage.session.get('redirect_url') || '/';
          this.$router.push(redirectUrl);
        })
        .catch(() => {
          location.href = '/';
        });
    }
  }
};
