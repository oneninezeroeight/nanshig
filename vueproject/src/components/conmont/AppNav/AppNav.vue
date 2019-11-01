<template>
  <div class="app-nav">
    <div>
      <ul>
        <li
          v-for="(item, index) in menu"
          :key="index"
          @click="goto(item.path,index)"
        >
          <i :class="item.icon"></i>
          <span>{{ item.text }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Table",
  data() {
    return {
      active: "/home",
      offset: 0,
      menu: [
        {
          name: "home",
          text: "首页",
          path: "/home",
          icon: "el-icon-house"
        },
        {
          name: "classify",
          text: "分类",
          path: "/classify",
          icon: "el-icon-s-unfold"
        },
        {
          name: "login",
          text: "消息",
          path: "/login",
          icon: "el-icon-search"
        },
        {
          name: "shopping",
          text: "购物车",
          path: "/shopping",
          icon: "el-icon-shopping-cart-full"
        },
        {
          name: "mine",
          text: "我的",
          path: "/mine",
          icon: "el-icon-s-check"
        }
      ]
    };
  },
  methods: {
    goto(path, index) {
      this.$router.push(path);
      this.offset = index;
    }
  }
};
</script>

<style>
.app-nav {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.586rem !important;
  padding: 0;
  box-sizing: border-box;
  background-color:#fff;
}
.app-nav div {
  width: 100%;
  height: 100%;
  padding-top: 0.11rem;
  box-sizing: border-box;
}
.app-nav div ul {
  width: 100%;
  height: 100%;
  display: flex;
}

.app-nav div ul li {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #b0b0b0;
}
.app-nav div ul .nav-color {
  color: #000;
}
.app-nav div ul .nav-to {
  color: #ccc;
}
.app-nav div ul li i {
  font-size: 0.2rem;
}
.app-nav div ul li span {
  font-size: 0.12rem;
}
</style>
