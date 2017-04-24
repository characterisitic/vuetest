<template>
 
  <div class="home">
   <v-header :titl="titl"></v-header>
   <p>{{msg}}</p>
  </mt-loadmore>
    
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
      msg: 'this is a homepage',
      titl:{
          name:'首页'
      },
      list:[1,2,3,4,5,6,7,8,9,1,2,2,3,4,5,65,7,8]
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
