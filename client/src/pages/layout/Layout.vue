<style>
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
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
            <a class="navbar-brand" href="/">WEB DOJO</a>
          </div>
          <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-left">
              <!--<li class="nav-item">
                <router-link to="/square">Code square<span class="sr-only">(current)</span></router-link>
              </li>-->
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0);" @click.stop.prevent="createCode($event)">New</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0);" @click.stop.prevent="updateCode($event)">{{ isNewCode ? 'Save' : 'Update' }}</a>
              </li>
              <!--<li class="nav-item">
                <a class="nav-link" href="javascript:void(0);" @click.stop.prevent="forkCode($event)">Fork</a>
              </li>-->
              <li class="nav-item">
                <router-link to="/mycodes">MyCodes</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/mygists">MyGists</router-link>
              </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Welcome, <span>{{ userInfo.username }}</span> <span class="caret"></span></a>
                <ul class="dropdown-menu" role="menu">
                  <li><a href="javascript:void(0);">Settings</a></li>
                  <li class="divider"></li>
                  <!--<li class="dropdown-header">Nav header</li>-->
                  <li @click.prevent="logout()"><a href="javascript:void(0);">Log out</a></li>
                </ul>
              </li>
            </ul>
            <!--<form class="navbar-form navbar-right">
              <input type="text" class="form-control" placeholder="Search...">
            </form>-->
          </div>
        </div>
      </nav>
    </header>
    <div class="page-content">
      <transition :name="transitionName">
        <router-view class="child-view"></router-view>
      </transition>
    </div>
    <footer>

    </footer>
  </div>
</template>
<script src="./Layout.controller">
</script>
