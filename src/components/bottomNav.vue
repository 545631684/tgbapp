<template>
  <div>
    <!-- 底部导航 没登陆前 -->
    <div class="bottom_nav flex" v-show="front_bottom_nav">
      <transition>
        <router-link tag="div" class="a_tag" to="/login/dl">
          <img src="../assets/img/tgb09.png" />
          <span>立即登陆</span>
        </router-link>
      </transition>
      <transition>
        <router-link tag="div" class="a_tag" to="/login/zc">
          <img src="../assets/img/tgb10.png" />
          <span>免费注册</span>
        </router-link>
      </transition>
    </div>

    <!-- 底部导航 登陆后 -->
    <div class="bottom_nav flex" v-show="after_bottom_nav">
        <router-link tag="div" class="a_tag" to="/release/xq">
            <img src="../assets/img/tgb33.png" />
            <span>发布需求</span>
        </router-link>
        <router-link tag="div" class="a_tag" to="/personal">
            <img src="../assets/img/tgb34.png" />
            <span>个人中心</span>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bottomNav',
  data() {
    return {
      front_bottom_nav: true,
      after_bottom_nav: false
    }
  },
  methods: {
    setUserstate() { // 更新用户登陆状态
      this.$store.dispatch('getLocalStorage', this.$store.state) // 获取本地存储全局用户状态
      if (this.$store.state.username === undefined || this.$store.state.username.length === 0) {
        this.front_bottom_nav = true
        this.after_bottom_nav = false
      } else {
        this.front_bottom_nav = false
        this.after_bottom_nav = true
      }
    }
  },
  created() {
    this.setUserstate() // 更新用户登陆状态
  }
}
</script>

<style>
/** 首页-底部导航 **/
  
  .bottom_nav {
    width: 100%;
    height: 1.25rem;
    position: fixed;
    bottom: 0;
    border-top: 0.03125rem solid #e0e0e0;
    background: #fff;
    max-width: 10.0rem;
  }
  
  .bottom_nav .a_tag {
    flex: 1;
  }
  
  .bottom_nav .a_tag span {
    display: block;
    text-align: center;
    color: #797979;
    font-size: 0.390625rem;
    height: 0.625rem;
    line-height: 0.625rem;
  }
  
  .bottom_nav .a_tag:nth-child(1) {
    margin-top: 0.1875rem;
  }
  
  .bottom_nav .a_tag:nth-child(2) {
    margin-top: 0.125rem;
  }
  
  .bottom_nav .a_tag:nth-child(1) img {
    display: block;
    width: 0.5rem;
    height: 0.453125rem;
  }
  
  .bottom_nav .a_tag:nth-child(2) img {
    display: block;
    width: 0.484375rem;
    height: 0.515625rem;
  }
  
  .bottom_nav2 {
    width: 100%;
    height: 1.25rem;
    position: fixed;
    bottom: 0;
    border-top: 0.03125rem solid #e0e0e0;
    background: #fff;
    max-width: 640px;
  }
  
  .bottom_nav2 a {
    flex: 1;
  }
  
  .bottom_nav2 a span {
    display: block;
    text-align: center;
    color: #797979;
    font-size: 0.390625rem;
    height: 0.625rem;
    line-height: 0.625rem;
  }
  
  .bottom_nav2 a:nth-child(1) {
    margin-top: 0.1875rem;
  }
  
  .bottom_nav2 a:nth-child(3) {
    margin-top: 0.125rem;
  }
  
  .bottom_nav2 a:nth-child(2) span {
    width: 2.015625rem;
    margin: auto;
    display: block;
    height: 1.5rem;
    line-height: 2.3rem;
    background-size: 2.015625rem 1.5625rem;
    color: #fff;
    background: url(../assets/img/tgb17.png) 0 0 /2.015625rem 1.5rem no-repeat;
    ;
    position: relative;
    bottom: 0.3rem;
  }
  
  .bottom_nav2 a:nth-child(2) img {}
  
  .bottom_nav2 a:nth-child(1) img {
    display: block;
    width: 0.5rem;
    height: 0.453125rem;
  }
  
  .bottom_nav2 a:nth-child(3) img {
    display: block;
    width: 0.484375rem;
    height: 0.515625rem;
  }
</style>