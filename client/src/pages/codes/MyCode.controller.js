import { ajax } from './../../common';
import { mapActions } from 'vuex';

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