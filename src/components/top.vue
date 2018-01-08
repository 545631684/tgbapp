<template>
	<div>
		<!-- 头部 -->
        <div class="logo2">
            <img class="logoImg" src="../assets/img/tgb01.png">
            <img class="tle" src="../assets/img/tgb20.png" alt="400-827-1521">
            <img class="anNiu" src="../assets/img/tgb21.png" @click="anNiu">
            <div class="logo_nav" v-if="navs">
                <dl class="flex">
                    <dd><router-link tag="a"  to="/"><img class="navImg1" src="../assets/img/tgb23.png" alt="注册"><span>首页</span></router-link></dd>
                    <dd><router-link tag="a"  to="/release/xq"><img class="navImg2" src="../assets/img/tgb24.png" alt="发需求"><span>发需求</span></router-link></dd>
                    <dd><router-link tag="a"  to="/articleList/fw"><img class="navImg3" src="../assets/img/tgb25.png" alt="服务商"><span>服务商</span></router-link></dd>
                </dl>
                <dl class="flex">
                    <dd><router-link tag="a"  to="/articleList/xq"><img class="navImg4" src="../assets/img/tgb26.png" alt="找资源"><span>市场需求</span></router-link></dd>
                    <dd><router-link tag="a"  to="/search"><img class="navImg5" src="../assets/img/tgb27.png" alt="搜索"><span>搜索</span></router-link></dd>
                    <dd><router-link tag="a"  to="/personal"><img class="navImg6" src="../assets/img/tgb28.png" alt="我的"><span>我的</span></router-link></dd>
                </dl>
            </div>
        </div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      navs: false
    }
  },
  methods: {
    anNiu() {
      if (!this.navs) {
        this.navs = true
      } else {
        this.navs = false
      }
    }
  }
}
</script>

<style>
.logo2{padding: 0; height:1.25rem; position: fixed;width: 100%;max-width: 10.0rem; background: #f5f5f5;    z-index: 9999; border-bottom: 0.03125rem solid #cccccc;}
.logo2 .logoImg{display: block; float: left; width: 3.96875rem; height: 0.5625rem; margin: auto;padding: 0.3125rem 0 0.3125rem 0.28125rem;}
.logo2 .tle{display: block; float: left; width: 2.984375rem; height: 0.453125rem;padding: 0.3125rem 0 0.3125rem 0.46875rem;}
.logo2 .anNiu{display: block; float:right; width: 0.609375rem; height: 0.453125rem;padding: 0.3125rem 0.28125rem 0 0.3125rem;}
.logo2 .logo_nav{position:absolute;top:1.28125rem;left: 0.0rem;width: 10.0rem;height: 3.828125rem; background: #fff;padding: 0.3125rem 0;}
.logo2 .logo_nav dl{border-bottom: 0.03125rem solid #e7e7e7; padding: 0.28125rem 0;}
.logo2 .logo_nav dl:last-child{border-bottom:none;}
.logo2 .logo_nav dl dd{background: url(../assets/img/tgb11.png) right center no-repeat;}
.logo2 .logo_nav dl dd:last-child{background: none;}
.logo2 .logo_nav dl dd a{display: block;}
.logo2 .logo_nav dl dd a img{display: block;width: 0.78125rem;height: 0.78125rem;}
.logo2 .logo_nav dl dd a span{display: block;text-align: center; font-size: 0.46875rem; color: #c0c0c0;height: 0.390625rem; line-height: 0.390625rem; margin: 0.1875rem auto;}
</style>