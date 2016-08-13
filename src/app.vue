<style lang="sass">
	[v-cloak]{
		display: none;
	}
	
	.app{
		background-color: #f4f4f4;
		width: 100%;
		height: 100%;
		
		.head_title{
			line-height: .7rem;
			text-align: center;
		}
		
		.path{
			text-align: center;
		}
		
		.nav_href{
			padding: .26rem;
			
			
			a{
				padding: .1rem .5rem;
				line-height: .5rem;
				background-color: #90C31F;
				color: #FFFFFF;
				text-align: center;
				border-radius: .1rem;
				margin-right: .2rem;
				margin-bottom: .2rem;
				float: left;
			}
			a.v-link-active{
				background-color: #F43530;
			}
		}
		
		.view{
			transition: all .3s ease;
			border: 2px solid #90C31F;
			padding: .26rem;
		}
	}
	
	.fade-enter{
		opacity: 1;
		transform: translate3d(100%,0,0);
	}
	.fade-leave{
		opacity: 0;
		transform: translate3d(0,0,0);
	}
	.back-enter{
		opacity: 1;
		transform: translate3d(-110%,0,0);
	}
	.back-leave{
		opacity: 0;
		transform: translate3d(0,0,0);
	}
	
	.custom-active-class{
		color: #FF6600;
	}
	
	@keyframes testloading {
		0% {
			opacity: 0.2;
		}
		65% {
			opacity: 1;
		}
		100% {
			opacity: 0.1;
		}
	}
	.testa {
		display: flex;
	}
	
	button {
		color: #000;
		padding: 3px 5px;
		margin: 2px;
		display: inline-block;
		border: 2px solid #000;
		text-decoration: none;
	}
	
	::-webkit-scrollbar {
		display: none;
	}
</style>

<template>
	<section class="app">
		
		<h1 v-text="header" class="head_title">App header</h1>
		<p class="path">当前路径：{{$route.path}}</p>
		
		<!--页面跳转start-->
		<nav class="nav_href clear">
			<a v-link="{name: 'home', exact: true}">首页</a>
			<a v-link="{name: 'my_views', exact: true}">组件生命周期</a>
			<a v-link="{name: ''}">url传值</a>
			<a v-link="{name: ''}">about</a>
			<a v-link="{name: ''}">在路由全局设置终止</a>
			<a v-link="{name: ''}">404</a>
			<a v-link="{name: 'vuex'}">vuex</a>
		</nav>
		<!--页面跳转end-->
		
		<router-view class="view" id="view" keep-alive :transition="effect" transition-mode="out-in"></router-view>
		
	</section>
</template>

<script>
	
	export default {
		data () {
			return {
				//头部标题
				header: '首页',
				//转场动画定义
				effect: 'fade',
			}
		}
	}
	
</script>