import { mapActions } from 'vuex';

import { aceEditor, modal } from './../components';
import { eventBus, ajax, layer } from './../common';
import { codeTemplates } from './../services';

export default {
  components: {
    aceEditor,
    modal
  },
  data() {
    return {
      jsCode: '',
      htmlCode: '',
      cssCode: '',
      editorHeight: 0,
      codeId: undefined,
      showsaveDialog: false,
      templates: [
        { name: 'normal', text: 'Normal' },
        { name: 'angular', text: 'Angular' },
        { name: 'vue', text: 'Vue' },
        { name: 'vue2', text: 'Vue2' },
      ],
      moveObj: {
        startX: 0,
        isMoving: false
      },
      codeObj: {
        codeName: '',
        codeDescription: '',
        codeTags: '',
        isPrivate: false
      }
    }
  },
  created() {
    window.addEventListener('resize', this.setEditorHeight);
    this.fetchCode();
  },
  mounted() {
    this.setEditorHeight();
    eventBus.on('code.update', () => {
      this.updateCode();
    }, this);
    // let slider = this.$el.querySelector('.container-slider > div');
    // slider.addEventListener('mousedown', this.onMousedown.bind(this));
    // document.addEventListener('mousemove', this.onMouseMove.bind(this));
    // document.addEventListener('mouseup', this.onMouseUp.bind(this));
    $(window).off('keydown').on('keydown', (evt) => {
      if (evt.keyCode === 83 && evt.ctrlKey) {
        this.updateCode();
        return false;
      }
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setEditorHeight);
    // slider.removeEventListener('mousedown', this.onMousedown);
    // document.removeEventListener('mousemove', this.onMouseMove);
    // document.removeEventListener('mouseup', this.onMouseUp);
  },
  watch: {
    showsaveDialog(newVal) {
      this.$el.style.zIndex = newVal ? 1030 : 0;
    }
  },
  methods: {
    ...mapActions([
      'setCodeStatus'
    ]), 
    onMousedown(e) {
      this.moveObj.startX = e.pageX;
      this.moveObj.isMoving = true;
    },
    changeTemplate(templateName) {
      let template = codeTemplates[templateName];
      this.jsCode = template.javascript;
      this.htmlCode = template.html;
      this.cssCode = template.css;
      this.$nextTick(function () {
        this.runCode();
      });
    },
    onMouseMove(e) {
      if (!this.moveObj.isMoving) {
        return;
      }
      let changedWidth = e.pageX - this.moveObj.startX;
      this.$el.querySelector('.editor-container').style.width = `calc(50% + ${changedWidth - 5}px)`;
      this.$el.querySelector('.container-slider').style.left = `calc(50% + ${changedWidth - 5}px)`;
      this.$el.querySelector('.preview-container').style.width = `calc(50% - ${changedWidth}px)`;
      console.log(e.pageX - this.moveObj.startX);
    },
    onMouseUp(e) {
      this.moveObj.isMoving = false;
    },

    setEditorHeight() {
      this.editorHeight = this.$el.querySelector('.editor-container').offsetHeight - 42;
    },

    _buildHtmlCodeForPreview() {
      let html = this.htmlCode;
      html = html.replace(/<!--dojo-css-->/, `<style>${this.cssCode}</style>`);
      html = html.replace(/<!--dojo-js-->/, `<script>${this.jsCode}</script>`);
      return html;
    },

    runCode() {
      let iframeHtml = `<iframe id="previewFrame" frameborder="0" style="width: 100%;height: 100%;" border="0" marginwidth="0" marginheight="0" scrolling="yes" allowtransparency="yes"></iframe>`;
      this.$el.querySelector('.preview-container').innerHTML = iframeHtml;
      let fd = document.getElementById('previewFrame').contentDocument;
      fd.open();
      fd.write('');
      fd.write(this._buildHtmlCodeForPreview());
      fd.close();
    },
    updateCode() {
      if (this.codeId) {
        // Update
        ajax.put(`${AppConf.apiHost}/code/${this.codeId}`, {
          javascript: this.jsCode,
          html: this.htmlCode,
          css: this.cssCode
        })
          .then(data => {
            layer.msg('Save successfully.');
            this.runCode();
          });
      } else {
        // Show Save Dialog
        this.showsaveDialog = true;
        return;
      }
    },

    createCode() {
      ajax.post(`${AppConf.apiHost}/code`, {
        javascript: this.jsCode,
        html: this.htmlCode,
        css: this.cssCode,
        codeName: this.codeObj.codeName,
        codeDescription: this.codeObj.codeDescription || '',
        codeTags: this.codeObj.codeTags.split(' ').filter(x => !!x),
        isPrivate: this.codeObj.isPrivate
      }).then(data => {
        this.codeId = data.codeId;
        this.$router.push(`/${data.codeId}`)
        layer.msg('Create code successfully.');
        this.showsaveDialog = false;
        this.runCode();
      });
    },

    fetchCode() {
      this.codeId = this.$route.params.id;
      if (this.codeId) {
        ajax.get(`${AppConf.apiHost}/code/${this.codeId}`)
          .then(code => {
            this.htmlCode = code.html;
            this.jsCode = code.javascript;
            this.cssCode = code.css;
            this.setCodeStatus(false);
            this.runCode();
          }).catch(() => {
            this.$router.push('/');
          });
      } else {
        this.changeTemplate('normal');
      }
    }
  }
};