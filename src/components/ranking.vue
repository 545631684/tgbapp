<template>
  <div class="wrap phb">
    <h2>关键词排名</h2>
    <p class="p01">·标识排名</p>
    
    <div class="phb_div" v-for="(item, index) in getdata">
      <div class="l">{{index + 1}}</div>
      <div class="r">
        <div class="column">
          <div class="column_1" :style="{width: setBarWidth(item.hot)}"><p></p></div>
          <div class="column_2">{{item.hot}}</div>
        </div>
        <p class="title">
          <a href="">{{item.cat}}</a>
          <span>热度</span><samp>{{item.hot}}</samp>
          <span :class="setCalssName(item.asd)">排名</span><samp>{{item.asd}}</samp>
        </p>
      </div>
    </div>
    <div class="clear2" style="height: 1.35rem;"></div>
    <div class="phbBottom">---了解排名详情，请点击相应<b><排名关键词></b>---</div>
  </div>
</template>

<script>
  export default {
    name: 'ranking',
    data() {
      return {
        maxHot: 0,
        barWidth: 340,
        hotWidth: '',
        getdata: [
          {hot: 98754, asd: '0', tag: '789', rank: 3, cat: '网易'},
          {hot: 68575, asd: '-5', tag: '987', rank: 6, cat: '九游'},
          {hot: 31654, asd: '+3', tag: '897', rank: 5, cat: '风暴'},
          {hot: 15670, asd: '+1', tag: '123', rank: 1, cat: '微信'},
          {hot: 13247, asd: '-1', tag: '456', rank: 2, cat: '腾讯'}
        ]
      }
    },
    methods: {
      setCalssName(strings) {
        let data = strings.toString().charAt(0)
        if (data === '+') {
          return 'rise'
        } else if (data === '-') {
          return 'flat'
        } else {
          return 'drop'
        }
      },
      setBarWidth(hot) {
        let barWidth = hot * this.barWidth / this.maxHot
        barWidth = barWidth / 64
        console.log(barWidth.toString())
        return barWidth.toFixed(2).toString() + 'rem'
      }
    },
    created() {
      // 获取排名数据 ....
      this.maxHot = this.getdata[0].hot
    }
  }
</script>

<style>
  .phb{background:#02094d url(../assets/img/phb01.jpg)  top center no-repeat;background-size: 10.0rem 9.40625rem; min-height: 20rem; }
  .phb h2{color: #ffffff; text-align: center; line-height: 0.46875rem; padding-top: 8.328125rem; font-size: 0.59375rem;}
  .phb .p01{padding:0.46875rem 0.78125rem 0; text-align: left; color: #ffffff; font-size: 0.375rem;}
  .phb_div{padding:0.390625rem 0.9375rem 0;}
  .phb_div:last-of-type{padding:0.390625rem 0.9375rem 1.35rem;}
  .phb_div::after {content: '';display: block;visibility: hidden;overflow: hidden;height: 0;clear: both;}
  .phb_div .l{width: 1.0rem; height: 1.0rem; background: url(../assets/img/phb02.png)  center center no-repeat;background-size: 1.0rem 1.0rem;float: left;margin-right: 0.3125rem; font-size: 0.671875rem; text-align: center; color: #ffffff; line-height: 1.0rem; text-shadow: 2px 1px 0 #47c2c3;}
  .phb_div .r{float: left;width: 6.640625rem; height: 1.0rem; border: 0.015625rem solid #484c74;}
  .phb_div .r .column{height: 0.4375rem; padding: 0.078125rem 0 0;}
  .phb_div .r .column .column_1{height: 0.4375rem; float: left;transition: width 2s;}
  .phb_div .r .column .column_1 p{height: 0.4375rem;background: linear-gradient(left , rgb(234, 241, 134) , rgb(119, 255, 178) 54% , rgb(22, 224, 255) 100%);background: -o-linear-gradient(left , rgb(234, 241, 134) , rgb(119, 255, 178) 54% , rgb(22, 224, 255) 100%);background: -ms-linear-gradient(left , rgb(234, 241, 134) , rgb(119, 255, 178) 54% , rgb(22, 224, 255) 100%);background: -moz-linear-gradient(left , rgb(234, 241, 134) , rgb(119, 255, 178) 54% , rgb(22, 224, 255) 100%);background: -webkit-linear-gradient(left , rgb(234, 241, 134) , rgb(119, 255, 178) 54% , rgb(22, 224, 255) 100%);}
  .phb_div .r .column .column_2{width: 20%; float: left; color: #16f7ff; line-height: 0.4375rem; font-size: 0.421875rem;text-align: center;}
  .phb_div .r .title{color:#16f7ff; font-size: 0.25rem; line-height: 0.484375rem;}
  .phb_div .r .title a{color:#fffc00;padding-left: 0.15625rem;text-decoration:underline;}
  .phb_div .r .title  span{padding-left: 0.15625rem;padding-right: 0.078125rem;}
  .phb_div .r .title  samp{font-size: 0.203125rem;}
  .phb_div .r .title  span:nth-child(2)::after{width: 0.15625rem; height: 0.21875rem; content:" ";vertical-align:middle;display:inline-block; position: relative;top: -0.15625rem;right: -0.015625rem;background: url(../assets/img/phb03.gif)  center center no-repeat;}
  /*  rise(升) drop（平） flat（降）*/
  .phb_div .r .title  span:nth-child(4).drop::after{width: 0.296875rem; height: 0.21875rem; content:" ";vertical-align:middle;display:inline-block; position: relative;top: -0.03125rem;right: 0;background: url(../assets/img/phb05.png)  center center no-repeat;background-size:0.296875rem 0.21875rem;}
  .phb_div .r .title  span:nth-child(4).rise::after{width: 0.21875rem; height: 0.296875rem; content:" ";vertical-align:middle;display:inline-block; position: relative;top: -0.03125rem;right: 0;background: url(../assets/img/phb06.png)  center center no-repeat;background-size: 0.21875rem 0.296875rem;transform: rotate(180deg);}
  .phb_div .r .title  span:nth-child(4).flat::after{width: 0.21875rem; height: 0.296875rem; content:" ";vertical-align:middle;display:inline-block; position: relative;top: -0.03125rem;right: 0;background: url(../assets/img/phb04.png)  center center no-repeat;background-size: 0.21875rem 0.296875rem;transform: rotate(180deg);}
  .phb_div .r .title  span:nth-child(4){padding-right: 0.078125rem;}
  .phbBottom{position: fixed; max-width: 10rem; bottom: 0; width: 100%; height: 1.25rem; text-align: center; color: #53f7fd; font-size: 0.234375rem; background: #02094d ; line-height: 1.25rem;}
  .phbBottom b{color: #fffc00;}
</style>