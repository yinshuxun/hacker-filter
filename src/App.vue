<template>
  <div id="app">
    <div v-if="loading==='ing'">
      <MLoading/>
    </div>
    <MHeader :userName="userName"/>
    <router-view/>
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  import MHeader from 'components/Header'
  import MLoading from 'components/Loading'

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
      ...mapGetters(['userName', 'loading'])
    },
    components: {
      MHeader,
      MLoading
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
