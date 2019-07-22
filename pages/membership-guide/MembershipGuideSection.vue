<template>
  <section class="MembershipGuideSection">
    <img
        v-for="index in 2"
        :key="index"
        :class="index===0? 'contents-img': 'contents-img-pc'"
        :alt="alt"
    />
  </section>
</template>

<script>
export default {
  name: "MembershipGuideSection",
  props: {
    alt: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      src: "@/assets/daechi/ip/9900guide/tutor-2417-section1.png"
    };
  }
};
</script>

<style scoped lang=scss>
.MembershipGuideSection {
}
</style>
