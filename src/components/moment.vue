<template>
  <div class="moment">
     <v-header :titl="titl"></v-header>
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
import vHeader from './header.vue'
export default {
  name: 'mine',
  components:{
    "v-header":vHeader
  },
  data () {
    return {
      msg: 'this is a monent',
      titl: {
        name:'哇友圈'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.moment{
  background-color:rgba(0,0,0,0.6);
  h1{
    color:#fff;
  }
}
</style>
