<template>
  <div class="hello">
    <h1>直接访问state，{{ count }}</h1>
    <p>访问getter： {{isFlag}}</p>
    <P>访问mutation：给state加10</P>
    <button @click="add(10)" value="add">加法</button>
    <ul>
      <li v-for="item in isTodo">{{item.text}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
    count () {
      return this.$store.state.count
    },

    isFlag (){
      return this.$store.getters.isFlag
    },
    isTodo () {
      return this.$store.getters.isTodo
    }
  },

  methods:{
    add (){
      return this.$store.dispatch('ADD',10)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
