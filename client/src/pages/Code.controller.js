import { aceEditor } from './../components';
export default {
  components: {
    aceEditor
  },
  data() {
    return {
      jsCode: 'var a = 1;',
      htmlCode:`<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title>Good</title>
    <!--css-->
  </head>
  <body>
    <!--js-->
  </body>
</html>`,
      cssCode: `html{
  height: 100%;
}
body{
  border: 1px solid red;
  min-height: 100%;
}`,
      editorHheight: 0,
      moveObj: {
        startX: 0,
        isMoving: false
      }
    }
  },
  created() {
    window.addEventListener('resize', this.setEditorHeight);
  },
  mounted() {
    this.setEditorHeight();
    // let slider = this.$el.querySelector('.container-slider > div');
    // slider.addEventListener('mousedown', this.onMousedown.bind(this));
    // document.addEventListener('mousemove', this.onMouseMove.bind(this));
    // document.addEventListener('mouseup', this.onMouseUp.bind(this));
    $(window).off('keydown').on('keydown', (evt) => {
      if (evt.keyCode === 83 && evt.ctrlKey) {
        alert('save');
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
  methods: {
    onMousedown(e) {
      this.moveObj.startX = e.pageX;
      this.moveObj.isMoving = true;
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
      this.editorHheight = this.$el.querySelector('.editor-container').offsetHeight - 42;
    },
    _buildHtmlCodeForPreview() {
      let html = this.htmlCode;
      html = html.replace(/<!--css-->/, `<style>${this.cssCode}</style>`);
      html = html.replace(/<!--js-->/, `<script>${this.jsCode}</script>`);
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
    }
  }
};