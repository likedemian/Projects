<template>
  <div class="column box is-offset-1">
      <h3 class="subtitle">Select User</h3>
      <ul>
        <router-link tag="li" to="user/1?locale=ko&amp;amount=193"><a href>User 1</a></router-link>
        <router-link tag="li" to="user/2?locale=fr&amp;amount=500#scrollpos"><a href>User 2</a></router-link>
        <router-link tag="li" to="user/3?locale=en-us&amp;amount=1000"><a href>User 3</a></router-link>
      </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style>

</style>