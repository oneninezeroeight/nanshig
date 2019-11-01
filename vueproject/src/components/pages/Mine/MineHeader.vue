<template>
  <header id="header" class="transparent">
    <div class="header-l">
      <a href="javascript:void(0);" @click="Navto('login')">
        <i class="el-icon-setting"></i>
      </a>
    </div>
    <div class="header-r">
      <a id="header-nav" href="javascript:void(0);">
        <i class="el-icon-more"></i>
      </a>
    </div>

    <div class="nctouch-nav-menu">
      <ul>
        <li>
          <a href="../../index.html">
            <i class="home"></i>首页
          </a>
        </li>
        <li>
          <a href="../search.html">
            <i class="search"></i>搜索
          </a>
        </li>
        <li>
          <a href="../product_first_categroy.html">
            <i class="categroy"></i>分类
          </a>
        </li>
        <li>
          <a href="javascript:void(0);">
            <i class="message"></i>消息
          </a>
        </li>
        <li>
          <a href="../cart_list.html">
            <i class="cart"></i>购物车
            <sup></sup>
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    Navto(name) {
      this.$router.push({
        name: name
      });
    }
  }
};
</script>
<style>
.header-l {
  float: left;
}
.header-r {
  float: right;
}
.header-l a {
  display: inline-block;
  width: 0.43rem;
  height: 0.43rem;
  line-height: 0.43rem;
}
.header-r a {
  display: inline-block;
  width: 0.43rem;
  height: 0.43rem;
  line-height: 0.43rem;
}
.header-l a i {
  display: inline-block;
  font-size: 0.22rem;
}
.header-r a i {
  display: inline-block;
  font-size: 0.22rem;
}
header a {
  color: #fff;
}

.nctouch-nav-menu {
  position: absolute;
  top: 0.3rem;
  right: 0.1rem;
  width: 1.1rem;
  height: 2.1rem;
  background-color: rgb(0, 0, 0, 0.3);
  z-index: 666;
  display: none;
}
</style>