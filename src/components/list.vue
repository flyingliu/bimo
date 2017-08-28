<template>
  <div class="main list scroll">
    <div>
      <h1>笔墨陈列</h1>
      <ul class="photos" v-for="(list,key) in typelist" :key="list.key">
        <li>
          <i class="iconfont" :class="icon[key]" title="key"></i>
        </li>
        <li v-for="item in list" :key="item.type" @click="show(item)">
          <img :src="item.thumb">
        </li>
      </ul>
    </div>
    <div class="layer hide">
      <img class="big" :src="showitem.img" alt="">
      <i class="close iconfont icon-guanbi"></i>
      <div class="text">{{showitem.text}}</div>
    </div>
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
      showitem: {
        img: "",
        text: "this is flying",
      },
      icon: {
        "楷书": "icon-kaishuwanghanzongcukaitijiankaizi",
        "草书": "icon-caoshufangzhenghuangcaogbk",
        "行书": "icon-xingkaiquanxinyingbixingshujian"
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
    },
    show(item) {
      console.log(item);
      this.showitem = item;
      this.$nextTick(() => {
        layer.open({
          content: $(".layer").html(),
          className: 'pop',
          shadeClose: false,
          shade: false,
          type: 1,
          success: function(elem) {
            $(elem).on("click", ".close", () => {
              layer.closeAll();
            })

          }
        });
      });
    }
  },

  mounted() {

    let alllist = list.list;
    this.typelist = _.groupBy(alllist, "type");
    console.log(this.typelist);


  }
}


</script>