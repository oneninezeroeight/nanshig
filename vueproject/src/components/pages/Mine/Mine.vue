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
  // data(){
  //   return{
  //     a:[]
  //   }
  // },
  // async created(){
  //   let ab = await this.$axios("http://localhost:3000/list");
  //   console.log(ab);
  //   this.a = ab.data;
  //   console.log(this.a);
    
  // }
};
</script>
