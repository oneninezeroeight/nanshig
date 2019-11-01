<template>
  <div class="nctouch-home-layout" id="main-container2">
    <div class="nctouch-home-block item-goods" v-for="(i,index) in a" :key="index">
      <div class="tit-bar" v-text="i.goods.title"></div>

      <ul class="goods-list">
        <li v-for="(y,index) in i.goods.item" :key="index">
          <a href="tmpl/product_detail.html?goods_id=227242">
            <div class="goods-pic">
              <img
                :src = "y.goods_image"
                alt
              />
            </div>
            <dl class="goods-info">
              <dt class="goods-name" v-text="y.goods_name"></dt>
              <dd class="goods-price">
                ￥
                <em v-text="y.goods_price"></em>
              </dd>
            </dl>
          </a>
        </li>
      </ul>
    </div>
    <!-- <div class="nctouch-home-block item-goods">
      <div class="tit-bar">裤子全新上市</div>

      <ul class="goods-list">
        <li>
          <a href="tmpl/product_detail.html?goods_id=226725">
            <div class="goods-pic">
              <img
                src="https://www.nanshig.com/data/upload/shop/store/goods/45/45_05960745627128595_240.jpg"
                alt
              />
            </div>
            <dl class="goods-info">
              <dt class="goods-name">潮男秋冬季裤子男韩版潮流秋季加绒运动男士休闲裤宽松潮牌束脚工装裤 深灰色 L</dt>
              <dd class="goods-price">
                ￥
                <em>119.00</em>
              </dd>
            </dl>
          </a>
        </li>

        <li>
          <a href="tmpl/product_detail.html?goods_id=226708">
            <div class="goods-pic">
              <img
                src="https://www.nanshig.com/data/upload/shop/store/goods/45/45_05960739685357586_240.jpg"
                alt
              />
            </div>
            <dl class="goods-info">
              <dt class="goods-name">裤子男韩版潮流秋冬季运动裤男士加绒宽松休闲束脚长裤潮牌工装裤 黑色 XL</dt>
              <dd class="goods-price">
                ￥
                <em>119.00</em>
              </dd>
            </dl>
          </a>
        </li>

        <li>
          <a href="tmpl/product_detail.html?goods_id=225907">
            <div class="goods-pic">
              <img
                src="https://www.nanshig.com/data/upload/shop/store/goods/15/15_05600017640352052_240.jpg"
                alt
              />
            </div>
            <dl class="goods-info">
              <dt class="goods-name">哈伦裤男秋季韩版2017新款潮流修身青少年学生运动休闲百搭束脚裤 黑色 L</dt>
              <dd class="goods-price">
                ￥
                <em>130.00</em>
              </dd>
            </dl>
          </a>
        </li>

        <li>
          <a href="tmpl/product_detail.html?goods_id=225849">
            <div class="goods-pic">
              <img
                src="https://www.nanshig.com/data/upload/shop/store/goods/15/15_05599992122073239_240.jpg"
                alt
              />
            </div>
            <dl class="goods-info">
              <dt class="goods-name">休闲裤男士裤子男冬季修身小脚韩版潮流秋冬款2017学生哈伦束脚裤 宝蓝 32</dt>
              <dd class="goods-price">
                ￥
                <em>125.00</em>
              </dd>
            </dl>
          </a>
        </li>
      </ul>
    </div>
    <div class="nctouch-home-block item-goods">
      <div class="tit-bar">潮男个性内裤</div>

      <ul class="goods-list">
        <li>
          <a href="tmpl/product_detail.html?goods_id=226473">
            <div class="goods-pic">
              <img
                src="https://www.nanshig.com/data/upload/shop/store/goods/46/46_05928796945531887_240.jpg"
                alt
              />
            </div>
            <dl class="goods-info">
              <dt class="goods-name">男士内裤男平角裤纯棉宽松舒适透气青年潮韩版低腰性感四角短裤头 3条装【栀子+藏白+牡丹】 L</dt>
              <dd class="goods-price">
                ￥
                <em>89.00</em>
              </dd>
            </dl>
          </a>
        </li>

        <li>
          <a href="tmpl/product_detail.html?goods_id=226449">
            <div class="goods-pic">
              <img
                src="https://www.nanshig.com/data/upload/shop/store/goods/46/46_05928791149095904_240.jpg"
                alt
              />
            </div>
            <dl class="goods-info">
              <dt class="goods-name">南极人4条男士内裤男纯棉质透气U凸平角裤四角裤衩男生可爱短裤头 B组 L</dt>
              <dd class="goods-price">
                ￥
                <em>69.00</em>
              </dd>
            </dl>
          </a>
        </li>

        <li>
          <a href="tmpl/product_detail.html?goods_id=226517">
            <div class="goods-pic">
              <img
                src="https://www.nanshig.com/data/upload/shop/store/goods/46/46_05933889740034416_240.jpg"
                alt
              />
            </div>
            <dl class="goods-info">
              <dt class="goods-name">4条男士内裤 男三角裤纯棉舒适透气短裤性感裤头秋冬男式短裤 C组 L</dt>
              <dd class="goods-price">
                ￥
                <em>79.00</em>
              </dd>
            </dl>
          </a>
        </li>

        <li>
          <a href="tmpl/product_detail.html?goods_id=226508">
            <div class="goods-pic">
              <img
                src="https://www.nanshig.com/data/upload/shop/store/goods/46/46_05933887450255903_240.jpg"
                alt
              />
            </div>
            <dl class="goods-info">
              <dt class="goods-name">4条内裤男士内裤平角裤木纤维裤头男式中腰四角短裤秋冬裤衩 D组 L</dt>
              <dd class="goods-price">
                ￥
                <em>89.00</em>
              </dd>
            </dl>
          </a>
        </li>
      </ul>
    </div>
    <div class="nctouch-home-block item-goods">
      <div class="tit-bar">潮男必备鞋款</div>

      <ul class="goods-list">
        <li>
          <a href="tmpl/product_detail.html?goods_id=226550">
            <div class="goods-pic">
              <img
                src="https://www.nanshig.com/data/upload/shop/store/goods/41/41_05935724160716756_240.jpg"
                alt
              />
            </div>
            <dl class="goods-info">
              <dt class="goods-name">型男鞋子男秋季透气板鞋韩版潮流百搭帆布鞋休闲布鞋学生鞋男 灰色 42</dt>
              <dd class="goods-price">
                ￥
                <em>125.00</em>
              </dd>
            </dl>
          </a>
        </li>

        <li>
          <a href="tmpl/product_detail.html?goods_id=226592">
            <div class="goods-pic">
              <img
                src="https://www.nanshig.com/data/upload/shop/store/goods/41/41_05935730369793448_240.jpg"
                alt
              />
            </div>
            <dl class="goods-info">
              <dt class="goods-name">型男小白鞋男鞋韩版潮流男士休闲鞋秋季学生板鞋透气潮鞋子 绿色 42</dt>
              <dd class="goods-price">
                ￥
                <em>89.00</em>
              </dd>
            </dl>
          </a>
        </li>

        <li>
          <a href="tmpl/product_detail.html?goods_id=226646">
            <div class="goods-pic">
              <img
                src="https://www.nanshig.com/data/upload/shop/store/goods/42/42_05943353450158107_240.jpg"
                alt
              />
            </div>
            <dl class="goods-info">
              <dt class="goods-name">潮男鞋百搭潮鞋小白鞋高帮休闲鞋青少年运动学生板鞋6CM内增高男鞋8公分 白色 42</dt>
              <dd class="goods-price">
                ￥
                <em>106.00</em>
              </dd>
            </dl>
          </a>
        </li>

        <li>
          <a href="tmpl/product_detail.html?goods_id=226616">
            <div class="goods-pic">
              <img
                src="https://www.nanshig.com/data/upload/shop/store/goods/42/42_05943344220891470_240.jpg"
                alt
              />
            </div>
            <dl class="goods-info">
              <dt class="goods-name">潮男鞋高帮鞋板鞋韩版潮流百搭秋季厚底内增高小白鞋情侣休闲运动男鞋子 白色 42</dt>
              <dd class="goods-price">
                ￥
                <em>108.00</em>
              </dd>
            </dl>
          </a>
        </li>

        <li>
          <a href="tmpl/product_detail.html?goods_id=226775">
            <div class="goods-pic">
              <img
                src="https://www.nanshig.com/data/upload/shop/store/goods/41/41_05961421903930109_240.jpg"
                alt
              />
            </div>
            <dl class="goods-info">
              <dt class="goods-name">冬季新款小白鞋子男韩版潮流休闲鞋学生百搭板鞋运动男士潮鞋 白红 42</dt>
              <dd class="goods-price">
                ￥
                <em>108.00</em>
              </dd>
            </dl>
          </a>
        </li>

        <li>
          <a href="tmpl/product_detail.html?goods_id=226751">
            <div class="goods-pic">
              <img
                src="https://www.nanshig.com/data/upload/shop/store/goods/41/41_05961416010473862_240.jpg"
                alt
              />
            </div>
            <dl class="goods-info">
              <dt class="goods-name">冬季新款男鞋子男士潮鞋百搭休闲鞋帆布鞋韩版潮运动秋季板鞋 灰色 42</dt>
              <dd class="goods-price">
                ￥
                <em>89.00</em>
              </dd>
            </dl>
          </a>
        </li>

        <li>
          <a href="tmpl/product_detail.html?goods_id=227152">
            <div class="goods-pic">
              <img
                src="https://www.nanshig.com/data/upload/shop/store/goods/47/47_06071098393605574_240.jpg"
                alt
              />
            </div>
            <dl class="goods-info">
              <dt class="goods-name">2019春季新款小白鞋男鞋子韩版夏季板鞋男士百搭白鞋帆布休闲潮鞋 白红 42</dt>
              <dd class="goods-price">
                ￥
                <em>89.00</em>
              </dd>
            </dl>
          </a>
        </li>

        <li>
          <a href="tmpl/product_detail.html?goods_id=227170">
            <div class="goods-pic">
              <img
                src="https://www.nanshig.com/data/upload/shop/store/goods/47/47_06071101171302018_240.jpg"
                alt
              />
            </div>
            <dl class="goods-info">
              <dt class="goods-name">2019春季新款小白鞋男士板鞋男韩版潮鞋休闲鞋百搭白鞋男鞋子夏季 白黑 42</dt>
              <dd class="goods-price">
                ￥
                <em>89.00</em>
              </dd>
            </dl>
          </a>
        </li>

        <li>
          <a href="tmpl/product_detail.html?goods_id=227160">
            <div class="goods-pic">
              <img
                src="https://www.nanshig.com/data/upload/shop/store/goods/47/47_06071100369195301_240.jpg"
                alt
              />
            </div>
            <dl class="goods-info">
              <dt class="goods-name">2019春季新款小白鞋男士板鞋男韩版潮鞋休闲鞋百搭白鞋男鞋子夏季 白色 41</dt>
              <dd class="goods-price">
                ￥
                <em>89.00</em>
              </dd>
            </dl>
          </a>
        </li>

        <li>
          <a href="tmpl/product_detail.html?goods_id=227206">
            <div class="goods-pic">
              <img
                src="https://www.nanshig.com/data/upload/shop/store/goods/47/47_06071103834357355_240.jpg"
                alt
              />
            </div>
            <dl class="goods-info">
              <dt class="goods-name">2019春季透气阿甘鞋男小白鞋男士休闲帆布板鞋韩版潮流男鞋子潮鞋 白绿 42</dt>
              <dd class="goods-price">
                ￥
                <em>89.00</em>
              </dd>
            </dl>
          </a>
        </li>
      </ul>
    </div> -->
  </div>
</template>
<script>
export default {
  
  data(){
    return{
      a:[]
    }
  },
  async created(){
    let ab = await this.$axios("http://10.3.142.150:3000/list");
    // console.log(ab);
    this.a = ab.data;
    // console.log(this.a);
    // console.log(this.a.goods_image_url);
    
    
  }
}
</script>

<style>
#main-container2 {
  overflow: hidden;
  margin-bottom: .586rem;
}
.nctouch-home-layout img {
  width: 1.76rem;
  height: 1.76rem;
}
.nctouch-home-layout ul li {
  width: 50%;
  float: left;
  text-align: center;
}
.nctouch-home-layout ul li dt {
  margin: auto;
  width: 1.7rem;
  height: 0.25rem;
  overflow: hidden;
  color: #000;
  line-height: 0.2rem;
  font-size: 0.14rem;
  padding-bottom: 0.05rem;
  border-bottom: 0.01rem solid #ccc;
  box-sizing: border-box;
}
.nctouch-home-layout ul li dd {
  float: left;
  font-size: 0.154rem;
  color: orange;
  margin-left: 0.12rem;
}
.nctouch-home-layout ul li dd em {
  font-style: normal;
  font-weight:bolder;
}
</style>