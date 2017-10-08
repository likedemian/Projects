<template lang="pug">
nav.gnb
  ul
    router-link.navigation(to='/', tag='li', active-class='currnet-page', exact)
      a(href) Home
    router-link.navigation(to='/user', tag='li', active-class='currnet-page')
      a(href) User
    router-link.navigation(to='/cinemas', tag='li', active-class='currnet-page', exact)
      a(href) Cinemas
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="sass">
.navigation
  float: left
  margin-right: 50px
</style>