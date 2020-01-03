<template>
	<view class="setUpContainer">
		<view class="ceil flex" @click="naviurl('/pages/setup/resetpassword')">
			<view class="flex_item_auto" >
				修改密码
			</view>
			<image src="../../static/images/1-1.png" class="right_icon" ></image>
		</view>
		<view class="ceil flex">
			<view class="flex_item_auto">
				绑定微信
			</view>
			<image src="../../static/images/1-1.png" class="right_icon" ></image>
		</view>
		<view class="ceil flex">
			<view class="flex_item_auto">
				实名认证
			</view>
			<image src="../../static/images/1-1.png" class="right_icon" ></image>
		</view>
		<view class="ceil flex">
			<view class="flex_item_auto">
				关于我们
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
