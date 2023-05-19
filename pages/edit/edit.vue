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
				<view class="addCover innerCover" @click="uploadCover">
					<text>更多封面</text>
				</view>
				<view class="innerCover" @click="" v-for="cover in innerCover" :key="cover._id" :style="{backgroundImage: `url(${cover.url})`}">
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
	import {mapState} from 'vuex';
	export default {
		name: 'edit',
		computed: {
			...mapState('publicData', ['innerCover', 'openId']),
		},
		data() {
			return {
				
			};
		},
		methods: {
			
			uploadCover(){
				uni.chooseImage({
					count: 1,
					success: (chooseImageRes) => {
						let filePath = chooseImageRes.tempFilePaths[0]
						uniCloud.uploadFile({
							filePath: filePath,
							fileType: 'image',
							cloudPath: `${Date.now()}.${filePath.split('.')[1]}`,
							success: (res) => {
								this.storeUrlToCloud(res.fileID);
							},
							fail: (res) => {
								uni.showToast({
									title: '图片上传失败'
								})
							}
						})
					}
				});
			},
			storeUrlToCloud(url){
				let res = uniCloud.callFunction({
					name: 'storeCoverUrl',
					data: {
						openid: this.openId,
						url
					}
				});
				console.log(res);
			}
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
