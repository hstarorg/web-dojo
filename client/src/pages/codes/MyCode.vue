<style lang="stylus">
  .page-mycode {
    padding-top: 5px;
    hr {
      margin: 10px 0;
    }
    .label-info {
      margin-right: 5px;
    }
    .pagination-container {
      text-align: right;
      height: 30px;
    }
  }
</style>
<template>
  <div class="page-mycode container">
    <div class="search-box">
      <div class="row">
        <div class="col-md-6">
          <div class="input-group input-group-sm">
            <input type="text" class="form-control" placeholder="Name | Description | Tags" v-model="searchKeyword">
            <span class="input-group-btn">
              <button class="btn btn-info" @click="clearSearch()"><i class="fa fa-close"></i></button>
              <button class="btn btn-primary" @click="fetchCodes(true)"><i class="fa fa-search"></i> Search</button>
            </span>
          </div>
        </div>
        <div class="col-md-6 pagination-container">
          <pagination v-model="curPage" :page-size="pageSize" :total-count="totalCount"></pagination>
        </div>
      </div>
    </div>
    <hr>
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
<script src="./MyCode.controller.js"></script>