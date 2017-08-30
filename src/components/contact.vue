<template>
    <div class="main list scroll">
        <div>
            <h1>给我留言</h1>
            <ul class="forms">
                <li v-bind:class="{ 'error': $v.email.$error }">
                    <label for="email">您的邮箱</label>
                    <input type="email" v-model.trim="email" @input="$v.email.$touch()" id="email" placeholder="Email">
                </li>
                <li v-bind:class="{ 'error': $v.name.$error }">
                    <label for="name">姓名</label>
                    <input type="name" v-model.trim="name" @input="$v.name.$touch()" id="name" placeholder="name">
                </li>
                <li v-bind:class="{ 'error': $v.content.$error }">
                    <label for="content">内容</label>
                    <textarea name="content" v-model.trim="content" @input="$v.content.$touch()" id="content"></textarea>

                </li>
                <li>
                    <button @click="add($v)">提交内容</button>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
var myScroll;
import $ from "jquery"
import Vue from "vue"
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
import { required, minLength, between, email } from 'vuelidate/lib/validators'
export default {
    data() {
        return {
            name: "",
            email: "",
            content: ""
        }
    },
    validations: {
        name: {
            required,
            minLength: minLength(2)
        },
        content: {
            required,
            minLength: minLength(4)
        },
        email: {
            required,
            email
        }
    },
    methods: {
        add($v) {
            for (let i in $v.$params) {
                $v[i].$touch();
            }
            if ($v.$error) {
                return;
            };
            var _this = this;

            $.post("https://safe-earth-48959.herokuapp.com/contact", {
                name: "abc",
                email: "dangdang@qq.com",
                content: "lorem is here a"
            }, (data) => {

                if (data.success) {

                    layer.open({
                        content:"谢谢您！留言成功。",
                        time:2000,
                        success:()=>{
                            _this.name = "";
                            _this.content = "";
                            _this.email = "";
                        }
                    })

                }
                console.log(data);
            });
        }

    },

    mounted() {


    }
}


</script>