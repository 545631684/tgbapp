<template>
  <div class="wrap">
    <!-- 头部 -->
    <div class="logo">
      <img src="../assets/img/tgb01.png">
    </div>
    <!-- banner -->
    <div class="banner">
      <p>解决需求，5秒轻松搞定</p>
      <p>
        <input class="fl" type="text" name="" placeholder="填如手机号，快速解决您的问题">
        <a class="fl" @click="yjfb">快速登记</a>
      </p>
      <p>已为198547人解决需求，你也来吧！</p>
    </div>
    <!-- 首页导航 -->
    <dl class="navs flex">
      <dd>
        <router-link tag="a" to="/search">
          <img src="../assets/img/tgb04.png">
          <span>快速搜索</span>
        </router-link>
      </dd>
      <dd>
        <router-link tag="a" to="/articleList/xq">
          <img src="../assets/img/tgb05.png">
          <span>市场需求</span>
        </router-link>
      </dd>
      <dd>
        <router-link tag="a" to="/articleList/fw">
          <img src="../assets/img/tgb06.png">
          <span>服务商</span>
        </router-link>
      </dd>
      <dd>
        <router-link tag="a" to="/release/xq">
          <img src="../assets/img/tgb07.png">
          <span>快速发布</span>
        </router-link>
      </dd>
    </dl>
    <!-- 首页广告图 -->
    <div class="banner2">
      <a href="">
        <img src="../assets/img/tgb08.jpg">
      </a>
    </div>
    <!-- 首页-市场需求 -->
    <div class="scxq" v-cloak>
      <div class="scxq_nav">
        <span class="fl">市场需求</span>
        <router-link tag="a" class="fr" to="/articleList/xq">查看更多</router-link>
      </div>
      <ul>
        <li  v-for="item in xqList" >
          <a @click="articleUrl(item.task_id)">
            <p class="clear">
              <span class="fl">置顶</span>
              <samp class="fl">{{item.task_title}}</samp>
            </p>
            <p>需求描述:{{item.task_desc}}</p>
          </a>
        </li>
      </ul>
      <loading v-show="!xqList.length"></loading>
    </div>
    <!-- 首页-服务商 -->
    <div class="scxq" v-cloak>
      <div class="scxq_nav">
        <span class="fl">服务商</span>
        <router-link tag="a" class="fr" to="/articleList/fw">查看更多</router-link>
      </div>
      <ul>
        <li  v-for="item in fwList">
          <a @click="articleUrl(item.task_id)">
            <p class="clear">
              <span class="fl">置顶</span>
              <samp class="fl">{{item.task_title}}</samp>
            </p>
            <p>{{item.task_desc}}</p>
          </a>
        </li>
      </ul>
      <loading v-show="!fwList.length"></loading>
    </div>

    <!-- 底部 -->
    <div class="bottom">
      <dl class="flex">
        <dd>
          <a href="/">
            <img src="../assets/img/tgb13.png" alt=""> 触屏版
          </a>
        </dd>
        <dd>
          <a href="http://aso6.net">
            <img src="../assets/img/tgb14.png" alt=""> 电脑版
          </a>
        </dd>
      </dl>
      <p>京ICP备17028776</p>
    </div>

    <!-- 底部导航 没登陆前 -->
    <!--<div class="bottom_nav flex" v-show="front_bottom_nav">
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
    </div>-->

    <!-- 底部导航 登陆后 -->
    <!--<div class="bottom_nav flex" v-show="after_bottom_nav">
				<router-link tag="div" class="a_tag" to="/release/xq">
            <img src="../assets/img/tgb33.png" />
            <span>发布需求</span>
        </router-link>
        <router-link tag="div" class="a_tag" to="/personal">
            <img src="../assets/img/tgb34.png" />
            <span>个人中心</span>
        </router-link>
    </div>-->
    <bottomNav></bottomNav>
  </div>
</template>

