<template>
	<view class="AnnouncementContainer">
		<view class="announcementList">
			<view class="AnnounItem" @click="goItem">
				<view class="AnnounTitle">
					供应商控制台改版公告
				</view>
				<view class="AnnounDate">
					2019-12-13
				</view>
			</view>
			<view class="AnnounItem" @click="goItem">
				<view class="AnnounTitle">
					供应商控制台改版公告
				</view>
				<view class="AnnounDate">
					2019-12-13
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				url:"/platform/app/notice/getListNotice"
			}
		},
		mounted() {
			var data={
				type:1,
				status:1
			}
			// this.$http.request.get(this.url,data).then((res)=>{
				
			// 	console.log(res);
			// })
		},
		methods:{
			goItem(id){
				uni.navigateTo({
				    url: '/pages/announcement/item?id='+id
				});
			}
		}
	}
</script>

<style scoped>
	 .AnnounTitle{
		 font-size:26rpx;
		 color:rgba(109,114,120,1);
	 }
	 
	 .AnnounDate{
		 font-size: 22rpx;
		 color:rgba(179,193,200,1);
		 margin-top: 34rpx;		 
		 }
	.AnnouncementContainer{
		
	}
	.AnnounItem{
		padding:32rpx 32rpx 26rpx 32rpx ;
		height:160rpx ;
		border-top: 1px solid #eee;
	}
</style>
