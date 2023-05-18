// 所有组件的共享数据，它们不单独属于某一个组件
export default{
    namespaced: true,
    state: {
		openId: '',
		appId: '',
		appSecret: '',
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