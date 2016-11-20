import { ajax } from './../../common';

export default {
  data() {
    return {
      gists: []
    };
  },
  created(){
    this.fetchCodes();
  },
  methods: {
    fetchCodes() {
      ajax.get(`${AppConf.apiHost}/gist/gists`)
        .then(gists => {
          this.gists = gists;
        });
    },
    goCreate(){
      this.$router.push('/newgist');
    }
  }
};
