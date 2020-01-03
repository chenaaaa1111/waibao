<template>
	<view class="baseInfoContainer">
		<view class="ceil flex fcblue bd_top">
			以下信息用于退履约保证金，请认真填写。
		</view>
		<view class="ceil flex">
			<view class="flex_item_auto">
				收款方名称
			</view>
			<view  class="right_content">	测试公司.cn</view>
		</view>
		<view class="ceil flex">
			<view class="flex_item_auto">
				收款方户名（公司名称）
			</view>
			<view  class="right_content">	ptcsgs@caas.cn</view>
		</view>
		<view class="ceil flex">
			<view class="flex_item_auto">
				开户银行支行名称
			</view>
			<view  class="right_content">	ptcsgs@caas.cn</view>
		</view>
		<view class="ceil flex">
			<view class="flex_item_auto">
				银行账号
			</view>
			<view  class="right_content">	ptcsgs@caas.cn</view>
		</view>
		<view class="ceil flex">
			<view class="flex_item_auto">
				开户行大额行号
			</view>
			<view  class="right_content">履约保证金</view>
		</view>
		
		
	</view>
</template>

<script>
	import ssUploadImage from '@/components/ss-upload-image/ss-upload-image.vue'
	export default {
		data:()=>({
			url:''
		}),
		components:{
			ssUploadImage
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
