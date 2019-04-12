<template>
  <div id="app">
    <beer-header />
    <router-view/>
  </div>
</template>

<script>
import BeerHeader from '@/components/Header'

export default {
  name: 'BeerCart',
  components: {
    BeerHeader
  }
}
</script>

<style lang="scss">
html, body {
  margin: 0;
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
