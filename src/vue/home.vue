<style lang="sass">
	
</style>

<template>
	<div>首页</div>
</template>

<script>
	export default {
		data () {
			return {
				msg: 'This is msg',
				title: 'home'
			}
		},
		route: {
			activate (transition) {
				this.$root.$set('header',this.title);
				transition.next();
			}
		}
	}
</script>