import { aceEditor } from './../components';
export default {
  components: {
    aceEditor
  },
  data() {
    return {
      jsCode: 'abc',
      htmlCode: '',
      cssCode: '',
      editorHheight: 0
    }
  },
  created() {
    window.addEventListener('resize', this.setEditorHeight);
  },
  mounted() {
    this.setEditorHeight();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setEditorHeight);
  },
  methods: {
    setEditorHeight() {
      console.log(this.jsCode);
      this.editorHheight = this.$el.querySelector('.editor-container').offsetHeight;
    }
  }
};