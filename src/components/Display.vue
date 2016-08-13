<style lang="">
	
</style>

<template>
	<div>
		<h3>Count is {{counterValue}}</h3>
	</div>
</template>

<script>
	
	import { getCount } from '../vuex/getters'
	
	export default {
		data () {
			return {
				
			}
		},
		vuex: {
			getters: {
				counterValue: getCount
			}
		}
	}
	
</script>