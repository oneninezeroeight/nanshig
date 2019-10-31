<template>
  <header>
    <span class="el-icon-full-screen tableft"></span>
    <p>
      <input type="text" />
      <i class="el-icon-search"></i>
    </p>
    <span class="el-icon-tickets searchr"></span>
  </header>
</template>

<script>
</script>

<style>
header {
  width: 100%;
  height: 0.43rem;
  background-color: #ff5001;
  color: #fff;
  text-align: center;
  position:fixed;
  top:0;
    z-index: 999;
}
header span {
  display: inline-block;
}
header .tableft {
  font-size: 0.24rem;
  width: 0.5rem;
  float: left;
  line-height: 0.43rem;
}
header .searchr {
  width: 0.4rem;
  float: right;
  font-size: 0.24rem;
  line-height: 0.43rem;
  margin-right:.1rem;
}
header .logo {
  font-size: 0.3rem;
  font-weight: bolder;
}

header p{
    float:left;
    position:absolute;
    right:.52rem;
}
header p input{
    width:2.38rem;
    height:.3rem;
    border-radius: .1rem;
    background-color:#000;
    opacity: .3;
    border:0;
    margin-top:0.05rem;
}
header p i{
    font-size:.15rem;
    position:absolute;
    left:.1rem;
    line-height:.35rem;
    top:.1rem;
    color:#000;
    opacity: .3;
}
</style>