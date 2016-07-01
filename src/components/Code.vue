<style>
  .code-tool-bar {
    height: 54px;
    background: lightgray;
  }
  
  .code-editor-container {
    background: red;
    height: calc(100vh - 108px);
  }
  
  .editor-container {
    width: 50%;
    float: left;
    height: 100%;
  }
  
  .preview-container {
    width: 50%;
    float: left;
    height: 100%;
    overflow-y: hidden;
  }
  .js-editor-container{
    overflow: hidden;
  }
</style>
<template>
  <div class="code-tool-bar">
  </div>
  <div class="code-editor-container">
    <div class="editor-container">
      <div id="js-editor-container" style="height: 100%;"></div>
    </div>
    <div class="preview-container">
      <iframe src="http://cn.bing.com" frameborder="0" style="width: 100%;height: calc(100vh - 108px);" border="0" marginwidth="0"
        marginheight="0" scrolling="yes" allowtransparency="yes"></iframe>
    </div>
  </div>
  <script>
  
  </script>
</template>
<script>
  export default {
    name: 'Code',
    data: () => {
      return {
        a: 1
      }
    },
    ready(){
      window.require(['vs/editor/editor.main'], function() {
        var editor = monaco.editor.create(document.getElementById('js-editor-container'), {
          value: [
            'function x() {',
            '\tconsole.log("Hello world!");',
            '}'
          ].join('\n'),
          language: 'javascript'
        });
        window.onresize = function() {
          editor.layout();
        };
      });
    }
  };

</script>