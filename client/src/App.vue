<template>
  <div id="js-dojo-app">
    <router-view></router-view>
  </div>
</template>

<script>
import { auth } from './services';
export default {
  data () {
    return {
      loggedIn: false //auth.loggedIn()
    }
  },
  created () {
  }
}
</script>