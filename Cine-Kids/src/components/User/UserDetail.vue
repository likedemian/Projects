<template>
  <div class="column box is-offset-1 is-6">
      <h4 class="subtitle is-4">
        <span class="icon">
          <i class="fa fa-angle-right"></i>
        </span>
        Selected User ID <span class="tag-id">{{ id }}</span>
      </h4>
      <p class="image">
        <img :src="random_people" alt="people" width="200" height="200">
      </p>
    <router-link
      tag="button"
      type="button"
      class="button is-danger"
      :to="link">
      Edit
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['id'],
  beforeCreate () {
    this.locale = this.$route.query.locale
    this.amount = this.$route.query.amount
    this.hash = this.$route.hash
  },
  data () {
    return {
      link: {
        name: 'userEdit',
        params: {id: this.id},
        query: {
          locale: this.locale,
          amount: this.amount
        },
        hash: '#scrollpos'
      },
      random_people: 'https://source.unsplash.com/category/people/200x200'
    }
  }
}
</script>

<style>
.tag-id {
  margin-left: 0.4em;
  padding: 0.1em 0.6em;
  background: #eee;
  border-radius: 4px;
}

</style>