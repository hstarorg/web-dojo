<style>
  #js-dojo-app,
  body,
  html {
    height: 100%;
  }
  
  .page-login {
    background-color: #1abc9c;
    background-image: radial-gradient(circle farthest-side at center top, #55e7ca 0%, #1abc9c 100%);
    min-height: 100%;
    font-family: 'Roboto', 'PT Sans', sans-serif;
    font-weight: 300;
    color: #95a5a6;
    padding: 50px 0;
    overflow: hidden;
    background-size: cover;
    position: relative;
    box-shadow: inset 0 3px 3px -3px rgba(0, 0, 0, 0.3);
  }
</style>
<template>
  <div class="page-login eternity-form">
    <div class="container">
      <div class="login-form-section">
        <div class="login-content animated bounceIn" data-animation="bounceIn">
          <form @submit.prevent="login()">
            <div class="section-title">
              <h3>JS-DOJO Log In</h3>
            </div>
            <div class="textbox-wrap">
              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-user"></i></span>
                <input type="text" required="required" class="form-control" placeholder="Username" v-model="user.username">
              </div>
            </div>
            <div class="textbox-wrap" :class="{focused: true}">
              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-key"></i></span>
                <input type="password" required="required" class="form-control " placeholder="Password" v-model="user.password" @click="">
              </div>
            </div>
            <div></div>
            <div class="input-group">
              <label>
                  <input type="checkbox" v-model="remember">&nbsp;Remember Me
              </label>
            </div>
            <div class="login-form-action clearfix">
              <button type="button" @click="login()" :disabled="!user.username || !user.password" class="btn btn-success pull-right green-btn">Log In &nbsp; <i class="fa fa-chevron-right"></i></button>
            </div>
          </form>
        </div>
        <div class="login-form-links link1 animated fadeInLeftBig" data-animation="fadeInLeftBig" data-animation-delay=".2s" style="animation-delay: 0.2s;">
          <h4 class="blue">Don't have an Account?</h4>
          <span>No worry</span>
          <a href="javascript:void(0)" class="blue">Click Here</a>
          <span>to Register</span>
        </div>
        <div class="login-form-links link2 animated fadeInRightBig" data-animation="fadeInRightBig" data-animation-delay=".4s" style="animation-delay: 0.4s;">
          <h4 class="green">Forget your Password?</h4>
          <span>Dont worry</span>
          <a href="javascript:void(0)" class="green">Click Here</a>
          <span>to Get New One</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { auth } from './../services';
export default {
  replace: true,
  data() {
    return {
      user: {
        username: 'admin',
        password: ''
      },
      remember: false,
      error: false
    }
  },
  methods: {
    login () {
      auth.login(this.user.username, this.user.password)
      .then(loggedIn => {
        if (!loggedIn) {
          this.error = true
        } else {
          this.$router.push(this.$route.query.redirect || '/')
        }
      });
    }
  }
}
</script>