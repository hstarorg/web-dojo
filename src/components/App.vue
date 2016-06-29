<template>
  <div class="warpper">
    <header>
      <nav class="navbar navbar-fixed-top navbar-dark bg-inverse">
        <a class="navbar-brand" href="#">JS DOJO</a>
        <ul class="nav navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">代码广场 <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">New</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Update</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Fork</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">MyCode</a>
          </li>
        </ul>
        <form class="form-inline pull-xs-right">
          <input class="form-control" type="text" placeholder="Search">
          <button class="btn btn-secondary-outline" type="submit">Search</button>
        </form>
      </nav>
    </header>
    <div class="page-content">
      <a v-link="{ path: '/foo' }">Go to Foo</a>
      <a v-link="{ path: '/bar' }">Go to Bar</a>
      <router-view></router-view>
    </div>
    <footer>

    </footer>
  </div>
</template>
<script>

</script>
<style>
  .page-content {
    margin-top: 54px;
  }
</style>