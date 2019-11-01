<template>
  <div class="Shopping">
    <Header></Header>
    <goodsMain></goodsMain>
    <AppNav></AppNav>
  </div>
</template>

<script>
import AppNav from "../../conmont/AppNav/AppNav.vue";
import goodsMain from "./shoppingMain";
import Header from "./shoppingHeader";
export default {
  components: {
    Header,
    goodsMain,
    AppNav
  }
};
</script>
