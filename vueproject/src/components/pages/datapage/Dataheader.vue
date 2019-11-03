<template>
  <div>
    <span class="el-icon-arrow-left tableft"></span>
    <span class="el-icon-more searchr"></span>
    <ul class="tabpage">
      <li>
        <span>商品</span>
      </li>
      <li>
        <span>详情</span>
      </li>
      <li>
        <span>评价</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>


<style>
.tabpage {
  margin: auto;
  overflow: hidden;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.tabpage li {
  float: left;
  width: 0.41rem;
  height: 0.43rem;
  margin: 0 0.1rem;
  line-height: 0.43rem;
}
</style>