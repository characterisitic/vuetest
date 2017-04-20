<template>
 
  <div class="home">
   <v-header></v-header>
    <h1>{{msg}}</h1>
    
  </div>
</template>

<script>
import vHeader from './header.vue'
export default {
  name: 'home',
  components: {
   'v-header' : vHeader
  },
  data () {
    return {
      msg: 'this is a homepage'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home{
  background-color:rgba(0,0,0,0.6);
  h1{
    color:#fff;
  }
}
</style>
