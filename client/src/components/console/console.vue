<style lang="stylus" scoped>
	.dojo-console {
		position: fixed;
		width: 600px;
		height: 400px;
		border: 1px solid #a3a3a3;
		background: rgba(255, 255, 255, .5);
		z-index: 100;
		top: 100px;
		right: 20px;
		transition: display 0.5s;
		&.minisize {
			right: 0;
			display: none;
		}
		.dojo-console-header {
			background: #f3f3f3;
			height: 30px;
			line-height: 30px;
			cursor: move;
			padding-left: 5px;
			.icon-minisize {
				font-size: 1.5em;
				height: 30px;
				line-height: 30px;
				width: 26px;
				cursor: pointer;
				&:hover {
					color: green;
				}
			}
		}
		.dojo-console-body {
			height: 370px;
			overflow: auto;
			ul {
				padding: 5px;
				li {
					list-style: none;
				}
			}
		}
	}
</style>
<template>
	<div class="dojo-console minisize">
		<div class="dojo-console-header">
			Dojo Console
			<i class="fa fa-minus-square-o icon-minisize pull-right" @click="minisize()"></i>
		</div>
		<div class="dojo-console-body">
			<ul>
				<li v-for="item in value.logList">
					[{{item.funName}}] {{item.data.join(' ')}}
				</li>
			</ul>
		</div>

	</div>
</template>
<script>
  import consoleController from './console.controller.js';
  export default consoleController;
</script>