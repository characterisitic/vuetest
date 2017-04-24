<template>
    <header class="header">
        <div class="header-left"><i class="icon iconfont" :class="returns"></i></div>
        <div class="header-center">{{titl.name}}</div>
        <div class="header-right"></div>
    </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
      titl: {
          type:Object
      }
  },
  data () {
    return {
      msg: 'this is a bar',
      returns:' icon-wawa-navReturn'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/css/iconfont.css';
.header{
    height:40px;
    width:100%;
    position:fixed;
    top:0;
    left:0;
    background-color:#28b55a;
    color:#fff;
    display:table;
    border-bottom:1px solid #f2f2f2;
    >div{
        display:table-cell;
        vertical-align:middle;
        &.header-left,&.header-right{
            width:5em;
        }
        i{
            color:#fff;
        }
    }
}
</style>
