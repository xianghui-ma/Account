// 所有组件的共享数据，它们不单独属于某一个组件
export default{
    namespaced: true,
    state: {
		openId: '',
		appId: 'wx2b482e8d9a92ad01',
		appSecret: 'adc2aae04d6e1dfad6780f94884a0e54',
    },
	actions: {
		storeOpenId(context, data){
			context.commit('storeOpenId', data);
		},
	},
	mutations: {
		storeOpenId(preState, data){
			preState.openId = data;
		},
	},
}