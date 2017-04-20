<template>
    <footer class="footer">
        <div><router-link to="/home"><i class="icon iconfont icon-wawa-movement"></i><h4>首页</h4></router-link></div>
        <div><router-link to="/mine"><i class="icon iconfont icon-wawa-lease"></i><h4>蛙租</h4></router-link></div>
        <div><router-link to="/rent"><i class="icon iconfont icon-wawa-movement"></i><h4>哇友圈</h4></router-link></div>
        <div><router-link to="/moment"><i class="icon iconfont icon-wawa-lease"></i><h4>我的</h4></router-link></div>
    </footer>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
     
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.footer{
    height:40px;
    width:100%;
    position:fixed;
    bottom:0;
    left:0;
    background-color:#fff;
    display:table;
    border-top:1px solid #f2f2f2;
        color: #cecece;
    >div{
        display:table-cell;
        vertical-align:middle;
        padding:.4em 0;
        a{
            display:inline-block;
            &.router-link-active{
                color:#28b55a;
                i{
                    color:#28b55a;
                }
            }
        }
        h4{
            line-height:1.5;
        }
        i{
               color: #cecece;
        }
    }
}
</style>
