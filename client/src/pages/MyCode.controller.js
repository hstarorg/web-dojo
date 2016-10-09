import { ajax } from './../common';
export default {
  data() {
    return {
      codes: []
    };
  },
  created() {
    this.fetchCodes();
  },
  methods: {
    fetchCodes() {
      ajax.get(`${AppConf.apiHost}/user/codes`)
        .then(codes => {
          this.codes = codes;
        });
    }
  }
};