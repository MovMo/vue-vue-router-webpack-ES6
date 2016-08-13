<style lang="">
	
</style>

<template>
	<div>
		<button @click="increment()">Increment +1</button>
		<button @click="reduce()">Increment -1</button>
	</div>
</template>

<script>
	
	import { incrementCounter, reduceCounter } from '../vuex/actions'
	
	export default {
		data () {
			return {
				
			}
		},
		vuex: {
			actions: {
				increment: incrementCounter,
				reduce: reduceCounter
			}
		}
	}
	
</script>