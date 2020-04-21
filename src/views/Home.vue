<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import API from './../api'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  mounted () {
   console.log(API)
   this.getTest()
  },
  methods: {
    async getTest() {
      const params = {
        offset:0,
        count: 20,
      }
      const res = await  API.id18313(params)
      console.log(res)
    }
  }
}
</script>
