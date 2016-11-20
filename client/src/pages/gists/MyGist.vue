<style lang="stylus">
  .page-my-gist {
    margin-top: 5px;
    padding-top: 5px;
  }
</style>
<template>
  <div class="page-my-gist container">
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