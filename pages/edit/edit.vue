<template>
	<view class="edit">
		<view class="accountName">
			<input type="text" placeholder="账本名">
		</view>
		<view class="cover">
			<view class="text">
				<text>选择封面</text>
			</view>
			<view class="coverList">
				<view class="addCover innerCover">
					<text>更多封面</text>
				</view>
				<view class="innerCover" v-for="link in innerCoverUrl" :key="link" :style="{backgroundImage: `url(${link})`}">
					<icon type="success" size="18"/>
				</view>
			</view>
		</view>
		<view class="button">
			<button type="primary">保存</button>
			<button type="warn">删除</button>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'edit',
		data() {
			return {
				innerCoverUrl: ['https://mp-931dc76a-090b-4f2c-809b-bafd045c55e6.cdn.bspapp.com/cloudstorage/806b95ea-4433-4093-b61e-06c4aaaa8b7d.png', 'https://mp-931dc76a-090b-4f2c-809b-bafd045c55e6.cdn.bspapp.com/cloudstorage/456ecbaa-33be-4636-ad49-8f28743038db.png', 'https://mp-931dc76a-090b-4f2c-809b-bafd045c55e6.cdn.bspapp.com/cloudstorage/347c6eed-994a-4e7a-ac4e-16739747af3a.png', 'https://mp-931dc76a-090b-4f2c-809b-bafd045c55e6.cdn.bspapp.com/cloudstorage/763f0033-e24e-4bb1-a2ea-67d1661463ac.png', 'https://mp-931dc76a-090b-4f2c-809b-bafd045c55e6.cdn.bspapp.com/cloudstorage/e1d39483-616a-4104-91e7-9f8b2463cce5.png']
			};
		}
	}
</script>

<style lang="scss">
	.edit{
		width: 100vw;
		height: 100vh;
		.accountName{
			padding: 30rpx;
			input{
				border: 2rpx solid #aaa;
				border-radius: 20rpx;
				padding: 20rpx;
			}
		}
		.cover{
			.text{
				padding: 0rpx 30rpx 30rpx 30rpx;
				font-size: 36rpx;
			}
			.coverList{
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				justify-content: space-between;
				align-content: flex-start;
				padding: 0 30rpx 30rpx 30rpx;
				height: 680rpx;
				overflow: scroll;
				.innerCover{
					width: 30%;
					height: 45%;
					border-radius: 20rpx;
					background-repeat: no-repeat;
					background-size: cover;
					position: relative;
					margin-bottom: 30rpx;
					icon{
						position: absolute;
						right: 10rpx;
						bottom: 10rpx;
					}
				}
				.addCover{
					border: 1rpx dashed #aaa;
					color: #aaa;
					text-align: center;
					display: flex;
					flex-direction: column;
					justify-content: center;
				}
			}
		}
		.button{
			padding: 0rpx 10vw;
			button{
				border-radius: 60rpx;
				height: 90rpx;
				line-height: 90rpx;
				margin-bottom: 35rpx;
				font-size: 36rpx;
			}
		}
	}
</style>
