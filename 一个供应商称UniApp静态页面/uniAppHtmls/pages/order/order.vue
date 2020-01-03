<template>
	<view>
		<view class="orderList">
			<view class="orderItem">
				<view class=" flex">
					<view class="orderInfo">
						<view class="title">
							商品的名称商品的名称商品的名称商品的名称商
							品的名称商品的名称
						</view>
						<view class="idInfo">
							ID：123456
						</view>
					</view>
				</view>
				<view class="orderDes">
					<view class="leftDes">
						<view class="">
							货号：123221233
						</view>
						<view class="">
							品牌：123221233
						</view>
						<view class="">
							1级/2级分类：实验试剂/试剂盒
						</view>
					</view>
					<view class="rightDes">
						<view class="">
							包装单位：个
						</view>
						<view class="">
							规格：100ml
						</view>
						<view class="">
							热销：--
						</view>
					</view>
				</view>
				<view class="bottomButtons">
					<button class="grounding" plain="true" @click="open('up')">更多</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapMutations,
		mapState
	} from 'vuex';
	export default {
		data() {
			return {}
		},
		components: {},
		computed: {
			...mapState(['hasLogin', 'userInfo'])
		},
		onLoad() {
			if (!this.hasLogin) {
				uni.navigateTo({
					url: '/pages/login/index?path=pages/order/order'
				})
			}
		},
		methods: {
			imageError: function(e) {

			},

			mounted() {
				uni.setNavigationBarTitle({
					title: "标准商品库"
				})
			}
		},
	}
</script>

<style scoped>
	.popuconfirm {}

	.uni-popup__wrapper-box {
		background: #fff;
	}

	.imgLeft {
		width: 106rpx;
		height: 106rpx;
	}

	.orderList {
		padding: 20rpx 34rpx;
	}

	.flex {
		display: flex;
	}

	.orderItem {
		border-top: 1rpx solid rgba(247, 247, 247, 1);
		border-bottom: 1rpx solid rgba(247, 247, 247, 1);
		padding: 18rpx 0;
	}

	.orderInfo {
		width: 252px;
		height: 34px;
		font-size: 12px;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: rgba(41, 54, 83, 1);
		line-height: 17px;
		margin-left: 20rpx;
	}

	.idInfo {
		margin-top: 6rpx;
	}

	.orderDes {
		padding: 14rpx 52rpx 14rpx 52rpx;
		background: rgba(247, 247, 247, 1);
		font-size: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: rgba(41, 54, 83, 1);
		line-height: 34rpx;
		display: flex;
		margin-top: 40rpx;
	}

	.leftDes {
		width: 400rpx;
	}

	.grounding {
		width: 120rpx;
		height: 64rpx;
		line-height: 64rpx;
		border-radius: 6rpx;
		font-size: 24rpx;
		display: inline-block;
		border: 2rpx solid rgba(4, 149, 210, 1);
		color: rgba(4, 149, 210, 1);
	}

	.undercarriage {
		width: 120rpx;
		height: 64rpx;
		line-height: 64rpx;
		font-size: 24rpx;
		display: inline-block;
		border-radius: 6rpx;
		color: rgba(109, 114, 120, 1);
		border: 1px solid rgba(109, 114, 120, 1);
		margin-left: 20rpx;
	}

	.bottomButtons {
		text-align: right;
		margin-top: 24rpx;
	}
</style>
