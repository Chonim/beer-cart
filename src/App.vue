<template>
  <div id="app">
    <beer-header />
    <router-view />
  </div>
</template>

<script>
import BeerHeader from '@/components/Header'

export default {
  name: 'BeerCart',
  components: {
    BeerHeader
  },
  created () {
    this.$store.dispatch('beer/fetchBeers')
    this.$store.dispatch('tag/fetchTags')
  }
}
</script>

<style lang="scss">
html, body {
  margin: 0;
}
.box-shadow {
  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
}
</style>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #F2F3F7;
  min-height: 100vh;
}
</style>
