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
      pageSize: 20,
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
      ajax.get(`${AppConf.apiHost}/gist/mygists`, { params: { pageIndex: this.curPage, pageSize: this.pageSize } })
        .then(data => {
          this.gists = data.data;
          this.totalCount = data.totalCount;
        });
    },
    goCreate() {
      this.$router.push('/newgist');
    }
  }
};
