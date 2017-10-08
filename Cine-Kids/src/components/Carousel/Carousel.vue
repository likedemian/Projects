<template lang="pug">
  .carousel
    slot
    button(type="button" class="carousel--button is-prev" @click="prevItem")
      img(src="https:icon.now.sh/chevron/48/fff/left", alt="prev item")
    button(type="button" class="carousel--button is-next" @click="nextItem")
      img(src="https:icon.now.sh/chevron/48/fff/right", alt="next item")
    .indicators
      a(href role="tab" @click.prevent="gotoItem(n-1)" v-for="n in items_count", :class="{'is-active': active_index === n-1}")
        img(:src="activeIndexSrc(n-1)", :alt="activeIndexAlt(n-1)")
</template>

<script>
  export default {
    name: 'Carousel',
    props: {
      index: {
        type: Number,
        default: 0
      }
    },
    mounted () {
      console.log('this', this)
      console.log('this.items', this.items)
      this.items.forEach((item, i) => {
        item.index = i
        console.log('item: %s, index: %s, i: %s', item, item.index, i)
      })
      // 이미지 로딩, 리사이즈 상태에 따른 컴포넌트 높이 조절

      let setHeight = () => this.$el.style.height === this.items[0].$el.getBoundingClientRect().height + 'px'
      window.addEventListener('DOMContentLoaded', setHeight)
      window.addEventListener('resize', setHeight)
    },
    data () {
      return {
        active_index: this.index,
        items: this.$children
      }
    },
    computed: {
      items_count () {
        return this.items.length
      }
    },
    methods: {
      activeIndexSrc (n) {
        let path = this.active_index === n ? 'lens' : 'panorama_fish_eye'
        return `https://icon.now.sh/${path}/22/fff`
      },
      activeIndexAlt (n) {
        this.active_index === n ? 'Current Item' + n : 'Item' + n
        return 'Item' + n
      },
      prevItem () {
        if (this.active_index-- < 0) {
          this.active_index = this.items_count - 1
        }
      },
      nextItem () {
        if (++this.active_index >= this.items_count) {
          this.active_index = 0
        }
      },
      gotoItem (n) {
        this.active_index = n
      }
    }
  }
</script>

<style scoped  lang="sass">
.carousel
  position: relative
  height: 10vh


.carousel--button
  position: absolute
  top: 50%
  border: none
  background: transparent
  opacity: 0.4
  transition: opacity 0.3s
  transform: translateY(-50%)
  &:hover
    opacity: 1
  &.is-prev
    left: 20px
  &.is-next
    right: 20px
.indicators
  position: absolute
  left: 50%
  bottom: 0px
  transform: translateX(-50%)
  a
    margin:
      left: 4px
      right: 4px
    &.is-active
      cursor: default
</style>
