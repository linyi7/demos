<template>
  <div id="app">
    <Headernav></Headernav>
   <router-view></router-view>
  <Footernav></Footernav>
  </div>
</template>

<script>
import Headernav from '@/components/header-nav'
import Footernav from '@/components/footer-nav'
export default {
  name: 'app',
  components:{
    Headernav,
    Footernav
    
  }
}
</script>

<style>

</style>
