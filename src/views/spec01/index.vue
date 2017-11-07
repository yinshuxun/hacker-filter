<template>
  <div>
    <div>this is spec01</div>
    <button @click='reduce(a)'>-</button>
    <input type="number" @input="inputData"/>
    <button @click='increment(a)'>+</button>
    <div>{{`结果是: ${count}`}}</div>
  </div>
</template>
<style src="./index.scss" lang="scss" module/>
<script>
  import {mapActions,mapGetters} from 'vuex'

  export default{
    data() {
      return {
        a: 1
      }
    },
    methods: {
      ...mapActions(['increment', 'reduce']),
      inputData(e) {
        this.a = parseInt(e.target.value)
      }
    },
    computed:{
      ...mapGetters(['count'])
    }
  }
</script>
