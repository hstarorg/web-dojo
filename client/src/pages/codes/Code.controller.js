import { mapActions } from 'vuex';

import { aceEditor, modal, console } from './../../components';
import { eventBus, ajax, layer } from './../../common';
import { codeTemplates } from './../../services';

export default {
  components: {
    aceEditor,
    modal,
    console
  },
  data() {
    return {
      jsCode: '',
      htmlCode: '',
      cssCode: '',
      editorHeight: 0,
      codeId: undefined,
      showsaveDialog: false,
      templates: [],
      previewLoading: false, // 预览正在加载中
      startLoadingTime: 0, // 开始加载时间
      currentTempalteName: '',
      moveObj: {
        startX: 0,
        isMoving: false
      },
      codeObj: {
        codeName: '',
        codeDescription: '',
        codeTags: '',
        isPrivate: false
      },
      logConsole: {
        shown: false,
        logList: [],
        unreadCount: 0
      }
    };
  },
  created() {
    let self = this;
    window.addEventListener('resize', this.setEditorHeight);
    this.templates = Object.keys(codeTemplates).map(x => {
      return { name: x, text: codeTemplates[x].text };
    });
    this.fetchCode();
    window.addEventListener(
      'message',
      function(evt) {
        if (!evt.data || !evt.data.funName) return;
        self.logConsole.logList.push(evt.data);
      },
      false
    );
  },
  mounted() {
    this.setEditorHeight();
    eventBus.on(
      'code.update',
      () => {
        this.updateCode();
      },
      this
    );
    // let slider = this.$el.querySelector('.container-slider > div');
    // slider.addEventListener('mousedown', this.onMousedown.bind(this));
    // document.addEventListener('mousemove', this.onMouseMove.bind(this));
    // document.addEventListener('mouseup', this.onMouseUp.bind(this));
    $(window)
      .off('keydown')
      .on('keydown', evt => {
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
    ...mapActions(['setCodeStatus']),
    onMousedown(e) {
      this.moveObj.startX = e.pageX;
      this.moveObj.isMoving = true;
    },
    changeTemplate(templateName) {
      let template = codeTemplates[templateName];
      this.currentTempalteName = template.text;
      this.jsCode = template.javascript;
      this.htmlCode = template.html;
      this.cssCode = template.css;
      this.$nextTick(function() {
        this.runCode();
      });
    },
    onMouseMove(e) {
      if (!this.moveObj.isMoving) {
        return;
      }
      let changedWidth = e.pageX - this.moveObj.startX;
      this.$el.querySelector('.left-container').style.width = `calc(50% + ${changedWidth - 5}px)`;
      this.$el.querySelector('.container-slider').style.left = `calc(50% + ${changedWidth - 5}px)`;
      this.$el.querySelector('.preview-container').style.width = `calc(50% - ${changedWidth}px)`;
    },
    onMouseUp(e) {
      this.moveObj.isMoving = false;
    },

    setEditorHeight() {
      this.editorHeight = this.$el.querySelector('.left-container').offsetHeight - 42;
    },

    _buildHtmlCodeForPreview() {
      let html = this.htmlCode;
      html = html
        .replace(/<head>/, `<head><script src="/static/vendor/console.mock.js"></script>`)
        .replace(/<\/head>/, `<style>${this.cssCode}</style></head>`);
      html = html.replace(/<\/body>/, `<script>${this.jsCode}</script></body>`);
      return html;
    },

    runCode() {
      this.previewLoading = true;
      this.startLoadingTime = Date.now();
      let iframeHtml = `<iframe id="previewFrame" frameborder="0" style="width: 100%;height: 100%;" border="0" marginwidth="0" marginheight="0" scrolling="yes" allowtransparency="yes"></iframe>`;
      this.$el.querySelector('.preview-container').innerHTML = iframeHtml;
      let iframe = document.getElementById('previewFrame');
      let fd = iframe.contentDocument;
      $(iframe).on('load', e => {
        let timespan = Date.now() - this.startLoadingTime; // 单位ms
        setTimeout(() => {
          this.previewLoading = false;
        }, timespan > 1000 ? 0 : 1000 - timespan);
      });
      fd.open();
      fd.write('');
      fd.write(this._buildHtmlCodeForPreview());
      fd.close();
    },
    updateCode() {
      if (this.codeId) {
        // Update
        ajax
          .put(`${AppConf.apiHost}/code/${this.codeId}`, {
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
      ajax
        .post(`${AppConf.apiHost}/code`, {
          javascript: this.jsCode,
          html: this.htmlCode,
          css: this.cssCode,
          codeName: this.codeObj.codeName,
          codeDescription: this.codeObj.codeDescription || '',
          codeTags: this.codeObj.codeTags.split(',').filter(x => !!x),
          isPrivate: this.codeObj.isPrivate
        })
        .then(data => {
          this.codeId = data.codeId;
          this.$router.push(`/${data.codeId}`);
          layer.msg('Create code successfully.');
          this.showsaveDialog = false;
          this.runCode();
        });
    },

    fetchCode() {
      this.codeId = this.$route.params.id;
      if (this.codeId) {
        ajax
          .get(`${AppConf.apiHost}/code/${this.codeId}`)
          .then(code => {
            this.htmlCode = code.html;
            this.jsCode = code.javascript;
            this.cssCode = code.css;
            this.setCodeStatus(false);
            this.currentTempalteName = 'HTML';
            this.runCode();
          })
          .catch(() => {
            this.$router.push('/');
          });
      } else {
        this.changeTemplate('html');
      }
    },

    toggleConsole() {
      this.logConsole.shown = !this.logConsole.shown;
    }
  }
};
