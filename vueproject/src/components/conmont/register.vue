<template>
  <div class="zhazhatao">
    <div class="nctouch-inp-con">
      <form action method>
        <ul class="form-box">
          <li class="form-item">
            <h4>手&nbsp;机&nbsp;号</h4>
            <div class="input-box">
              <input
                type="tel"
                placeholder="请输入手机号"
                class="inp"
                name="usermobile"
                id="usermobile"
                oninput="writeClear($(this));"
                maxlength="11"
              />
              <span class="input-del"></span>
            </div>
          </li>
          <li class="form-item">
            <h4>密&nbsp;码</h4>
            <div class="input-box">
              <input
                type="text"
                id="captcha"
                name="captcha"
                maxlength="4"
                size="10"
                class="inp"
                autocomplete="off"
                placeholder="请输入密码"
                oninput="writeClear($(this));"
              />
              <span class="input-del code"></span>
              <a href="javascript:void(0)" id="refreshcode" class="code-img"></a>
              <input type="hidden" id="codekey" name="codekey" value="241da99b" />
            </div>
          </li>
        </ul>
        <div class="remember-form">
          <input id="checkbox" type="checkbox" checked />
          <label
            for="checkbox"
            style="color:#000;font-size:.12rem;margin:0 .2rem 0 .1rem;line-height:.2rem"
          >同意</label>
          <a
            class="reg-cms"
            href="document.html"
            target="_blank"
            style="font-size:.14rem;line-height:.2rem"
          >用户注册协议</a>
        </div>
        <div class="error-tips"></div>
        <div class="form-btn">
          <a href="javascript:void(0);" class="btn" id="refister_mobile_btn">获取短信校验码</a>
        </div>
      </form>
    </div>
  </div>
</template>
 <script>
</script>
<style scoped>
.zhazhatao {
  width: 100%;
  height: 100%;
  background-color: #eee;
  padding-top: 0.43rem;
}
.nctouch-inp-con {
  width: 100%;
}
.nctouch-inp-con ul li {
  width: 100%;
  height: 0.43rem;
  line-height: 0.43rem;
  padding-left: 0.3rem;
  box-sizing: border-box;
}
.nctouch-inp-con ul li h4 {
  float: left;
  margin-right: 0.14rem;
  font-weight: normal;
  width: 0.58rem;
}
.nctouch-inp-con ul li input {
  border: 0 none;
  padding: 0;
  margin: 0;
  outline-style: none;
  height: 0.34rem;
}
.form-box {
  background-color: #fff;
}
.nctouch-inp-con .form-box li:nth-child(1) {
  border-bottom: 0.01rem solid #ccc;
}
.remember-form {
  height: 0.2rem;
  margin: 0.22rem 0.44rem 0;
}
.form-btn{
  width:3.3rem;
  height:.38rem;
  background-color:#ccc;
  border-radius: .1rem;
  text-align:center;
  margin:auto;
  margin-top:.3rem;
}
.form-btn a{
  line-height:.38rem;
  color:#000;
}
</style>

