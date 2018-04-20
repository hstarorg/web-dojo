<style lang="stylus">
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
    .container {
      background: transparent;
    }
  }

  .remember-box {
    float: left;
    width: auto !important;
    margin-top: 2.5px !important;
  }
</style>
<template>
  <div class="page-login eternity-form">
    <div class="container">
      <h1>登录中...</h1>
    </div>
  </div>
</template>
<script src="./Login.controller.js">
</script>
