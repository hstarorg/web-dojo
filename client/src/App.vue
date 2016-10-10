<template>
  <div id="js-dojo-app">
    <router-view></router-view>
  </div>
</template>

<script>
import { auth } from './services';
import store from './store';
export default {
  store,
  data () {
    return {
      loggedIn: false //auth.loggedIn()
    }
  },
  created () {
  }
}
</script>