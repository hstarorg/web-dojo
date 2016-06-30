<style>
  .code-tool-bar{
    height: 54px;
    background: lightgray;
  }
  .code-editor-container{
    background: red;
    height: calc(100vh - 108px);
  }
  .editor-container{
    width: 50%;
    float:left;
  }
  .preview-container{
    width: 50%;
    float: left;
    height: 100%;
    overflow-y: hidden;
  }
</style>
<template>
  <div class="code-tool-bar">
  </div>
  <div class="code-editor-container">
    <div class="editor-container">
      fdasfdsafdsafsafsdaf
    </div>
    <div class="preview-container">
      <iframe src="http://cn.bing.com" frameborder="0" style="width: 100%;height: calc(100vh - 108px);" border="0" marginwidth="0" marginheight="0" scrolling="yes" allowtransparency="yes"></iframe>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Code',
    data: () => {
      return {
        a: 1
      }
    }
  };
</script>