<template>
  <button type="button" class="button is-primary" @click="gotoHomeComponent">
    <slot></slot>
  </button>
</template>

<script>
export default {
  methods: {
    gotoHomeComponent () {
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style>

</style>