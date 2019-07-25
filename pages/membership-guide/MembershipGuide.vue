<template>
  <article id="MembershipGuide">
    <header>
      <nav class="img-section">
        <membership-guide-section
          class="img-section"
          alt="HOW TO USE 9,900원 대치동 초등과왜, 수업은 어떻게 신청하고 어떻게 들으면 되나요?"
          :src="require('./assets/tutor-2417-contents-m.png')"
          type="section"
        />
      </nav>
    </header>
  </article>
</template>

<script>
import MembershipGuideAnchor from "./MembershipGuideAnchor";
import MembershipGuideSection from "./MembershipGuideSection";

export default {
  name: "MembershipGuide",
  components: {
    MembershipGuideAnchor,
    MembershipGuideSection
  }
};
</script>

<style scoped lang=scss>
@import "~destyle.css";

#MembershipGuide {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(9, auto);
  font-size: 2.3vw;
  max-width: 1080px;
  margin: 0 auto;

  #title {
    align-items: center;
    position: relative;
    padding-top: 5%;
    background-color: white;
    img {
      top: -15%;
      order: 1;
    }
    p {
      text-align: center;
      top: 10%;
    }
  }
  @media (min-width: 640px) {
    font-size: 1.8rem;
    #title {
      padding-top: 0;
      img {
        top: 0;
      }
    }
    .contents-img {
      display: none;
    }
    .contents-img-pc {
      display: inherit;
    }
    .br-mobile {
      display: none;
    }
  }
}
</style>
