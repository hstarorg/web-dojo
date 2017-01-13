<style lang="stylus">
  .page-gist-detail {
    margin-top: 5px;
    padding-top: 5px;
    .description {
      border-bottom: 1px solid #bce8f1;
      padding: 5px;
      padding-left: 15px;
      margin: -15px -15px 15px -15px;
    }
    .panel-code-view {
      /*border: 1px solid #ccc;*/
      .panel-heading {
        border: 1px solid #ccc;
        border-bottom: 0;
        border-radius: 0;
      }
      .panel-body {
        padding: 0;
        pre {
          border-radius: 0;
        }
      }
    }
  }
</style>
<template>
  <div class="page-gist-detail container">
    <div class="panel panel-warning">
      <div class="panel-heading">
        <span class="text-danger">Gist Name: </span>{{gist.gistName}}
        <button class="btn btn-xs btn-info pull-right" @click="goMyGists()">Return My Gist List</button>
      </div>
      <div class="panel-body">
        <div class="description">
          <span class="text-danger">Gist Description:</span> {{gist.gistDescription}}
        </div>
        <div class="panel panel-code-view" v-for="item in gist.codeFiles">
          <div class="panel-heading">
            <span class="text-danger">File Description: </span>{{item.description}}
          </div>
          <div class="panel-body">
            <ace-editor v-model="item.code" :mode="item.mode" :theme="item.editorTheme" :readonly="true" :height="300"></ace-editor>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./GistDetail.controller.js"></script>
