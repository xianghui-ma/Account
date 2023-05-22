import {mapState, mapActions} from 'vuex';

// rowlist和columnlist组件的共享功能
export const rowlistAndColumnlist = {
	onShow(){
		this.storeEditAccount(null);
		this.storeEditAccountIndex(-1);
	},
	computed: {
		...mapState('publicData', ['accountList']),
	},
    methods: {
		...mapActions('rowListData', ['storeEditAccount', 'storeEditAccountIndex']),
		operateAccount(e){
			this.storeEditAccount(this.accountList.filter((item, index)=>{
				if(item._id === e.currentTarget.id){
					this.storeEditAccountIndex(index);
					return true;
				}
			})[0]);
			switch(e.target.id){
				case 'payments':
					this.gotoPayments();
					break;
				case 'edit':
					this.gotoEdit();
					break;
			}
		},
		// 跳转到编辑页
		gotoEdit(){
			uni.navigateTo({
				url: '/pages/edit/edit'
			})
		},
		// 跳转到增添收支页面
		gotoPayments(){
			uni.navigateTo({
				url: '/pages/payments/payments'
			})
		}
    }
}

// detail和proportion组件的共享功能
export const detailAndProportion = {
	onLoad() {
		console.log('onLoad加载');
		uni.setNavigationBarTitle({
			title: this.editAccount.accountTitle
		})
	},
	computed: {
		...mapState('rowListData', ['editAccount']),
		totalPayments: {
			get(){
				let income = 0;
				let outcome = 0;
				let total = 0;
				this.editAccount.itemList.forEach((item)=>{
					total += item.money;
					if(item.money >= 0){
						income += item.money;
					}else{
						outcome += item.money;
					}
				});
				return {
					income,
					outcome,
					total
				}
			}
		}
	},
}