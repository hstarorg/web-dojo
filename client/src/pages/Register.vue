<style>
  #js-dojo-app,
  body,
  html {
    height: 100%;
  }
  
  .page-register {
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
  <div class="page-register eternity-form">
    <div class="container">
      <div class="login-form-section">
        <div class="login-content animated bounceIn" data-animation="bounceIn">
          <form @submit.prevent="register()" autocomplete="off">
            <div class="section-title">
              <h3>Join JS-DOJO</h3>
            </div>
            <div class="textbox-wrap">
              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-user"></i></span>
                <input type="text" style="display:none">
                <input type="text" required="required" class="form-control" placeholder="Username" v-model="user.username">
              </div>
            </div>
            <div class="textbox-wrap">
              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-key"></i></span>
                <input type="password" required="required" class="form-control " placeholder="Password" v-model="user.password">
              </div>
            </div>
            <div class="textbox-wrap">
              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-key"></i></span>
                <input type="password" required="required" class="form-control " placeholder="Confirm Password" v-model="user.confirmPassword">
              </div>
            </div>
            <div class="login-form-action clearfix">
              <button type="submit" :disabled="disableSubmit" class="btn btn-success pull-right green-btn">Create Account <i class="fa fa-chevron-right"></i></button>
            </div>
          </form>
        </div>
        <div class="login-form-links link1 animated fadeInLeftBig" data-animation="fadeInLeftBig" data-animation-delay=".2s" style="animation-delay: 0.2s;">
          <h4 class="blue">Have an Account?</h4>
          <router-link to="/login" class="blue">Click Here</router-link>
          <span>to Login</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import RegisterController from './Register.controller.js';
  export default RegisterController;
</script>