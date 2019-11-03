<template>
<div>
  <div class="nctouch-main-layoutgoods">
    <dl class="nctouch-cart-store">
      <dt>
        <span class="store-check">
          <input class="store_checkbox" type="checkbox"/>
        </span>
        <i class="el-icon-potato-strips"></i>
        潮男搭配师
      </dt>
    </dl>
    <ul class="shopping-list" v-for="(i,index) in a" :key="index">
      <li>
        <span class="storecheck" style="float:left">
          <input type="checkbox" name="cart_id" value="226205" />
        </span>
        <div class="goods-pic">
          <img
            :src="i.goods_image_url"
          />
        </div>
        <dl class="goods-info">
          <dt class="goods-name" style="float:left">
            <a
              href="https://www.nanshig.com/wap/tmpl/product_detail.html?goods_id=226205"
              v-text="i.goods_name"
            ></a>
          </dt>
        </dl>
        <div>
          <a href="#" class="el-icon-delete"></a>
        </div>
        <br />
        <div class="goods-subtotal">
          <span class="goods-price" style="float:left">
            ￥
            <strong v-text="i.goods_price"></strong>
          </span>
          <span class="goods-sale"></span>
          <div class="value-box">
            <span class="minus">
              <a href="javascript:void(0);">-&nbsp;</a>
            </span>
            <span>
              <input type="text" pattern="[0-9]*" readonly class="buy-num buynum" :value="i.goods_salenum" />
            </span>
            <span class="add">
              <a href="javascript:void(0);">+&nbsp;</a>
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div class="nctouch-cart-bottom">
						<div class="all-check"><input class="all_checkbox" type="checkbox" checked=""></div>
						<div class="total">
              <dl class="total-money"><dt class="b">合计总金额：</dt><dd class="a">￥<em>89.00</em></dd></dl>
            </div>
            <div class="check-out ok">
              <a href="javascript:void(0)">确认信息</a>
						</div>
          </div>
  </div>
</template>

<<<<<<< HEAD
<script>
export default {
  data() {
    return {
      a: []
    };
  },
  async created() {
    let ab = await this.$axios("http://10.3.142.150:3000/cart");
    // console.log(ab);
    this.a = ab.data;
    // console.log(this.a);
    // console.log(this.a.goods_image_url);
    console.log(this.a);
  }
};
</script>
=======
>>>>>>> 8858b0314f2b38820ec454fe550ba0d843a1016b

<style>
.nctouch-main-layoutgoods {
  margin-top: 0.43rem;
  width: 100%;
}
.nctouch-main-layoutgoods .nctouch-cart-store {
  width: 100%;
  height: 0.42rem;
  padding: 0.11rem;
  box-sizing: border-box;
}
.nctouch-main-layoutgoods .shopping-list {
  width: 100%;
}
.nctouch-main-layoutgoods .shopping-list li {
  width: 100%;
  height: 0.92rem;
  padding: 0.11rem 0;
  padding-left: 0.11rem;
  box-sizing: border-box;
}
.nctouch-main-layoutgoods .goods-pic {
  width: 0.7rem;
  height: 0.7rem;
  text-align: center;
  float: left;
  border: 0.01rem solid #ccc;
  border-radius: 0.02rem;
  margin-right: 0.1rem;
}
.nctouch-main-layoutgoods .goods-pic img {
  width: 0.6rem;
  height: 0.6rem;
  margin-top: 0.05rem;
}
.nctouch-main-layoutgoods .goods-info .goods-name {
  width: 2.18rem;
  height: 0.3rem;
}
.nctouch-main-layoutgoods .goods-info .goods-name a {
  font-size: 0.12rem;
  color: #000;
}
.nctouch-main-layoutgoods .goods-price {
  font-size: 0.12rem;
  color: orange;
  line-height: 0.28rem;
}
.value-box {
  width: 0.84rem;
  height: 0.28rem;
  float: right;
  border-radius: 0.05rem;
  border: 0.01rem solid #ccc;
  box-sizing: border-box;
  margin-right: 0.2rem;
  display: flex;
}
.value-box a {
  display: inline-block;
  width: 0.26rem;
  height: 0.26rem;
  text-align: center;
  color: #000;
}
.value-box input {
  width: 0.3rem;
  height: 0.26rem;
  text-align: center;
  border: 0 none;
  padding: 0;
  margin: 0;
  outline-style: none;
  border-right: 0.01rem solid #ccc;
  border-left: 0.01rem solid #ccc;
}
.nctouch-cart-bottom{
  position: fixed;
  bottom: 59px;
  width: 100%;
  height: 44px;
}
.all-check{
  float: left;
  margin-top: 12px;
  margin-left:10px;
  margin-right: 10px;
}
.total{
  float: left;
}
.check-out{
    display: block;
    float: right;
    width: 25%;
    height: 100%;
    background-color: #ff5001;
}
.total-money,.a,.b{
  float: left;
  line-height: 44px;
}
.nctouch-cart-bottom .check-out a {
    display: block;
    text-align: center;
    font-size: 18px;
    color: #FFF;
    height: 100%;
    line-height: 44px;
}
</style>