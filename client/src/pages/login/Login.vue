<style lang="stylus">
@import './loading.styl';

.page-login {
  min-height: 100%;
  font-family: 'Roboto', 'PT Sans', sans-serif;
  font-weight: 300;
  color: #95a5a6;
  overflow: hidden;
  background-size: cover;
  position: relative;
  box-shadow: inset 0 3px 3px -3px rgba(0, 0, 0, 0.3);

  .container {
    background: transparent;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
  }
}

.remember-box {
  float: left;
  width: auto !important;
  margin-top: 2.5px !important;
}
</style>
<template>
  <div class="page-login">
    <div class="container">
      <div class="cssload-wrap">
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>Loading...</div>
      </div>
    </div>
  </div>
</template>
<script src="./Login.controller.js">
</script>
