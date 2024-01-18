<template>
  <div class="about">
    <div class="about__title">
      <Title title="About us" :types="['main']"></Title>
    </div>
    <div class="about__preview">
      <Preview :images="previewCardsIntro"
        >Bubbles Company provides high quality plumbing services. We have been serving St. Washougal, Washington and neighboring areas for more than 12 years. Sit and Chill is a Chinese restaurant in St. Irving, Texas. For nine years, we have been a local favorite for the best Chinese noodles in
        town.</Preview
      >
    </div>
    <div class="about__title">
      <Title title="Meet our beautiful team" :types="['sub']"></Title>
    </div>
    <div class="about__preview">
      <Preview :images="previewCardsTeam">Give a brief description of your target market and how you plan to approach it. Write it as an introduction to create the first impression, so that your target audience wants to know more about your business.</Preview>
    </div>
    <div class="about__title">
      <Title title="Our corporate leisure activities" :types="['sub']"></Title>
    </div>
    <div class="about__preview">
      <Preview :images="previewCardsLeisure">f you need help with general business description examples, you can post your legal need on UpCounsel's marketplace. UpCounsel accepts only the top 5 percent of lawyers to its site. Lawyers on UpCounsel come from law schools such as Harvard Law and Yale Law and average 14 years of legal experience, including work with or on behalf of companies like Google, Menlo Ventures, and Airbnb.</Preview>
    </div>
    <div class="about__title">
      <Title title="Gallery about us" :types="['sub']"></Title>
    </div>
    <div class="about__gallery">
      <Gallery :cards="galleryCards"></Gallery>
    </div>
  </div>
</template>

<script>
import Title from "../components/ui/Title.vue";
import Gallery from "../components/Gallery.vue";
import Preview from "../components/Preview.vue";

export default {
  name: "About",
  components: {
    Title,
    Gallery,
    Preview,
  },
  data() {
    return {};
  },
  computed: {
    galleryCards() {
      return this.$store.state.galleryCardsAbout;
    },
    previewCardsIntro() {
      return this.$store.state.previewCardsIntro;
    },
    previewCardsTeam() {
      return this.$store.state.previewCardsTeam;
    },
    previewCardsLeisure() {
      return this.$store.state.previewCardsLeisure;
    },
  },
  methods: {},
};
</script>

<style lang="scss">
.about {
  &__title {
    margin-bottom: 20px;
  }

  &__preview {
    margin-bottom: 20px;
  }
}
</style>
