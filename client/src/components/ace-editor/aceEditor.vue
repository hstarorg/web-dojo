<style scoped lang="stylus">
  .ace-editor{
    pre{
      border-radius: 0;
    }
  }
</style>
<template>
  <div class="ace-editor" :style="{height: this.height + 'px'}">
    <pre :id="editorId" :style="{height: this.height + 'px'}"></pre>
  </div>
</template>
<script>
  import aceEditorController from './aceEditor.controller.js';
  export default aceEditorController;
</script>