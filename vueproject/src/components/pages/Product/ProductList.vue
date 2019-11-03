<template>
  <div class="goodsproduct">
    <div class="goods-search-list-nav">
      <ul id="nav_ul">
        <li>
          <a href="javascript:void(0);" class="current" id="sort_default">
            综合排序
            <i></i>
          </a>
        </li>
        <li>
          <a href="javascript:void(0);" class onclick="init_get_list('2', '1')">销量优先</a>
        </li>
        <li>
          <a href="javascript:void(0);" id="search_adv">
            筛选
            <i></i>
          </a>
        </li>
      </ul>
      <div class="browse-mode">
        <a href="javascript:void(0);" id="show_style">
          <span class="el-icon-s-unfold"></span>
        </a>
      </div>
    </div>
    <div id="product_list" class="list">
      <ul class="goods-secrch-list">
        <li class="goods-item" goods_id="213994">
          <span class="goods-pic">
            <a href="product_detail.html?goods_id=213994">
              <img
                src="https://www.nanshig.com/data/upload/shop/store/goods/18/18_05533665703933899_360.jpg"
              />
            </a>
          </span>
          <dl class="goods-info">
            <dt class="goods-name">
              <a href="product_detail.html?goods_id=213994">
                <h4>简约纯色男士衬衣矮个子薄透气清凉麻料立领五分袖衬衫潮 白色 M</h4>
                <h6></h6>
              </a>
            </dt>
            <dd class="goods-sale">
              <a href="product_detail.html?goods_id=213994">
                <span class="goods-price">
                  ￥
                  <em>88.00</em>
                </span>
              </a>
            </dd>
            <dd class="goods-assist">
              <a href="product_detail.html?goods_id=213994">
                <span class="goods-sold">
                  销量
                  <em>667</em>
                </span>
              </a>
              <div class="goods-store">
                <a href="javascript:void(0);" data-id>
                  顺潮服装
                  <i></i>
                </a>

                <div class="sotre-creidt-layout" style="display: none;"></div>
              </div>
            </dd>
          </dl>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
</script>

<style>
/* .goodsproduct {
  margin-top: 0.43rem;
} */
.goodsproduct .goods-search-list-nav {
  background-color: #fff;
  position: fixed;
  top: 0.43rem;
  width: 100%;
  height: 0.43rem;
  border-bottom: 0.01rem solid #eee;
  box-sizing: border-box;
}
#nav_ul {
  height: 0.43rem;
  overflow: hidden;
  float: left;
}
#nav_ul > li {
  float: left;
  height: 100%;
  width: 0.95rem;
  text-align: center;
  position: relative;
}
#nav_ul > li:nth-child(1) {
  width: 1.275rem;
}
#nav_ul > li a {
  color: #000;
  font-size: 0.14rem;
  line-height: 0.43rem;
}
#nav_ul > li i {
  border: 0.05rem solid;
  border-color: #ccc;
  position: absolute;
  border-color: #ccc transparent transparent transparent;
  top: 0.19rem;
  margin-left: 0.05rem;
}
.goodsproduct .browse-mode {
  width: 0.55rem;
  height: 0.43rem;
  float: right;
}
.goodsproduct .browse-mode a {
  display: block;
  width: 100%;
  height: 100%;
  border-left: 0.01rem solid #eee;
  text-align: center;
}
.goodsproduct .browse-mode a span {
  font-size: 0.264rem;
  line-height: 0.43rem;
  color: rgb(73, 61, 61);
}

/* 数据列表 */
#product_list {
  margin-top: 0.86rem;
  float: left;
}
#product_list .goods-secrch-list li {
  height: 1.18rem;
}
#product_list .goods-secrch-list li .goods-pic {
  float: left;
  display: block;
  width: 1.18rem;
  height: 1.18rem;
  text-align: center;
}
#product_list .goods-secrch-list li img {
  width: 1.01rem;
  height: 1.01rem;
  margin-top: 0.085rem;
}
#product_list .goods-secrch-list li .goods-info {
  float: left;
  width: 2.57rem;
  height: 1.18rem;
  box-sizing: border-box;
  border-bottom: 0.01rem solid #ccc;
  padding-right: 0.08rem;
  padding-top: 0.08rem;
}
#product_list .goods-secrch-list li .goods-info dt h4 {
  font-size: 0.14rem;
  font-weight: normal;
  color: #000;
}
#product_list .goods-secrch-list li .goods-info dt h6 {
  height: 0.198rem;
}

#product_list .goods-secrch-list li .goods-info .goods-sale {
  height: 0.286rem;
}
.goods-secrch-list li .goods-info .goods-sale span {
  line-height: 0.286rem;
  font-size: 0.14rem;
  color: rgb(180, 35, 35);
  font-weight: bolder;
}
.goods-secrch-list li .goods-info .goods-sale span em {
  font-size: 0.18rem;
  font-style: normal;
}
#product_list .goods-secrch-list li .goods-info .goods-assist {
  height: 0.22rem;
}
#product_list .goods-secrch-list li .goods-info .goods-assist .goods-sold {
  width: 0.99rem;
  height: 0.22rem;
  float: left;
}
#product_list .goods-secrch-list li .goods-info .goods-assist .goods-sold em{
    color:#000;
    font-style:normal;
}
#product_list .goods-secrch-list li .goods-info .goods-assist .goods-store {
  float: right;
}
#product_list .goods-secrch-list li .goods-info .goods-assist a{
     color:rgb(112, 69, 69);
     font-size:.13rem;
     line-height:.22rem;
}
#product_list .goods-secrch-list li .goods-info .goods-assist .goods-store a{
    margin-right:.22rem;
}
</style>