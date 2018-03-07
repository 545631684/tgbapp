<template>
	<div class="wrap hs">
		<top></top>
        
    <div class="release_nav">
        <p>
            <router-link tag="a" to="/">首页</router-link>
            <router-link tag="a" to="/articleList/xq">市场需求</router-link>
            <router-link tag="a" to="/articleList/fw">服务商</router-link>
        </p>
    </div>

    <div id="release">
        <div class="release_nav2">
            <dl class="flex clear">
                <dd>
                    <p :class="{on: fbxq}" @click="getTab('xq')">发布需求</p>
                </dd>
                <dd>
                    <p :class="{on: fbfw}" @click="getTab('fw')">发布服务</p>
                </dd>
            </dl>
        </div>
        <div class="release_form">
            <p class="release_form_p1">
                <span>{{tag}}标题:</span>
                <span>*</span>
                <input type="text" v-model="title" placeholder="请输入内容，不超过20字。">
            </p>
            <p class="release_form_p1">
                <span>联系人:</span>
                <span>*</span>
                <input type="text" v-model="username" placeholder="请输入您的姓名。">
            </p>
            <p class="release_form_p2">
                <span>{{tag}}描述:</span>
                <span>*</span>
                <textarea v-model="content" placeholder="请输入内容，不超过300字。"></textarea>
                <samp>{{content.length}}/300</samp>
            </p>
            <p class="release_form_p3">{{tag}}描述严谨，添加联系方式如有违规可能封号。</p>
            <input type="submit" value="确认发布" @click="tijiao" class="tijiao">
        </div>
    </div>
    
    <div class="release_tc" v-show="release_tc">
      <div class="tc clear">
        <p class="title">留下手机号，方便帮帮为您服务</p>
        <input class="tc_tel" type="text" v-model="zc_tel" placeholder="请输入手机号码">
        <div class="tc_yzm">
              <input type="text" v-model="zc_yzm" placeholder="请输入验证码">
              <label @click="createCode"><div id="v_container" v-html="checkCode"></div></label>
          </div>
          <div class="tc_yzm2">
              <input type="text" v-model="zc_yzm2" placeholder="请输入验证码">
              <a class="yzman" @click="getVerification">获取验证码</a>
          </div>
          <p class="tc_bottom">
            <a @click="oneRelease" class="tc_simt">确定</a>
            <a @click="tcCancel" class="tc_simt">取消</a>
          </p>
          
      </div>
    </div>
    
	</div>
</template>

<script>
import Top from '../components/top'
import {postdata, verification, addRegister} from '../assets/js/sql'

