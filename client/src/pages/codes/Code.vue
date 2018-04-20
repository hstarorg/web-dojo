<style lang="stylus">
	.page-code {
		background: #fff;
		position: fixed;
		top: 50px;
		left: 0;
		right: 0;
		bottom: 0;
		.code-editor-container {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}
		.left-container {
			width: calc(50%);
			float: left;
			height: 100%;
			border-right: 1px solid #e0e1e5;
			pre{
				border: none;
			}
			.template-select-parent {
				padding: 5px 5px 5px 0;
			}
			.template-select {
				button {
					background: transparent;
					outline: none;
					&.dropdown-toggle{
						padding-right: 5px;
					}
					&.btn-label{
						padding-left: 5px;
					}
				}
			}
			li.active button {
				color: #fff;
			}
		}
		.right-container {
			position: relative;
			width: 50%;
			float: right;
			height: 100%;

			/*z-index: 1030;*/
			.code-tool-bar {
				height: 42px;
				border-bottom: 1px solid lightgray;
				padding: 0 5px;
				padding-top: 5px;
				.preview-loading {
					line-height: 30px;
				}
				.btn-run-icon {
					float: right;
					font-size: 1.5em;
					margin-left: 5px;
				}
			}
			.drag-line{
				top: 0;
				left: -4px;
				width: 7px;
				height: 100%;
				position: absolute;
				z-index: 1;
				cursor: ew-resize;
			}

			.container-slider {
				position: absolute;
				background: transparent;
				width: 7px;
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
				width: 100%;
				height: calc(100% - 42px);
				overflow-y: hidden;
			}
		}
	}
</style>
<template>
	<div class="page-code">
		<div class="code-editor-container">
			<div class="left-container">
				<ul class="nav nav-tabs nav-pills" role="tablist">
					<li role="presentation" class="active">
						<a href="#htmlcode" class="template-select-parent" role="tab" data-toggle="tab">
							<div class="btn-group btn-group-sm template-select">
								<button type="button" class="btn dropdown-toggle" data-toggle="dropdown">
									<span class="caret"></span>
									<span class="sr-only">Toggle Dropdown</span>
								</button>
								<button type="button" class="btn btn-label">	{{currentTempalteName}}</button>
								<ul class="dropdown-menu" role="menu">
									<li v-for="item in templates" @click="changeTemplate(item.name)"><a href="javascript:void(0)">{{ item.text }}</a></li>
                </ul>
							</div>
						</a>
					</li>
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
			<div class="right-container">
				<div class="drag-line"></div>
				<div class="code-tool-bar">
					<div class="row">
						<div class="col-md-12">
							<button class="btn btn-sm btn-success" @click.prevent="runCode()">Run Code <i class="fa fa-caret-right btn-run-icon"></i></button>
							<span class="text-danger preview-loading" v-show="previewLoading">Preview is loading...</span>
							<button class="btn btn-sm btn-warning pull-right" :class="{'btn-danger': logConsole.unreadCount > 0}" @click="toggleConsole()">Console <span v-show="logConsole.unreadCount > 0 ">({{ logConsole.unreadCount }})</span></button>
						</div>
					</div>
				</div>
				<div class="preview-container">
					<!--<iframe src="http://developer.newegg.org" frameborder="0" style="width: 100%;height: 100%;" border="0" marginwidth="0" marginheight="0"
          scrolling="yes" allowtransparency="yes"></iframe>-->
				</div>
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
						<label for="codeTags">Code tags(split by ,)</label>
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
<script src="./Code.controller.js">
</script>
