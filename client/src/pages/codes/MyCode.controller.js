import { mapActions } from 'vuex';
import { ajax } from './../../common';
import { pagination } from './../../components';

export default {
  components: {
    pagination
  },
  data() {
    return {
      codes: [],
      totalCount: 1,
      pageSize: 20,
      curPage: 1,
      searchKeyword: ''
    };
  },
  created() {
    this.fetchCodes();
  },
  watch: {
    curPage(newVal){
      this.fetchCodes();
    }
  },
  methods: {
    fetchCodes() {
      ajax.get(`${AppConf.apiHost}/code/mycodes`, { params: { pageIndex: this.curPage, pageSize: this.pageSize, search: this.searchKeyword } })
        .then(result => {
          this.codes = result.data;
          this.totalCount = result.totalCount;
        });
    },
    clearSearch(){
      this.searchKeyword = '';
      this.curPage = 1;
      this.fetchCodes();
    }
  }
};