<script>
  import loading from '../components/loading'
  import bottomNav from '../components/bottomNav'
  import {indexGetData} from '../assets/js/sql'
  export default {
    name: 'index',
    data() {
      return {
        xqList: [],
        fwList: [],
        front_bottom_nav: true,
        after_bottom_nav: false
      }
    },
    methods: {
      articleUrl(id) {
        this.$router.push('/article/' + id) // 跳转文章页
      },
      yjfb() {
        this.$router.push('/releaseSuccess/yjfb') // 跳转发布页面，参数：yjfb，不做全局登陆验证
      }
    },
    created() {
      indexGetData(this) // 获取服务商、市场需求list
    },
    components: {
      loading,
      bottomNav
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
  /** 首页头部logo **/
  
  .logo {
    height: 1.25rem;
  }
  
  .logo img {
    display: block;
    width: 3.96875rem;
    padding: 0.3125rem 0.421875rem;
    height: 0.5625rem;
    margin: auto;
  }
  /** 首页banner **/
  
  .banner {
    height: 3.484375rem;
    background: url(../assets/img/tgb03.jpg) no-repeat;
    background-size: cover;
  }
  
  .banner p:nth-child(1) {
    color: #fff;
    text-align: center;
    font-size: 0.46875rem;
    font-weight: bold;
    padding-top: 0.390625rem;
    padding-bottom: 0.3125rem;
  }
  
  .banner p:nth-child(2) {
    width: 9.203125rem;
    margin: 0 0.375rem 0.234375rem;
    background: #f9564d;
    height: 1.078125rem;
    border-radius: 0.78125rem;
  }
  
  .banner p:nth-child(2) input {
    display: block;
    width: 6.921875rem;
    height: 0.984375rem;
    font-size: 0.40625rem;
    border: none;
    margin: 0.046875rem 0 0.046875rem 0.0625rem;
    border-radius: 0.78125rem 0 0 0.78125rem;
    line-height: 0.984375rem;
    text-indent: 1em;
  }
  
  .banner p:nth-child(2) a {
    display: block;
    width: 2.21875rem;
    height: 0.984375rem;
    font-size: 0.40625rem;
    color: #fff;
    text-align: center;
    line-height: 0.984375rem;
    margin: 0.046875rem 0;
  }
  
  .banner p:nth-child(3) {
    font-size: 0.390625rem;
    color: #fff;
    text-align: center;
  }
  /** 首页导航 **/
  
  .navs {
    padding: 0.46875rem 0.15625rem;
    background: #fff;
  }
  
  .navs dd {
    flex: 1;
    background: url(../assets/img/tgb11.png) right center no-repeat;
    background-size: 0.046875rem 0.890625rem;
  }
  
  .navs dd:last-child {
    background: none;
  }
  
  .navs dd img {
    display: block;
    width: 1.109375rem;
    height: 1.109375rem;
    margin-bottom: 0.234375rem;
  }
  
  .navs dd span {
    font-size: 0.359375rem;
    text-align: center;
    color: #000000;
    display: block;
    height: 0.390625rem;
    line-height: 0.390625rem;
  }
  
  .banner2 {
    height: 2.75rem;
  }
  
  .banner2 img {
    display: block;
    width: 100%;
  }
  /** 首页-需求市场 **/
  
  .scxq {
    margin: 0.390625rem 0;
    padding: 0.15625rem 0 0.3125rem;
    border-bottom: 0.078125rem solid #e0e0e0;
  }
  
  .scxq .scxq_nav {
    height: 0.625rem;
    line-height: 0.625rem;
    border-bottom: 0.015625rem solid #e0e0e0;
    font-size: 0.390625rem;
    padding: 0 0.3125rem;
  }
  
  .scxq .scxq_nav span {
    display: block;
    height: 0.46875rem;
    border-left: 0.078125rem solid #fa6163;
    text-indent: 0.5em;
    line-height: 0.46875rem;
  }
  
  .scxq .scxq_nav a {
    display: block;
    width: 1.875rem;
    height: 0.46875rem;
    line-height: 0.46875rem;
    text-align: center;
    padding-left: 0.390625rem;
    background: url(../assets/img/tgb12.png) left center no-repeat;
    background-size: 0.3125rem 0.3125rem;
  }
  
  .scxq ul {}
  
  .scxq ul li {
    padding: 0.15625rem 0.390625rem;
    border-bottom: 0.015625rem dashed #e6e6e6;
  }
  
  .scxq ul li:last-of-type {
    border-bottom: none;
  }
  
  .scxq ul li p:nth-child(1) {
    font-size: 0.375rem;
    color: #337bb5;
    line-height: 0.421875rem;
    margin-bottom: 0.078125rem;
  }
  
  .scxq ul li p:nth-child(1) span {
    display: block;
    height: 0.421875rem;
    font-size: 0.40625rem;
    color: #fff;
    background: #fa6163;
    text-align: center;
    padding: 0.03125rem;
  }
  
  .scxq ul li p:nth-child(1) samp {
    display: block;
    height: 0.421875rem;
    line-height: 0.484375rem;
    padding-left: 0.15625rem;
  }
  
  .scxq ul li p:nth-child(2) {
    font-size: 0.328125rem;
    color: #797979;
  }
  /** 首页-底部 **/
  
  .bottom {
    padding: 0.15625rem 0 2.34375rem;
    height: 2.109375rem;
  }
  
  .bottom dl {
    padding: 0 1.5625rem 0.3125rem;
  }
  
  .bottom dl dd {
    flex: 1;
  }
  
  .bottom dl dd a {
    display: block;
    font-size: 0.421875rem;
    text-align: center;
  }
  
  .bottom dl dd a img {
    display: block;
    width: 1.375rem;
    height: 1.375rem;
  }
  
  .bottom p {
    font-size: 0.265625rem;
    height: 0.3125rem;
    text-align: center;
    color: #b7b6b6;
    line-height: 0.46875rem;
  }
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