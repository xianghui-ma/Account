// 来源于rowlist组件的共享数据
export default{
    namespaced: true,
    state: {
        editAccount: null,
		editAccountIndex: -1
    },
    actions: {
        storeEditAccount(context, data){
            context.commit('storeEditAccount', data);
        },
		storeEditAccountIndex(context, data){
		    context.commit('storeEditAccountIndex', data);
		},
		storePaymentItem(context, data){
		    context.commit('storePaymentItem', data);
		},
    },
    mutations: {
		storeEditAccount(preState, data){
		    preState.editAccount = data;
		},
        storeEditAccountIndex(preState, data){
            preState.editAccountIndex = data;
        },
		storePaymentItem(preState, data){
		    preState.editAccount.itemList.unshift(data);
		},
    },
}