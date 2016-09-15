<template>
  <div id="js-dojo-app">
    <router-view></router-view>
  </div>
</template>

<script>
// import auth from '../auth'
export default {
  data () {
    return {
      loggedIn: false //auth.loggedIn()
    }
  },
  created () {
    // auth.onChange = loggedIn => {
    //   this.loggedIn = loggedIn
    // }
  }
}
</script>