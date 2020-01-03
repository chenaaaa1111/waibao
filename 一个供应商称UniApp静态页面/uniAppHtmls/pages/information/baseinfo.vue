<template>
	<view class="baseInfoContainer">
		<view class="ceil flex">
			<view class="flex_item_auto">
				基本信息
			</view>
			<view  class="right_content">	ptcsgs@caas.cn</view>
		</view>
		<view class="ceil flex">
			<view class="flex_item_auto">
				公司名称
			</view>
			<view  class="right_content">	ptcsgs@caas.cn</view>
		</view>
		<view class="ceil flex">
			<view class="flex_item_auto">
				联系人
			</view>
			<view  class="right_content">	ptcsgs@caas.cn</view>
		</view>
		<view class="ceil flex">
			<view class="flex_item_auto">
				负责人/法人
			</view>
			<view  class="right_content">	ptcsgs@caas.cn</view>
		</view>
		<view class="ceil flex">
			<view class="flex_item_auto">
				联系人手机/电话
			</view>
			<view  class="right_content">履约保证金</view>
		</view>
		<view class="ceil flex">
			<view class="flex_item_auto">
				履约保证金
			</view>
			<view  class="right_content">	ptcsgs@caas.cn</view>
		</view>
		<view class="ceil flex">
			<view class="flex_item_auto">
				QQ
			</view>
			<view  class="right_content">	ptcsgs@caas.cn</view>
		</view>
		<view class="ceil flex">
			<view class="flex_item_auto">
				公司地址
			</view>
			<view  class="right_content">	ptcsgs@caas.cn</view>
		</view>
		<view class="ceil flex">
			<view class="flex_item_auto">
				服务电话
			</view>
			<view  class="right_content">	ptcsgs@caas.cn</view>
		</view>
		<view class="ceil flex">
			<view class="flex_item_auto">
				销售区域
			</view>
			<view  class="right_content">ptcsgs@caas.cn</view>
		</view>
		<view class="ceil flex">
			<view class="flex_item_auto">
				资质文件
			</view>
			<view  class="right_content">ptcsgs@caas.cn</view>
		</view>
		<view class="container">
			<view class="flex_item_auto">
				logo
			</view>
			<view  class="uploadView">
				<ssUploadImage :url="url" :on-success="upSuceess">				
				</ssUploadImage>
			</view>
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
			naviurl:(url)=>{
				uni.navigateTo({
				    url: url
				});
			},
			upSuceess:(file)=>{
				console.log(file);
			}
		}
	}
</script>

<style scoped>
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
