<template>
   <header id="header">
        <h1>{{title}}</h1>
   </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title:{
      type:String,
      default:'神影电影'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header{
  width: 100%;
  height: 50px;
  color: #ffffff;
  background: #e54847;
  border-bottom: 1px solid #e54847;
  position: relative;
}
#header h1{
  font-size: 18px;
  text-align: center;
  line-height: 50px;
  font-weight: normal;
}
#header i{
  position: absolute;
  left: 5px;
  top: 50%;
  margin-top: -13px;
  font-size: 26px;
}
</style>
