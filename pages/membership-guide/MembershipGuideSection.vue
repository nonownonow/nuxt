<template>
  <section class="MembershipGuideSection">
    <picture>

      <img
        :alt="alt"
        sizes="(min-width:640px) 900px, (min-width: 320px) 500px, 200px"
        srcset="./assets/tutor-2417-contents-m.png 320w, ./assets/tutor-2417-contents-m@2x.png 640w"
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
