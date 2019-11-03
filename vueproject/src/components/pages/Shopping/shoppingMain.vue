<template>
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
    <ul class="shopping-list">
      <li>
        <span class="storecheck" style="float:left">
          <input type="checkbox" name="cart_id" value="226205" />
        </span>
        <div class="goods-pic">
          <img
            src="https://www.nanshig.com/data/upload/shop/store/goods/45/45_05860523640282479_360.jpg"
          />
        </div>
        <dl class="goods-info">
          <dt class="goods-name" style="float:left">
            <a
              href="https://www.nanshig.com/wap/tmpl/product_detail.html?goods_id=226205"
            >春夏季白色打底衫男韩版修身紧身健身纯棉短袖t恤男士体恤衫潮流 白色 L</a>
          </dt>
        </dl>
        <div>
          <a href="#" class="el-icon-delete"></a>
        </div>
        <br />
        <div class="goods-subtotal">
          <span class="goods-price" style="float:left">
            ￥
            <strong>78.00</strong>
          </span>
          <span class="goods-sale"></span>
          <div class="value-box">
            <span class="minus">
              <a href="javascript:void(0);">-&nbsp;</a>
            </span>
            <span>
              <input type="text" pattern="[0-9]*" readonly class="buy-num buynum" value="1" />
            </span>
            <span class="add">
              <a href="javascript:void(0);">+&nbsp;</a>
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>


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
  font-size: 0.13rem;
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
</style>