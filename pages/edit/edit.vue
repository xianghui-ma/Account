<template>
	<view class="edit">
		<view class="accountName">
			<input type="text" placeholder="账本名" v-model="accountName">
		</view>
		<view class="cover">
			<view class="text">
				<text>选择封面</text>
			</view>
			<view class="coverList">
				<view class="addCover innerCover" @click="uploadCover">
					<text>更多封面</text>
				</view>
				<view class="innerCover" @click="selectCover" v-for="cover in innerCover" :key="cover._id" :id="cover._id" :style="{backgroundImage: `url(${cover.url})`}">
					<icon type="success" size="18" v-show="selectedCoverId === cover._id"/>
				</view>
			</view>
		</view>
		<view class="button">
			<button type="primary" @click="storeAccount">保存</button>
			<button type="warn">删除</button>
		</view>
	</view>
</template>

<script>
	import {mapState, mapActions} from 'vuex';
	export default {
		name: 'edit',
		computed: {
			...mapState('publicData', ['innerCover', 'openId']),
		},
		data() {
			return {
				selectedCoverId: '',
				accountName: ''
			};
		},
		methods: {
			...mapActions('publicData', ['updateAccountList']),
			// 新建账本成功后更新账本列表并跳转到账本列表页
			goAccountList(data){
				this.updateAccountList(data);
				uni.redirectTo({
					url: '/pages/rowlist/rowlist'
				});
			},
			// 存储账本到account数据表
			storeAccount(){
				let targetCover = this.innerCover.filter((item)=>{
					return item._id === this.selectedCoverId
				})[0];
				let data = {
					cover: targetCover.url,
					openid: this.openId,
					accountTitle: this.accountName,
					date: new Date(),
					itemList: {}
				};
				uniCloud.callFunction({
					name: 'storeAccount',
					data,
					success: () => {
						this.goAccountList(data);
					}
				})
			},
			// 单选封面，并记录所选封面的id
			selectCover(e){
				this.selectedCoverId = e.target.id;
			},
			// 更新封面列表
			updateCoverList(newCover){
				this.innerCover.unshift(newCover);
			},
			// 上传封面图片
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
							fail: () => {
								uni.showToast({
									title: '图片上传失败'
								})
							}
						})
					}
				});
			},
			// 将上传封面图片的url存储至cover数据表
			storeUrlToCloud(url){
				uniCloud.callFunction({
					name: 'storeCoverUrl',
					data: {
						openid: this.openId,
						url,
						index: 0
					},
					success: (res) => {
						this.updateCoverList({
							index: 0,
							url,
							_id: res.result.id
						});
					},
					fail: () => {
						uni.showToast({
							title: '图片上传失败'
						})
					}
				});
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
