<template>
  <a id="membership-guide-anchor" href="/elementary">
    <div id="label">
      <div class="circle"/>
      <img
        class="text-img img-anchor-register"
        alt="지금 바로 수업 신청하러 가기"
        src="./assets/tutor-2417-img-anchor-register-label.svg"
      />
    </div>
  </a>
</template>

<script>
export default {
  name: "MembershipGuideAnchor"
};
</script>

<style scoped lang=scss>
@import "~destyle.css";
#membership-guide-anchor {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #295ef6;
  width: 100%;

  #label {
    display: flex;
    position: relative;
    width: 70%;
    justify-content: center;
    align-items: center;
    margin: 10% 0;
    @media (min-width: 640px) {
      width: 40%;
      margin: 5% 0;
    }
    img {
      width: 100%;
      position: absolute;
    }

    .circle {
      width: 14%;
      padding-top: 14%;
      right: -2.5%;
      border-radius: 50%;
      background-color: black;
      position: absolute;
    }
  }
}
</style>
