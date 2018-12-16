## Vue练习

### 1#：清单应用

**效果图：**

![GIF.gif](https://upload-images.jianshu.io/upload_images/11152416-bb8fb87b803d645e.gif?imageMogr2/auto-orient/strip)

[[代码链接](https://github.com/klmhly/Vue-Study/tree/master/1.%E6%B8%85%E5%8D%95)]

**练习知识点**

1. v-model绑定表单元素
2. v-for生成列表
3. v-bind绑定元素的特性：class，checked
4. v-on绑定click（点击），keydown.enter（按下enter键）的事件
5. v-if实现根据条件渲染

---

### 2#：自定义指令

**效果图**

![QQ截图20181216191445.png](https://upload-images.jianshu.io/upload_images/11152416-8de3b213baaeb075.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

[[代码链接](https://github.com/klmhly/Vue-Study/tree/master/2.%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8C%87%E4%BB%A4)]

**练习知识点**
自定义指令包括：全局自定义指令|局部自定义指令
1. 全局
```vue
// 注册一个全局自定义指令 `v-name`
Vue.directive('name', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
```
2. 局部
```vue
directives: {
  name1: {
    inserted: function (el) {
      el.focus()
    }
  }
  name2:{
    inserted: function (el) {
          el.focus()
        }
  }
}
```

3. 调用指令的钩子函数
bind
inserted
update
componentUpdated
unbind