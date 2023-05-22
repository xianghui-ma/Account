// 所有组件的共享数据，它们不单独属于某一个组件
export default{
    namespaced: true,
    state: {
		openId: '',
		appId: '',
		appSecret: '',
		innerCover: null,
		accountList: null
    },
	actions: {
		storeOpenId(context, data){
			context.commit('storeOpenId', data);
		},
		storeInnerCover(context, data){
			context.commit('storeInnerCover', data);
		},
		updateAccountList(context, data){
			context.commit('updateAccountList', data);
		},
		storeAccountList(context, data){
			context.commit('storeAccountList', data);
		},
		reEditAccount(context, data){
			context.commit('reEditAccount', data);
		}
	},
	mutations: {
		storeOpenId(preState, data){
			preState.openId = data;
		},
		storeInnerCover(preState, data){
			preState.innerCover = data;
		},
		updateAccountList(preState, data){
			preState.accountList.unshift(data);
		},
		storeAccountList(preState, data){
			preState.accountList = data;
		},
		reEditAccount(preState, data){
			preState.accountList[data.index].cover = data.cover;
			preState.accountList[data.index].accountTitle = data.accountTitle;
		},
	},
}