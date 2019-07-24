<template>
  <section class="MembershipGuideSection">
    <picture>
      <source
        :srcset="src.replace(/-m(?=.\w+$)/,'')"
        media="(min-width: 640px)"
      />
      <img
        :alt="alt"
        :src="src"
      />
    </picture>
  </section>
</template>

<script>
export default {
  name: "MembershipGuideSection",
  props: {
    alt: {
      type: String,
      default: ''
    },
    src: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped lang=scss>
@import "~destyle.css";
.MembershipGuideSection {
}
</style>
