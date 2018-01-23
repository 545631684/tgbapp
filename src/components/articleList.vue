<template>
  <div class="wrap list_ys" @mousewheel="handleScroll">
    <p class="list_typeName">{{typeName}}</p>
    <ul class="list_ul"  v-cloak>
      <li v-for="item in list">
          <a @click="articleUrl(item.task_id)">
            <p class="list_title clear">
                <img src="../assets/img/tgb35.png" alt="">
                <span>{{item.task_title}}</span>
                <a>查看更多</a>
            </p>
            <p class="list_content omit3">{{item.task_desc}}</p>
          </a>
      </li>
      <li @click="getData(typeName, page)" v-show="loading" id="an"><p class="list_title clear" style="text-align: center;font-size: 0.4375rem;">{{bottomTitle}}</p></li>
      <loading v-show="!list.length"></loading>
    </ul>
    <fixedTel></fixedTel>
  </div>
</template>

<script>
  import {articleListGetDatafw, articleListGetDataxq} from '../assets/js/sql'
  import loading from '../components/loading'
  import fixedTel from '../components/fixedTel'
  export default {
    name: 'articleList',
    data() {
      return {
        typeName: '',
        list: [],
        page: 1,
        bottomTitle: '点击加载更多...',
        loading: false
      }
    },
    methods: {
      getData(typeName, page) {
        // console.log(typeName)
        if (typeName === '市场需求') {
          articleListGetDataxq(this)
        } else if (typeName === '服务商') {
          articleListGetDatafw(this)
        }
      },
      articleUrl(id) {
        this.$router.push('/article/' + id) // 跳转文章页
      },
      handleScroll () {
        // 滚动条高度
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        // 整个页面高度
        var clientHeight = document.body.clientHeight || document.documentElement.clientHeight
        // 加载按钮到顶部的高度
        var b = document.getElementById('an').offsetTop
        // console.log(scrollTop + b / 1.5)
        // 滚动条高度+（加载按钮/1.5）> 加载按钮
        if (scrollTop + b > clientHeight) {
          if (this.bottomTitle.length !== 0) {
            if (this.typeName === '市场需求') {
              articleListGetDataxq(this)
            } else if (this.typeName === '服务商') {
              articleListGetDatafw(this)
            }
          }
        }
      }
    },
    created() {
      if (this.$route.params.type === 'xq') {
        this.typeName = '市场需求'
        articleListGetDataxq(this)
      } else if (this.$route.params.type === 'fw') {
        this.typeName = '服务商'
        articleListGetDatafw(this)
      }
    },
    components: {
      loading,
      fixedTel
    }
  }
</script>

<style scoped lang="css">
/**  列表页/用户发布列表页 **/
.list_ys{background: #fafafa;}
.list_typeName{/*padding: 0.4375rem 0;*/ height:1.25rem;line-height:1.25rem;background: #fff; text-align: center; font-size: 0.5rem; border-bottom: 1px solid #dddddd; margin-bottom: 0.15625rem;}
.list_ul{border-top: 1px solid #dddddd;}
.list_ul li{padding: 0 0.3125rem;margin-bottom: 0.15625rem;border-bottom: 1px solid #dddddd;border-top: 1px solid #dddddd;background: #fff;}
.list_ul li:last-of-type{border-bottom:none; margin-bottom: 0.46875rem; padding-bottom: 0.15625rem;}
.list_ul li .list_title{height: 0.65625rem; padding: 0.46875rem 0;}
.list_ul li .list_title img{display: block;width: 0.65625rem; height: 0.65625rem; float: left;}
.list_ul li .list_title span{display: block;float: left; width: 6.71875rem;height: 0.65625rem; font-size: 0.5rem;  margin-right: 0.078125rem; margin-left: 0.15625rem;}
.list_ul li .list_title a{display: block;float: left; font-size: 0.3125rem; border-radius: 0.15625rem; border:1px solid #b7aeae; padding: 0.078125rem; color: #b7aeae;}
.list_ul li .list_content{font-size: 0.4375rem; line-height: 1.5; padding: 0 0.78125rem 0.46875rem; max-height: 1.5625rem; margin-bottom: 0.3125rem; color: #767676;padding-top: 0.390625rem;}
.omit1{display: -webkit-box; -webkit-box-orient: vertical;-webkit-line-clamp: 1;overflow: hidden;}
.omit3{display: -webkit-box; -webkit-box-orient: vertical;-webkit-line-clamp: 3;overflow: hidden;}
.personal_sh{border-top: 1px solid #dddddd;border-bottom: 1px solid #dddddd; margin-bottom: 0.15625rem;background: #fff;position: relative;}
.personal_sh:before{content: '';display: block; width: 1.40625rem; height: 1.40625rem; background: url(../assets/img/tgb38.png) center center / 1.40625rem 1.40625rem no-repeat; position: absolute; top: 0; left: 0;}
.personal_sh dd{margin-left: 1.40625rem; padding: 0.625rem 0.78125rem 0.625rem 0; background: url(../assets/img/tgb37.png) 95% 52% / 0.171875rem 0.34375rem no-repeat; border-bottom: 1px solid #eeeeee;}
.personal_sh dd:last-of-type{border-bottom:none;}
.personal_sh dd a{ font-size: 0.46875rem; color: #856a6a; }
</style>