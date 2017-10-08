<template lang="pug">
  section
    .modal-background
    .modal-card
      header.modal-card-head
        p.modal-card-title Sign Up
        button(class="delete" aria-label="close", @click="closeModal")
      section.modal-card-body
        .field
          label.label Name
          .control
            input.input(type='text', placeholder='Text input')
        .field
          label.label Username
          .control.has-icons-left.has-icons-right
            input.input.is-success(type='text', placeholder='Text input', value='bulma')
            span.icon.is-small.is-left
              i.fa.fa-user
            span.icon.is-small.is-right
              i.fa.fa-check
          p.help.is-success This username is available
        .field
          label.label Email
          .control.has-icons-left.has-icons-right
            input.input.is-danger(type='text', placeholder='Email input', value='hello@')
            span.icon.is-small.is-left
              i.fa.fa-envelope
            span.icon.is-small.is-right
              i.fa.fa-warning
          p.help.is-danger This email is invalid
        .field
          .control
            label.checkbox
              input(type='checkbox')
              |       I agree to the 
              a(href='#') terms and conditions
      footer.modal-card-foot
        button.button.is-primary Submit
        button.button.is-link Cancel

</template>

<script>
export default {
  name: 'signIn',
  methods: {
    closeModal () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="sass">
.modal-card


</style>