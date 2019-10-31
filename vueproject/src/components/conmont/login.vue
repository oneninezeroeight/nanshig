<template>
    <div>
        <header>
            <span class="el-icon-house tableft"></span>
            <p class="a-l">登录</p>
        </header> 
        <div class="main">
            <ul class="form-box">
                <li class="form-item">
                    <h4>账 户</h4>
                    <div class="input-box">
                    <input type="text" placeholder="用户名/邮箱/已验证手机" class="inp" name="username" id="username" @blur="user" v-model="name" />
                    <span class="input-del" v-text="tips1"></span>
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
                        @blur="pwd"
                        v-model="password"
                    />
                    <span class="input-del" v-text="tips2"></span>
                    </div>
                </li>
            </ul>
            <div class="remember-form">
                <input id="checkbox" type="checkbox" checked class="checkbox" />
                <label for="checkbox">七天自动登录</label>
                <a class="forgot-password" href="find_password.html">忘记密码？</a>
            </div>
            <div class="form-btn ok">
                <a href="javascript:void(0);" class="btn" id="loginbtn" @click="login">登录</a>
            </div>
            <div class="joint-login">
                <h2>
                    <span>合作账号登录</span>
                </h2>
                <ul id="connect">
                    <li>
                        <a class="weibo" href="javascript: void(0);">
                            <img src="../../../public/images/weibo.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a class="qq" href="javascript: void(0);">
                            <img src="../../../public/images/qq.png" alt="">
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
        <AppNav />
    </div>
</template>
<script>
import AppNav from "./AppNav/AppNav.vue";
export default {
  components: {
    AppNav
  },
  data(){
      return {
          name:"",
          password:"",
          tips1:"",
          tips2:"",
          uisok:false,
          pisok:false
      }
  },
  methods:{
      user:function () {
        //   console.log(11);
        //   console.log(this.name);
          
          let _username  = this.name;
          if (_username ==""){
              this.tips1 = "用户名不能为空";
              this.uisok = false;
          } else{
              this.$axios.post("http://10.3.142.150:3000/users/sign/" + _username).then(({data})=>{
                //   let data = res.data.length
                //   console.log(data.length);
                  if(data.length == 0){
                      this.tips1 = '没有该用户';
                      this.uisok = false;
                  }else{
                      this.tips1 = '';
                      this.uisok = true;
                  }
              })

          }
      },
      pwd:function () {
          if (this.password == ""){
              this.tips2 = "密码不能为空";
              this.pisok = false;
          }else{
              var myreg = /^(\w){6,20}$/;
              if(!myreg.test(this.password)){
                  this.tips2 = "密码格式不对";
                  this.pisok = false;
              }else{
                  this.tips2 = "";
                  this.pisok = true
              }
          }
      },
      login:function () {
            if(this.uisok == false){
                this.user();
            } else  if(this.pisok == false){
                    this.pwd();
            }else{
                // let _username  = this.name;
                // var canshu = {
                //     username:aa,
                //     password:123456
                // }
                
                this.$axios.post("http://10.3.142.150:3000/users/login").then(({data})=>{
                //   let data = res.data.length
                  console.log(data);
                //   if(data.length == 0){
                //       this.tips1 = '没有该用户';
                //       this.uisok = false;
                //   }else{
                //       this.tips1 = '';
                //       this.uisok = true;
                //   }
              })

            }            
           
            
      }
  }
};
</script>

<style scoped>
h4{
    color: black;
}

 .a-l{
        width:100%;
        line-height:.43rem;
        right:0;
    }
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
</style>