<template>
  <div class="product">
    <Header></Header>
    <Goodslist></Goodslist>
    <AppNav></AppNav>
  </div>
</template>

<script>
import Header from "./ProductHeader";
import Goodslist from "./ProductList";
import AppNav from "../../conmont/AppNav/AppNav";
export default {
  components: {
    Header,
    Goodslist,
    AppNav
  }
};
</script>

<style>
.product header p {
  width: 2.38rem;
  float: left;
  position: absolute;
  left: 0.44rem;
  text-align: left;
}
</style>