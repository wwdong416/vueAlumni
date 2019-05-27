<template>
    <div  id="nav">
      <router-link to="/home" class="">首页</router-link>
      <router-link to="/notice">通知</router-link>
      <router-link to="/alumni">同学录</router-link>
      <router-link to="/message">档案</router-link>
      <router-link to="/dynamic">动态</router-link>
    </div>
</template>

<script>
export default {
  name: 'Tabbar',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  #nav{
    position: fixed;
    bottom: 0;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    border-top: 1px solid #e4e4e4;
  }
  #nav a{
    width: 20%;
    text-align: center;
  }

</style>
