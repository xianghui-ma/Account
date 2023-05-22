<template>
	<view class="payments">
		<view class="mes">
			<text id="expend" @click="getType" v-bind:class="expend && 'activeExpend'">支出</text>
			<text id="income" @click="getType" v-bind:class="income && 'activeIncome'">收入</text>
		</view>
		<view class="name">
			<input type="text" placeholder="收支名" v-model="paymentName">
		</view>
		<view class="inputNum">
			<input type="text" placeholder="0.0元" v-model="money">
		</view>
		<view class="note">
			<textarea placeholder="备注..." v-model="note"></textarea>
		</view>
		<button type="primary" @click="storePayments">保存</button>
	</view>
</template>

<script>
	import {mapState, mapActions} from 'vuex';
	export default {
		name: 'payments',
		computed: {
			...mapState('rowListData', ['editAccount', 'editAccountIndex']),
		},
		methods: {
			...mapActions('paymentsData', ['storePaymentItem']),
			getType(event){
				this.expend = event.target.id === 'expend';
				this.income = event.target.id === 'income';
			},
			storePayments(){
				uni.showLoading({
					title: "保存收支",
					mask: true
				});
				let data = {
					id: this.editAccount._id,
					paymentName: this.paymentName,
					money: this.expend ? parseFloat(this.money) * -1 : parseFloat(this.money),
					note: this.note
				}
				this.storePaymentItem(data);
				uniCloud.callFunction({
					name: 'storePayments',
					data,
					success: (res) => {
						uni.hideLoading();
						uni.redirectTo({
							url: '/pages/detail/detail'
						})
					}
				})
			}
		},
		data() {
			return {
				expend: true,
				income: false,
				paymentName: '',
				money: '',
				note: ''
			};
		}
	}
</script>

<style lang="scss">
	.payments{
		width: 100vw;
		height: 100vh;
		.mes{
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			padding: 80rpx 0rpx 30rpx 0rpx;
			text,picker{
				padding: 10rpx 20rpx;
				border-radius: 10%;
				background-color: #eee;
				color: #aaa;
			}
			.activeExpend{
				color: #fff;
				background-color: #74d573;
			}
			.activeIncome{
				color: #fff;
				background-color: #fc685b;
			}
		}
		.inputNum, .name{
			padding: 20rpx 40rpx;
			input{
				border: 2rpx solid #aaa;
				border-radius: 10rpx;
				padding: 20rpx;
			}
		}
		.note{
			padding: 20rpx 40rpx;
			textarea{
				border: 2rpx solid #aaa;
				border-radius: 10rpx;
				width: 100%;
				padding: 20rpx;
				box-sizing: border-box;
			}
		}
		button{
			width: 50%;
			margin-top: 100rpx;
		}
	}
</style>
