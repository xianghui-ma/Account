<template>
	<view class="payments">
		<view class="mes">
			<text id="expend" @click="getType" v-bind:class="expend && 'activeExpend'">支出</text>
			<text id="income" @click="getType" v-bind:class="income && 'activeIncome'">收入</text>
			<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">选择日期</picker>
		</view>
		<view class="inputNum">
			<input type="text" placeholder="0.0元">
		</view>
		<view class="note">
			<textarea placeholder="备注..."></textarea>
		</view>
		<button type="primary">保存</button>
	</view>
</template>

<script>
	export default {
		name: 'payments',
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		methods: {
			bindDateChange: function(e) {
				this.date = e.detail.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
	
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			getType(event){
				this.expend = event.target.id === 'expend';
				this.income = event.target.id === 'income';
			}
		},
		data() {
			return {
				expend: true,
				income: false,
				date: ''
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
		.inputNum{
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
