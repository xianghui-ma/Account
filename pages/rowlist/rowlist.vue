<template>
	<view class="rowlist">
		<text class="toggleIcon" @click="gotoColumnlist"></text>
		<swiper class="accountList" previous-margin="75rpx" next-margin="75rpx">
			<swiper-item class="createAccount">
				<view class="content" @click="gotoEdit">
					<view class="slogan">
						<text>旅行中的每一笔开支\n都有独特的意义！</text>
					</view>
					<view class="addMark">+</view>
					<view class="explain">创建一个新帐本</view>
				</view>
			</swiper-item>
			<swiper-item class="listItem" v-for="account in accountList" :key="account._id" :id="account._id" @click="operateAccount">
				<view class="accountContent">
					<image :src="account.cover" mode="aspectFill" class="accountImg" id="payments"/>
					<view class="accountTitle"><text>{{account.accountTitle}}</text></view>
					<view class="accountDate"><text>{{`${account.date.split('T')[0]}`}}</text></view>
					<view class="editAccount">
						<text class="editIcon" id="edit"></text>
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	// import {mapState, mapActions} from 'vuex';
	import {rowlistAndColumnlist} from '../../mixin.js';
	export default {
		mixins: [rowlistAndColumnlist],
		// computed: {
		// 	...mapState('publicData', ['accountList']),
		// },
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
			// 跳转到列列表页面
			gotoColumnlist(){
				uni.redirectTo({
					url: '/pages/columnlist/columnlist'
				})
			},
			// 跳转到编辑页
			// gotoEdit(){
			// 	uni.navigateTo({
			// 		url: '/pages/edit/edit'
			// 	})
			// },
			// 跳转到增添收支页面
			// gotoPayments(){
			// 	uni.navigateTo({
			// 		url: '/pages/payments/payments'
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
	.rowlist{
		width: 100vw;
		height: 100vh;
		background-color: #3a3a3a;
		color: #fff;
		position: relative;
		overflow: hidden;
		.toggleIcon{
			position: absolute;
			width: 70rpx;
			height: 70rpx;
			left: 20rpx;
			top: 20rpx;
			background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAORJREFUaEPtmNENwzAIRO+G6FrtEh2rSzRrdQj61Y9IjpVikE10+Q5nfA/LGKL4x+L5QxuYTVAEliVgZjcALwD3yUluAJ4kP608DkvIzN4LJP/LeSP5+HcDNtn53fIkm2b3CJTfQPkSqn2IV6r/Xi66yGaTEgERGHRAJTRo4HD4dQmonR4ujp2A2ulYPx1qnveA2mmH0a0Q35s4aPF0meveA+nWBS0gAkFGumVEwG1dUKAIBBnplumNFmsPtjSddhdFO9DTjWo6HQjB9SKrfYgD3UuV0kWWau8JcRE4YVLqL+UJfAG6mloxaz6BXgAAAABJRU5ErkJggg==);
			background-size: cover;
		}
		.accountList{
			margin-top: 90rpx;
			height: 85vh;
			.createAccount{
				border-radius: 2%;
				border: 2rpx dashed #fff;
				box-sizing: border-box;
				.content{
					height: 100%;
					text-align: center;
					display: flex;
					flex-direction: column;
					justify-content: center;
					.slogan{
						color: rgba(255, 255, 255, 0.5);
					}
					.addMark{
						font-size: 120rpx;
					}
					.explain{
						font-size: larger;
					}
				}
			}
			.listItem{
				border-left: 20rpx solid transparent;
				.accountContent{
					border-radius: 2%;
					width: 100%;
					height: 100%;
					overflow: hidden;
					background-color: #fff;
					.accountImg{
						height: 70%;
					}
					.accountTitle{
						padding: 20rpx;
						font-weight: bold;
						color: #777;
					}
					.accountDate{
						padding: 20rpx;
						color: #777;
					}
					.editAccount{
						padding: 20rpx;
						display: flex;
						justify-content: flex-end;
						.editIcon{
							width: 60rpx;
							height: 60rpx;
							background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAllJREFUaEPtWottwjAQPTYpm5RJWja4DQob3AaFScom7SatHvJFjmMSx7lzCq0lJERs5713tu9jNnTnbXPn+OmxCTDzGxE9h89SY30R0V5ELiUTMfMTEb0Q0SsRnYjoLCKYo9eyFgiDP4gIk6ANBpaAyPQpIhDe/5mMzwpwiwDAQ/mTiOwrwVYNS8BD+WOwxCEI2RNhQICZYbJ3IrqIyK4KReWgFHwsXljOINETNUcA6x4dwRQKNGlj4BUAM1+XlYhs9bccAagPK+xKN9xShoXgVdhJCzQlUAhelzW06gm7qgWWggeb1QhYgF+NgBX4VQhYgm9OwBp8UwIe4JsR8ALfhIAneHcC3uBdCbQA70agFXgXAi3BmxNoDd6UgDd4ZkaWeExDfLNgLrwAaSjaNk3Ao0xvEBJP5RPR2IOIIMXsmgmBBBwmRwKOuP1aDFgCPhnvRgCpHioYKACgFAJLXEmE70iSZiuvMrtaIC0ChL0AwEpCSzPVKao3ge9UXWYGeJBYDN51CTGz5s9doh2VP3QvFBWzxjayiwXiY1NENplq3mDDTZ02t557Eeiqd2HDopaEhtonVLcqR8anmM0pFNY4CMQNgOFozIth5hZInBZImC2X3DIyJZA4pVkl81+xB6IjEidPz63XApwaZ2qBqZd5PP8n4KHqnDn/nAW0Dl8dfM1Rt6RvZIHBpUsuH0AgBifV/IppJJRQrz9IlHIEEEFqOOzqoKbUT0LzrKCtr1mnMMfPNRTXqLbL8OJON2/qo4tmq4vuOeC1Lzz9qMN87L8a1EjWeszdW+AH2ddmT55EaPUAAAAASUVORK5CYII=);
							background-size: cover;
						}
					}
				}
			}
		}
	}
</style>
