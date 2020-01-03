<template>
	<view class="baseInfoContainer">
		<view class="ceil flex bd_top">
			<view class="flex_item_auto">
				纳税人
			</view>
			<view  class="right_content" style="color:#000">	小规模纳税人</view>
		</view>
		<view class="ceil flex">
			<view class="flex_item_auto">
				发票抬头
			</view>
			<view  class="right_content">	ptcsgs@caas.cn</view>
		</view>
		<view class="ceil flex">
			<view class="flex_item_auto">
				纳税人识别号
			</view>
			<view  class="right_content">	ptcsgs@caas.cn</view>
		</view>
		<view class="ceil flex">
			<view class="flex_item_auto">
				联系人邮箱
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
	.fcblue{
		color: #0495D2;
	}
	.bd_top{
		border-top: 1px solid #E8F0F4;
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
