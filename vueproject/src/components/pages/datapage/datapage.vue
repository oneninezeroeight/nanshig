<template>
  <div class="datapage">
    <Datamain></Datamain>
    <DataFooter></DataFooter>
  </div>
</template>
<script>
import Datamain from "./Datamain";
import DataFooter from "./DataFooter";
export default {
    data(){
        return{
            bool:false
        }
    },
  components: {
    Datamain,
    DataFooter
  }
};
</script>