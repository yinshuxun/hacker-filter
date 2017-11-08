<template>
  <div>
    <div>{{`欢迎回来,${userName}`}}</div>
  </div>
</template>
<style src="./index.scss" lang="scss" module></style>
<script>
  export default {
    props: ['userName']
  }
</script>
