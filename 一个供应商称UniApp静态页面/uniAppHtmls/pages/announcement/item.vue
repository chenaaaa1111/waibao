<template>
	<view class="announcementItemContainer">
		<view class="title">
			
		</view>
		<view class="">
			<rich-text :nodes="string"></rich-text>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				string:"<div>这是公告富文本内容</div>",
				// 公告詳情接口，具體地址聯調的時候對下
				url:"/platform/app/notice/getListNotice"
			}
		},
		methods:{
			
		},
		mounted() {
			var data={
				type:1,
				status:1
			}
			// this.$http.request.get(this.url,data).then((res)=>{				
			// 	console.log(res);
			// })
		}	
		
    }
</script>

<style>
	.announcementItemContainer{
		padding: 50rpx 50rpx;
	}
</style>
