<template>
  <div id="app">
    <header>
      <nav>
        <li>
          <router-link :to="{name:'list'}" class="btn">list</router-link>
        </li>
        <li>
          <router-link :to="{name:'index'}" class="btn">index</router-link>
        </li>
        <li>
          <router-link :to="{name:'about'}" class="btn">about</router-link>
        </li>
      </nav>
    </header>
    <router-view></router-view>
    <footer>Copyright © 2017 All rights reserved.</footer>
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