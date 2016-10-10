<template>
  <div class="ace-editor">
    <pre :id="editorId" :style="{height: this.height + 'px'}"></pre>
  </div>
</template>
<script>
  import aceEditorController from './aceEditor.controller.js';
  export default aceEditorController;
</script>