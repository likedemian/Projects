<template>
  <div class="column is-5 is-offset-1">
    <h3 class="subtitle is-4">Selected User Edit Mode</h3>
    <div class="box">
      <p> Locale: {{ locale }}</p>
      <p> Amount: {{ amount }}</p>
    </div>
    <div class="space box">
      
    </div>
    <div id="scrollpos" class="box">
      <h5 class="title is-5">scrollpos</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
</template>

<script>
export default {
  beforeCreate () {
    this.locale = this.$route.query.locale
    this.amount = this.$route.query.amount
  },
  mounted () {
    let el = document.querySelector(this.$route.hash)
    el.scrollIntoView(true)
  }
}
</script>

<style>
.space {
  height: 100vh
}
#scrollpos {
  margin-top: 2rem;
}

</style>