import { aceEditor } from './../../components';
import { staticData } from './../../services';

const createCodeObj = () => {
  return { editorTheme: 'github', mode: 'javascript', code: '', description: '' };
};

export default {
  components: {
    aceEditor
  },
  data() {
    return {
      languageModes: staticData.languageModes,
      editorThemes: staticData.editorThemes,
      codeFiles: [createCodeObj()]
    };
  },
  methods: {
    addFile() {
      this.codeFiles.push(createCodeObj());
    }
  }
};
