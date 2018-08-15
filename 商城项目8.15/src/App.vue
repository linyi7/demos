<template>
  <div id="app">
    <HeaderNav></HeaderNav>
    <router-view/>
    <FooterNav></FooterNav>
  </div>
</template>

<script>
import HeaderNav from './components/header-nav'
import FooterNav from './components/footer-nav'

export default {
  name: 'App',
  components: {
    HeaderNav,
    FooterNav
  
  }
}
</script>

<style>

</style>
