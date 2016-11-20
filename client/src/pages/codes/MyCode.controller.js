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
      curPage: 1
    };
  },
  created() {
    this.fetchCodes();
  },
  methods: {
    fetchCodes() {
      ajax.get(`${AppConf.apiHost}/code/mycodes`, { params: { pageIndex: this.curPage, pageSize: this.pageSize } })
        .then(result => {
          this.codes = result.data;
          this.totalCount = result.totalCount;
        });
    }
  }
};