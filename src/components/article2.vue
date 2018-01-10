<template>
  <div class="wrap list_ys">
    <top></top>
    <div class="details">
      <p class="details_title">{{articles.task_title}}</p>
      <div>
        <p class="details_content">{{articles.task_desc}}</p>
        <p class="lxfs"><span>联系电话：<a><b>{{articles.contact}}</b></a></span><span>联系人：<b>{{articles.username}}</b></span></p>
        <p class="lxfs2">联系我时，请说明是在【app推广帮】看到的</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Top from '../components/top'
  import {article2GetData} from '../assets/js/sql'
  export default {
    name: 'articleList',
    data() {
      return {
        articles: [],
        shwz: false
      }
    },
    methods: {
    },
    created() {
      article2GetData(this)
    },
    components: {
      Top
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
/** 详情页  **/
.details{ padding-bottom: 0.3125rem;     padding-top: 1.25rem;}
.details .details_title{/*padding: 0.4375rem 0;*/height:1.25rem;line-height:1.25rem; background: #fff; text-align: center; font-size: 0.5rem; border-bottom: 1px solid #dddddd;}
.details .auditing_p{padding:0.4375rem 2.03125rem; font-size: 0.46875rem; color: #fd5647; background: #fff8e4; text-align: center;border-bottom: 1px solid #dddddd;}
.details .auditing_p img{display:inline-block; width:0.46875rem; height: 0.59375rem; padding-right: 0.15625rem; }
.details div{margin:0.390625rem 0.3125rem 0;border: 1px solid #dddddd;background: #fff;}
.details div .details_content{padding: 0.15625rem; text-align:justify; line-height: 1.5; font-size: 0.4375rem; min-height: 10.59375rem; color: #666666;}
/*.details a{position: fixed; bottom: 0; display: block; margin:0.3125rem; color: #ffffff; text-align: center; font-size: 0.421875rem; padding: 0.3125rem 0; background: #00b188; width: 9.375rem;}*/
.details div .lxfs2{display: block; margin:0.3125rem; color: #ffffff; text-align: center; font-size: 0.375rem; padding: 0.078125rem 0; background: #00b188;  border-radius:0.078125rem;width: 94%; height: 0.390625rem; line-height: 0.390625rem;}
.details div .lxfs{display: block; margin:0.3125rem; color: #000000; text-align:center; font-size: 0.375rem; padding: 0.078125rem 0;  border-radius:0.078125rem;width: 94%; height: 0.390625rem; line-height: 0.390625rem;}
.details div .lxfs span:nth-child(1){padding-right: 0.3125rem;}
.details div .lxfs span:nth-child(2){}
.details div .lxfs b{color: #FD640B;}

.details_tc{position: absolute;top: 0; width: 100%; height: 100%; background: url(../assets/img/tgb41.png) right; z-index: 9999;}
.details_tc div{margin: 15% 1.0625rem 0; border:3px solid #00b289; border-radius: 0.15625rem; background: #fff;}
.details_tc div p:nth-child(1){padding: 0.4375rem 0; background: #f6f6f6; text-align: center; font-size: 0.5rem; border-bottom: 1px solid #dddddd; margin-bottom: 0.15625rem; color: #333333;}
.details_tc div img:nth-child(2){display: block; width: 5.5625rem; height: 5.5625rem; margin:0.546875rem auto;}
.details_tc div p:nth-child(3){width: 5.5625rem; height: 0.390625rem; line-height: 0.390625rem; font-size: 0.40625rem; margin: auto auto 0.15625rem;}
.details_tc div p:nth-child(3) span:nth-child(1){display: block;float: left; text-align: justify; width: 2.03125rem;}
.details_tc div p:nth-child(3) span:nth-child(2){display: block;float: left; color: #00b289;}
.details_tc div p:nth-child(4){width: 5.5625rem; height: 0.390625rem; line-height: 0.390625rem; font-size: 0.40625rem;margin: auto auto 0.15625rem;}
.details_tc div p:nth-child(4) span:nth-child(1){display: block;float: left; text-align: right;width: 2.03125rem;}
.details_tc div p:nth-child(4) span:nth-child(2){display: block;float: left; color: #00b289;}
.details_tc div p:nth-child(5){font-size: 0.375rem; color: #fd5647; text-align: center; padding:0.78125rem 0;}
.details_tc .details_guanbi{display: block; margin:0.3125rem auto; width: 1.0rem; height: 1.0rem;}
</style>