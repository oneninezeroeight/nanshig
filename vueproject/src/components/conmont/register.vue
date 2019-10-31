<template>
    <div class="nctouch-main-layout fixed-Width">
  <div class="nctouch-inp-con">
    <form action="" method="">
      <ul class="form-box">
        <li class="form-item">
          <h4>账&nbsp;&nbsp;号</h4>
          <div class="input-box">
            <input type="tel" placeholder="请输入手机号" class="inp" name="usermobile" id="usermobile" oninput="writeClear($(this));" maxlength="11">
            <span class="input-del"></span></div>
        </li>
        <li class="form-item">
          <h4>验&nbsp;证&nbsp;码</h4>
          <div class="input-box">
            <input type="text" id="captcha" name="captcha" maxlength="4" size="10" class="inp" autocomplete="off" placeholder="输入验证码" oninput="writeClear($(this));">
            <span class="input-del code"></span><a href="javascript:void(0)" id="refreshcode" class="code-img"><img border="0" id="codeimage" name="codeimage" src="https://www.nanshig.com/mobile/index.php?act=seccode&amp;op=makecode&amp;k=241da99b&amp;t=0.36715206172145765"></a>
            <input type="hidden" id="codekey" name="codekey" value="241da99b">
          </div>
        </li>
      </ul>
      <div class="remember-form">
        <input id="checkbox" type="checkbox" checked="">
        <label for="checkbox">同意</label>
        <a class="reg-cms" href="document.html" target="_blank">用户注册协议</a> </div>
      <div class="error-tips"></div>
      <div class="form-btn"><a href="javascript:void(0);" class="btn" id="refister_mobile_btn">获取短信校验码</a></div>
      
    </form>
  </div>
  <input type="hidden" name="referurl">
</div>
</template>

<style>

</style>

