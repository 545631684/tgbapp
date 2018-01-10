<template>
  <div class="wrap hs">
    <transition><top></top></transition>

    <dl class="flex dlzc">
      <dd @click="zc" v-bind:class="{on:zhuce}">注册</dd>
      <dd @click="dl" v-bind:class="{on:denglu}">登陆</dd>
    </dl>

    <!-- 登陆模块 -->
    <div class="denglu" v-if="dlmk">
      <input class="dl_tel" type="text" v-model="dl_tel" placeholder="请输入手机号码">
      <input class="dl_password" type="password" v-model="dl_password" placeholder="请输入密码">

      <a class="dl_simt" @click="Land">立即登陆</a>
      <router-link tag="div" class="dl_back" to="/retrievalPassword">找回密码</router-link>

    </div>

    <!-- 注册模块1 -->
    <div class="denglu zhuce" v-if="zcmk1">
      <input class="zc_tel" type="text" v-model="zc_tel" placeholder="请输入手机号码">
      <div class="zc_yzm">
        <input type="text" v-model="zc_yzm" placeholder="请输入验证码">
        <label @click="createCode"><div id="v_container" v-html="checkCode"></div></label>
      </div>

      <a class="zc_simt" @click="register">下一步</a>
      <a href="" class="zc_back">轻触“下一步”按钮，代表您已同意</a>
    </div>

    <!-- 注册模块2 -->
    <div class="denglu zhuce" v-if="zcmk2">
      <a class="zc_back2">验证码已发送至：{{zc_tel}}</a>
      <div class="zc_yzm2">
        <input type="text" v-model="zc_yzm2" placeholder="请输入验证码">
        <a class="yzms" v-if="zc_yzmMiao">{{miaos}}s</a>
        <a class="yzman" v-if="zc_yzman" @click="getVerification">获取验证码</a>
      </div>
      <input class="zc_password" type="password" v-model="zc_password" placeholder="请输入密码">

      <a class="zc_simt" @click="register2">注册</a>
    </div>

    <img class="dlzcImg" src="../assets/img/tgb22.png" alt="">
  </div>
</template>

<script>
import Top from '../components/top'
import {loginLand, loginregister2, loginGetVerification} from '../assets/js/sql'

// 在全局定义验证码
var code
export default {
  data() {
    return {
      zhuce: false,
      denglu: true,
      dlmk: true,
      zcmk1: false,
      zcmk2: false,
      zc_yzman: true,
      zc_yzmMiao: false,
      dl_tel: '',
      dl_password: '',
      zc_tel: '',
      zc_yzm: '',
      zc_yzm2: '',
      zc_yzmSystem: '1234',
      zc_password: '',
      picLyanzhengma: '',
      checkCode: '',
      someOtherArray: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      miaos: 59
    }
  },
  methods: {
    // 注册切换显示
    zc() {
      this.zhuce = true
      this.denglu = false
      this.dlmk = false
      this.zcmk1 = true
      this.zcmk2 = false
      this.zc_tel = ''
      this.zc_yzm = ''
    },
    // 登陆切换显示
    dl() {
      this.zhuce = false
      this.denglu = true
      this.dlmk = true
      this.zcmk1 = false
      this.zcmk2 = false
    },
    // 登陆验证
    Land() {
      var _this = this
      if (this.dl_tel.length === 0) {
        alert('请输入手机号')
      } else if (!(/^1[3|4|5|7|8]\d{9}$/.test(this.dl_tel))) {
        alert('您的手机号输入有误，请重新输入')
      } else if (this.dl_password.length === 0) {
        alert('请输入您的密码')
      } else {
        loginLand(_this)
      }
    },
    // 注册第一步
    register() {
      if (this.zc_tel.length === 0) {
        alert('请输入手机号')
      } else if (!(/^1[3|4|5|7|8]\d{9}$/.test(this.zc_tel))) {
        alert('您的手机号输入有误，请重新输入')
      } else if (this.zc_yzm.length === 0) {
        alert('请输入验证码')
      } else if (this.zc_yzm !== this.checkCode && this.zc_yzm.toLowerCase() !== this.checkCode.toLowerCase()) {
        alert('验证码错误，请重新输入')
      } else {
        this.zcmk1 = false
        this.zcmk2 = true
        // window.setTimeout(this.countdown(), 1000)
      }
    },
    // 注册第二步
    register2() {
      var _this = this
      if (this.zc_password.length === 0) {
        alert('请输入密码')
      } else if (this.zc_password.length <= 6) {
        alert('密码必须是6位数的数字加字母')
      } else {
        loginregister2(_this)
      }
    },
    // 短信验证码读秒
    countdown() {
      console.log(this.miaos)
      if (this.miaos !== 1) {
        this.miaos = this.miaos - 1
      } else {
        this.zc_yzman = true
        this.zc_yzmMiao = false
      }
      window.setTimeout(this.countdown(), 1000)
    },
    // 图片验证码
    createCode() {
      code = ''
      // 验证码的长度
      var codeLength = 4
      // 循环操作
      for (var i = 0; i < codeLength; i++) {
        // 取得随机数的索引（0~36）
        var index = Math.floor(Math.random() * 36)
        // 根据索引取得随机数加到code上
        code += this.someOtherArray[index]
      }
      // 把code值赋给验证码
      this.checkCode = code
    },
    // 获取短信验证码
    getVerification() {
      var _this = this
      if (_this.zc_tel.length === 11) {
        loginGetVerification(_this)
      } else {
        alert('请输入手机号')
      }
    }
  },
  created() {
    this.createCode()
    // 判断点击进来是登陆还是注册
    if (this.$route.params.id === 'dl') {
      this.dl()
    }
    if (this.$route.params.id === 'zc') {
      this.zc()
    }
    // console.log('id: ' + this.$route.params.id)
  },
  components: {
    Top
  }
}
</script>

