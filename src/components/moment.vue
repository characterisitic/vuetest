<template>
  <div class="moment">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
export default {
  name: 'moment',
  data () {
    return {
      msg: 'this is a moment'
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
