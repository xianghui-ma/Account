<template>
	<view class="proportion">
		<view class="title">
			<text>2023-05-17</text>
			<text>支出10元</text>
			<text>收入50元</text>
		</view>
		<view class="list">
			<view>
				<text>早餐111</text>
				<text>-10</text>
			</view>
			<view>
				<text>早餐222</text>
				<text>-10</text>
			</view>
			<view>
				<text>早餐</text>
				<text>-10</text>
			</view>
			<view>
				<text>早餐</text>
				<text>-10</text>
			</view>
			<view>
				<text>早餐</text>
				<text>-10</text>
			</view>
			<view>
				<text>早餐</text>
				<text>-10</text>
			</view>
			<view>
				<text>早餐</text>
				<text>-10</text>
			</view>
			<view>
				<text>早餐</text>
				<text>-10</text>
			</view>
			<view>
				<text>早餐</text>
				<text>-10</text>
			</view>
			<view>
				<text>早餐</text>
				<text>-10</text>
			</view>
			<view>
				<text>早餐</text>
				<text>-10</text>
			</view>
			<view>
				<text>早餐</text>
				<text>-10</text>
			</view>
			<view>
				<text>早餐</text>
				<text>-10</text>
			</view>
			<view>
				<text>早餐</text>
				<text>-10</text>
			</view>
			<view>
				<text>早餐</text>
				<text>-10</text>
			</view>
			<view>
				<text>早餐</text>
				<text>-10</text>
			</view>
			<view>
				<text>早餐</text>
				<text>-10</text>
			</view>
			<view>
				<text>早餐</text>
				<text>-10</text>
			</view>
			<view>
				<text>早餐</text>
				<text>-10</text>
			</view>
			<view>
				<text>早餐</text>
				<text>-10</text>
			</view>
			<view>
				<text>早餐000</text>
				<text>-10</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'proportion',
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
