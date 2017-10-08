<template lang="pug">
.container.columns
  button.button.is-primary(type='button', @click='gotoBack') Back
  transition(name='fade', mode='out-in')
    router-view
</template>

<script>
import UserLink from './UserLink.vue'
import UserStart from './UserStart.vue'

export default {
  components: {
    appUserLink: UserLink,
    appUserStart: UserStart
  },
  methods: {
    gotoUserComponent () {
      this.$router.push({path: '/user'})
    },
    gotoBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
</style>