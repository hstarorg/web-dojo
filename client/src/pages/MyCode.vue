<style>
  .page-mycode{
    margin-top: 5px;
  }
  .page-mycode .label-info{
    margin-right: 5px;
  }
</style>
<template>
  <div class="page-mycode container">
    <table class="table table-bordered table-condensed table-striped">
      <thead>
        <tr>
          <th>Code Name</th>
          <th>Code Description</th>
          <th>Code Tags</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in codes">
          <td>
            <router-link :to="'/' + item.codeId">{{ item.codeName }}</router-link>
          </td>
          <td>
            {{ item.codeDescription }}
          </td>
          <td>
            <span class="label label-info" v-for="tag in item.codeTags">{{ tag }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import MyCodeController from './MyCode.controller.js';
  export default MyCodeController;
</script>