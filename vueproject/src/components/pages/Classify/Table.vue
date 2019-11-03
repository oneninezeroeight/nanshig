<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="上装" name="first">
      <Shang />
    </el-tab-pane>
    <el-tab-pane label="下装" name="second">
      <Xia />
    </el-tab-pane>
    <el-tab-pane label="鞋靴" name="third">
      <Xie />
    </el-tab-pane>
    <el-tab-pane label="美妆" name="fourth">
      <Mei />
    </el-tab-pane>
    <el-tab-pane label="套装" name="five">
      <Tao />
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import Shang from "./list/Shang";
import Xia from "./list/Xia";
import Xie from "./list/Xie";
import Mei from "./list/Mei";
import Tao from "./list/Tao";
export default {
  components: {
    Shang,
    Xia,
    Xie,
    Mei,
    Tao
  },
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>