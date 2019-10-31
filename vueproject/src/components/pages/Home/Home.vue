<template>
  <div class="home">
    <Header></Header>
    <Banner></Banner>
    <List></List>
    <AppNav></AppNav>
  </div>
</template>

<script>
import AppNav from "../../conmont/AppNav/AppNav.vue";
import Header from "./Homeheader";
import Banner from "./HomeBanner";
import List from "./Homelist";
export default {
  components: {
    Header,
    Banner,
    List,
    AppNav
  },
  methods:{

}
};

</script>
<style> 
   
</style>
