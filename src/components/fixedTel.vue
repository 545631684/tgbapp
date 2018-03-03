<template>
  <div class="fixedTel">
    <a href="tel:4008271521">
      <img src="../assets/img/tgb46.jpg" alt="" class="tles" />
    </a>
    <a @click="top">
      <img src="../assets/img/tgb47.jpg" alt="" class="fanhuitop" />
    </a>
  </div>
</template>

<script>
  export default {
    name: 'fixedTel',
    data() {
      return {
      }
    },
    methods: {
      top() {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
      }
    }
  }
</script>

<style>
.fixedTel{position: fixed; width: 0.734375rem; height: auto; right: 0.234375rem; bottom: 1.3rem;}
.fixedTel .tles{width: 0.734375rem; height: 2.3125rem; padding-bottom: .2rem}
.fixedTel .fanhuitop{width: 0.734375rem; height: 0.65625rem;}
</style>