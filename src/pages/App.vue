<style>
  .page-content {
    margin-top: 54px;
  }
</style>
<template>
  <div class="warpper">
    <header>
      <nav class="navbar navbar-fixed-top navbar-dark bg-inverse">
        <a class="navbar-brand" href="/">JS DOJO</a>
        <ul class="nav navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" v-link="{path: '/square'}">代码广场 <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.stop.prevent="createCode($event)">New</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.stop.prevent="updateCode($event)">Update</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.stop.prevent="forkCode($event)">Fork</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-link="{path: '/mycode'}">MyCode</a>
          </li>
        </ul>
        <form class="form-inline pull-xs-right">
          <input class="form-control" type="text" placeholder="Search" v-model="searchKey">
          <button class="btn btn-secondary-outline" type="submit" @click.stop.prevent="searchCode($event)">Search</button>
        </form>
      </nav>
    </header>
    <div class="page-content">
      <router-view></router-view>
    </div>
    <footer>

    </footer>
  </div>
</template>
<script>
  export default {
    //Why use this? 要为每个组件创建自己独立的data实例。
    data() {
      return {
        searchKey: 'abc'
      };
    },
    methods: {
      createCode(evt) {
        this.$router.go('/abc');
        alert('Create code');
      },
      updateCode(evt) {
        alert('Update code');
      },
      forkCode(evt) {
        alert('Fork code');
      },
      searchCode(evt) {
        alert(`Search code：${this.searchKey}`);
      }
    }
  };
</script>