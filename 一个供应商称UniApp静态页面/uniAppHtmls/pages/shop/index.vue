<template>
	<view class="stateContainer">
		<ms-tabs :list="list" @input="input" :itemColor="itemColor" :lineColor="itemColor" v-model="active"></ms-tabs>
		<view class="Division heiher">
		</view>
		<view class="storeInfo"  v-show="active==0">		
			<view class="textAreacontainer">
				<view class="title">
					公司描述
				</view>
				 <textarea @blur="bindTextAreaBlur"  maxlength="500"
				 placeholder="请输入我的服务内容，不要超过5000字" auto-height class="textAreaContent" />
				            </textarea>
			</view>
			<view class="Division heiher">
			</view>
			<view class="textAreacontainer">
				<view class="title">
					公司描述
				</view>
				<view class="text-img flex">
					 <image src="/static/images/upLoad_icon.png" class="upImg"></image>
					<view class="text">
										 建议图片大小比为：1500*180像素，文
										 件大小不要超过1M；文件格式为jpg、
										 jpeg或png
					</view>
				</view>
				
			
			</view>
		</view>
		<view class="setIndex" v-show="active==1">
			<view class="topbar fs12">
				店铺首页商品<br/>
				在店铺首页，可最多显示5个区域的商品，每个区域请输入标题，
				每个区域中最多有4个商品。
			</view>
			<view class="Division ">
			</view>
			<view class="ceil flex">
				<view class="flex_item_auto">
					区域1
				</view>
				<view  class="right_content">	测试区域1</view>
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
					<view class="">
						单价/优惠价：120.00/120.00
					</view>
					<view class="">
						优惠说明：说明内容
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
						货期：现货
					</view>
					<view class="">
						在售：是
					</view>
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>
	import msTabs from '../../components/ms-tabs/ms-tabs';
	export default{
		data:()=>{
			return {
				list:[{title:"店铺信息"},{title:"公司首页配置"}],
				active:0,
				itemColor:"#0495D2"
			}
		},
		methods:{
			input:(key)=>{
				
			},
			bindTextAreaBlur:function(text){
				console.log(text.detail.value)
			}
		},
		components:{
			msTabs
		}
	}
</script>

<style scoped>
	.orderDes{
		padding: 16rpx 0rpx 16rpx 0rpx;
		background:rgba(247,247,247,1);
		font-size:24rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:rgba(41,54,83,1);
		line-height:34rpx;
		display: flex;
		margin-left: 34rpx;
		margin-right: 32rpx;
	}
	.leftDes{
		width: 400rpx;
	}
	.ceil{
		height: 100rpx;
		padding: 0rpx 34rpx;
		line-height: 100rpx;
		font-size:26rpx;
		border-bottom:1px solid rgba(249,249,249,1);
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
	.fs12{
		font-size: 24rpx;
	}
	.topbar{
		padding: 28rpx 24rpx 22rpx 38rpx;
	}
	.upImg{
		width: 216rpx;
		height: 216rpx;
	}
	#tab_list{
		
	}
	.textAreacontainer{
		padding: 28rpx 34rpx;
	}
	.textAreaContent{
		/* border: 1px solid #CCCCCC; */
		width: 100%;
		min-height: 600rpx;
		margin-top: 38rpx;
		font-size: 22rpx;
		color: #B3C1C8;
	}
	.Division{
		width: 100%;
		height: 2rpx;
		background:rgba(249,249,249,1);
	}

	.Division.heiher{
		width: 100%;
		height: 8rpx;
		background:rgba(249,249,249,1);
	}

	.stateContainer {
		
	}
	.description{
		font-size: 24rpx;
		line-height: 50rpx;
	
	}
		
	.flex{
		display: flex;
	}
	.text-img{
		margin-top: 28rpx;
	}
	.title{
		font-size:24rpx;
	}
	.text{
		width:416rpx;
		height:102rpx;
		font-size:24rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:rgba(4,149,210,1);
		line-height:34rpx;
		margin-left: 36rpx;
	}

</style>
