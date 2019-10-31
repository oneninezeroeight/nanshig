<template>
  <div class="Mine">
    <Header></Header>
    <Main></Main>
    <AppNav></AppNav>
  </div>
</template>
<script>
import AppNav from "../../conmont/AppNav/AppNav.vue";
import Header from "./MineHeader";
import Main from "./Minemain";
export default {
  components: {
    Header,
    AppNav,
    Main
  }
};
</script>
