<template>
	<div class="loading">
      <img src="../assets/img/loading.gif" alt="">
      <p>{{title}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '正在载入...'
    }
  }
}
</script>

<style scoped lang="css">
.loading{padding-top: 0.78125rem;}
.loading img{display: block; width: 0.78125rem; height: 0.78125rem; margin: auto;}
.loading p{ text-align: center;padding: 0.234375rem 0; font-size: 0.234375rem; color: #000000; }
</style>