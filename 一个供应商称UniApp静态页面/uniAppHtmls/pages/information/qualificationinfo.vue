<template>
	<view class="qualificationContainer">
		<view class="des">
			具有的技术服务资质<br />
			如果所列资质与贵公司实际资质不符，请联系平台调整<br />
			(服务热线：400-820-0479)。
		</view>
		<view class="flex fs12 ">
			<view class="flexItem fcgray">
				一级资质
			</view>
			<view class="flexItem fcgray txcenter">
				一级资质
			</view>
			<view class="flexItem fcgray txright">
				技术服务广告
			</view>
		</view>
		<view class="flex fs12">
			<view class="flexItem ">
				试验服务
			</view>
			<view class="flexItem txcenter ">
				仪器共享服务
			</view>
			<view class="flexItem  txright">
				<button type="" class="viewbutton">查看</button>
			</view>
		</view>
	</view>
</template>

<script>
</script>
<style>
	body{
		background:#eee;
	}
</style>
<style scoped>
	
	.flex {
		display: flex;
		margin: 26rpx;
	}
	.txright{
		text-align: right;
	}
	.qualificationContainer {
		padding: 28rpx 38rpx;
		font-size: 24rpx;
		background: #fff;
	}

	.flexItem {
		flex: 1;
		
		height: 70rpx;
		line-height: 70rpx;
	}
	.txcenter{
		text-align: center;
	}
	.fs12 {
		font-size: 24rpx;
	}

	.fcgray {
		color: rgba(109, 114, 120, 1);
	}

	.viewbutton {
		width: 120rpx;
		height: 64rpx;
		border-radius: 6rpx;
		border: 2rpx solid rgba(4, 149, 210, 1);
		padding: 0;
		font-size: 24rpx;
		line-height: 64rpx;
		color: #0495D2;
		margin-left: 74rpx;
	}
</style>
