<template>
  <div>
    <router-link to="spec01">
      <div :class="$style.spec">spec01</div>
    </router-link>
    <router-link to="spec02">
      <div :class="$style.spec">spec02</div>
    </router-link>
    <router-link to="spec03">
      <div :class="$style.spec">spec03</div>
    </router-link>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        msg: 'hello vue'
      }
    },
    components: {}
  }
</script>
<style src="./index.scss" lang="scss" module/>

