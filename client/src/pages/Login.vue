<style>
  #web-dojo-app,
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
  .remember-box{
    float: left;
    width: auto !important;
    margin-top: 2.5px !important;
  }
</style>
<template>
  <div class="page-login eternity-form">
    <div class="container">
      <div class="login-form-section">
        <div class="login-content animated bounceIn" data-animation="bounceIn">
          <form @submit.prevent="login()">
            <div class="section-title">
              <h3>Web Dojo Log In</h3>
            </div>
            <div class="textbox-wrap">
              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-user"></i></span>
                <input type="text" required="required" class="form-control" placeholder="Username" v-model="user.username">
              </div>
            </div>
            <!--<div class="textbox-wrap" :class="{focused: true}">-->
            <div class="textbox-wrap">
              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-key"></i></span>
                <input type="password" required="required" class="form-control " placeholder="Password" v-model="user.password" @click="">
              </div>
            </div>
            <div class="textbox-wrap">
              <label>
                <input class="remember-box" type="checkbox" v-model="remember">&nbsp;Remember Me
              </label>
            </div>
            <div class="login-form-action clearfix">
              <button type="submit" :disabled="!user.username || !user.password || isLogining" class="btn btn-success pull-right green-btn">Log In <i class="fa fa-chevron-right"></i></button>
            </div>
          </form>
        </div>
        <div class="login-form-links link1 animated fadeInLeftBig" data-animation="fadeInLeftBig" data-animation-delay=".2s" style="animation-delay: 0.2s;">
          <h4 class="blue">Don't have an Account?</h4>
          <span>No worry</span>
          <router-link to="/register" class="blue">Click Here</router-link>
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
  import LoginController from './Login.controller.js';
  export default LoginController;
</script>