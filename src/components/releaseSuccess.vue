<template>
  <div class="wrap">
    <top></top>
    <!-- 发布成功 -->
    <div class="releaseSuccess">
      <p>发布成功</p>
      <p class="clear">
        <img src="../assets/img/tgb43.png" alt="">
        <span>
          <b>成功啦~</b>
          <i>我们会尽快联系您！</i>
        </span>
      </p>
      <p class="clear">
        <a href="/">订单详情</a>|
        <a href="/">返回首页</a>
      </p>
      <p class="clear">
        <span></span>
        <samp>
          <img src="../assets/img/tgb44.png" alt="">
          <i>继续逛逛</i>
        </samp>
        <span></span>
      </p>
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
            <p v-html="item.task_desc"></p>
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
            <p v-html="item.task_desc"></p>
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

    <bottomNav></bottomNav>
  </div>
</template>

<script>
  import top from '../components/top'
  import bottomNav from '../components/bottomNav'
  import loading from '../components/loading'
  import {indexGetData} from '../assets/js/sql'
  export default {
    name: 'index',
    data() {
      return {
        xqList: [],
        fwList: []
      }
    },
    methods: {
      getData() {
        indexGetData(this)
      },
      articleUrl(id) {
        this.$router.push('/article/' + id) // 跳转文章页
      },
      yjfb() {
        this.$router.push('/releaseSuccess/yjfb') // 跳转发布页面，参数：yjfb，不做全局登陆验证
      }
    },
    created() {
      this.getData() // 获取服务商、市场需求list
    },
    components: {
      loading,
      bottomNav,
      top
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
 
  
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
/** 发布成功页面 **/
.releaseSuccess{margin-top: 1.25rem;}
.releaseSuccess p:nth-child(1){font-size: 0.546875rem; height: 1.25rem; line-height: 1.25rem; text-align: center;}
.releaseSuccess p:nth-child(2){padding:0.15625rem 0.3125rem;}
.releaseSuccess p:nth-child(2) img{display: block; float:left; width: 1.15625rem; height: 1.15625rem; padding:0.0625rem 0;}
.releaseSuccess p:nth-child(2) span{display: block; float:left; padding-left: 0.3125rem;}
.releaseSuccess p:nth-child(2) span b{display: block;font-size: 0.546875rem;}
.releaseSuccess p:nth-child(2) span i{display: block;font-size: 0.421875rem; font-style: normal;}
.releaseSuccess p:nth-child(3){border-top: 2px solid #bebebe;font-size: 0.4375rem;color: #bebebe; padding:0.234375rem 0;}
.releaseSuccess p:nth-child(3) a{ width: 45%; font-size: 0.4375rem; color: #00b38b; text-align: center; display:inline-block; }
.releaseSuccess p:nth-child(4){background: #eeeeee; padding:0.234375rem 0.3125rem; height: 0.578125rem;}
.releaseSuccess p:nth-child(4) span{display: block; float:left; width: 3.125rem; height: 0.03125rem; background: #bdbdbd; margin-top:0.265625rem; }
.releaseSuccess p:nth-child(4) samp{display: block; float:left; padding:0 0.3125rem;}
.releaseSuccess p:nth-child(4) samp img{display: block; float:left; width: 0.578125rem; height: 0.578125rem;}
.releaseSuccess p:nth-child(4) samp i{display: block; float:left; font-size: 0.375rem;font-style: normal; padding-left: 0.15625rem; color: #767676; padding-top: 0.0625rem;}
</style>