<template>
    <div class="main index" id="index" :title="msg">
        <div class="scroll">
            <img class="img" :src="img"/>
        </div>
    </div>
</template>
<script>
var myScroll;
export default {
    data() {
        return {
            msg: "this flying",
            img:''
        }
    },

    mounted() {
        this.img = "http://ww1.sinaimg.cn/large/006poVAQgy1fitscuifcjj318g0m8gpl.jpg";
        var imgData = new Image(this.img);
        imgData.src = this.img
        imgData.onload = (abc) => {
            console.log(abc);
        }
        console.log(this);
        myScroll = new IScroll('#index', {
            zoom: true,
            scrollX: true,
            scrollY: true,
            mouseWheel: true,
            wheelAction: 'zoom'
        });
    }
}
</script>