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
      totalCount: 21,
      searchKeyword: ''
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
    fetchCodes(isSearch) {
      if(isSearch){
        this.curPage = 1;
      }
      ajax.get(`${AppConf.apiHost}/gist/mygists`, { params: { pageIndex: this.curPage, pageSize: this.pageSize, search: this.searchKeyword } })
        .then(data => {
          this.gists = data.data;
          this.totalCount = data.totalCount;
        });
    },
    goCreate() {
      this.$router.push('/newgist');
    },
    clearSearch(){
      this.searchKeyword = '';
      this.curPage = 1;
      this.fetchCodes();
    }
  }
};
