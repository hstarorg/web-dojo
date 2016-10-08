<style lang="stylus" scoped>
  .page-code {
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    .code-tool-bar {
      height: 40px;
      border-bottom: 1px solid lightgray;
      padding-top: 5px;
    }
    .code-editor-container {
      position: absolute;
      top: 40px;
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
      float: right;
      height: 100%;
      overflow-y: hidden;
    }
  }
</style>
<template>
  <div class="page-code">
    <div class="code-tool-bar">
      <div class="row">
        <div class="col-md-2">
          <div class="btn-group btn-group-sm">
            <button type="button" class="btn btn-primary">选择模板：Normal</button>
            <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
              <span class="caret"></span>
              <span class="sr-only">Toggle Dropdown</span>
            </button>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">Normal</a></li>
              <li><a href="#">Angular1</a></li>
              <li><a href="#">Vue1.0.26</a></li>
              <li><a href="#">Vue2.x</a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-2">
          <button class="btn btn-sm btn-danger" @click.prevent="runCode()">Run Code</button>
        </div>
      </div>
    </div>
    <div class="code-editor-container">
      <div class="editor-container">
        <ul class="nav nav-tabs nav-pills" role="tablist">
          <li role="presentation" class="active"><a href="#htmlcode" role="tab" data-toggle="tab">HTML</a></li>
          <li role="presentation"><a href="#jscode" role="tab" data-toggle="tab">JavaScript</a></li>
          <li role="presentation"><a href="#csscode" role="tab" data-toggle="tab">CSS</a></li>
        </ul>

        <!-- Tab panes -->
        <div class="tab-content">
          <div role="tabpanel" class="tab-pane active" id="htmlcode">
            <ace-editor v-model="htmlCode" :mode="'html'" :theme="'monokai'" :height="editorHheight"></ace-editor>
          </div>
          <div role="tabpanel" class="tab-pane" id="jscode">
            <ace-editor v-model="jsCode" :mode="'javascript'" :theme="'monokai'" :height="editorHheight"></ace-editor>
          </div>
          <div role="tabpanel" class="tab-pane" id="csscode">
            <ace-editor v-model="cssCode" :mode="'css'" :theme="'monokai'" :height="editorHheight"></ace-editor>
          </div>
        </div>

      </div>
      <div class="container-slider">
        <div></div>
      </div>
      <div class="preview-container">
        <!--<iframe src="http://developer.newegg.org" frameborder="0" style="width: 100%;height: 100%;" border="0" marginwidth="0" marginheight="0"
          scrolling="yes" allowtransparency="yes"></iframe>-->
      </div>
    </div>
  </div>
</template>
<script>
  import CodeController from './Code.controller.js';
  export default CodeController;
</script>