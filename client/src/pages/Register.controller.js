import { ajax, layer } from './../common';

export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
        confirmPassword: ''
      }
    };
  },
  computed: {
    disableSubmit() {
      return !this.user.username || !this.user.password || !this.user.confirmPassword || this.user.password !== this.user.confirmPassword
    }
  },
  methods: {
    register() {
      let postData = {
        username: this.user.username,
        password: this.user.password
      };
      ajax.post(`${AppConf.apiHost}/auth/register`, postData).then(data => {
        layer.msg('Register successfully.');
        setTimeout(() => {
          this.$router.push('/login');
        }, 1500);
      });
    }
  }
};