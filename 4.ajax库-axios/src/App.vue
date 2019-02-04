<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>axios获取的资源：{{res}}</p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data (){
    return {
      res:''
    }
  },

  // 使用axios取到了数据并且复制给了res变量
  mounted() {
    this.axios.post('http://api.komavideo.com/news/list').then(body=>{
      this.res = body.data
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
