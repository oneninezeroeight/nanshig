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
  }
};
</script>