<style lang="stylus" scoped>
	.page-code {
		position: fixed;
		top: 50px;
		left: 0;
		right: 0;
		bottom: 0;
		/*z-index: 1030;*/
		.code-tool-bar {
			height: 40px;
			border-bottom: 1px solid lightgray;
			padding-top: 5px;
			.preview-loading {
				line-height: 30px;
			}
      .btn-run-icon{
        float: right;
        font-size: 1.5em;
        margin-left: 5px;
      }
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
		.run-code {}
	}
</style>
<template>
	<div class="page-code">
		<div class="code-tool-bar">
			<div class="row">
				<div class="col-md-6">
					<div class="btn-group btn-group-sm">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
              选择模板
              <span class="caret"></span>
              <span class="sr-only">Toggle Dropdown</span>
            </button>
						<ul class="dropdown-menu" role="menu">
							<li v-for="item in templates" @click="changeTemplate(item.name)"><a href="#">{{ item.text }}</a></li>
						</ul>
					</div>
					<button class="btn btn-sm btn-success pull-right" @click.prevent="runCode()">Run Code <i class="fa fa-caret-right btn-run-icon"></i></button>
				</div>
				<div class="col-md-6">
					<span class="text-danger preview-loading" v-show="previewLoading">Preview is loading...</span>
					<button class="btn btn-sm btn-warning pull-right" :class="{'btn-danger': logConsole.unreadCount > 0}" @click="toggleConsole()">Console <span v-show="logConsole.unreadCount > 0 ">({{ logConsole.unreadCount }})</span></button>
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
						<ace-editor v-model="htmlCode" :mode="'html'" :theme="'monokai'" :height="editorHeight"></ace-editor>
					</div>
					<div role="tabpanel" class="tab-pane" id="jscode">
						<ace-editor v-model="jsCode" :mode="'javascript'" :theme="'monokai'" :height="editorHeight"></ace-editor>
					</div>
					<div role="tabpanel" class="tab-pane" id="csscode">
						<ace-editor v-model="cssCode" :mode="'css'" :theme="'monokai'" :height="editorHeight"></ace-editor>
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
		<console v-model="logConsole"></console>
		<modal :title="'Save Code'" v-model="showsaveDialog" effect="zoom" width="400" :backdrop="false">
			<div slot="modal-body" class="modal-body">
				<form role="form">
					<div class="form-group">
						<label for="codeName">Code name</label>
						<input type="text" class="form-control" id="codeName" placeholder="Code name" required v-model="codeObj.codeName">
					</div>
					<div class="form-group">
						<label for="codeTags">Code tags(逗号分割)</label>
						<input type="text" class="form-control" id="codeTags" placeholder="Code tags" required v-model="codeObj.codeTags">
					</div>
					<div class="form-group">
						<label for="codeDescription">Code Description</label>
						<textarea id="codeDescription" cols="30" rows="5" class="form-control" v-model="codeObj.codeDescription"></textarea>
					</div>
				</form>
			</div>
			<div slot="modal-footer" class="modal-footer">
				<div class="checkbox pull-left">
					<label><input type="checkbox" class="pull-left" v-model="codeObj.isPrivate">Set Private</label>
				</div>
				<button type="button" class="btn btn-default" @click="showsaveDialog = false">Cancel</button>
				<button type="submit" class="btn btn-success" @click="createCode()">Save Code</button>
			</div>
		</modal>
	</div>
</template>
<script>
  import CodeController from './Code.controller.js';
  export default CodeController;
</script>