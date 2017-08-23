<template>
  <div id="app">
    <header>
      <i class="logo iconfont icon-imagevectordefuben"></i>

      <nav>
        <li>
          <router-link :to="{name:'index'}" class="btn">首页</router-link>
        </li>
        <li>
          <router-link :to="{name:'list'}" class="btn">列表</router-link>
        </li>
        <li>
          <router-link :to="{name:'about'}" class="btn">关于</router-link>
        </li>
      </nav>
    </header>
    <router-view></router-view>
    <footer><p>Copyright © 2017 All rights reserved.</p> </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "this flying"
    }
  }
}
</script>


<style lang="scss">
// @import "./assets/iconfont/iconfont.css";
@import "./assets/main.scss";
</style>