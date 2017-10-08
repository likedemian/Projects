<template lang="pug">
  //- transition(name="fade")
  .carousel-item(v-show="is_visible")
    slot
</template>

<script>
  export default {
    name: 'CarouselItem',
    data () {
      return {
        index: 0
      }
    },
    computed: {
      is_visible () {
        return this.$parent.active_index === this.index
      }
    }
  }
</script>

<style scoped  lang="sass">
.carousel-item
  position: absolute
  width: 100%
  img
    width: 500
    height: auto
    vertical-align: top

.fade-enter,
.fade-leave-to
  opacity: 0

.fade-enter-active,
.fade-leave-active
  transition: opacity 0.4s

</style>
