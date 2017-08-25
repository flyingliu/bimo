<template>
  <div class="main list">
    <h1>笔墨陈列</h1>
    <ul class="photos" v-for="(list,key) in typelist" :key="list.key">
      <li><i class="iconfont" :class="icon[key]" title="key"></i></li>
      <li v-for="item in list" :key="item.type">
        <img :src="item.thumb">
      </li>
    </ul>

  </div>
</template>
<script>
var myScroll;
import $ from "jquery"
import list from "../assets/data.js"
import _ from "underscore"
export default {
  data() {
    return {
      msg: "this flying",
      typelist: {},
      icon: {
        "楷书":"icon-kaishuwanghanzongcukaitijiankaizi",
        "草书":"icon-caoshufangzhenghuangcaogbk",
        "行书":"icon-xingkaiquanxinyingbixingshujian"
      }
    }
  },
  methods: {
    getSize(callback) {
      var img = new Image();
      var wrap = $(".scroll");
      img.src = this.img;
      img.onload = () => {
        var value = img.naturalWidth / img.naturalHeight > wrap.width() / wrap.height();
        this.isLock = !value;
      }
    }
  },

  mounted() {

    let alllist = list.list;
    this.typelist = _.groupBy(alllist,"type");
    console.log(this.typelist);


  }
}


</script>