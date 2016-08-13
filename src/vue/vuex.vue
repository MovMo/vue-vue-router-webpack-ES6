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
	
	import store from '../vuex/store'
	import { getCount } from '../vuex/getters'
	
	export default {
		data () {
			return {
				
			}
		},
		components: {
			Display: require('../components/Display.vue'),
			Increment: require('../components/Increment.vue')
		},
		store,
		vuex: {
			getters: {
				counterValue: getCount
			}
		}
	}
	
</script>