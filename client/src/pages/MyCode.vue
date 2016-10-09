<style>

</style>
<template>
  <div class="mycode container">
    <table class="table table-bordered table-condensed">
      <tr>
        <th>Code Name</th>
        <th>Code Tags</th>
      </tr>
      <tr v-for="(item, index) in codes">
        <td>
          <router-link :to="'/' + item.codeId">{{item.codeName}}</router-link>
        </td>
        <td>
          <span class="label" v-for="item in item.codeTags">{{item}}</span>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
  import MyCodeController from './MyCode.controller.js';
  export default MyCodeController;
</script>