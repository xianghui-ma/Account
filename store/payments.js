// 来源于payments组件的共享数据
export default{
    namespaced: true,
    state: {
		paymentList: []
    },
    actions: {
        storePaymentItem(context, data){
            context.commit('storePaymentItem', data);
        },
		storePayments(context, data){
			context.commit('storePayments', data);
		}
    },
    mutations: {
		storePaymentItem(preState, data){
		    preState.paymentList.unshift(data);
		},
		storePayments(preState, data){
			preState.paymentList = data;
		}
    },
}