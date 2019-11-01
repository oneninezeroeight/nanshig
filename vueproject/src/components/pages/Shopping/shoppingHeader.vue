<template>
  <header>
    <span class="el-icon-arrow-left tableft" @click="back"></span>
    <p>购物车</p>
    <span class="el-icon-more searchr"></span>
  </header>
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
header p {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  line-height: 0.43rem;
  right: 0;
}
</style>