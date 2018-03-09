<template>
  <div class="wrap hs">
    <top></top>

    <p class="zhma_p">找回密码</p>

    <div class="zhma_div">
      <form action="">
        <input class="dl_tel" type="text" v-model="zh_tel" placeholder="请输入手机号码">
        <div class="zc_yzm2">
          <input type="text" v-model="zh_yzm" placeholder="请输入验证码">
          <a class="yzms" style="display: none;">59s</a>
          <a class="yzman" @click="getVerification">获取验证码</a>
        </div>
        <input class="dl_password2" type="password" v-model="zh_password1" placeholder="新密码为6-20位数字或字母">
        <input class="dl_password" type="password" v-model="zh_password2" placeholder="确认新密码">
  
        <a class="zhma_a" @click="zh_smit">确认提交</a>
      </form>
    </div>
  </div>
</template>

<script>
  import Top from '../components/top'
  import Axios from 'axios'
  import {setPassword} from '../assets/js/sql'
  export default {
    data() {
      return {
        zh_tel: '',
        zh_yzm: '',
        zh_password1: '',
        zh_password2: ''
      }
    },
    methods: {
      // 提交找回密码严重
      zh_smit() {
        var _this = this
        if (this.zh_tel.length === 0) {
          alert('请输入手机号')
        } else if (!(/^1[3|4|5|7|8]\d{9}$/.test(this.zh_tel))) {
          alert('您的手机号输入有误，请重新输入')
        } else if (this.zh_yzm.length === 0) {
          alert('请输入验证码')
        } else if (this.zh_password1.length === 0 || this.zh_password2.length === 0) {
          alert('请输入密码')
        } else if (this.zh_password1.length < 6 || this.zh_password2.length < 6) {
          alert('密码必须是6位以上的字母加数字')
        } else if (this.zh_password1 !== this.zh_password2) {
          alert('两次密码输入不一致，请重新输入')
        } else {
          setPassword(_this)
        }
      },
      // 获取短信验证码
      getVerification() {
        var _this = this
        if ((/^1[3|4|5|7|8]\d{9}$/.test(_this.zh_tel))) {
          Axios.get(_this.URLS + '/ThinkPHP/index.php/Home/Index/regsms1.html?phone=' + _this.zh_tel)
            .then(function(response) {
              if (response.data.status === 1) {
                alert('手机号不能为空！')
              } else if (response.data.status === 2) {
                alert('用户不存在！')
              } else if (response.data.status === 3) {
                alert('短信发送成功，请注意查收')
              }
              // console.log(response.data.status)
            })
            .catch(function(error) {
              console.log(error)
            })
        } else if (_this.zh_tel.length === 0) {
          alert('请输入手机号！')
        } else if (!(/^1[3|4|5|7|8]\d{9}$/.test(_this.zh_tel))) {
          alert('您的手机号输入有误，请重新输入')
        }
      }
    },
    components: {
      Top
    }
  }
</script>

<style>
/** 找回密码 */
.zhma_p{width: 6.0rem;height: 1.25rem;margin: 1.953125rem auto auto;background: #b8b8b8;border-radius: 0.15625rem; color: #fff; text-align: center; line-height: 1.25rem; font-size: 0.515625rem;}
.zhma_div{padding: 0.671875rem 0.46875rem;}
.zhma_div .dl_tel{width: 100%; height: 1.359375rem; text-indent: 1em; border:none; line-height: 1.359375rem; font-size: 0.46875rem;margin-bottom: 0.03125rem; border-radius: 0.15625rem 0.15625rem 0 0; color: #c2c1c1;}
.zhma_div .dl_password{width: 100%;height: 1.359375rem; text-indent: 1em; border:none; line-height: 1.359375rem; font-size: 0.46875rem;border-radius:  0 0 0.15625rem 0.15625rem;margin-bottom: 0.03125rem; color: #c2c1c1;}
.zhma_div .dl_password2{width: 100%;height: 1.359375rem; text-indent: 1em; border:none; line-height: 1.359375rem; font-size: 0.46875rem;margin-bottom: 0.03125rem; color: #c2c1c1;}
.zhma_div .zc_yzm2{width: 100%;height: 1.359375rem;border-radius: 0.15625rem 0.15625rem 0 0; background: #fff;margin-bottom: 0.03125rem; color: #c2c1c1;}
.zhma_div .zc_yzm2 input{width: 6.796875rem;height: 1.359375rem; text-indent: 1em; border:none; line-height: 1.359375rem; font-size: 0.46875rem; float: left;border-radius: 0.15625rem 0.15625rem 0 0;}
.zhma_div .zc_yzm2 .yzms{width: 2.109375rem; height: 0.859375rem;float: left; margin: 0.25rem auto; background: #b8b8b8; color: #fff; border-radius: 0.15625rem; text-align: center; line-height: 0.859375rem; font-size: 0.46875rem;}
.zhma_div .zc_yzm2 .yzman{width: 2.109375rem; height: 0.859375rem;float: left; margin: 0.25rem auto; background: #b8b8b8; color: #fff; border-radius: 0.15625rem; text-align: center; line-height: 0.859375rem; font-size: 0.25rem;}
.zhma_a{display: block;width: 100%;border-radius: 0.15625rem;background: #00b38b;color: #fff;text-align: center;height: 1.359375rem;line-height: 1.359375rem;font-size: 0.546875rem;margin: 1.640625rem 0 4.6875rem;}
</style>