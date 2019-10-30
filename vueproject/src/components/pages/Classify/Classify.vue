<template>
  <div class="classify">
    <Header></Header>
    <Tablist></Tablist>
    <AppNav></AppNav>
  </div>
</template>

<script>
import AppNav from "../../conmont/AppNav/AppNav.vue";
import Tablist from "./Classtablist";
import Header from "./ClassHeader";

export default {
  components: {
    Header,
    Tablist,
    AppNav
  }
};
</script>
