<template>
  <div class="datamain">
    <div class="dpicture">
      <img src="../../../../public/images/nan.jpg" alt />
      <span class="sp1">
        <i class="el-icon-arrow-left"></i>
      </span>
      <span @click="higgg" class="sp2">
        <i class="el-icon-more"></i>
      </span>
      <span class="sp3">
        <i class="el-icon-star-off"></i>
      </span>
      <div class="erdpicture" v-show="bool">
        <p></p>
        <div></div>
        <ul>
          <li>
            <a href="#">
              <i class="el-icon-house"></i>首页
            </a>
          </li>
          <li>
            <a href="#">
              <i class="el-icon-zoom-out"></i>搜索
            </a>
          </li>
          <li>
            <a href="#">
              <i class="el-icon-menu"></i>分类
            </a>
          </li>
          <li>
            <a href="#">
              <i class="el-icon-chat-line-round"></i>消息
            </a>
          </li>
          <li>
            <a href="#">
              <i class="el-icon-shopping-cart-1"></i>购物车
            </a>
          </li>
          <li>
            <a href="#">
              <i>
                <img src="../../../../public/images/member.png" alt />
              </i>我的商城
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="particulars">
      <p>男t恤五分袖ins夏季上衣服韩版潮流2019新款嘻哈潮牌帅气 白色上衣 L</p>
    </div>
    <div class="goods-price">
      <dl>
        <dt>
          ￥
          <span>89.00</span>
        </dt>
      </dl>
      <span class="sold">销量：7件</span>
    </div>
    <div class="goods-detail-item">
      <ul class="goods-item">
        <li>送至</li>
        <li>全国</li>
        <li>有货</li>
        <li class="el-icon-location-outline"></li>
      </ul>
      <div class="free-shipping">免运费</div>
    </div>
    <div class="Size-information">
      <span>已选</span>
      <span>
        颜色
        <a href="#">黑色</a>
      </span>
      <span>
        尺码
        <a href="#">S</a>
      </span>
      <span class="el-icon-arrow-right"></span>
    </div>
  </div>
</template>

<script>
    export default{
        data(){
            return{
                bool:false
            }
        },
        methods:{
            higgg(){
                this.bool = !this.bool;
            }
        }
    }
</script>
<style>
.datamain {
  margin-top: 0.43rem;
}
.dpicture {
  position: relative;
  text-align: center;
}
.dpicture .erdpicture p {
  width: 0;
  height: 0;
  border: 0.1rem solid;
  border-color: #000;
  border-color: transparent transparent #000 transparent;
  opacity: 0.33;
  position: absolute;
  top: 0.27rem;
  right: 0.14rem;
}
.dpicture .erdpicture div {
  width: 1.1rem;
  height: 2.52rem;
  position: absolute;
  top: 0.47rem;
  right: 0.04rem;
  background-color: #000;
  opacity: 0.33;
  border-radius: 0.07rem;
}
.dpicture ul {
  width: 1.1rem;
  height: 2.5rem;
  position: absolute;
  top: 0.47rem;
  right: 0.04rem;
}
.dpicture img {
  width: 3.52rem;
  height: 3.52rem;
}
.dpicture ul li {
  width: 100%;
  height: 0.42rem;
  border-bottom: 0.01rem solid #ccc;
  padding:.11rem;
  box-sizing: border-box;
  line-height:100%;
}
.dpicture ul li a{
    display:block;
    width:100%;
    height:100%;
    color:#fff;
    font-size:.14rem;
    text-align:left;
    line-height:.19rem;
}
.dpicture ul li a i{
    font-size:.16rem;
    margin-right:.1rem;
}
.dpicture ul li a i img{
    width:.16rem;
    height:.16rem;
}
.dpicture span {
  position: absolute;
  display: block;
  width: 0.32rem;
  height: 0.32rem;
  background: rgba(255, 255, 255, 0.75);
  border: 0.01rem solid #eee;
  border-radius: 50%;
  line-height: 0.32rem;
  text-align: center;
}
.dpicture .sp1 {
  left: 0.03rem;
  top: 0.06rem;
}
.dpicture .sp2 {
  right: 0.08rem;
  top: 0.06rem;
}
.dpicture .sp3 {
  right: 0.1rem;
  bottom: 0.14rem;
}
.dpicture span i {
  color: rgb(223, 16, 51);
}
.particulars {
  padding: 0.11rem 0.11rem 0.055rem;
  font-size: 0.15rem;
}
.goods-price {
  padding: 0 0.11rem;
  height: 0.27rem;
  line-height: 0.27rem;
  font-size: 0.14rem;
}
.goods-price dl {
  float: left;
}
.goods-price dl dt {
  font-weight: bolder;
  color: orange;
}
.goods-price dl dt span {
  font-size: 0.18rem;
}
.goods-price span {
  float: right;
}
.goods-detail-item {
  padding: 0.11rem;
  height: 0.43rem;
  border-bottom: 0.01rem solid #ccc;
}
.goods-item {
  height: 0.19rem;
}
.goods-item li {
  float: left;
  font-size: 0.12rem;
  margin-right: 0.1rem;
  color: #ccc;
  line-height: 0.19rem;
}
.goods-item li:nth-child(3) {
  color: orange;
}
.goods-item li:nth-child(2) {
  color: #000;
}
.goods-item li:last-child {
  margin-right: 0;
  float: right;
  font-size: 0.16rem;
}
.free-shipping {
  font-size: 0.12rem;
  margin-left: 0.34rem;
  color: #ccc;
}
.Size-information {
  height: 0.51rem;
  padding: 0.11rem;
  box-sizing: border-box;
}
.Size-information span {
  color: #ccc;
  font-size: 0.13rem;
  margin-right: 0.1rem;
}
.Size-information span:nth-child(2) {
  padding: 0 0.03rem;
  height: 0.2rem;
  border: 0.01rem solid #ccc;
}
.Size-information span:nth-child(3) {
  padding: 0 0.03rem;
  height: 0.22rem;
  border: 0.01rem solid #ccc;
}
.Size-information span a {
  color: #000;
}
.Size-information span:last-child {
  float: right;
  margin-right: 0;
  font-size: 0.18rem;
}
</style>