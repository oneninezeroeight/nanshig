<template>
  <div class="datapage">
    <DataHeader></DataHeader>
    <Datamain></Datamain>
    <DataFooter></DataFooter>
  </div>
</template>
<script>
import Datamain from "./Datamain";
import DataHeader from "./Dataheader";
import DataFooter from "./DataFooter";
export default {
  components: {
    DataHeader,
    Datamain,
    DataFooter
  },
  // async created(){
  //   let id1 = this.$route.params.id1;
  //   console.log(id1);
  //   let id = this.$route.params.id;
  //   console.log(id);
  //     await this.$axios.post("http://10.3.142.150:3000/goodslist",this.$qs.stringify({id1,id})
  //   ).then(res=>{
  //     console.log(res.data);
      
  //   })
  //   // console.log(data);
    
    
    
  // }
};
</script>