<template>
  <el-carousel :interval="3000" arrow="always">
    <el-carousel-item v-for="item in imgs" :key="item.img">
        <img :src="item.img" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import ban1 from "../../../../public/images/banner1.jpg";
import ban2 from "../../../../public/images/banner2.jpg";
import ban3 from "../../../../public/images/banner3.jpg";
import ban4 from "../../../../public/images/banner4.jpg";
import ban5 from "../../../../public/images/banner5.jpg";
export default {
  data() {
    return {
      imgs: [
        {
          img: ban1
        },
        {
          img: ban2
        },
        {
          img: ban3
        },
        {
          img: ban4
        },
        {
          img: ban5
        }
      ]
    };
  }
};
</script>
<style>
.el-carousel {
  height: 1.63rem;
  margin-top:.43rem;
}
.el-carousel__item img {
    width:100%;
    height:1.63rem;
}

.el-carousel__container{
  height: 1.63rem !important;
}
.el-carousel__container .el-carousel__arrow--left {
  position: absolute;
  left: 0.1rem;
  top: 0.8rem;
  transform: translateY(-50%);
}
.el-carousel__container .el-carousel__arrow--right {
  position: absolute;
  right: 0.1rem;
  top: 0.8rem;
  transform: translateY(-50%);
}
 .el-carousel__indicators li{
     width:.2rem;
     height:.2rem;
     background-color:#fff;
     box-sizing: border-box;
     border-radius: 50%;
     margin:0.05rem;
     padding:0;
     display:none;
 }
</style>
