<template>
    <div>
      <p>{{detail}}</p>
    </div>
</template>

<script>
    export default {
      name: "player",
      data () {
        return {
          detail:{}
        }
      },
      methods:{
        getPlayer (uid) {
          switch (uid) {
            case '1': return {uid:1, name:'第一个'}
            case '2': return {uid:2, name:'第二个'}
            default: return{uid:-1}
          }
        }
      },
      mounted() {
        this.detail = this.getPlayer(this.$route.params.uid)
      },

    }
</script>

<style scoped>

</style>
