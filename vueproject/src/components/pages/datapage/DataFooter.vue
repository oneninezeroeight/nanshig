<template>
  <div class="Datafooter">
    <ul>
      <li>
        <i class="el-icon-s-custom"></i>
        <span>客服</span>
      </li>
      <li @click="navto('shopping')">
        <i class="el-icon-shopping-cart-1"></i>

        <span>购物车</span>
      </li>
      <li @click="navto('shopping')">
        <h4 >立即购买</h4>
      </li>
      <li>
        <h4 @click="addcart">加入购物车</h4>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
    data(){
      return{
        id:"",
        id1:""
      }
    },
  //   async created() {
  //   // this.id1 = this.$route.params.id1;
  //   // // console.log(id1);
  //   // this.id = this.$route.params.id;
  //   // console.log(id);
  //   // let data = await this.$axios.post(
  //   //   "http://10.3.142.150:3000/goodslist",
  //   //   this.$qs.stringify({ id1, id })
  //   // );
  //   // this.render = data.data;
  //   // console.log(this.render);
  //   console.log(id,id1);
    
  // },
  methods: {
    navto(name) {
      this.$router.push({
        name: name
      });
    },
    async addcart() {

      let id1 = this.$route.params.id1;
    // console.log(id1);
      let id = this.$route.params.id;
      console.log(this.$route.params);
      
      let data = await this.$axios.post(
      "http://10.3.142.150:3000/addcart",
      this.$qs.stringify({ id1, id }),
    );
    console.log(data);
    this.$router.push({
      name:'shopping'
    })
    
    }
  }
};
</script>

<style>
.Datafooter {
  width: 100%;
  height: 0.44rem;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  z-index: 999;
}
.Datafooter ul {
  width: 100%;
  height: 100%;
  display: flex;
  align-content: center;
}
.Datafooter ul li {
  float: left;
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;
  justify-content: center;
  color: rgb(131, 128, 128);
}
.Datafooter ul li span {
  font-size: 0.12rem;
  color: #000;
}
.Datafooter ul li:nth-child(1) {
  width: 0.57rem;
  border: 0.01rem solid #ccc;
  border-left: 0;
  background-color: #fff;
}
.Datafooter ul li:nth-child(2) {
  width: 0.73rem;
  border-top: 0.01rem solid #ccc;
  background-color: #fff;
}
.Datafooter ul li:nth-child(3) {
  width: 1.09rem;
  background-color: #ff5001;
  color: #fff;
  font-size: 0.153rem;
}
.Datafooter ul li:last-child {
  flex: 1;
  background-color: #fb6e52;
  color: #fff;
  font-size: 0.153rem;
}
</style>