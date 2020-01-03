<template>
	<view>
		<view class="topSwiper">
			<specialBanner  :banner-list="bannerList" :swiper-config="swiperConfig"></specialBanner >
		</view>
		<view class="Division">	
		</view>
		<view class="centerCard">
			<view class="flexList">
				<view class="flexItem">
					<view class="flex">
						<view class="topText">
							<view class="textTitle">
								32
								
							</view>
							<view class="textdes">
								等待确认的订单
							</view>
						</view>
						<view class="rightIcon">
							<view class="textImg">
								<image class="img_icon"  src="../../static/images/1-daiquerendingdan.png"
								 @error="imageError"></image>
							</view>
						</view>
					</view>
					<view class="flexRight">
						
					</view>
				</view>
				<view class="flexItem">
					<view class="flex">
						<view class="topText">
							<view class="textTitle">
								32								
							</view>
							<view class="textdes">
								等待发货的订单
							</view>
						</view>
						<view class="rightIcon">
							<view class="textImg">
								<image class="img_icon"  src="../../static/images/1-daifahuodingdan.png"
								 @error="imageError"></image>
							</view>
						</view>
					</view>
					<view class="flexRight">
						
					</view>
				</view>
				<view class="flexItem">
					<view class="flex">
						<view class="topText">
							<view class="textTitle">
								32
								
							</view>
							<view class="textdes">
								竞标中
							</view>
						</view>
						<view class="rightIcon">
							<view class="textImg">
								<image class="img_icon"  src="../../static/images/1-jingbiaozhong.png"
								 @error="imageError"></image>
							</view>
						</view>
					</view>
					<view class="flexRight">
						
					</view>
				</view>
				<view class="flexItem">
					<view class="flex">
						<view class="topText">
							<view class="textTitle">
								32
								
							</view>
							<view class="textdes">
								技术服务报价中
							</view>
						</view>
						<view class="rightIcon">
							<view class="textImg">
								<image class="img_icon"  src="../../static/images/1-baojiazhong.png"
								 @error="imageError"></image>
							</view>
						</view>
					</view>
					<view class="flexRight">
						
					</view>
				</view>
			</view>
		</view>
		<view class="Division">
		</view>
		<view class="notice flex" @click="goAnnce">
			<view class="leftTitle">
				<view class="titleTop">
					最新
				</view>
				<view class="titledes">
					公告
				</view>
				<view class="after">
					
				</view>
			</view>
			<view class="rightContent">
				<view class="ceil" >
					2019-12-03 供应商控制台改版公告
				</view>
				<view class="ceil">
					2019-12-03 供应商控制台改版公告
				</view>
			</view>
			<image   src="../../static/images/1-1.png" class="back_icon"
			           @error="imageError"></image>
		</view>
		<view class="Division">
		</view>
		<view class="Indexcontainer">
			 <image   src="../../static/images/1-touxiang.png" class="avoitor"
                        @error="imageError"></image>
						<view class="helloMess">
							您好，这里是供应商名字有限公司
						</view>
			<view class="comPonessMessage">
				<view class="">
					上次登录地 : 上海市
				</view>
				<view class="">
					上次登录IP : 192.188.165.11
				</view>
				<view class="">
					上次登录时间 : 2019-10-02 10:20:21
				</view>
			</view>
		</view>
		<view class="Division">
		</view>
	</view>
</template>

