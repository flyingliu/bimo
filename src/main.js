import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/list',
        component: require('./components/list.vue'),
        name: 'list'
    },{
        path: '/about',
        component: require('./components/about.vue'),
        name: 'about'
    }, {
        path: '/',
        component: require('./components/index.vue'),
        name: 'index'
    }, {
        path: '*',
        redirect: '/'
    }]
})


new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
