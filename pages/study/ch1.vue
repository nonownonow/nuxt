<template>
  <article class="container">
    <h1>{{}}</h1>
    <img src="../assets/img/blueflax.jpg">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad aliquid, consectetur distinctio dolorem dolorum error, et facilis illo iure libero molestias numquam obcaecati odit provident voluptate voluptatem, voluptatum. Magni.</p>
  </article>
</template>

<script>

import db from './ch1.data.js'

export default {
  head: {
    title: 'Lorem ipsum dolor sit.'
  },
  props: {
    h1: {
      type: String,
      default: 'lorem'
    }
  },
  data () {
    return {
      db: {}
    }
  },

}
</script>

<style lang="scss" scoped>

</style>
