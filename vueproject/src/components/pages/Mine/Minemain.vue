<template>
  <div class="scroller-box">
    <div class="member-top">
      <div class="member-info">
        <a class="default-avatar" style="display:block;"></a>
        <a class="to-login" @click="navTo()">点击登录</a>
      </div>
      <div class="member-collect">
        <span>
          <a href="login.html">
            <img src="../../../../public/images/aixin.png" alt />
            <p>商品收藏</p>
          </a>
        </span>
        <span>
          <a href="login.html">
            <img src="../../../../public/images/dian.png" alt />
            <p>店铺收藏</p>
          </a>
        </span>
        <span>
          <a href="login.html">
            <img src="../../../../public/images/jiao.png" alt />
            <p>我的足迹</p>
          </a>
        </span>
      </div>
    </div>
    <div class="member-center">
      <dl class="mt5">
        <dt>
          <a href="order_list.html">
            <h3>
              <i class="el-icon-mobile"></i>全部订单
            </h3>
            <h5>
              <i class="el-icon-arrow-right"></i>
            </h5>
          </a>
        </dt>
        <dd>
          <ul id="order_ul">
            <li>
              <a href="login.html">
                <i class="el-icon-document-remove"></i>
                <p>待付款</p>
              </a>
            </li>
            <li>
              <a href="login.html">
                <i class="el-icon-suitcase-1"></i>
                <p>待收货</p>
              </a>
            </li>
            <li>
              <a href="login.html">
                <i class="el-icon-truck"></i>
                <p>待自提</p>
              </a>
            </li>
            <li>
              <a href="login.html">
                <i class="el-icon-edit-outline"></i>
                <p>待评价</p>
              </a>
            </li>
            <li>
              <a href="login.html">
                <i class="el-icon-circle-close"></i>
                <p>退款/退货</p>
              </a>
            </li>
          </ul>
        </dd>
      </dl>
      <dl class="mt5">
        <dt>
          <a href="member_asset.html">
            <h3>
              <i class="el-icon-medal-1"></i>我的财产
            </h3>
            <h5>
              <i class="el-icon-arrow-right"></i>
            </h5>
          </a>
        </dt>
        <dd>
          <ul id="asset_ul">
            <li>
              <a href="predepositlog_list.html">
                <i class="el-icon-ship"></i>
                <p>预存款</p>
              </a>
            </li>
            <li>
              <a href="rechargecardlog_list.html">
                <i class="el-icon-postcard"></i>
                <p>充值卡</p>
              </a>
            </li>
            <li>
              <a href="voucher_list.html">
                <i class="el-icon-guide"></i>
                <p>代金券</p>
              </a>
            </li>
            <li>
              <a href="redpacket_list.html">
                <i class="el-icon-picture-outline"></i>
                <p>红包</p>
              </a>
            </li>
            <li>
              <a href="pointslog_list.html">
                <i class="el-icon-burger"></i>
                <p>积分</p>
              </a>
            </li>
          </ul>
        </dd>
      </dl>
      <dl class="mt6 mt7">
        <dt>
          <a href="address_list.html">
            <h3>
              <i class="el-icon-location-outline"></i>收货地址
            </h3>
            <h5>
              <i class="el-icon-arrow-right"></i>
            </h5>
          </a>
        </dt>
      </dl>
      <dl class="mt6">
        <dt>
          <a href="member_account.html">
            <h3>
              <i class="el-icon-setting"></i>系统设置
            </h3>
            <h5>
              <i class="el-icon-arrow-right"></i>
            </h5>
          </a>
        </dt>
      </dl>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    navTo(){
      this.$router.push({
        name:"login"
      })
    }
  }
}
</script>

<style>
.scroller-box {
  margin-top: 0.43rem;
  box-sizing: border-box;
}
.member-top {
  width: 100%;
  height: 1.98rem;
  background-color: #ff5001;
  box-sizing: border-box;
}
.member-info {
  width: 2.64rem;
  height: 1.32rem;
  margin: auto;
  text-align: center;
}
.default-avatar {
  width: 0.88rem;
  height: 0.88rem;
  background: url("../../../../public/images/member.png") no-repeat center
    center;
  margin: auto;
  background-size: 0.5rem 0.5rem;
}
.to-login {
  display: block;
  color: #fff;
}
.member-collect {
  width: 100%;
  height: 0.66rem;
  background-color: #eb3e0a;
  float: left;
  display: flex;
}
.member-collect span {
  flex: 1;
  text-align: center;
  align-self: center;
}
.member-collect span a {
  color: #fff;
  font-size: 0.12rem;
}
.member-collect span a img {
  width: 0.22rem;
  height: 0.22rem;
}
.member-center {
  background-color: #eee;
  padding-top: 0.3rem;
}
.mt5 {
  background-color: #fff;
  margin-bottom: 0.16rem;
}
.mt5 dt {
  width: 3.55rem;
  height: 0.45rem;
  padding-right: 0.2rem;
  margin-left: 0.2rem;
  line-height: 0.45rem;
  border-bottom: 0.01rem solid #ccc;
  box-sizing: border-box;
}
.mt5 dd {
  width: 100%;
  height: 0.7rem;
}
.mt5 dd ul {
  width: 100%;
  height: 100%;
  display: flex;
}
.mt5 dd ul li {
  flex: 1;
  align-self: center;
  text-align: center;
}
.mt5 dd ul li a i {
  font-size: 0.22rem;
}
.mt5 dd ul li a {
  color: #888;
  font-size: 0.13rem;
}
.mt5 dt a h3 {
  float: left;
  font-weight: normal;
  color: #000;
  font-size: 0.14rem;
}
.mt5 dt a h3 i {
  margin-right: 0.1rem;
  font-size: 0.16rem;
}
.mt5 dt h5 {
  float: right;
}
.mt6 {
  width: 100%;
  height: 0.44rem;
  background-color: #fff;
  padding: 0 0.16rem;
  box-sizing: border-box;
  line-height: 0.44rem;
}
.mt7 {
  border-bottom: 0.01rem solid #ccc;
}
.mt6 dt a h3 {
  float: left;
  font-weight: normal;
  color: #000;
  font-size: 0.14rem;
}
.mt6 dt a h3 i {
  margin-right: 0.1rem;
  font-size: 0.16rem;
}
.mt6 a h3 {
  float: left;
}
.mt6 a h5 {
  float: right;
}
</style>