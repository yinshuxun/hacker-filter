<template>
  <div>
    this is spec01
    <div>生成随机数:</div>
    <div v-for="item in items">
      {{item.id}}
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items: []
      }
    },
    created() {
      this.$http.get('/get-data-0').then(({data: {list}}) => {
        this.items = list
      })
    }
  }
</script>
