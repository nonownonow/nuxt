<template>
  <article class="container">
    <h1>{{h1}}aad</h1>
    <img src="../assets/img/blueflax.jpg">
    <p>{{p}}</p>
  </article>
</template>

<script>

import db from './ch1.data.js'
import faker from 'faker'
export default {
  head: {
    title: 'Lorem ipsum dolor sit.'
  },
  props: {
    h1: {
      type: String,
      default: faker.lorem.words()
    }
  },
  data () {
    return {
      h1: db.article.h1,
      img: db.article.img,
      p: db.article.p
    }
  },

}
</script>

<style lang="scss" scoped>

</style>
