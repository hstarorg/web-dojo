import { ajax } from './../../common';
import { pagination } from './../../components';

export default {
  components: {
    pagination
  },
  data() {
    return {
      gists: [],
      curPage: 1,
      totalCount: 21
    };
  },
  created() {
    this.fetchCodes();
  },
  watch: {
    curPage(newVal) {
      this.fetchCodes();
    }
  },
  methods: {
    fetchCodes() {
      ajax.get(`${AppConf.apiHost}/gist/gists`)
        .then(gists => {
          this.gists = gists;
        });
    },
    goCreate() {
      this.$router.push('/newgist');
    }
  }
};
