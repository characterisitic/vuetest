<template>
 
  <div class="home">
   <v-header :titl="titl"></v-header>
   <p>{{seller.name}}</p>
  </mt-loadmore>
    
  </div>
</template>

<script>
import vHeader from './header.vue'
import axios from 'axios'
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
      list:[1,2,3,4,5,6,7,8,9,1,2,2,3,4,5,65,7,8],
      seller: {

      }
    }
  },
  created() {
    this.$ajax.get('/api/seller')
      .then((response) => {
        console.log(response.data.data)
        this.seller = response.data.data
      })
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
