<template>
	<view class="stateContainer">
		<ms-tabs :list="list" @input="input" :itemColor="itemColor" :lineColor="itemColor" v-model="active"></ms-tabs>
		<view class="Division heiher">
		</view>
		<view class="fir" v-show="active==0">
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
				
							</view>
						</view>
					</view>
					<view class="flexRight">
				
					</view>
				</view>
			</view>
			<view class="Division">
			</view>
			<view class="desContainer">
				<view class="description">
					ID:12345
				</view>
				<view class="description">
					结算名称:12345
				</view>
				<view class="description">
					结算创建时间:12345
				</view>
				<view class="description">
					总价（元）:12345
				</view>
				<view class="description">
					总订单数:20
				</view>
				<view class="description">
					本次费用:20
				</view>
				<view class="description">
					缴费情况:20
				</view>
				<view class="description">
					结算说明:本次结算范围为截至2019年9月30日已通过验货的
未结算订单。此次收取累计未结算订单总额超过25万元（含）
（即累计未缴纳交易服务费超过5000.00元）的用户。其他用
户交易服务费顺延至下一期合并收取。进入收费范围的用户请
于即日起，2019年10月29日前向我方公司银行账户缴纳费用。 
				</view>
			</view>
			
		</view>
		<view class="sec" v-show="active==1">
			<view class="description">
				ID:12345
			</view>
			<view class="description">
				结算名称:2019年第三季度结算
			</view>
			<view class="description">
				订单号:34222222
			</view>
			<view class="description">
				采购人:34222222
			</view>
			<view class="description">
				课题组:34222222
			</view>
			<view class="description">
				研究所:34222222
			</view>
			<view class="description">
				总价:34222222
			</view>
			<view class="description">
				创建时间:34222222
			</view>
			<view class="description">
				验货通过时间:34222222
			</view>
			<view class="description">
				留言:34222222
			</view>
			<view class="description">
				备注:34222222
			</view>
		</view>
		
	</view>
	
</template>

<script>
	import msTabs from '../../components/ms-tabs/ms-tabs';
	export default{
		data:()=>{
			return {
				list:[{title:"结算信息"},{title:"结算订单明细"}],
				active:0,
				itemColor:"#0495D2"
			}
		},
		methods:{
			input:(key)=>{
				
			}
		},
		components:{
			msTabs
		}
	}
</script>

<style scoped>
	#tab_list{
		
	}
	.Division{
		width: 100%;
		height: 2rpx;
		background:rgba(249,249,249,1);
	}
	.sec{
		padding: 34rpx;
	}
	.Division.heiher{
		width: 100%;
		height: 8rpx;
		background:rgba(249,249,249,1);
	}
	.desContainer{
		padding: 34rpx 34rpx;
	}
	.stateContainer {
		
	}
	.description{
		font-size: 24rpx;
		line-height: 50rpx;
	
	}
	.flexList {
		display: flex;
		flex-wrap: wrap;
		// padding: 12px 33px 0;
		align-items: center;
		justify-items: center;
		justify-content: space-around;
		align-content: space-evenly;
	}

	.flexItem {
		width: 190rpx;
		height: 150rpx;

		background: rgba(255, 255, 255, 1);
		box-shadow: 3px 5px 9px 0px rgba(4, 149, 210, 0.18);
		margin-bottom: 18rpx;
		padding: 18rpx;
	}

	.textTitle {
		font-size: 40rpx;
		color: #0495D2;
	}

	.textdes {
		font-size: 24rpx;
		color: #7286B1;
	}
</style>
