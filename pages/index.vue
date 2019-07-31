<template>
  <article class="container">
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, odit!</h1>
    <img src="./assets/img/blueflax.jpg">
    <p v-html="contents">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad aliquid, consectetur distinctio dolorem dolorum error, et facilis illo iure libero molestias numquam obcaecati odit provident voluptate voluptatem, voluptatum. Magni.</p>
  </article>
</template>

<script>

export default {
  head: {
    title: 'Lorem ipsum dolor sit.'
  },
  data () {
    return {
      contents: 'I am continually <em>amazed</em> at the beautiful, delicate <a href="http://en.wikipedia.org/wiki/Linum_lewisii" rel="external" title="Learn more about Blue Flax">Blue Flax</a> that somehow took hold in my garden. They are awash in color every morning, yet not a single flower remains by the afternoon. They are the very definition of ephemeral.'
    }
  },
  props: {
    title: {
      type: String,
      default: 'lorem'
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
