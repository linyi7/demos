<template>
    <div id="header">
      <div class="nav-global">
        <div class="container">
          <h1 class="nav-logo">
            <a href="javascript:;"></a>
          </h1>
          <ul class="nav-aside">
            <li class="nav-user">
              <a href="javascript:;">个人中心</a>
              <!--active-->
              <div class="nav-user-wrapper">
                <div class="nav-user-list">
                  <dl class="nav-user-avatar">
                    <dd><span class="ng-scope"></span></dd>
                    <dt class="ng-binding">+86 138****9453</dt>
                  </dl>
                  <ul>
                    <li class="order"><a href="javascript:;">我的订单</a></li>
                    <li class="support"><a href="javascript:;">售后服务</a></li>
                    <li class="coupon"><a href="javascript:;">我的优惠</a></li>
                    <li class="information"><a href="javascript:;">账户资料</a></li>
                    <li class="address"><a href="javascript:;">收货地址</a></li>
                    <li class="logout"><a href="javascript:;">退出</a></li>
                  </ul>
                </div>
              </div>
            </li>
            <!--active-->
            <carPanel></carPanel>
            
          </ul>
          <ul class="nav-list">
            <li><a href="javascript:;">在线商城</a></li>
            <li><a href="javascript:;">坚果 Pro</a></li>
            <li><a href="javascript:;">Smartisan M1 / M1L</a></li>
            <li><a href="javascript:;">Smartisan OS</a></li>
            <li><a href="javascript:;">欢喜云</a></li>
            <li><a href="javascript:;">应用下载</a></li>
            <li><a href="javascript:;">官方论坛</a></li>
          </ul>
        </div>
      </div>
      <div class="nav-sub">
        <div class="nav-sub-wrapper">
          <div class="container">
            <ul class="nav-list">
              <li><a href="javascript:;">首页</a></li>
              <li><a href="javascript:;">手机</a></li>
              <li><a href="javascript:;">“足迹系列”手感膜</a></li>
              <li><a href="javascript:;">官方配件</a></li>
              <li><a href="javascript:;">周边产品</a></li>
              <li><a href="javascript:;">第三方配件</a></li>
              <li><a href="javascript:;">全部商品</a></li>
              <li><a href="javascript:;">服务</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import carPanel from './car-panel'
export default {
  name: 'Headernav',
  components:{
    carPanel,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@charset "utf-8";
.nav-global {
  height: 100px;
  background-color: #000;
}

.container {
  height: 100%;
  width: 1220px;
  margin: 0 auto;
}


/*logo*/

.nav-logo {
  float: left;
  padding-top: 25px;
}

.nav-logo a {
  display: inline-block;
  width: 50px;
  height: 50px;
  background: url(../assets/img/global-logo.png) no-repeat;
  background-size: cover;
}


/*导航*/

.nav-global .nav-list {
  float: right;
  line-height: 28px;
  margin: 36px 23px 0 0;
}

.nav-global .nav-list li {
  float: left;
}

.nav-global .nav-list a {
  color: #c8c8c8;
  display: inline-block;
  font-size: 14px;
  padding: 0 25px;
}

.nav-global .nav-list a:hover {
  color: #fff;
}

.nav-aside {
  box-sizing: border-box;
  float: right;
  margin-top: 38px;
  border-left: 1px solid rgba(255, 255, 255, .2);
}

.nav-aside>li {
  position: relative;
  float: left;
}

.nav-aside>li>a {
  font-size: 0;
}


/*用户列表*/

.nav-user {
  margin-left: 40px;
  width: 36px;
}

.nav-user>a:before {
  content: " ";
  position: absolute;
  left: 8px;
  width: 20px;
  top: 0;
  height: 20px;
  background: url(../assets/img/account-icon.png) -155px 0;
  background-size: 240px 107px;
  transition: none;
}

.nav-user:hover>a:before {
  background-position: -5px 0;
}

.nav-user-wrapper {
  position: absolute;
  z-index: 30;
  padding-top: 18px;
  opacity: 0;
  visibility: hidden;
  top: -3000px;
  width: 168px;
  left: 50%;
  margin-left: -70px;
}

.nav-user:hover .nav-user-wrapper {
  top: 18px;
  visibility: visible;
  opacity: 1;
  transition: opacity .15s ease-out;
}

.nav-user-list {
  position: relative;
  width: 168px;
  padding-top: 20px;
  background: #fff;
  border: 1px solid #d6d6d6;
  border-color: rgba(0, 0, 0, .08);
  border-radius: 8px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, .15)
}

.nav-user-list:before {
  position: absolute;
  content: " ";
  background: url(../assets/img/account-icon.png) no-repeat -49px -43px;
  background-size: 240px 107px;
  width: 20px;
  height: 8px;
  left: 50%;
  top: -8px;
  margin-left: -25px;
}

.nav-user-avatar>dd {
  display: block;
  position: relative;
  margin: 0 auto;
  width: 46px;
  height: 46px;
  margin-bottom: 8px;
}

.nav-user-avatar>dd:before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .06);
}

