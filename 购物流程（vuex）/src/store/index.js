import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state:{
    //存放购物车数据
    carPanelData: [],
    //商品数量最大值
    maxoff: false,
    //购物车状态默认不显示
    carshow: false,

  },
  //vue计算方法
  getters:{
    //计算总的添加数量
    totleCount(state){
       let count =0
      state.carPanelData.forEach(goods =>{
        count += goods.count
      })
      return count
    },
    //计算总的添加价格
    totlePrice(state){
      let price = 0
      state.carPanelData.forEach( goods =>{
        price +=goods.count * goods.price
      })
      return price
    },
    //计算购物车选中的商品的数量(cart页面)
    checkedCount(state){
      let count = 0
      state.carPanelData.forEach(goods =>{
        if(goods.checked){
          count +=goods.count
        }
      })
      return count
    },
    //计算购物车选中的商品的价格(cart页面)
    checkedPrice(state) {
      let total = 0
      state.carPanelData.forEach( goods =>{
        if(goods.checked){
          total +=goods.count * goods.price
        }
      })
      return total
    },
   allCheckedHandle (state) {   //全选的默认状态为选中(cart页面)
      let allChecked = true
      state.carPanelData.forEach((goods) => {
        if(!goods.checked){
          allChecked = false
          return
        }
      })
      return allChecked
    },
    checkedGoods(state){  //选中的商品放进一个数组传递到结算页面(checkout)
      let checkedGoods = []
       state.carPanelData.forEach( (goods) =>{
        if(goods.checked){
          checkedGoods.push(goods)
        }
       })
       return checkedGoods
    }
  },
  //vue状态管理方法
  mutations: {
    addCarpanelData(state,data){
       let boff = true  //默认true时商品没有被添加过购物车
      state.carPanelData.forEach(goods =>{
        if(goods.sku_id === data[0].sku_id){
          goods.count += data[1]   //购物车已经有的商品，goods状态数量+1就可以了
          // this.state.carshow = true 
          boff = false  //添加过商品了，此时商品状态设置为已经false
          if(goods.count >goods.limit_num){   //加购超过数量，显示提示框
            goods.count -= data[1]  
            state.maxoff = true
            return
          }
        }
      })
      if(boff){  //true时商品没有被添加过购物车,向购物车数组set一个数据
        let goodsData = data[0] 
      Vue.set(goodsData,'count',data[1]) //set方法往购物车状态count+1
      Vue.set(goodsData,'checked',true)  //set方法往购物车添加一个checked属性,默认值为true
      state.carPanelData.push(goodsData) //向购物车数组set一个数据
      this.state.carshow = true
      }
      // console.log(state.carPanelData)
    },
    closePrompt(state){ //关闭提示框
      this.state.maxoff = false
    },
     showPrompt(state){ //显示提示框
      this.state.maxoff = true
    },
    plusCarpanelhandle(state,id){ //cart页面,点击+号增加购物车商品数量
      state.carPanelData.forEach((goods,index)=>{
        if(goods.sku_id === id){
          if(goods.count === goods.limit_num) return
            goods.count++
            return
        }
      })
    },
    subCarpanelhandle(state,id){ //cart页面,点击-号减少购物车商品数量
        state.carPanelData.forEach((goods,index)=>{
        if(goods.sku_id === id){
          if(goods.count<=1) return
            goods.count--
            return
        }
      })
    },
    deleteCarpanelData(state,id){   //删除购物车商品数据
      state.carPanelData.forEach((goods,index)=>{
        if(goods.sku_id === id){
          state.carPanelData.splice(index,1)
        }
      })
    },
    deleteCheckedData(state){     //删除选中(checked)的购物车商品
      let i = state.carPanelData.length
      while(i--){
        if(state.carPanelData[i].checked){
          state.carPanelData.splice(i,1)
        }
      }
    },
    mouseentercarshow(){    //鼠标移上购物车显示
      this.state.carshow = true
    },
    mouseleavecarhide(){    //鼠标离开购物车隐藏
      setTimeout( ()=>{
         this.state.carshow = false
       },500) 
    },
    checkGoods(state,id){   //但goodsid和传进来的id相等时候，checked 取反来切换选中状态的
      state.carPanelData.forEach( (goods,index)=>{
        if(goods.sku_id === id){
          goods.checked = !goods.checked
        }
      })
    },
   allChecked (state,checked) {//切换全选按钮状态 改变购物车其他单品的状态
      if(checked){
        state.carPanelData.forEach((goods,index) => {
          goods.checked = false
        })
      }else{
        state.carPanelData.forEach((goods,index) => {
          goods.checked = true
        })
      }
    },

  }
})
export default store