<template>
	<view class="columnlist">
		<view class="iconBox">
			<text class="toggleIcon" @click="gotoRowlist"></text>
		</view>
		<view class="listArea">
			<view class="time">
				<view class="timeItem">
					<text>{{new Date().toISOString().split('T')[0]}}</text>
				</view>
				<view class="timeItem" v-for="account in accountList" :key="account._id">
					<text>{{account.date.split('T')[0]}}</text>
				</view>
			</view>
			<view class="account">
				<view class="addAccount" @click="gotoEdit">
					<view class="addMark">+</view>
					<view class="explain">创建一个新帐本</view>
				</view>
				<view class="accountContent" v-for="account in accountList" :key="account._id" :id="account._id" @click="operateAccount">
					<image :src="account.cover" mode="aspectFill" class="accountImg" id="payments"/>
					<view class="description">
						<text>{{account.accountTitle}}</text>
						<text class="editIcon" id="edit"></text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// import {mapState, mapActions} from 'vuex';
	import {rowlistAndColumnlist} from '../../mixin.js';
	export default {
		mixins: [rowlistAndColumnlist],
		name: 'columnlist',
		// computed: {
		// 	...mapState('publicData', ['accountList']),
		// },
		data(){
			return {
				
			}
		},
		// onShow(){
		// 	this.storeEditAccount(null);
		// 	this.storeEditAccountIndex(-1);
		// },
		methods: {
			// ...mapActions('rowListData', ['storeEditAccount', 'storeEditAccountIndex']),
			// operateAccount(e){
			// 	this.storeEditAccount(this.accountList.filter((item, index)=>{
			// 		if(item._id === e.currentTarget.id){
			// 			this.storeEditAccountIndex(index);
			// 			return true;
			// 		}
			// 	})[0]);
			// 	switch(e.target.id){
			// 		case 'payments':
			// 			this.gotoPayments();
			// 			break;
			// 		case 'edit':
			// 			this.gotoEdit();
			// 			break;
			// 	}
			// },
			// 跳转到增添收支页面
			// gotoPayments(){
			// 	uni.navigateTo({
			// 		url: '/pages/payments/payments'
			// 	})
			// },
			gotoRowlist(){
				uni.redirectTo({
					url: '/pages/rowlist/rowlist'
				})
			},
			// gotoEdit(){
			// 	uni.navigateTo({
			// 		url: '/pages/edit/edit'
			// 	})
			// }
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.columnlist{
		width: 100vw;
		height: 100vh;
		position: relative;
		background-color: #3a3a3a;
		overflow: scroll;
		color: #fff;
		.iconBox{
			z-index: 10;
			position: fixed;
			height: 90rpx;
			box-sizing: border-box;
			left: 0rpx;
			right: 0rpx;
			background-color: #3a3a3a;
			.toggleIcon{
				width: 70rpx;
				height: 70rpx;
				margin-left: 20rpx;
				margin-top: 20rpx;
				display: inline-block;
				background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAXtJREFUaEPtmcFNgzEMhb/HAhxgALoEV2ACRgAkLnBAbEARA3DkSGfoArQnxqCcETMYRcpfRVVBcv6qoa1zrGL7t99z4teIDV/a8O8nEmiNYCDwbxEwsyPgAbh0fuQMGEl6LO3M7AZ4Ag6c/sbAtaSvZXa/UsjM3oBTZ7By+5mkSfrBzJKf5K92jSWdexOw2mjZbtihYGYJyWEff5KWFvsvBCKBQKDgXFCoogGjicuiBYWCQnGR7eBN/AGkibR2XUka5WHuHniudQR8Szr0DnNpjH6tDDqTNOhszWwPeAeOK/3dSnpxJZArlxC48AZd1ALZV0riDth3+pt2Y7k7AWegJtu3WxNnJXXiLO0nMJGUpOV85T5YH4VWoKIGXRJNmtjM+iqy5sdo3wRinI5x2nn6LG4PCgWFgkL5D94VXIqEqK+gU5xCO38KJTnpfZ0pi1ZOo00eOJKcTEnUvNLM+V/o4vU+MVU0bROT7ZaUTUrqDBoIOAu28u0bj8APYc8/QA5WEU8AAAAASUVORK5CYII=);
				background-size: cover;
			}
		}
		.listArea{
			margin-top: 90rpx;
			width: 100vw;
			height: 100%;
			display: flex;
			flex-direction: row;
			.time{
				width: 35vw;
				height: 100%;
				padding-left: 20rpx;
				font-size: 32rpx;
				.timeItem{
					box-sizing: border-box;
					border-right: 8rpx solid #fff;
					display: flex;
					flex-direction: column;
					justify-content: center;
					height: 20%;
					margin-right: 20rpx;
					margin-bottom: 20rpx;
					position: relative;
				}
				.timeItem::after{
					content: '';
					width: 20rpx;
					height: 20rpx;
					border-radius: 50%;
					background-color: #fff;
					position: absolute;
					right: -15rpx;
					top: 50%;
				}
			}
			.account{
				width: 70vw;
				height: 100%;
				padding-right: 20rpx;
				.accountContent{
					height: 20%;
					border-radius: 20rpx;
					background-color: #fff;
					overflow: hidden;
					margin-top: 20rpx;
					.accountImg{
						height: 70%;
						width: 100%;
					}
					.description{
						box-sizing: border-box;
						padding: 0rpx 20rpx;
						color: #000;
						display: flex;
						justify-content: space-between;
						.editIcon{
							width: 60rpx;
							height: 60rpx;
							background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAllJREFUaEPtWottwjAQPTYpm5RJWja4DQob3AaFScom7SatHvJFjmMSx7lzCq0lJERs5713tu9jNnTnbXPn+OmxCTDzGxE9h89SY30R0V5ELiUTMfMTEb0Q0SsRnYjoLCKYo9eyFgiDP4gIk6ANBpaAyPQpIhDe/5mMzwpwiwDAQ/mTiOwrwVYNS8BD+WOwxCEI2RNhQICZYbJ3IrqIyK4KReWgFHwsXljOINETNUcA6x4dwRQKNGlj4BUAM1+XlYhs9bccAagPK+xKN9xShoXgVdhJCzQlUAhelzW06gm7qgWWggeb1QhYgF+NgBX4VQhYgm9OwBp8UwIe4JsR8ALfhIAneHcC3uBdCbQA70agFXgXAi3BmxNoDd6UgDd4ZkaWeExDfLNgLrwAaSjaNk3Ao0xvEBJP5RPR2IOIIMXsmgmBBBwmRwKOuP1aDFgCPhnvRgCpHioYKACgFAJLXEmE70iSZiuvMrtaIC0ChL0AwEpCSzPVKao3ge9UXWYGeJBYDN51CTGz5s9doh2VP3QvFBWzxjayiwXiY1NENplq3mDDTZ02t557Eeiqd2HDopaEhtonVLcqR8anmM0pFNY4CMQNgOFozIth5hZInBZImC2X3DIyJZA4pVkl81+xB6IjEidPz63XApwaZ2qBqZd5PP8n4KHqnDn/nAW0Dl8dfM1Rt6RvZIHBpUsuH0AgBifV/IppJJRQrz9IlHIEEEFqOOzqoKbUT0LzrKCtr1mnMMfPNRTXqLbL8OJON2/qo4tmq4vuOeC1Lzz9qMN87L8a1EjWeszdW+AH2ddmT55EaPUAAAAASUVORK5CYII=);
							background-size: cover;
						}
					}
				}
				.addAccount{
					height: 20%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					text-align: center;
					border: 1rpx dashed #fff;
					border-radius: 20rpx;
					.addMark{
						font-size: 80rpx;
					}
					.explain{
						font-size: 40rpx;
					}
				}
			}
		}
	}
</style>