// 在全局定义验证码
var code
export default {
  data() {
    return {
      fbxq: false,
      fbfw: true,
      tag: '需求',
      title: '',
      username: '',
      content: '',
      team: 0,
      release_tc: false,
      checkCode: '',
      someOtherArray: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      zc_tel: '',
      zc_yzm: '',
      zc_yzm2: ''
    }
  },
  methods: {
    // 需求/服务切换
    getTab(name) {
      if (name === 'xq' || name === 'yjfb') {
        this.fbxq = false
        this.fbfw = true
        this.tag = '需求'
        this.team = 0
      } else {
        this.fbxq = true
        this.fbfw = false
        this.tag = '服务'
        this.team = 1
      }
    },
    tijiao() {
      var _this = this
      if (this.title.length >= 20) {
        alert('标题超过20个字')
        return false
      } else if (this.username.length === 0) {
        alert('请输入联系人')
        return false
      } else if (this.username.length > 5) {
        alert('联系人字数不得超过5个字')
        return false
      } else if (this.content.length === 0) {
        alert('请输入描述')
      } else if (this.content.length >= 300) {
        alert('您输入的字数过多，请删减后再提交')
      } else if (this.$route.params.name === 'yjfb') {
        _this.release_tc = true
      } else {
        postdata(_this)
      }
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
    tcCancel() {
      // 关闭一键发布注册弹窗
      this.release_tc = false
    },
    // 获取短信验证码
    getVerification() {
      var _this = this
      if (_this.zc_tel.length === 0) {
        alert('请输入手机号')
      } else if (!(/^1[3|4|5|7|8]\d{9}$/.test(_this.zc_tel))) {
        alert('您的手机号输入有误，请重新输入')
      } else {
        verification(_this)
      }
    },
    // 注册
    register() {
      var _this = this
      addRegister(_this)
    },
    oneRelease() { // 一键发布 注册-发布信息
      var _this = this
      if (_this.zc_tel.length === 0) {
        alert('请输入手机号')
      } else if (!(/^1[3|4|5|7|8]\d{9}$/.test(_this.zc_tel))) {
        alert('您的手机号输入有误，请重新输入')
      } else if (_this.zc_yzm.length === 0) {
        alert('请输入验证码')
      } else if (_this.zc_yzm !== _this.checkCode && _this.zc_yzm.toLowerCase() !== _this.checkCode.toLowerCase()) {
        alert('验证码错误，请重新输入')
      } else if (_this.zc_yzm2.length === 0) {
        alert('请输入短信验证码')
      } else {
        _this.register()
      }
    }
  },
  created() {
    // 判断点击进来是需求还是服务
    this.getTab(this.$route.params.name)
    // 生成验证码
    this.createCode()
  },
  components: {
    Top
  }
}
</script>

<style>
/**发布页**/
.release_nav{background: #00b38b; padding: 0.15625rem 0.390625rem; margin-top: 1.28125rem;}
.release_nav p{height: 0.546875rem; line-height: 0.546875rem;}
.release_nav p a{display: block;float: left; padding: 0 0.15625rem; color: #fff; font-size: 0.40625rem;}
.release_nav2{background: #f2f2f2; padding: 0.15625rem 0.390625rem; border-bottom: 0.03125rem solid #cccccc;}
.release_nav2 dl{padding: 0.15625rem 0 0.15625rem 2.5rem;}
.release_nav2 dl dd{text-align: left; font-size: 0.40625rem;}
.release_nav2 dl dd p{height: 0.46875rem; line-height: 0.46875rem; padding-left: 0.46875rem; background: url(../assets/img/tgb29.png) 0rem center / 0.390625rem 0.390625rem no-repeat;}
.release_nav2 dl dd p.on{background: url(../assets/img/tgb30.png) 0rem center / 0.390625rem 0.390625rem no-repeat;}
.release_form{padding:0.46875rem 0 3.59375rem;}
.release_form .release_form_p1{height: 0.78125rem; line-height: 0.78125rem;font-size: 0.40625rem; margin-bottom: 0.46875rem;padding:0 0.390625rem;}
.release_form .release_form_p1 span:nth-child(1){display: block;float: left; width: 1.875rem; height: 0.78125rem; line-height: 0.78125rem;}
.release_form .release_form_p1 span:nth-child(2){display: block;float: left; width: 0.390625rem; height: 0.78125rem; line-height: 0.78125rem;color: #ff0101;}
.release_form .release_form_p1 input{width: 6.71875rem; height: 0.78125rem; line-height: 0.78125rem; border:0.015625rem solid #ccc;padding: 0;margin: 0; text-indent: 1em;}
.release_form .release_form_p2{font-size: 0.40625rem; height: 4.765625rem;padding:0 0.390625rem 0.46875rem;}
.release_form .release_form_p2 span:nth-child(1){display: block;float: left; width: 1.875rem; height: 0.78125rem; line-height: 0.78125rem;}
.release_form .release_form_p2 span:nth-child(2){display: block;float: left; width: 0.390625rem; height: 0.78125rem; line-height: 0.78125rem;color: #ff0101;}
.release_form .release_form_p2 textarea{width: 6.71875rem; height: 4.6875rem; line-height: 0.78125rem; border:0.015625rem solid #ccc;padding: 0;margin: 0; text-indent: 1em;font-size: 0.40625rem;}
.release_form .release_form_p2 samp{position: relative; right: -6.5625rem; bottom: 0.625rem; display: block; width: 2.34375rem; height: 0.46875rem; line-height: 0.46875rem; text-align: center; color: #b4b4b4;}
.release_form .release_form_p3{ height: 0.78125rem; line-height: 0.78125rem; font-size: 0.40625rem;color: #b4b4b4; border-top: 0.046875rem solid #ccc; padding-left: 0.390625rem; padding-bottom: 0.625rem; }
.release_form .tijiao{margin: 0 0.390625rem; display: block; width: 9.21875rem; border:none; border-radius: 0.15625rem; background: #00b38b; color: #fff; text-align: center; height: 1.34375rem; line-height: 1.34375rem; font-size: 0.515625rem;}
/**一键发布弹出注册账号**/
.release_tc{position: absolute;top: 0; width: 100%; height: 100%; background: url(../assets/img/tgb41.png) right; z-index: 9999;}
.release_tc .tc{margin: 45% 1.0625rem 0; border-radius: 0.15625rem; background: #fff;z-index: 999;}
.release_tc .title{font-size: 0.46875rem; height: 1.25rem; line-height: 1.25rem; text-align: center; color: #00b38b; font-weight: bold;}
.release_tc .an{ position: relative; top: -1.25rem; right: -84%; display: block; width: 1.25rem; height: 1.25rem; }
.release_tc .an img{display: block; width: 0.546875rem; height: 0.546875rem; float: right; padding: 0.078125rem;}
.release_tc .tc_tel{ width: 90%; height: 1rem; text-indent: 1em; border:1px solid #cdcdcd; line-height:1rem; font-size: 0.46875rem; border-radius: 0.15625rem; margin:0.15625rem 0.3125rem 0.3125rem;}
.release_tc .tc_yzm{width: 90%;height: 1rem;border-radius: 0.15625rem; background: #fff;margin:0.15625rem 0.3125rem 0.46875rem;border:1px solid #cdcdcd;}
.release_tc .tc_yzm input{width: 70%;height: 1rem; text-indent: 1em; border:none; line-height: 1rem; font-size: 0.46875rem; float: left;border-radius: 0.15625rem;}
.release_tc .tc_yzm #v_container{width: 1.953125rem; height: 0.78125rem;float: left; border: 1px solid #e6e6e6;background: #f2f2f5; text-align: center; font-size: 0.46875rem; line-height: 0.859375rem; margin: 0.078125rem auto;}
.release_tc .tc_yzm2{width: 90%;height: 1rem;border-radius: 0.15625rem; background: #fff;margin-bottom: 0.03125rem;border:1px solid #cdcdcd;margin:0.15625rem 0.3125rem;}
.release_tc .tc_yzm2 input{width: 70%;height: 1rem; text-indent: 1em; border:none; line-height: 1rem; font-size: 0.46875rem; float: left;border-radius: 0.15625rem;}
.release_tc .tc_yzm2 .yzms{width: 2.109375rem; height: 0.859375rem;float: left; margin: 0.25rem auto; background: #ff4c4c; color: #fff; border-radius: 0.15625rem; text-align: center; line-height: 0.859375rem; font-size: 0.46875rem;}
.release_tc .tc_yzm2 .yzman{width: 2.109375rem; height: 1rem;float: right; background: #cccccc; color: #fff; text-align: center; line-height: 1rem; font-size: 0.25rem;}
.release_tc .tc_bottom{padding:0 0.3125rem;}
.release_tc .tc_bottom a:nth-child(2){ margin-left:10%;  background: #acacac;}
.release_tc .tc_simt{display: block; width: 45%; float: left; border-radius: 0.15625rem; background: #00b38b; color: #fff; text-align: center;height: 1rem;line-height: 1rem; font-size: 0.546875rem; margin: 0.46875rem 0 0.15625rem;}
</style>