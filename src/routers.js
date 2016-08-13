export default (router) => {
	router.map({
		'/': {
			name: 'home',
			component (reslove) {
				return require(['./vue/home.vue'],reslove);
			}
		},
		'/my_views': {
			name: 'my_views',
			component (reslove) {
				return require(['./vue/my_views.vue'],reslove);
			}
		},
		'/vuex': {
			name: 'vuex',
			component (reslove) {
				return require(['./vue/vuex.vue'],reslove);
			}
		}
	})
}
