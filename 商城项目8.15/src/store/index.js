import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
	state: {
		//存放购物车数据
		carPanelData: [],
		//是否为限制的最大值
		maxoff: false,
		//控制隐藏显示
		carshow: false,
		//创建小球
		ball:{
			show : false, //显示与隐藏
			el :null ,//点击哪一个
			img: ''
		},
		//收货地址数据
		receiveInfo : [{
		      "name": "王某某",
		      "phone": "13811111111",
		      "areaCode": "010",
		      "landLine": "64627856",
		      "provinceId": 110000,
		      "province": "北京市",
		      "cityId": 110100,
		      "city": "市辖区",
		      "countyId": 110106,
		      "county": "海淀区",
		      "add": "上地十街辉煌国际西6号楼319室",
		      "default": true
		    },{
		      "name": "李某某",
		      "phone": "13811111111",
		      "areaCode": "010",
		      "landLine": "64627856",
		      "provinceId": 110000,
		      "province": "北京市",
		      "cityId": 110100,
		      "city": "市辖区",
		      "countyId": 110106,
		      "county": "海淀区",
		      "add": "上地十街辉煌国际东6号楼350室",
		      "default": false
		    }],
		OrderData : []
	},
	getters:{
		//计算
		//购物车商品总数量
		totleCount(state){
			let count=0
			state.carPanelData.forEach( goods => {
               count += goods.count
			})
			return count
		},
		//购物车商品总价
		totlePrice(state){
			let price=0
			state.carPanelData.forEach( goods => {
               price += goods.count * goods.price
			})
			return price
		},
		//购物车清单全选
		allChecked(state) {
			let allCheck = true
			state.carPanelData.forEach( goods => {
               if(!goods.check){
               	allCheck = false
               	return
               }
			})
			return allCheck
		},
	//计算总金额
	checkPrice(state){
		let price= 0
		state.carPanelData.forEach( goods => {
               if(goods.check){
               	price += goods.price * goods.count
               }
			})
         return price
	   },
     //计算总数量
	checkCount(state){
            let count= 0
		state.carPanelData.forEach( goods => {
               if(goods.check){
               	count += goods.count
               }
			})
         return count
	  },
	  //计算购物车商品数据数组
	  checkgoods(state){
          let checkgoods = []
         state.carPanelData.forEach( goods => {
               if(goods.check){
               checkgoods.push(goods)
               }
			})
         return checkgoods

	  },
	  

    },
	

	mutations: {
		addCarpanelData(state,data) {
			//boff 是判断购物车是否添加过
          let boff= true
         state.carPanelData.forEach( goods =>{
         	if(goods.sku_id === data.info.sku_id){
         		goods.count += data.count
         		if(goods.count > goods.limit_num){
         			goods.count -= data.count
         			state.maxoff = true

         			
         		}
         		boff = false
         		//控制添加购物车显示
         		state.carshow = true
         		//控制小球动画
         		state.ball.show = true
         		state.ball.img =data.info.ali_image
         		state.ball.el =event.path[0]
         	}
         })

       if(boff){
           
         let goodsData = data.info
         //第一次假如购物车
         Vue.set(goodsData,'count',data.count)
         //购物车清单选中
         Vue.set(goodsData,'check',true)
         state.carPanelData.push(goodsData)
         //控制添加购物车显示
         state.carshow = true
         //控制小球动画
 		  state.ball.show = true
 		  state.ball.img =data.info.ali_image
 		  state.ball.el =event.path[0]

           }

           
		},
		//删除购物车数据
		delcarpanelData(state,id){
			state.carPanelData.forEach((goods,index) =>{
				if(goods.sku_id === id){
					state.carPanelData.splice(index,1)
					return
				}
			})
			
		},
		//关闭提示
		closePrompt(state){
		      state.maxoff = false
	          },
	     //鼠标移上显示购物车
	     mouseenter(state){
               state.carshow= true
	     },
	     //鼠标移走隐藏购物车
	     mouseleave(state){
	     	setTimeout( () => {
	     		state.carshow =false
	     	},500)
	     },
	     //购物清单数量增加
	     pushCarpanelData(state,id){
	     	state.carPanelData.forEach( (goods,index) =>{
	     		if(goods.sku_id === id){
	     			if(goods.count >= goods.limit_num ) return
	     			goods.count ++
	     			return
	     		}
	     	})
	     },
	     //购物清单数量减少
	     subCarpanelData(state,id){
	     	state.carPanelData.forEach( (goods,index) =>{
	     		if(goods.sku_id === id){
	     			if(goods.count <= 0 ) return
	     			goods.count --
	     			return
	     		}
	     	})
	     },
	     //购物车清单是否选中
	     checkCarpanelData(state,id){
	     	state.carPanelData.forEach( (goods,index) =>{
	     		if(goods.sku_id === id){
	     			goods.check = !goods.check
	     			return
	     		}
	     	})
	     },
	     //控制全选
	     allCheckGoods(state,allChecked){
	     	state.carPanelData.forEach( (goods,index) =>{
	     		goods.check = !allChecked
	     	})

	     },
	     //新增收货人信息
          submitInfo(state,data){
          	if(data.default){
          		state.receiveInfo.forEach((receive) =>{
          			receive.default = false
          		})
          		state.receiveInfo.push(data)
          	}

          },
          //提交订单方法
          submitOrder(state,data){
          	state.OrderData.unshift(data)
          	let i=state.carPanelData.length
          	while(i--){
          		if(state.carPanelData[i].check){
          			state.carPanelData.splice(i,1)
          		}
          	}

          },
          //支付成功
          payNow(state,id){
          	state.OrderData.forEach( (order) => {
          		if(order.orderId === id){
          			order.isPay= true
          			return
          		}
          	})
          }

	}

})




export default store