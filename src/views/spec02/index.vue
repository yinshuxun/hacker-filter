<template>
  <div>
    this is spec01
    <div>生成随机数1:</div>
    <div v-for="(item, index) in items" :key="index">
      {{item.id}}
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        items: []
      }
    },
    created () {
      this.$http.get('/get-data-0').then(({data: {list}}) => {
        this.items = list
      })
    }
  }
</script>
