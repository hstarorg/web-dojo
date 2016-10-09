<style>
  .page-content{
    padding-top: 50px;
  }
</style>
<template>
  <div class="warpper">
    <header>
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false"
              aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
            <a class="navbar-brand" href="/">JS DOJO</a>
          </div>
          <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-left">
              <li class="nav-item">
                <router-link to="/square">Code square<span class="sr-only">(current)</span></router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" @click.stop.prevent="createCode($event)">New</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" @click.stop.prevent="updateCode($event)">Save|Update</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" @click.stop.prevent="forkCode($event)">Fork</a>
              </li>
              <li class="nav-item">
                <router-link to="/mycode">MyCode</router-link>
              </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li><a href="#">Dashboard</a></li>
              <li><a href="#">Settings</a></li>
              <li><a href="#">Profile</a></li>
              <li><a href="#">Help</a></li>
            </ul>
            <form class="navbar-form navbar-right">
              <input type="text" class="form-control" placeholder="Search...">
            </form>
          </div>
        </div>
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
  import { eventBus } from './../common';
  export default {
    name: 'layout',
    //Why use this? 要为每个组件创建自己独立的data实例。
    data() {
      return {
        searchKey: 'abc'
      };
    },
    mouted() {
       eventBus.emit('test', 'aaa');
    },
    methods: {
      createCode(evt) {
        this.$router.push('/');
      },
      updateCode(evt) {
        eventBus.emit('code.update');
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