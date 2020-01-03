<template>
	<view class="infoContainer">
		<view class="ceil flex" @click="naviurl('/pages/information/baseinfo')">
			<view class="flex_item_auto" >
				基本信息
			</view>
			<image src="../../static/images/1-1.png" class="right_icon" ></image>
		</view>
		<view class="ceil flex" @click="naviurl('/pages/information/qualificationinfo')">
			<view class="flex_item_auto">
				技术服务资质信息
			</view>
			<image src="../../static/images/1-1.png" class="right_icon" ></image>
		</view>
		<view class="ceil flex" @click="naviurl('/pages/information/invoice')">
			<view class="flex_item_auto">
				发票信息
			</view>
			<image src="../../static/images/1-1.png" class="right_icon" ></image>
		</view>
		<view class="ceil flex" @click="naviurl('/pages/information/bankinfo')">
			<view class="flex_item_auto">
				银行账户信息
			</view>
			<image src="../../static/images/1-1.png" class="right_icon" ></image>
		</view>
		<view class="ceil flex" @click="naviurl('/pages/information/courier')">
			<view class="flex_item_auto">
				快递地址信息
			</view>
			<image src="../../static/images/1-1.png" class="right_icon" ></image>
		</view>
		<view class="ceil flex" @click="naviurl('/pages/information/account')">
			<view class="flex_item_auto">
				账号管理
			</view>
			<image src="../../static/images/1-1.png" class="right_icon" ></image>
		</view>
	</view>
</template>

<script>
	export default{
		data:()=>({
			
		}),
		methods:{
			naviurl:(url)=>{
				uni.navigateTo({
				    url: url
				});
			}
		}
	}
</script>

<style scoped>
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
	.right_icon{
		width: 22rpx;
		height: 36rpx;
		margin-top: 32rpx;
		font-size: 36rpx;
	}
</style>
