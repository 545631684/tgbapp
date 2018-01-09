<template>
  <div id="app">
    <transition name="slide-fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body{overflow:hidden;max-width: 10.0rem;margin: 0 auto;position:relative;font-family:"微软雅黑", Arial, Helvetica, sans-serif; 
}
.wrap{width: 100%;max-width: 640px;background: #fff;overflow:hidden; min-height: 17.8125rem;}
.block{ height: 0.1875rem; background: #eee; }
.clear::after {content: '';display: block;visibility: hidden;overflow: hidden;height: 0;clear: both;}
.clear2 {content: '';display: block;visibility: hidden;overflow: hidden;height: 0;clear: both;}
img{ vertical-align: top;border: 0; max-width:100%;margin: 0 auto;}
.fl{ float: left; }
.fr{ float: right; }
.flex{display:box;display: -moz-box;display: -webkit-flex;display: -webkit-box;display: -ms-flexbox;display: flex;}
.flex dd,.flex li{flex: 1;}
a{color:#333;}
.hs{background: #f5f5f5 !important;}
.bs{background: #ffffff !important;}
.omit1{display: -webkit-box; -webkit-box-orient: vertical;-webkit-line-clamp: 1;overflow: hidden;}
.omit3{display: -webkit-box; -webkit-box-orient: vertical;-webkit-line-clamp: 3;overflow: hidden;}

.slide-fade-enter-active {transition: all .3s ease;}
.slide-fade-leave-active {transform: translate3d(-100%, 0, 0);}
.slide-fade-enter, .slide-fade-leave-to{transform: translateX(100px);opacity: 0;}
[v-cloak] {display: none;}
</style>
