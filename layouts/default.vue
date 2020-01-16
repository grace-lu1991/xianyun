<template>
  <div>
<Header/>
    <nuxt />
    <Footer/>
  </div>
</template>
<script>
import Header from '@/components/header.vue'
import Footer from '@/components/Footer.vue'
export default {
  components:{Header,Footer}
}
</script>
<style>
*{
  margin:0; 
  padding:0;
}
ul, li, ol{
  list-style:none;
}
a{
  text-decoration:none;
  color:inherit;
}

em,i{
  font-style: normal;
}
</style>
