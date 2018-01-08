<template>
  <div class="wrap list_ys">
    <p class="search_p1">
      <a :class="{ on:searchXq }" @click="tag('xq')">需求</a>
      <a :class="{ on:searchFw }" @click="tag('fw')">服务</a>
    </p>
    <div class="search_div1">
      <input type="text" placeholder="你想找什么？输入关键词试试" v-model="keyword">
      <img src="../assets/img/tgb36.png" alt="" @click="start(keyword)" v-show="startAN">
      <a @click="cancel()" v-show="cancelAN">取消</a>
    </div>
    <div class="search_div2">
      <div class="search_div3" v-show="initial">
        <p class="search_p2">热搜</p>
        <p @click="clickKeyword('刷机恢复')">刷机恢复</p>
        <p @click="clickKeyword('ASO排名')">ASO排名</p>
        <p @click="clickKeyword('APP推广')">APP推广</p>
        <p @click="clickKeyword('一条龙服务')">一条龙服务</p>
      </div>
      <div class="search_div4" v-show="result">
        <ul class="search_ul">
          <li v-for="item in list">
            <a @click="articleUrl(item.task_id)">
              <p class="list_title clear">
                <img src="../assets/img/tgb35.png" alt="">
                <span>{{item.task_title}}</span>
                <router-link tag="a"  to="/:item.task_id">查看更多</router-link>
              </p>
              <p class="list_content omit3">{{formatDate(item.start_time)}}</p>
            </a>
          </li>
          <li v-show="list === null">
            <p class="list_content omit3" style="text-align: center;">没有找到您要的信息...</p>
          </li>
        </ul>
        <loading v-show="loadings"></loading>
      </div>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios'
  import {formatDate} from '../assets/js/api'
  import loading from '../components/loading'
  export default {
    name: 'articleList',
    data() {
      return {
        searchXq: true,
        searchFw: false,
        list: [],
        keyword: '',
        startAN: true,
        cancelAN: false,
        initial: true,
        result: false,
        loadings: false
      }
    },
    methods: {
      tag(type) { // 需求、服务切换
        if (type === 'xq') {
          this.searchXq = true
          this.searchFw = false
        } else if (type === 'fw') {
          this.searchXq = false
          this.searchFw = true
        }
      },
      getData(type, keyword, mythis) { // 获取搜索结果
        Axios.get(mythis.URLS + '/ThinkPHP/index.php/Home/Index/sou.html?type=' + type + '&keyword=' + keyword)
          .then(function(response) {
            mythis.list = response.data
            mythis.startAN = false // 搜索按钮
            mythis.cancelAN = true // 取消按钮
            mythis.initial = false // 搜索前显示页面
            mythis.result = true // 搜索后结果页面
            mythis.loadings = true // 加载效果
            if (response.data === null) {
              mythis.loadings = false
              console.log('后台没有数据...')
            } else if (response.data.length > 0) {
              mythis.loadings = false
            } else {
              console.log('后台出错没有获取到，悲剧了...')
            }
            // console.log(response.data)
          })
          .catch(function(error) {
            console.log(error)
          })
      },
      start() { // 搜索按钮
        var _this = this
        if (_this.searchXq === true) {
          _this.getData('0', _this.keyword, _this)
        } else if (_this.searchFw === true) {
          _this.getData('1', _this.keyword, _this)
        }
      },
      cancel() { // 取消按钮
        this.startAN = true // 搜索按钮
        this.cancelAN = false // 取消按钮
        this.initial = true // 搜索前显示页面
        this.result = false // 搜索后结果页面
        this.list = [] // 清空数据
        this.keyword = '' // 清空搜索词
      },
      formatDate(time) { // 时间戳转换
        let date = new Date(time * 1000)
        return formatDate(date, 'yyyy-MM-dd')
      },
      clickKeyword(keyword) { // 点击特定关键词搜索操作
        this.keyword = keyword
        this.start()
      },
      articleUrl(id) {
        this.$router.push('/article/' + id) // 跳转文章页
      }
    },
    created() {
    },
    components: {
      loading
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
  .search_p1 {
    /*padding: 0.4375rem 3.203125rem;*/
    height:1.25rem;
    line-height:1.25rem;
    background: #fff;
    text-align: center;
    font-size: 0.5rem;
    border-bottom: 1px solid #dddddd;
    font-weight: bold;
  }
  
  .search_p1 a {
    display: inline-block;
    width: 1.71875rem;
    height: 0.78125rem;
    line-height: 0.546875rem;
  }
  
  .search_p1 a.on:after {
    content: '';
    display: block;
    width: 40%;
    height: 0.0625rem;
    background: #00b289;
    border-radius: 0.15625rem;
    margin: 0.15625rem auto auto;
  }
  
  .search_div1 {
    padding: 0.3125rem;
    height: 0.859375rem;
    background: #fff;
  }
  
  .search_div1 input {
    display: block;
    float: left;
    width: 7.96875rem;
    border: 1px solid #e9e9e9;
    background: #f8f8f8;
    color: #000;
    text-align: center;
    font-size: 0.4375rem;
    height: 0.859375rem;
    line-height: 0.859375rem;
    border-radius: 0.15625rem;
  }
  
  .search_div1 img {
    float: left;
    width: 0.484375rem;
    height: 0.484375rem;
    padding: 0.203125rem 0.375rem 0.203125rem 0.46875rem;
  }
  
  .search_div1 a {
    display: block;
    float: left;
    width: 1.328125rem;
    height: 0.890625rem;
    line-height: 0.890625rem;
    font-size: 0.34375rem;
    color: #333333;
    text-align: center;
  }
  
  .search_div2 {
    border-top: 1px solid #dddddd;
    min-height: 14.53125rem;
  }
  
  .search_div2 .search_div3 {}
  
  .search_div2 .search_div3 .search_p2 {
    color: #00b289;
    font-size: 0.5rem;
  }
  
  .search_div2 .search_div3 p {
    color: #333333;
    font-size: 0.46875rem;
    height: 1.5625rem;
    line-height: 1.5625rem;
    text-align: center;
  }
  
  .search_div2 .search_div4 {}
  
  .search_div2 .search_div4 .search_ul {
    padding-top: 0.15625rem
  }
  
  .search_div2 .search_div4 .search_ul li {
    padding: 0 0.3125rem;
    margin-bottom: 0rem;
    border-top: 1px solid #dddddd;
    background: #fff;
  }
  
  .search_div2 .search_div4 .search_ul li:last-of-type {
    border-bottom: none;
    margin-bottom: 0.46875rem;
    padding-bottom: 0.15625rem;
  }
  
  .search_div2 .search_div4 .search_ul li .list_title {
    /*height: 0.65625rem;*/
    padding: 0.46875rem 0;
  }
  
  .search_div2 .search_div4 .search_ul li .list_title img {
    display: block;
    width: 0.65625rem;
    height: 0.65625rem;
    float: left;
  }
  
  .search_div2 .search_div4 .search_ul li .list_title span {
    display: block;
    float: left;
    width: 6.71875rem;
    height: 0.65625rem;
    font-size: 0.5rem;
    margin-right: 0.078125rem;
    margin-left: 0.15625rem;
  }
  
  .search_div2 .search_div4 .search_ul li .list_title a {
    display: block;
    float: left;
    font-size: 0.3125rem;
    border-radius: 0.15625rem;
    border: 1px solid #b7aeae;
    padding: 0.078125rem;
    color: #b7aeae;
  }
  
  .search_div2 .search_div4 .search_ul li .list_content {
    font-size: 0.375rem;
    line-height: 1.5;
    padding-bottom: 0.3125rem;
    height: 0.46875rem;
    line-height: 0.46875rem;
    text-align: left;
    color: #8b8b8b;
    padding-left: 0.78125rem;
    padding-top: 0.390625rem;
  }
</style>