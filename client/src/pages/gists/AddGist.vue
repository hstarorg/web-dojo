<style lang="stylus">
  .page-add-gist {
    .code-container {
      padding-top: 10px;
      border-top: 1px dotted #ccc;
      .code-setting {
        margin-bottom: 10px;
      }
    }
    .code-operate-container {
      position: fixed;
      z-index: 100;
      width: 150px;
      height: 68px;
      right: 0;
      top: calc(50% - 34px);
      button {
        border-radius: 0;
        margin: 0;
      }
    }
  }
</style>
<template>
  <div class="page-add-gist container">
    <h3>Add Gist
      <button class="btn btn-xs btn-info pull-right" @click="goMyGists()">Return My Gist List</button>
    </h3>
    <hr>
    <form>
      <div class="form-group">
        <label for="" class="control-label">Gist Name(<span class="text-danger">Required</span>)</label>
        <input type="text" class="form-control" v-model="gistName">
      </div>
      <div class="form-group">
        <label for="" class="control-label">Description</label>
        <textarea rows="3" class="form-control" v-model="gistDescription"></textarea>
      </div>
      <div class="code-container" v-for="(codeFile, index) in codeFiles">
        <div class="row code-setting">
          <div class="col-md-3">
            <div class="input-group input-group-sm">
              <span class="input-group-addon">Language</span>
              <select class="form-control" v-model="codeFile.mode">
                <optgroup v-for="key in Object.keys(languageModes)" :label="key">
                  <option v-for="mode in languageModes[key]" :value="mode">{{mode}}</option>
                </optgroup>
              </select>
            </div>
          </div>
          <div class="col-md-3">
            <div class="input-group input-group-sm">
              <span class="input-group-addon">Editor Theme</span>
              <select class="form-control" v-model="codeFile.editorTheme">
                <option v-for="t in editorThemes" :value="t">{{t}}</option>
              </select>
            </div>
          </div>
          <div class="col-md-5">
            <input type="text" class="form-control input-sm" placeholder="file description" v-model="codeFile.description">
          </div>
          <div class="col-md-1" style="text-align: right;" v-if="index > 0">
            <button class="btn btn-default btn-sm" title="Delete file" @click.prevent="removeFile(index)"><i class="fa fa-minus"></i></button>
          </div>
        </div>
        <ace-editor v-model="codeFile.code" :mode="codeFile.mode" :theme="codeFile.editorTheme" :height="300"></ace-editor>
      </div>
    </form>
    <br>
    <div class="code-operate-container">
      <button class="btn btn-info btn-block" @click.prevent="addFile()">Add File</button>
      <button class="btn btn-primary btn-block" @click.prevent="saveGist()">Save Gist</button>
    </div>
  </div>
</template>
<script src="./AddGist.controller.js"></script>
