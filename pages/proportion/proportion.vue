<template>
	<view class="proportion">
		<view class="title">
			<text>{{editAccount.date.split('T')[0]}}</text>
			<text>支出{{totalPayments.outcome * -1}}元</text>
			<text>收入{{totalPayments.income}}元</text>
		</view>
		<view class="list">
			<view v-for="(item, index) in editAccount.itemList" :key="index">
				<text>{{item.paymentName}}</text>
				<text>{{item.money}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex';
	export default {
		name: 'proportion',
		computed: {
			...mapState('rowListData', ['editAccount']),
			totalPayments: {
				get(){
					let income = 0;
					let outcome = 0;
					this.editAccount.itemList.forEach((item)=>{
						if(item.money >= 0){
							income += item.money;
						}else{
							outcome += item.money;
						}
					});
					return {
						income,
						outcome
					}
				}
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.editAccount.accountTitle
			})
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.proportion{
		width: 100vw;
		height: 100vh;
		.title{
			font-size: 36rpx;
			font-weight: 600;
			color: #fff;
			background-color: #3a3a3a;
			display: flex;
			justify-content: space-around;
			padding: 15rpx 0rpx;
		}
		.list{
			padding: 0rpx 20rpx;
			overflow: scroll;
			view{
				display: flex;
				justify-content: space-between;
				line-height: 70rpx;
				border-bottom: 1rpx solid #aaa;
			}
		}
	}
</style>
