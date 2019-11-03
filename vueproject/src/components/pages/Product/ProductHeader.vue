<template>
  <header>
    <span @click="back" class="el-icon-arrow-left tableft"></span>
    <p>
      <input type="text" />
      <i class="el-icon-search"></i>
    </p>
    <span class="el-icon-more searchr"></span>
    <span @click="Navto('classify')" class="classfiy-sp4" style="float:right">
      <i class="el-icon-film"></i>
      分类
    </span>
  </header>
</template>

<script>
export default {
  methods: {
    Navto(name) {
      this.$router.push({
        name: name
      });
    },
    back() {
      this.$router.go(-1);
    }
  }
};
</script>
<style>
.classfiy-sp4 {
  font-size: 0.12rem;
  width: 0.28rem;
  height: 0.34rem;
  margin-top: 0.045rem;
}
.classfiy-sp4 i {
  font-size: 0.17rem;
}
</style>