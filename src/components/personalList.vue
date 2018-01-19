<template>
  <div class="wrap bs">
    <p class="list_typeName">我发布的{{typeName}}</p>
    
    <!--
    	作者：545631684@qq.com
    	时间：2017-11-25
    	描述：审核列表
    -->
    <dl class="personal_sh" v-show="shwz">
      <dd v-for="item in shList" @click="examineArticleUrl(item.task_id)">
        <a>{{item.task_title}}</a>
      </dd>
    </dl>
    
    <!--
    	作者：545631684@qq.com
    	时间：2017-11-25
    	描述：审核通过列表
    -->
    <ul class="list_ul" v-show="wz">
      <li v-for="item in list">
        <a @click="articleUrl(item.task_id)">
          <p class="list_title">
            <img src="../assets/img/tgb35.png" alt="">
            <span>{{item.task_title}}</span>
            <a>查看更多</a>
          </p>
          <p class="list_content omit3">{{item.task_desc}}</p>
        </a>
      </li>
      <li v-show="loadings2">
        <p class="list_content omit3" style="text-align: center; padding-bottom: 14.375rem;padding-top: 0.46875rem;">您还没有发布信息...</p>
      </li>
    </ul>
    <loading v-show="loadings"></loading>
  </div>
</template>

<script>
  import loading from '../components/loading'
  import {getdataXqPersonalList, getdataFwPersonalList} from '../assets/js/sql'

  export default {
    data() {
      return {
        shList: [],
        list: [],
        typeName: '',
        loadings: false,
        loadings2: false,
        shwz: false,
        wz: false
      }
    },
    methods: {
      articleUrl(id) {
        this.$router.push('/article/' + id) // 跳转文章页
      },
      examineArticleUrl(id) {
        this.$router.push('/article/' + id) // 跳转审核文章页
      }
    },
    created() {
      if (this.$route.params.typeName === 'xq') {
        this.typeName = '需求'
        getdataXqPersonalList(this)
      } else if (this.$route.params.typeName === 'fw') {
        this.typeName = '服务'
        getdataFwPersonalList(this)
      }
    },
    components: {
      loading
    }
  }
</script>

<style>
/**  列表页/用户发布列表页 **/
.list_ys{background: #fafafa;}
.list_typeName{/*padding: 0.4375rem 0;*/height:1.25rem;line-height:1.25rem; background: #fff; text-align: center; font-size: 0.5rem; border-bottom: 1px solid #dddddd; margin-bottom: 0.15625rem;}
.list_ul{border-top: 1px solid #dddddd;}
.list_ul li{padding: 0 0.3125rem;margin-bottom: 0.15625rem;border-bottom: 1px solid #dddddd;border-top: 1px solid #dddddd;background: #fff;}
.list_ul li:last-of-type{border-bottom:none; margin-bottom: 0.46875rem; padding-bottom: 0.15625rem;}
.list_ul li .list_title{height: 0.65625rem; padding: 0.46875rem 0;}
.list_ul li .list_title img{display: block;width: 0.65625rem; height: 0.65625rem; float: left;}
.list_ul li .list_title span{display: block;float: left; width: 6.71875rem;height: 0.65625rem; font-size: 0.5rem;  margin-right: 0.078125rem; margin-left: 0.15625rem;}
.list_ul li .list_title a{display: block;float: left; font-size: 0.3125rem; border-radius: 0.15625rem; border:1px solid #b7aeae; padding: 0.078125rem; color: #b7aeae;}
.list_ul li .list_content{font-size: 0.4375rem; line-height: 1.5; padding: 0 0.78125rem 0.46875rem; max-height: 1.5625rem; margin-bottom: 0.3125rem;}
.omit1{display: -webkit-box; -webkit-box-orient: vertical;-webkit-line-clamp: 1;overflow: hidden;}
.omit3{display: -webkit-box; -webkit-box-orient: vertical;-webkit-line-clamp: 3;overflow: hidden;}
.personal_sh{border-top: 1px solid #dddddd;border-bottom: 1px solid #dddddd; margin-bottom: 0.15625rem;background: #fff;position: relative;}
.personal_sh:before{content: '';display: block; width: 1.40625rem; height: 1.40625rem; background: url(../assets/img/tgb38.png) center center / 1.40625rem 1.40625rem no-repeat; position: absolute; top: 0; left: 0;}
.personal_sh dd{margin-left: 1.40625rem; padding: 0.625rem 0.78125rem 0.625rem 0; background: url(../assets/img/tgb37.png) 95% 52% / 0.171875rem 0.34375rem no-repeat; border-bottom: 1px solid #eeeeee;}
.personal_sh dd:last-of-type{border-bottom:none;}
.personal_sh dd a{ font-size: 0.46875rem; color: #856a6a; }
</style>