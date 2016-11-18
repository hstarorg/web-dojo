import { eventBus, storage } from './../../common';
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'layout',
  //Why use this? 要为每个组件创建自己独立的data实例。
  data() {
    return {
      searchKey: 'abc'
    };
  },
  mounted() {
  },
  computed: {
    ...mapGetters([
      'isNewCode',
      'userInfo'
    ])
  },
  methods: {
    ...mapActions([
      'setCodeStatus'
    ]),

    createCode(evt) {
      this.setCodeStatus(true);
      this.$router.push('/new');
    },

    updateCode(evt) {
      eventBus.emit('code.update');
    },

    forkCode(evt) {
      alert('Fork code');
    },

    searchCode(evt) {
      alert(`Search code：${this.searchKey}`);
    },

    logout() {
      storage.local.remove('x-token');
      this.$router.push('/login');
    }
  }
};