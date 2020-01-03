<template>
	<view>
		<view class="orderList">
			<view class="orderItem">
				<view class=" flex">
					 <image  :mode="imgModel" src="../../../static/images/orderItem.png" class="imgLeft"
					  @error="imageError"></image>
					  <view class="orderInfo">
					  	<view class="title">
							商品的名称商品的名称商品的名称商品的名称商
							品的名称商品的名称			  		
					  	</view>
						<view class="idInfo">
							ID ：123456					
						</view>
					  </view>
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
				<view class="bottomButtons">
					 <button  class="grounding" plain="true"  @click="open('up')" >上架</button>
					 <button  class="undercarriage" plain="true" @click="open('down')"  >下架</button>
				</view>
			</view>
			
			<view class="orderItem">
				<view class=" flex">
					 <image  :mode="imgModel" src="../../../static/images/orderItem.png" class="imgLeft"
					  @error="imageError"></image>
					  <view class="orderInfo">
					  	<view class="title">
							商品的名称商品的名称商品的名称商品的名称商
							品的名称商品的名称			  		
					  	</view>
						<view class="idInfo">
							ID ：123456						
						</view>
					  </view>
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
				<view class="bottomButtons">
					 <button  class="grounding" plain="true">上架</button>
					 <button  class="undercarriage" plain="true" >下架</button>
				</view>
			</view>
		</view>
		<template>
		  <view class="content">
		    <chunLei-modal v-model="showDialog" :mData="defaultData"  @onConfirm="onConfirm" @cancel="cancel" navMask>
		    </chunLei-modal>
		  </view>
		</template>
	</view>
</template>

<script>
	import chunLeiModal from '@/components/chunLei-modal/chunLei-modal.vue';
	export default {
		data() {
			return {
				imgModel:'scaleToFill',
				defaultData:{title:'提示',content:'确认下架',cancelText:'取消',confirmColor:'#3CC51F'},
				showDialog:false,
				url:{
					getGools:"/supplier/app/sitem/get.lf"
				}
				
			}
		},
		components:{
			chunLeiModal
		},
		methods: {
			imageError: function(e) {
			          console.error('image发生error事件，携带值为' + e.detail.errMsg)
			},
			onConfirm(){
				this.showDialog=false;
			},
			cancel(){
				this.showDialog=false;
			},
			open(){
				this.showDialog=true;
			}
			},
		
		mounted() {
			var data={};
			this.$http.request.post(this.url.getGools,data).then(res=>{
				console.log(res);
			})
		}
	}
</script>

<style scoped>
	.popuconfirm{
		
		}
		.grounding{
			color:rgba(4,149,210,1);
		}
	.uni-popup__wrapper-box{
			background: #fff;
	}
	.imgLeft{
		width: 106rpx;
		height: 106rpx;
	}
	.orderList{
		padding: 20rpx 34rpx;
	}
	.flex{
		display: flex;
	}
	.idInfo{
		font-size: 24rpx;
	}
	.orderItem{
		border-top: 1rpx solid rgba(247,247,247,1);
		border-bottom: 1rpx solid rgba(247,247,247,1);
		padding: 18rpx 0;
	}
	.orderInfo{
		width:504rpx;
		height:68rpx;
		font-size:24rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:rgba(41,54,83,1);
		line-height:34rpx;
		margin-left: 20rpx;
	}
	.idInfo{
		margin-top: 6rpx;
	}
	.orderDes{
		padding: 8rpx 52rpx 8rpx 52rpx;
		background:rgba(247,247,247,1);
		font-size:24rpx;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:rgba(41,54,83,1);
		line-height:34rpx;
		display: flex;
		margin-top: 24rpx;
	}
	.leftDes{
		width: 400rpx;
	}
	.grounding{
		width:120rpx;
		height:64rpx;
		line-height: 64rpx;
		border-radius:6rpx;
		font-size: 24rpx;
		display: inline-block;
		border:2rpx solid rgba(4,149,210,1);
	}
	.undercarriage{
		width:120rpx;
		height:64rpx;
		line-height: 64rpx;
		font-size: 24rpx;
		display: inline-block;
		border-radius:6rpx;
		color:rgba(109,114,120,1);
		border:1px solid rgba(109,114,120,1);
		margin-left: 20rpx;
	}
	.bottomButtons{
		text-align: right;
		margin-top: 24rpx;
	}
	.title{
		font-size: 24rpx;
	}
</style>
