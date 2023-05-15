<template>
	<view class="rowlist">
		<text class="toggleIcon"></text>
		<swiper class="accountList" previous-margin="75rpx" next-margin="75rpx">
			<swiper-item class="createAccount">
				<view class="content">
					<view class="slogan">
						<text>旅行中的每一笔开支\n都有独特的意义！</text>
					</view>
					<view class="addMark">+</view>
					<view class="explain">创建一个新帐本</view>
				</view>
			</swiper-item>
			<swiper-item class="listItem">
				<view class="accountContent">
					<image src="https://mp-931dc76a-090b-4f2c-809b-bafd045c55e6.cdn.bspapp.com/cloudstorage/1cbb2bcc-82bb-4abe-9c4e-9a7acee5e9b1.png" mode="aspectFill" class="accountImg"/>
					<view class="accountTitle"><text>江财一日游</text></view>
					<view class="accountDate"><text>2023-02-21</text></view>
					<view class="editAccount">
						<text class="editIcon"></text>
					</view>
				</view>
			</swiper-item>
			<swiper-item class="listItem">
				<view class="accountContent">
					<image src="https://mp-931dc76a-090b-4f2c-809b-bafd045c55e6.cdn.bspapp.com/cloudstorage/1cbb2bcc-82bb-4abe-9c4e-9a7acee5e9b1.png" mode="aspectFill" class="accountImg"/>
					<view class="accountTitle"><text>江财一日游</text></view>
					<view class="accountDate"><text>2023-02-21</text></view>
					<view class="editAccount">
						<text class="editIcon"></text>
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
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
