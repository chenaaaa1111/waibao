<template>
	<view class="baseInfoContainer">
		<view class="moreLine fcblue bd_top bd_bd">
			以下信息为邮寄发票等所用，请认真填写可收到快
			递的联系人信息及地址。
		</view>
		<view class="ceil flex">
			<view class="flex_item_auto">
				联系人姓名
			</view>
			<view  class="right_content">王宝宝</view>
		</view>
		<view class="ceil flex">
			<view class="flex_item_auto">
				联系人电话
			</view>
			<view  class="right_content">	18888886666</view>
		</view>
		<view class="ceil flex">
			<view class="flex_item_auto">
				联系人电话
			</view>
			<view  class="right_content">	ptcsgs@caas.cn</view>
		</view>
		<view class="ceil flex">
			<view class="flex_item_auto">
				详细地址
			</view>
			<view  class="right_content">	ptcsgs@caas.cn</view>
		</view>		
	</view>
</template>

<script>
	export default {
		data:()=>({
			url:''
		}),
		components:{
			
		},
		methods:{
		
		}
	}
</script>

<style scoped>
	.moreLine{
		padding: 32rpx 58rpx 22rpx 58rpx;
		font-size: 30rpx;
	}
	.fcblue{
		color: #0495D2;
	}
	.bd_top{
		border-top: 1px solid #E8F0F4;
	}
	.bd_bd{
		border-bottom: 1px solid #E8F0F4;
	}
	.container{
		padding: 12rpx 34rpx;
		font-size:26rpx;
		border-bottom:1px solid #E8F0F4;
		margin-bottom: 60rpx;
	}
	.ceil{
		height: 100rpx;
		padding: 0rpx 34rpx;
		line-height: 100rpx;
		font-size:26rpx;
		border-bottom:1px solid #E8F0F4;
	}
	.flex{
		display: flex;
	}
	.flex_item_auto{
		flex: 1;
	}
	.right_content{
		width: 200rpx;
		color:rgba(109,114,120,1);
		font-size: 26rpx;
	
	}
	.uploadView{
		margin-top: 30rpx;
	}
</style>
