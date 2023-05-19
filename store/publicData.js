// 所有组件的共享数据，它们不单独属于某一个组件
export default{
    namespaced: true,
    state: {
		openId: '',
		appId: '',
		appSecret: '',
		innerCover: null
    },
	actions: {
		storeOpenId(context, data){
			context.commit('storeOpenId', data);
		},
		storeInnerCover(context, data){
			context.commit('storeInnerCover', data);
		}
	},
	mutations: {
		storeOpenId(preState, data){
			preState.openId = data;
		},
		storeInnerCover(preState, data){
			preState.innerCover = data;
		}
	},
}