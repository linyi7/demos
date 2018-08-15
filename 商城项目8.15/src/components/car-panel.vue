<template>

<!--active-->
<li class="nav-cart active" @mouseenter="mouseenter" @mouseleave="mouseleave">
	<a href="javascript:;"  class="ball-rect">购物车</a>
	<!--根据class改变颜色-->
	<span class="cart-empty-num " :class="{'cart-num' : totleCount > 0}">
		<i>{{totleCount}}</i>
	</span>
	<div class="nav-cart-wrapper" v-if="carshow">
		<div class="nav-cart-list">
			<div class="empty" v-if="totleCount <= 0">
				<h3>购物车为空</h3>
				<p>您还没有选购任何商品，现在前往商城选购吧!</p>
			</div>
			<div class="full"  >
				<div class="nav-cart-items">
					<ul>
						<li class="clear" v-for="(item,index) in carPanelData">
							<div class="cart-item js-cart-item cart-item-sell">
								<div class="cart-item-inner">
									<div class="item-thumb">
										<img :src="item.ali_image+'?x-oss-process=image/resize,w_80/quality,Q_100/format,webp'">
									</div>
									<div class="item-desc">
										<div class="cart-cell">
											<h4> 
												<a href="#/item/100027401">{{item.title}}</a>
											</h4>
											<p class="attrs">
												<span>{{item.spec_json.show_name}}</span>
											</p>
											<h6>
												<span class="price-icon">¥</span><span class="price-num">{{item.price}}</span><span class="item-num">x {{item.count}}</span>
											</h6>
										</div>
									</div>
									<div class="del-btn" @click="delcarpanelData(item.sku_id)">删除</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
				<div class="nav-cart-total">
					<p>共 <strong class="ng-binding"> {{totleCount}} </strong> 件商品</p>
					<h5>合计：<span class="price-icon">¥{{totlePrice}}</span></h5>
					<h6>
					<router-link to="/Cart" class="nav-cart-btn"  >去购物车</router-link>
						
					</h6>
				</div>
			</div>
		</div>
	</div>

	<!-- 小球动画 -->
	<transition name="ball"
	    v-on:before-enter='beforeEnter'
        v-on:enter ='enter'
        v-on:after-enter ='afterEnter'
	    v-bind:css='true'
	   > 
      
      <div class="addcart-mask" v-show="ball.show">
          <img  class="mask-item" />
      </div>
	</transition>
    

</li>
</template>

<script type="text/javascript">

export default {

	computed :{
		//购物车数据
		carPanelData(){
			return this.$store.state.carPanelData
		},
		//控制购物车隐藏显示
		carshow(){
			return this.$store.state.carshow
		},
		//购物车的商品总和数量
		totleCount(){
			return this.$store.getters.totleCount
		},
		//购物车的商品总价
		totlePrice(){
			return this.$store.getters.totlePrice
		},
		ball(){
			return this.$store.state.ball
		}
	},
	methods:{
		//删除购物车数据
		delcarpanelData(id){
			this.$store.commit("delcarpanelData",id)
		},
		// 鼠标移入购物车
		mouseenter(){
            this.$store.commit("mouseenter")
		},
		// 鼠标移出购物车
		mouseleave(){
            this.$store.commit("mouseleave")
		},
		

          //小球初始状态
		beforeEnter (el) {
			//小球的位置
        let rect = this.ball.el.getBoundingClientRect()
           //购物车的位置
        let rectEl = document.getElementsByClassName('ball-rect')[0].getBoundingClientRect()
          //获取当前的小球
        let ball = document.getElementsByClassName('mask-item')[0]
        //计算 x 和 y的运动轨迹
        let x = (rectEl.left + 16) - (rect.left + rect.width/2)
        let y = rect.top + rect.height/2 - rectEl.top + 5 - 16
        console.log(rect.top + rect.height/2)
        el.style.transform = 'translate3d(0,'+y+'px,0)'
        
        ball.style.transform = 'translate3d(-'+x+'px,0,0)'
        ball.src = this.ball.img
        console.log(this.ball.img)
      },
      //小球运动状态
      enter (el) {
      	//重排重绘
        let rf = el.offsetHeight
        this.$nextTick(() => {
          el.style.transform = 'translate3d(0,0,0)'
          document.getElementsByClassName('mask-item')[0].style.transform = 'translate3d(0,0,0)'
        })
      },
      //小球结束状态
      afterEnter (el) {
        this.ball.show = false
      }

	}
}

		

</script>

<style type="text/css">

.ball-enter-active{
	transition: .5s cubic-bezier(.46,1.61,.99,1.01)
}
.ball-enter-active .mask-item{
	transition: .5s cubic-bezier(.46,1.61,.99,1.01)
	
}



</style>