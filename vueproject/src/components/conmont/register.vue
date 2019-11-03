<template>
  <div class="zhazhatao">
    <div class="nctouch-inp-con">
      <form action method>
        <ul class="form-box">
          <li class="form-item">
            <h4>账&nbsp;&nbsp;号</h4>
            <div class="input-box">
              <input
                type="tel"
                placeholder="请输入账号"
                class="inp"
                name="usermobile"
                id="usermobile"
                maxlength="11"
                v-model="name"
                @blur="user"
              />
              <span class="input-del" v-text="tips1"></span>
            </div>
          </li>
          <li class="form-item">
            <h4>密&nbsp;码</h4>
            <div class="input-box">
              <input
                type="text"
                id="captcha"
                name="captcha"
                maxlength="16"
                size="10"
                class="inp"
                autocomplete="off"
                placeholder="请输入密码"
                v-model="pwd"
                @blur="password"
              />
              <span class="input-del code" v-text="tips2"></span>
              <a href="javascript:void(0)" id="refreshcode" class="code-img"></a>
              <input type="hidden" id="codekey" name="codekey" value="241da99b" />
            </div>
          </li>
        </ul>
        <div class="remember-form">
          <input id="checkbox" type="checkbox" :checked="check" @click="ischeck" />
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
        <div class="form-btn" @click="register">
          <a href="javascript:void(0);" class="btn" id="refister_mobile_btn">注册</a>
        </div>
        <div class="error-tips" v-text="tips3"></div>
        
      </form>
    </div>
  </div>
</template>

 <script>
import qs from "qs";
export default {
  data() {
    return {
      name: "",
      pwd: "",
      tips1: "",
      tips2: "",
      tips3: "",
      uisok: false,
      pisok: false,
      check: false
    };
  },
  methods: {
    user: function() {
      let username = this.name;
      if (username == "") {
        this.tips1 = "账号不能为空";
        this.uisok = false;
      } else {
        this.$axios
          .post("http://10.3.142.150:3000/users/sign/" + username)
          .then(({ data }) => {
            if (data.length == 1) {
              this.tips1 = "该用户已注册";
              this.uisok = false;
            } else {
              this.tips1 = "";
              this.uisok = true;
            }
          });
      }
    },
    password: function() {
      if (this.pwd == "") {
        this.tips2 = "密码不能为空";
        this.pisok = false;
      } else {
        var myreg = /^(\w){6,20}$/;
        if (!myreg.test(this.pwd)) {
          this.tips2 = "密码格式不对";
          this.pisok = false;
        } else {
          this.tips2 = "";
          this.pisok = true;
        }
      }
    },
    ischeck: function() {
      this.check = !this.check;
      console.log(this.check);
    },
    register: function() {
      if (this.pisok != true || this.uisok != true) {
        this.tips3 = "账号或密码出错"
      } else {
        if (this.check != true) {
            this.tips3 = "请勾选协议"
        } else {
          this.tips3 = ""
          let _this = this;

          let aee = {
            username: this.name,
            password: this.pwd
          };
          this.$axios({
            method: "post",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            url: "http://10.3.142.150:3000/users/register",
            data: qs.stringify(aee)
          }).then(function(res) {
            // console.log(res);

            if (res.data[0] == undefined) {
              alert("注册成功");
              _this.$router.go(-1);
              console.log(res.data);
            } else {
              alert("注册失败");
              // console.log(res);
            }
          });
        }
      }
    }
  }
};
</script>


<style scoped>
.zhazhatao {
  width: 100%;
  height: 100%;
  background-color: #eee;
  padding-top: 0.43rem;
}
.inp {
  width: 170px;
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
.form-btn {
  width: 3.3rem;
  height: 0.38rem;
  background-color: orange;
  border-radius: 0.1rem;
  text-align: center;
  margin: auto;
  margin-top: 0.3rem;
}
.form-btn a {
  line-height: 0.38rem;
  color: #000;
}
.error-tips{
  text-align: center;
  margin-top: 20px;
  color: red;
}
</style>

