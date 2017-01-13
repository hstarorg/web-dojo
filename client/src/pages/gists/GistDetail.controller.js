import { ajax, layer } from './../../common';
import { aceEditor } from './../../components';

export default {
  components: {
    aceEditor
  },
  data() {
    return {
      gistId: '',
      gist: {}
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.gistId = this.$route.params.id;
      ajax.get(`${AppConf.apiHost}/gist/${this.gistId}`)
        .then(gist => {
          this.gist = gist;
          console.log(gist);
        }).catch(() => {
          layer.error('Has some error, please retry.');
        });
    },
    goMyGists() {
      this.$router.push('/mygists');
    }
  }
};
