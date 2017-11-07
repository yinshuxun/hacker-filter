<template>
  <div id="app">
    <MHeader :userName="userName"/>
    <router-view/>
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  import MHeader from 'components/Header'

  export default {
    name: 'app',
    data() {
      return {}
    },
    created() {
      this.$http.get('getBase')
        .then(({data: {userName}}) => {
          this.setBase({userName})
        })
    },
    methods: {
      ...mapActions(['setBase'])
    },
    computed: {
      ...mapGetters(['userName'])
    },
    components: {
      MHeader
    }
  }
</script>
<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
