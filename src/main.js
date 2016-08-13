//加载模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import fastclick from 'fastclick'
import filters from './filters'
fastclick.attach(document.body);

//引入重置样式
require('./css/flex.min.css');
require('./css/reset.css');
require('./css/animate.css');
//引入运算rem
require('./libs/rem.js');

//实例化模块
Vue.use(VueRouter);
Vue.use(VueResource);
// 实例化过滤器
Object.keys(filters).forEach(function(k) {
  Vue.filter(k, filters[k]);
});

//创建主模板
var app = Vue.extend(require('./app.vue'));

//实例化Router
var router = new VueRouter({
	// 当hashbang的值为true时，所有的路径都会被格式化已#!开头，
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true
});

//加载路由表
import routers from './routers'
routers(router);

router.start(app, '#app');
