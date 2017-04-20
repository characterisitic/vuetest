<template>
  <div class="rent">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
export default {
  name: 'rent',
  data () {
    return {
      msg: 'this is a rent'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.rent{
  background-color:rgba(0,0,0,0.6);
  h1{
    color:#fff;
  }
}
</style>
