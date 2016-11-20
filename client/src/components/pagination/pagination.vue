<style lang="stylus" scoped>
  .pagination {
    margin: 0;
    li>span {
      cursor: pointer;
    }
  }
</style>
<template>
  <ul class="pagination pagination-sm">
    <li v-if="showFirstLast" @click="goPage(1)" :class="{disabled: value === 1}"><span>{{firstText}}</span></li>
    <li v-if="showPrevNext" @click="goPage(value - 1)" :class="{disabled: value === 1}"><span>{{prevText}}</span></li>
    <li v-for="p in pages" @click="goPage(p)" :class="{active: value === p}"><span>{{p}}</span></li>
    <li v-if="showPrevNext" @click="goPage(value + 1)" :class="{disabled: value >= pages.length}"><span>{{nextText}}</span></li>
    <li v-if="showFirstLast" @click="goPage(pages.length)" :class="{disabled: value >= pages.length}"><span>{{lastText}}</span></li>
  </ul>
</template>
<script src="./pagination.controller.js"></script>