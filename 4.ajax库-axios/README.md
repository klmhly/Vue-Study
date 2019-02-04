# ajax_axios

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 使用说明

### 1、注册
在src 文件夹下面的 main.js文件中：
```vue
import axios from 'axios'
import Vueaxios from 'vue-axios'
Vue.use(Vueaxios,axios)

```

### 2、组件里面发起请求
在src 文件夹下面的 vue组件文件中：
```vue
<template>
  <div id="app">
    <p>axios获取的资源：{{res}}</p>
  </div>
</template>
-------------
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

```
