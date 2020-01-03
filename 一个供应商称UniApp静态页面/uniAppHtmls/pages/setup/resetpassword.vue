<template>
	<view class="resetContainer">

		<view class="uni-form-item uni-column">
			<view class="input_icons">
				<image src="../../static/images/mima_icon.png" class="mima_icon"></image>
			</view>
			<input class="uni-input" focus placeholder="请输入原密码" />
		</view>
		<view class="uni-form-item uni-column">
			<view class="input_icons">
				<image src="../../static/images/mima_icon.png" class="mima_icon"></image>
			</view>
			<input class="uni-input" focus placeholder="请输入新密码" />
		</view>
		<view class="uni-form-item uni-column">
			<view class="input_icons">
				<image src="../../static/images/mima_icon.png" class="mima_icon"></image>
			</view>
			<input class="uni-input" focus placeholder="再次输入新密码" />
		</view>
		<view class="uni-form-item uni-column subView" >

			<button type="primary" class="submit">确定</button>
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
	.uni-column.subView{
		margin-top: 50rpx;
		}
	.submit {
		width: 600rpx;
		height: 90rpx;
		background: rgba(4, 149, 210, 1);
		border-radius: 46rpx;
		color: #fff;
		
	}

	.mima_icon {
		width: 38rpx;
		height: 44rpx;



	}

	.uni-column {
		width: 600rpx;
		height: 90rpx;
		margin: 30rpx auto 0 auto;
		position: relative;

	}

	.input_icons {
		position: absolute;
		border-right: 1px solid #ccc;
		padding-right: 32rpx;
		left: 40rpx;
		top: 20rpx;

	}

	.uni-column input {
		width: 600rpx;
		height: 90rpx;
		border-radius: 23px;
		border: 1px solid #979797;
		padding-left: 166rpx;
		font-size: 24rpx;
	}
</style>
