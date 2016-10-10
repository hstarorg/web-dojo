import { eventBus } from './../common';
import { mapGetters } from 'vuex';
export default {
  name: 'layout',
  //Why use this? 要为每个组件创建自己独立的data实例。
  data() {
    return {
      searchKey: 'abc'
    };
  },
  mounted() {
    eventBus.emit('test', 'aaa');
    alert(this.a);
  },
  computed: mapGetters([
    'test'
  ]),
  methods: {
    createCode(evt) {
      this.$router.push('/');
    },
    updateCode(evt) {
      eventBus.emit('code.update');
    },
    forkCode(evt) {
      alert('Fork code');
    },
    searchCode(evt) {
      alert(`Search code：${this.searchKey}`);
    }
  }
};