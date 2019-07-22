<template>
  <article id="MembershipGuide">
    <header>
      <nav class="img-section">
        <img
            class="contents-img"
            alt="HOW TO USE 9,900원 대치동 초등과왜, 수업은 어떻게 신청하고 어떻게 들으면 되나요?"
            src="./assets/tutor-2417-contents-m.png"
        />
        <img
            class="contents-img-pc"
            alt="HOW TO USE 9,900원 대치동 초등과왜, 수업은 어떻게 신청하고 어떻게 들으면 되나요?"
            src="./assets/tutor-2417-contents.png"
        />
      </nav>
      <membership-guide-anchor/>
      <section id="title" class="img-section">
        <img
            class="contents-img"
            alt="How TO APPLY 참 쉬운 대치동 초등 과외 신청하는 법"
            src="./assets/tutor-2417-title-m.png"
        />
        <img
            class="contents-img-pc"
            alt="How TO APPLY 참 쉬운 대치동 초등 과외 신청하는 법"
            src="./assets/tutor-2417-title.png"
        />

        <p> 수강신청은 정기 결제 무료체험 기간이 지나고 실제<br class="br-mobile"/> 9,900원 결제가 이루어지면 가능합니다.<br/></p>
        <p> ex) 7월 22일 신청 -> 7월 29일 9,900원 결제 시작 -> 7월 29일부터 수강신청 가능</p>
      </section>
    </header>
    <section class="img-section">
      <img
          class="contents-img"
          alt="1. 메뉴에서 내 보관함을 클릭, 결제가 잘 되었는지 확인해주세요!"
          src="./assets/tutor-2417-section1-m.png"
      />
      <img
          class="contents-img-pc"
          alt="1. 메뉴에서 내 보관함을 클릭, 결제가 잘 되었는지 확인해주세요!"
          src="./assets/tutor-2417-section1.png"
      />
    </section>
    <membership-guide-section
      class="img-section"
      alt="1/assets/tion1.p"
    />
    <section class="img-section">
      <img
          class="contents-img"
          alt="2. 튜터닷컴 초등(kr.tutor.com/elementary)사이트에 접속해주세요."
          src="./assets/tutor-2417-section2-m.png"
      />
      <img
          class="contents-img-pc"
          alt="2. 튜터닷컴 초등(kr.tutor.com/elementary)사이트에 접속해주세요."
          src="./assets/tutor-2417-section2.png"
      />
    </section>
    <section class="img-section">
      <img
          class="contents-img"
          alt="3. 왼쪽 전과목 수업신청 메뉴로 들어가, 학년과 수학 과목을 선택하고 검색 클릭!"
          src="./assets/tutor-2417-section3-m.png"
      />
      <img
          class="contents-img-pc"
          alt="3. 왼쪽 전과목 수업신청 메뉴로 들어가, 학년과 수학 과목을 선택하고 검색 클릭!"
          src="./assets/tutor-2417-section3.png"
      />
    </section>
    <section class="img-section">
      <img
          class="contents-img"
          alt="4. 메뉴에서 내 보관함을 클릭, 결제가 잘 되었는지 확인해주세요!"
          src="./assets/tutor-2417-section4-m.png"
      />
      <img
          class="contents-img-pc"
          alt="4. 메뉴에서 내 보관함을 클릭, 결제가 잘 되었는지 확인해주세요!"
          src="./assets/tutor-2417-section4.png"
      />
    </section>
    <section class="img-section">
      <img
          class="contents-img"
          alt="오른쪽의 커넥츠 멤버십으로 예약 버튼을 눌러 신청하세요!"
          src="./assets/tutor-2417-section5-m.png"
      />
      <img
          class="contents-img-pc"
          alt="오른쪽의 커넥츠 멤버십으로 예약 버튼을 눌러 신청하세요!"
          src="./assets/tutor-2417-section5.png"
      />
    </section>
    <membership-guide-anchor/>
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
  * {
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .contents-img-pc {
    display: none;
  }

  img {
    width: 100%;
    max-width: 1080px;
  }

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
