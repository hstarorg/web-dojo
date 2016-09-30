<style lang="stylus" scoped>
  .page-code {
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    .code-tool-bar {
      height: 50px;
      background: sliver;
      border-bottom: 1px solid #101010;
    }
    .code-editor-container {
      position: absolute;
      top: 50px;
      left: 0;
      right: 0;
      bottom: 0;
    }
    .editor-container {
      width: calc(50% - 5px);
      float: left;
      height: 100%;
    }
    .container-slider {
      position: absolute;
      background: silver;
      width: 5px;
      top: 0;
      bottom: 0;
      left: calc(50% - 5px);
      cursor: col-resize;
      display: flex;
      align-items: center;
      div {
        height: 50px;
        flex: 1px;
        background: green;
      }
    }
    .preview-container {
      width: 50%;
      float: left;
      height: 100%;
      overflow-y: hidden;
    }
  }
</style>
<template>
  <div class="page-code">
    <div class="code-tool-bar">
    </div>
    <div class="code-editor-container">
      <div class="editor-container">
        <ace-editor :value.sync="jsCode" :mode="'javascript'" :theme="'monokai'" :height="editorHheight"></ace-editor>
      </div>
      <div class="container-slider">
        <div></div>
      </div>
      <div class="preview-container">
        <iframe src="http://developer.newegg.org" frameborder="0" style="width: 100%;height: 100%;" border="0" marginwidth="0" marginheight="0"
          scrolling="yes" allowtransparency="yes"></iframe>
      </div>
    </div>
  </div>
</template>
<script>
  import CodeController from './Code.controller.js';
  export default CodeController;
</script>