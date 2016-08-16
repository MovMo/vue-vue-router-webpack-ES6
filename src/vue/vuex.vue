<style lang="">
	
</style>

<template>
	<div>
		<h1>{{counterValue}}</h1>
		<display></display>
		<increment></increment>
	</div>
</template>

<script>
	
	//vuex模块
	import store from '../vuex/store'
	import { getCount } from '../vuex/getters'
	
	//组件模块
	import Display from '../components/Display.vue'
	import Increment from '../components/Increment.vue'
	
	export default {
		data () {
			return {
				
			}
		},
		components: {
			Display,
			Increment
		},
		store,
		vuex: {
			getters: {
				counterValue: getCount
			}
		}
	}
	
</script>