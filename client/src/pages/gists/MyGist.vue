<style lang="stylus">
  .page-my-gist {
    padding-top: 5px;
    hr {
      margin: 10px 0;
    }
    .pagination-container {
      text-align: right;
      height: 30px;
    }
  }
</style>
<template>
  <div class="page-my-gist container">
    <div class="search-box">
      <div class="row">
        <div class="col-md-6">
          <div class="input-group input-group-sm">
            <input type="text" class="form-control" placeholder="Gist name|description" v-model="searchKeyword">
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
          <th>Gist Name</th>
          <th>Gist Description</th>
          <th>Operate</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in gists">
          <td>
            <router-link :to="'/gist/' + item.gistId">{{ item.gistName }}</router-link>
          </td>
          <td>
            {{ item.gistDescription }}
          </td>
          <td>
          </td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-success btn-sm" @click="goCreate()"><i class="fa fa-plus"></i> Create gist</button>
    <br><br>
  </div>
</template>
<script src="./MyGist.controller.js"></script>