.nav-user-avatar span {
  border-radius: 50%;
  display: block;
  width: 100%;
  height: 100%;
  background: url(../assets/img/user-avatar.png) no-repeat;
  background-size: contain;
}

.nav-user-avatar dt {
  margin-bottom: 16px;
  font-size: 12px;
  line-height: 1.5;
  text-align: center;
  color: #757575;
}

.nav-user-list li a {
  position: relative;
  border-top: 1px solid #f5f5f5;
  display: block;
  padding-left: 54px;
  line-height: 44px;
  height: 44px;
  color: #616161;
  font-size: 12px;
}

.nav-user-list li a:hover {
  background-color: #fafafa;
}

.nav-user-list li a:before {
  background: url(../assets/img/account-icon.png) no-repeat;
  background-size: 240px 107px;
  content: ' ';
  display: block;
  position: absolute;
  left: 22px;
  top: 50%;
  width: 20px;
  height: 20px;
  margin-top: -8px;
}

.nav-user-list li.order a:before {
  background-position: 0 -44px;
}

.nav-user-list li.support a:before {
  background-position: -20px -44px;
}

.nav-user-list li.coupon a:before {
  background-position: -20px -84px;
}

.nav-user-list li.information a:before {
  background-position: 0 -64px;
}

.nav-user-list li.address a:before {
  background-position: -20px -64px;
}

.nav-user-list li.logout a:before {
  background-position: 0 -84px;
}



/*次导航*/

.nav-sub {
  position: relative;
  z-index: 20;
  height: 90px;
}

.nav-sub-wrapper {
  padding: 31px 0;
  height: 28px;
  position: relative;
}

.nav-sub .nav-list {
  float: left;
  height: 28px;
  line-height: 28px;
}

.nav-sub .nav-list li {
  position: relative;
  float: left;
  padding-left: 2px;
}

.nav-sub .nav-list li:first-child {
  padding-left: 0;
}

.nav-sub .nav-list li:before {
  content: ' ';
  position: absolute;
  left: 0;
  top: 13px;
  width: 2px;
  height: 2px;
  background: #bdbdbd;
}

.nav-sub .nav-list li:first-child:before {
  display: none;
}

.nav-sub .nav-list li a {
  display: block;
  padding: 0 20px;
  color: #666;
}

.nav-sub .nav-list li:first-child a {
  padding-left: 10px;
}

.nav-sub .nav-list li.active a {
  font-weight: 700;
}

.nav-sub .nav-list li a:hover {
  color: #6b95ea;
}
.title-header{
      display: block;
    position: relative;
    font-size: 18px;
    line-height: 60px;
    color: #666;
    background: #fafafa;
}
.title-header .title {
    margin-left: 30px;
}

</style>
