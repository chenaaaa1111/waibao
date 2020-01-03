<template>
	<view class="accountContainer bd_bd bd_top">
		<view class="message  ">
			ID : 23223232323
		</view>
		<view class="message ">
			姓名 : 23223232323
		</view>
		<view class="message ">
			账号 : 23223232323
		</view>
		<view class="message ">
			联系方式 : 23223232323
		</view>
		<view class="message ">
			账号状态 : 激活
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
	.accountContainer{
		padding-bottom:34rpx ;
		padding-top: 24rpx;
	}
	.message{
		font-size: 24rpx;
		height: 34rpx;
		line-height: 34rpx;
		padding-left: 32rpx;
		margin-bottom: 4rpx;
	}
	.bd_top{
		border-top: 1px solid #E8F0F4;
	}
	.bd_bd{
		border-bottom: 1px solid #E8F0F4;
	}
	
</style>
