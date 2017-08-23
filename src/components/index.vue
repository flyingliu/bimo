<template>
    <div class="main index" id="index" :title="msg">
        <div class="scroll" :class="{isLock:isLock}" :style="styleObject">
        </div>
    </div>
</template>
<script>
var myScroll;
import $ from "jquery"
import list from "../assets/data.js"
export default {
    data() {
        return {
            msg: "this flying",
            img: '',
            styleObject: { backgroundImage:"" },
            isLock: true
        }
    },
    methods: {
        getSize(callback) {
            var img = new Image();
            var wrap = $(".scroll");
            img.src = this.img;
            img.onload = () => {
                var value = img.naturalWidth/img.naturalHeight > wrap.width()/wrap.height();
                this.isLock = !value;
            }
        }
    },

    mounted() {
        console.log(list.list)
        var item = list.list[1];
        this.img =  item.img;
        this.styleObject.backgroundImage = "url(" + this.img + ")";
        this.getSize();


    }
}
</script>