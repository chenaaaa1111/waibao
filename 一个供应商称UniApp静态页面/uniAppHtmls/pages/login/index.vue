<template>
	<view class="loginContainer">
		<view class="bgContainer">
			<image src="../../static/images/loginbg.png" class="bg_user"></image>
		</view>

		<view class="logo">
			logo
		</view>
		<view class="componeName">
			科研物资采购平台
		</view>
		<view class="formArea">
			<form @submit="toLogin">
			<view class="uni-form-item uni-column inputGroup">
				<image src="../../static/images/user_icon.png" class="login_icons"></image>
				<input name="userName" data-key="userName" class="uni-input" focus placeholder="请输入账号" />
			</view>
			<view class="uni-form-item uni-column inputGroup">
				<image src="../../static/images/pass_icon.png" class="login_icons"></image>
				<input name="passwd" data-key="passwd" class="uni-input" placeholder="请输入密碼" />
			</view>
			<view class="uni-form-item uni-column inputGroup">
				<image src="../../static/images/safe_icon.png" class="login_icons"></image>
				<input name="imageCode" data-key="imageCode" class="uni-input" placeholder="请输入图形验证码" />
				<image src="../../static/images/code_img.png" class="code_img"></image>

			</view>
			<button form-type="submit" type="primary" class="loginButton" :disabled="logining">登录</button>
			</form>
		</view>

	</view>
</template>

<script>
	import {
		mapState,mapMutations
	} from 'vuex';

	export default {
		data() {
			return {
				userName: '',
				passwd: '',
				imageCode: '',
				logining: false,
				url:{
					loginUrl: '/platform/app/login.lf'
				}
			}
		},
		computed:{
			...mapState(['hasLogin'])
		},
		methods: {
			...mapMutations(['login']),
			inputChange(e) {
				const key = e.currentTarget.dataset.key;
				this[key] = e.detail.value;
			},
			navBack() {
				uni.navigateBack();
			},
			toRegist() {
				this.$api.msg('去注册');
			},
			toLogin(e) {
				this.logining = true;
				const {
					userName,
					passwd,
					imageCode
				} = this;
				/* 数据验证模块
				if(!this.$api.match({
					mobile,
					password
				})){
					this.logining = false;
					return;
				}
				*/
				const sendData = {
					userName,
					passwd,
					imageCode,
				};
				
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				var formdata = e.detail.value

				this.$http.request.post(this.url.loginUrl, formdata).then(res => {
					if(res.success){
						this.login(res);
						uni.navigateBack();
					}else{
						this.$api.msg(res.prompt);
						this.logining = false;
					}
					
				})
			}
		}
	}
</script>

<style scoped>
	.loginButton {
		margin-top: 80rpx;
		background: #0495D2;
		font-size: 34rpx;
		height: 90rpx;
		line-height: 90rpx;
	}

	.formArea {
		padding: 48rpx 78rpx 78rpx 78rpx;
	}

	.bg_user {
		width: 750rpx;
		height: 440rpx;
	}

	.bgContainer {
		position: relative;
	}

	.logo {
		margin: 0 auto;
		width: 200rpx;
		height: 200rpx;
		line-height: 200rpx;
		text-align: center;
		position: absolute;
		left: 50%;
		background: #fff;
		transform: translate(-50px, 0rpx);
		margin-top: -100rpx;
		box-shadow: 6rpx 10rpx 18px 0rpx rgba(4, 149, 210, 0.18);
	}

	.componeName {
		text-align: center;
		color: #0495D2;
		font-size: 34rpx;
		margin-top: 166rpx;
		margin-bottom: 40rpx;
		text-shadow: 0px 4rpx 8rpx rgba(4, 149, 210, 0.23);
	}

	.loginContainer {}

	.login_icons {
		width: 50rpx;
		height: 50rpx;
		display: inline-block;
		vertical-align: middle;
	}

	.inputGroup {
		display: flex;
		border-bottom: 1px solid #ccc;
		padding-bottom: 20rpx;
		padding-top: 40rpx;
	}

	.uni-input {
		margin-left: 30rpx;
		flex: 1;
		font-size: 28rpx;
		padding-top: 10rpx;
	}

	.code_img {
		width: 200rpx;
		height: 60rpx;
	}
</style>
