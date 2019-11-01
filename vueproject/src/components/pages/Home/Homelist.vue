<template>
  <div class="nctouch-home-layout" id="main-container2">
    <div class="nctouch-home-block item-goods" v-for="(i,index) in a" :key="index">
      <div class="tit-bar" v-text="i.goods.title"></div>

      <ul class="goods-list">
        <li v-for="(y,index) in i.goods.item" :key="index" @click="navTo()">
          <a>
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
    
    
  },
  methods:{
  navTo(){
    // console.log(this.a[index].goods.item[indexs]);
    
    // let id = this.a[index];
    this.$router.push({
      name:"datapage"
    })
  },
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