<style>
  /** 登陆注册页 **/
  #v_container{
    
  }
  .dlzc {
    width: 6.0rem;
    height: 1.25rem;
    margin: 1.953125rem auto auto;
    background: #fff;
    border-radius: 0.15625rem;
  }
  
  .dlzc dd {
    text-align: center;
    color: #7f7f7f;
    line-height: 1.25rem;
    font-size: 0.46875rem;
  }
  
  .dlzc dd.on:last-of-type {
    border-radius: 0 0.15625rem 0.15625rem 0;
  }
  
  .dlzc dd.on {
    background: #00b38b;
    color: #fff;
    border-radius: 0.15625rem 0 0 0.15625rem;
  }
  
  .denglu,
  .zhuce {
    padding: 0.671875rem 0.46875rem;
  }
  
  .denglu .dl_tel {
    width: 100%;
    height: 1.359375rem;
    text-indent: 1em;
    border: none;
    line-height: 1.359375rem;
    font-size: 0.46875rem;
    margin-bottom: 0.03125rem;
    border-radius: 0.15625rem 0.15625rem 0 0;
    margin-top: 0.859375rem;
  }
  
  .denglu .dl_password {
    width: 100%;
    height: 1.359375rem;
    text-indent: 1em;
    border: none;
    line-height: 1.359375rem;
    font-size: 0.46875rem;
    border-radius: 0 0 0.15625rem 0.15625rem;
  }
  
  .denglu .dl_simt {
    display: block;
    width: 100%;
    border-radius: 0.15625rem;
    background: #00b38b;
    color: #fff;
    text-align: center;
    height: 1.359375rem;
    line-height: 1.359375rem;
    font-size: 0.546875rem;
    margin: 0.625rem 0 0.46875rem;
  }
  
  .denglu .dl_back {
    display: block;
    width: 100%;
    text-align: right;
    font-size: 0.46875rem;
    height: 0.546875rem;
    line-height: 0.546875rem;
  }
  
  .zhuce .zc_tel {
    width: 100%;
    height: 1.359375rem;
    text-indent: 1em;
    border: none;
    line-height: 1.359375rem;
    font-size: 0.46875rem;
    margin-bottom: 0.03125rem;
    border-radius: 0.15625rem 0.15625rem 0 0;
    margin-top: 0.859375rem;
  }
  
  .zhuce .zc_yzm {
    width: 100%;
    height: 1.359375rem;
    border-radius: 0 0 0.15625rem 0.15625rem;
    background: #fff;
  }
  
  .zhuce .zc_yzm input {
    width: 6.796875rem;
    height: 1.359375rem;
    text-indent: 1em;
    border: none;
    line-height: 1.359375rem;
    font-size: 0.46875rem;
    float: left;
  }
  
  .zhuce .zc_yzm #v_container {
    width: 1.953125rem;
    height: 0.859375rem;
    float: left;
    margin: 0.25rem auto;
    border: 1px solid #e6e6e6;
    background: #f2f2f5;
    text-align: center;
    font-size: 0.46875rem;
    line-height: 0.859375rem;
  }
  
  #verifyCanvas {
    width: 1.953125rem;
    height: 0.859375rem;
    float: left;
    margin: auto;
  }
  
  .zhuce .zc_simt {
    display: block;
    width: 100%;
    border-radius: 0.15625rem;
    background: #00b38b;
    color: #fff;
    text-align: center;
    height: 1.359375rem;
    line-height: 1.359375rem;
    font-size: 0.546875rem;
    margin: 0.625rem 0 0.46875rem;
  }
  
  .zhuce .zc_back {
    display: block;
    width: 100%;
    text-align: left;
    font-size: 0.46875rem;
    height: 0.546875rem;
    line-height: 0.546875rem;
    color: #b4b4b4;
  }
  
  .zhuce .zc_back2 {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 0.46875rem;
    height: 0.546875rem;
    line-height: 0.546875rem;
    color: #b4b4b4;
    margin-bottom: 0.3125rem;
  }
  
  .zhuce .zc_yzm2 {
    width: 100%;
    height: 1.359375rem;
    border-radius: 0.15625rem 0.15625rem 0 0;
    background: #fff;
    margin-bottom: 0.03125rem;
  }
  
  .zhuce .zc_yzm2 input {
    width: 6.796875rem;
    height: 1.359375rem;
    text-indent: 1em;
    border: none;
    line-height: 1.359375rem;
    font-size: 0.46875rem;
    float: left;
    border-radius: 0.15625rem 0.15625rem 0 0;
  }
  
  .zhuce .zc_yzm2 .yzms {
    width: 2.109375rem;
    height: 0.859375rem;
    float: left;
    margin: 0.25rem auto;
    background: #ff4c4c;
    color: #fff;
    border-radius: 0.15625rem;
    text-align: center;
    line-height: 0.859375rem;
    font-size: 0.46875rem;
  }
  
  .zhuce .zc_yzm2 .yzman {
    width: 2.109375rem;
    height: 0.859375rem;
    float: left;
    margin: 0.25rem auto;
    background: #00b38b;
    color: #fff;
    border-radius: 0.15625rem;
    text-align: center;
    line-height: 0.859375rem;
    font-size: 0.25rem;
  }
  
  .zhuce .zc_password {
    width: 100%;
    height: 1.359375rem;
    text-indent: 1em;
    border: none;
    line-height: 1.359375rem;
    font-size: 0.46875rem;
    border-radius: 0 0 0.15625rem 0.15625rem;
  }
  
  .dlzcImg {
    display: block;
    width: 4.625rem;
    height: 2.890625rem;
    margin-top: 0.625rem;
    padding-bottom: 4.375rem;
  }
</style>