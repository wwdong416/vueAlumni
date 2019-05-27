<template>
  <div id="app">

    <router-view></router-view>
    <tabBar></tabBar>
  </div>
</template>

<script>
import tabBar from './components/public/Tabbar'

export default {
  // components: {
  //   'todoItem': todoItem
  // },
  data () {
    return {
    }
  },
  components: {
    tabBar
  }
}
</script>

<style>
  *{
    border: 0;
    margin: 0;
  }
  a { display: block; text-decoration: none; color: #003 }

</style>