<script>
	import specialBanner from '../../components/EtherealWheat-banner/specialBanner.vue';
	import {
		mapState
	} from 'vuex';

	export default {
		computed: {
			...mapState(['hasLogin'])
		},
		components:{
			specialBanner
		},
		methods:{
			  imageError: function(e) {
			            console.error('image发生error事件，携带值为' + e.detail.errMsg)
			  },
			  goAnnce(){			  
				  uni.navigateTo({
				      url: '/pages/announcement/index'
				  });
			  }
		},
		data() {
		        return {
		             bannerList: [{
		                        // picture: 'http://image.mishi.cn/r/yry_h5_test/detail/3_1535359279285.png',
		                        title: '10900008',
		                        description: '累计结算订单总金额（元）',
		                        path: ''
		                    }, {
		                        // picture: 'http://image.mishi.cn/r/yry_h5_test/detail/2_1535359240426.png',
		                        title: '10900008',
		                        description: '累计结算订单总数',
		                        path: ''
		                    }, {
		                        // picture: 'http://image.mishi.cn/r/yry_h5_test/detail/1_1535359204228.png',
		                        title: '10900008',
		                        description: '累计结算费用（元）',
		                        path: ''
		                    }],
		                    swiperConfig: {
		                        indicatorDots: false,
		                        indicatorColor: 'rgba(255, 255, 255, .4)',
		                        indicatorActiveColor: 'rgba(255, 255, 255, 1)',
		                        autoplay: false,
		                        interval: 3000,
		                        duration: 300,
		                        circular: true,
		                        previousMargin: '58upx',
		                        nextMargin: '58upx'
		                    },
							url:{
								mainUrl:""
							}
							
		                
		        }
		    },
			mounted() {
				uni.setNavigationBarTitle({
						title:"有限公司"
				})
			}
	}
</script>

<style lang="scss">
	.back_icon{
		width: 24rpx;
		height: 24rpx;
		margin-top:40rpx;
	}
	.helloMess{
		font-size:28rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:rgba(41,54,83,1);
		line-height:40rpx;
		display: inline-block;
		vertical-align: middle;
		margin-left: 38rpx;
	}
	.avoitor{
		width: 98.24rpx;
		height: 98.24rpx;
		vertical-align: middle;
	}
	.Indexcontainer{
		padding:28rpx 52rpx 50rpx 52rpx ;
	}
	.topSwiper{
		padding-bottom: 18rpx;
	}
	.topText{
		width: 240rpx;
	}
	.centerCard{
		
	}
	.textTitle{
		font-size: 40rpx;
		color: #0495D2;
		
	}
	.textdes{
		font-size: 24rpx;
		color: #7286B1;
	}
	.img_icon{
		width: 68rpx;
		height: 74rpx;
	}
	.textImg img{
		max-width: 100%;
	}
	.uni-bg-red{
		background: #FA436A;
	}
	.uni-bg-green{
		background: #4CD964;
	}
	.uni-bg-blue{
		background: #4399FC;
	}
	.banner-container .desc-wrap {
		border-radius: 10rpx;
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    display: flex;
	    flex-wrap: wrap;
	    padding: 12px 33px 0;
	    align-items: center;
	    justify-items: center;
	    justify-content: space-around;
	    align-content: space-evenly;
	}
	.Division{
		width: 100%;
		height: 8rpx;
		background: #EEEEEE;
	}
	.flexList{
		padding: 34rpx;
		display: flex;
		flex-wrap: wrap;
		// padding: 12px 33px 0;
		align-items: center;
		justify-items: center;
		justify-content: space-around;
		align-content: space-evenly;
	}
	.flexItem{
		width: 330rpx;
		height: 150rpx;
		background:rgba(255,255,255,1);
		box-shadow:3px 5px 9px 0px rgba(4,149,210,0.18);
		margin-bottom: 18rpx;
		padding: 18rpx;
	}
	.flex{
		display: flex;
	}
	.notice{
		height: 166rpx;
		padding: 26rpx 50rpx;
		position: relative;
		
	}
	.leftTitle{
		width: 100rpx;
		text-align: center;
		font-size: 36rpx;
		// position: relative;
		.titledes{
			color: #0495D2;
		}
		}
	.leftTitle .after{
		
			border-right: 2rpx solid #ccc;
			    height: 60rpx;
			    position: absolute;
			    left: 150rpx;
			    top: 46rpx;
		}
		.rightContent{
			width: 500rpx;
			height:34rpx;
			font-size:24rpx;
			font-family:PingFangSC-Regular,PingFang SC;
			font-weight:400;
			color:rgba(41,54,83,1);
			line-height:34rpx;
			padding-top: 18rpx;
			padding-left: 18rpx;
		}
		.ceil{
			margin-bottom: 10rpx;
			
		}
		.comPonessMessage{
			font-size:24rpx;
			color:rgba(109,114,120,1);
			line-height: 58rpx;
			margin-top:38rpx; 
		}
</style>
