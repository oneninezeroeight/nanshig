<template>
  <div class="main">
    <ul class="form-box">
      <li class="form-item">
        <h4>账 户</h4>
        <div class="input-box">
          <input type="text" placeholder="用户名/邮箱/已验证手机" class="inp" name="username" id="username" />
          <span class="input-del"></span>
        </div>
      </li>
      <li class="form-item">
        <h4>密 码</h4>
        <div class="input-box">
          <input
            type="password"
            autocomplete="off"
            placeholder="登录密码"
            class="inp"
            name="pwd"
            id="userpwd"
          />
          <span class="input-del"></span>
        </div>
      </li>
    </ul>

    <div class="remember-form">
      <input id="checkbox" type="checkbox" checked class="checkbox" />
      <label for="checkbox">七天自动登录</label>
      <a class="forgot-password" href="find_password.html">忘记密码？</a>
    </div>
    <div class="form-btn ok">
      <a href="javascript:void(0);" class="btn" id="loginbtn">登录</a>
    </div>
    <div class="joint-login">
      <h2>
        <span>合作账号登录</span>
      </h2>
      <ul id="connect">
        <li>
          <a class="weibo" href="javascript: void(0);">
              <img src="../../../../public/images/weibo.png" alt="">
          </a>
        </li>
        <li>
          <a class="qq" href="javascript: void(0);">
              <img src="../../../../public/images/qq.png" alt="">
          </a>
        </li>
        <li class="wxshow" style="display:none;">
          <a class="weixin" href="javascript: void(0);"></a>
        </li>
      </ul>
    </div>
    <div style="margin-top: 1.066667rem;text-align: center;">
      <a
        href="https://www.nanshig.com/wap/tmpl/member/register_mobile.html"
        style="border: 0.01rem solid #f40;padding: 0.05rem;border-radius: 0.05rem;color: #f40;font-size: .14rem;"
      >手机注册</a>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.main {
  margin-top: 0.43rem;
  background-color:rgb(252, 246, 246);
}
.main ul li {
  width: 100%;
  height: 0.42rem;
  line-height: 0.42rem;
  padding-left: 0.3rem;
  box-sizing: border-box;
}
.main ul li h4 {
  float: left;
  margin-right: 0.2rem;
}
.main ul li input {
  border: 0 none;
  padding: 0;
  margin: 0;
  outline-style: none;
  height: 0.3rem;
}
.form-box{
  background-color:#fff;
}
.main .form-box li:nth-child(1) {
  border-bottom: 0.01rem solid #ccc;
}

.remember-form{
    height:.2rem;
    margin:.22rem .44rem 0;
    font-size:.12rem;
    line-height:.2rem;
}
.remember-form #checkbox{
    width:.16rem;
    height:.16rem;
}
.remember-form a{
    float:right;
}
.form-btn{
    width:90%;
    margin:auto;
    background-color:#ff5001;
    border-radius: .1rem;
    height:.4rem;
    margin-top:.3rem;
}
.form-btn a{
    color:#fff;
    line-height:.4rem;
    display:block;
    text-align:center;
}
    .joint-login h2{
        height:.24rem;
        border-bottom:0.01rem solid #ccc;
        position:relative;
    }
    .joint-login h2 span{
        font-size:.12rem;
        width:1.16rem;
        height:.2rem;
        background-color:rgb(252, 246, 246);
        line-height:.2rem;
        position: absolute;
        left:50%;
        top:.13rem;
        text-align:center;
        transform: translateX(-50%);
    }
    #connect{
        width:2.2rem;
        margin:auto;
    }
    #connect li{
        width:1.1rem;
        float:left;
        margin-top:.3rem;
    }
    #connect li a img{
        width:.43rem;
        height:.43rem;
    }
<<<<<<< HEAD
/* 
        border: 1px solid #f40;
=======

        /* border: 1px solid #f40;
>>>>>>> adee2006f338e9185cc78ab039aada36dcbd0319
    padding: 0.2rem;
    border-radius: 5px;
    color: #f40;
    font-size: 0.8rem; */
</style>

