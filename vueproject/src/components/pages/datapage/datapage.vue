<template>
  <div class="datapage">
    <DataHeader v-show="bool"></DataHeader>
    <Datamain></Datamain>
    <DataFooter></DataFooter>
  </div>
</template>
<script>
import Datamain from "./Datamain";
import DataHeader from "./Dataheader";
import DataFooter from "./DataFooter";
export default {
    data(){
        return{
            bool:false
        }
    },
  components: {
    DataHeader,
    Datamain,
    DataFooter
  }
  
};
</script>