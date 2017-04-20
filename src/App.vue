<template>
 
  <div id="app">
    <div class="wrap">
        <router-view></router-view>
    </div>
    <v-footer></v-footer>
   </div>
</template>

<script>
import vFooter from '@/components/footer'
export default {
  name: 'app',
  components: {
   'v-footer' : vFooter
  },
}
</script>

<style lang="scss">
@import 'assets/css/reset.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
  }
  .wrap{
    padding-top:40px;
  }
  .tab-list{
    width:100%;
    display:flex;
    font-size:14px;
    line-height:32px;
    >div{
      flex:1;
      a.router-link-active{
        color:blue;
      }
    }
  }
</style>
