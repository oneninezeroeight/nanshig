<template>
  <div class="Information">
    <Header></Header>
    <Main></Main>
    <AppNav></AppNav>
  </div>
</template>

<script>
import AppNav from "../../conmont/AppNav/AppNav.vue";
import Main from "./mainmation";
import Header from "./header";
export default {
  components: {
    Header,
    Main,
    AppNav
  }
};
</script>
