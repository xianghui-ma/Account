<template>
	<view class="detail" :style="{backgroundImage: `url(https://mp-931dc76a-090b-4f2c-809b-bafd045c55e6.cdn.bspapp.com/cloudstorage/1cbb2bcc-82bb-4abe-9c4e-9a7acee5e9b1.png)`}">
		<view class="total">
			<text>总花费(元)\n60</text>
		</view>
		<view class="listArea">
			<view>
				<view class="date">2023-05-17</view>
				<view class="totalmoney">
					<text class="income">支出(元)\n-110</text>
					<text class="outcome">收入(元)\n+50</text>
				</view>
				<view class="list">
					<view v-for="item in paymentList">
						<text>{{item.aymentName}}</text>
						<text>-10</text>
					</view>
					<button class="more">
						显示全部
					</button>
				</view>
			</view>
			<text class="addIcon"></text>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex';
	export default {
		name: 'detail',
		computed: {
			...mapState('paymentsData', ['paymentList']),
		},
		data() {
			return {
				
			};
		},
		created() {
			console.log(this.paymentList);
		}
	}
</script>

<style lang="scss">
	.detail{
		width: 100vw;
		height: 100vh;
		background-repeat: no-repeat;
		background-size: cover;
		.total{
			text-align: center;
			color: #fff;
			font-weight: 400;
			padding-top: 30rpx;
			margin-bottom: 20%;
		}
		.listArea{
			margin: 0rpx 5vw;
			background-color: #fff;
			border-radius: 12rpx;
			text-align: center;
			font-size: 36rpx;
			position: relative;
			padding-bottom: 40rpx;
			.date{
				padding: 20rpx 0rpx;
				font-weight: 600;
			}
			.totalmoney{
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				padding: 0 6%;
				padding-bottom: 20rpx;
				.income{
					color: #fc685b;
					font-size: 36rpx;
					flex-grow: 1;
					border-right: 2rpx solid #aaa;
				}
				.outcome{
					color: #74d573;
					font-size: 36rpx;
					flex-grow: 1;
				}
			}
			.list{
				padding: 0rpx 6%;
				view{
					display: flex;
					justify-content: space-between;
					line-height: 70rpx;
					border-bottom: 1rpx dashed #aaa;
				}
				.more{
					margin-top: 10rpx;
					font-size: 36rpx;
					color: #fff;
					justify-content: center;
					background-color: #EE6C4D;
				}
			}
			.addIcon{
				position: absolute;
				box-shadow: 0rpx 0rpx 80rpx 10rpx #fc685b inset;
				left: 45%;
				bottom: -50rpx;
				display: inline-block;
				width: 80rpx;
				height: 80rpx;
				border-radius: 50%;
				background-repeat: no-repeat;
				background-size: cover;
				background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAApRJREFUaEPtmUtS4zAQQLvNKuES5iQkO8Y1d4DsKDJ3AO4woWaXHIIy7AgnwZcgWeGekm1VMZZktax2PKHQygtL3U/9U0sIRz7wyPWHb4CxLShmgf31RVomyWUFhJAiUAqAaQ1IBQEW6isheJ085Bsp8GiA95vsFpFmADgLUKqooAi3pw/5fcA849feALXicBcjvJlbEMGmL0gwwP7XzxlRuQaAxj0EEOolCvwo55M/z5WrcUcQwP4muyIEpfxQI9gabABBl/HCE8Ed16VYAO/LbI0AV17Jgj9wIbwAjc+/COrGXooD0QkwpvI6QyEmi8nvx62LuhNgt8zeBsg2bAtoiOkqPwsGiM0401X+z+bslhmFaq7/R4KFq3o7LRC7+5IAqka4rGAFiN19tXPCAOAKaCvAbvnjJfBsY3iHNAAAbaerp3lbkAOgv79qAfIAdjcyACTcZwgXUmsiJvN2SjUApKruABawxsFRAdjiwADgBnB7h/vmeD2PVyfMQLYA8KrvOABmIH9FAF4NGMcCLBfiAfh8fpAsBLA5XeWLz7LNLCTUrI8GINUDDAFgO5Walfj6IqWTRPUBUWMQgI/yrH1rcTSHObL4f3W8sG2zxHlI2gKupsYOULuRauR7X15JA7jStrMji7WCJECvllLdNtMJrmMbm6hMUE92tpPOGNBCa4j4jBQDYesBOgtZW1isKw2pvNcCWvgh70W1TM6tHBtAv74IvQd4jeLK+baJ3rvRz5MOYYmujBMNoBZoAjuqRjhMUPjuQUUANIR60EOsrtx7F7tGoeBHjaAs1OWwyhqQJDNCuuxRL6IU13oFxQAHpkQ4r7OD5ZmVoHr/4r6+eKPddZjjTPxf/hGzwFhA3wBj7byW+xerKHNAbE+oBQAAAABJRU5ErkJggg==);
			}
		}
	}
</style>
