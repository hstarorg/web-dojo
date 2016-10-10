<template>
  <div id="js-dojo-app">
    <router-view></router-view>
  </div>
</template>

<script>
import { auth } from './services';
import { eventBus } from './common';
import store from './store';
import { mapActions } from 'vuex';

export default {
  store,
  data () {
    return {
      loggedIn: false //auth.loggedIn()
    }
  },
  created() {
    eventBus.on('user.logined', () => {
      this.setUserInfo({ username: auth.user.username });
    }, this);
  },
  methods: {
    ...mapActions([
      'setUserInfo'
    ])
  }
}
</script>