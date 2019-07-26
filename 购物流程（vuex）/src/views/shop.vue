<template>
    <div id="main">
    
      <div class="sku-box store-content ">
        
        <div class="sort-option">
          <ul class="line clear">
            <li><a href="javascript:;" class="active">综合排序</a></li>
            <li><a href="javascript:;" class="">销量排序</a></li>
            <li><a href="javascript:;" class="">价格低到高</a></li>
            <li><a href="javascript:;" class="">价格高到低</a></li>
          </ul>
        </div>
      <prompt v-if="prompthide"></prompt>
        <!--手机配件-->
        <div class="gray-box">
          <header class="title-header">
            <h5 class="title">热门商品</h5>
          </header>
          <shopItem :key="index" v-for="(item,index) in goodsData" :item="item"></shopItem>
        </div>
      </div>
    </div>
</template>
<script type="text/javascript">
import goodsData from '@/lib/goodsData'
import shopItem from '@/components/shop-item'
import prompt from '@/components/prompt'
  export default{
    name:'Shop',
    data(){
      return{
        goodsData: goodsData,
       
      }

    },
     components:{
        shopItem,
        prompt
      },
    computed: {
      prompthide(){
       return this.$store.state.maxoff
      }
      
    }
  }
</script>
<style type="text/css">

   @charset "utf-8";
.sku-box{
    position: relative;
}
.sort-option{
    border-top: 1px solid #D8D8D8;
    color: #999;
}
.sort-option ul{
    height: 60px;
    line-height: 60px;
}
.sort-option li{
    position: relative;
    float: left;
    padding-left: 42px;
}
.sort-option li:first-child{
  padding-left: 9px;
}
.sort-option li:before{
  content: ' ';
    display: block;
    position: absolute;
    left: 20px;
    top: 50%;
    width: 2px;
    height: 2px;
    margin-top: -1px;
    background: #C7C7C7;
}
.sort-option li:first-child:before{
  display: none;
}
.sort-option a{
  display: block;
    font-size: 12px;
    color: #999;
}
.sort-option a.active, .sort-option a:hover{
    color: #5683EA;
}
.gray-box{
  overflow: hidden;
    background: #fff;
    border-radius: 8px;
    border: 1px solid #dcdcdc;
    border-color: rgba(0,0,0,.14);
    box-shadow: 0 3px 8px -6px rgba(0,0,0,.1);
}
.sku-box .item-box{
  clear: both;
    overflow: hidden;
    margin: 0 -1px -1px -1px;
}


</style>