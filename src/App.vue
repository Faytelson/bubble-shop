<template>
  <div id="app">
    <div class="app__header">
      <Header></Header>
    </div>
    <div class="app__body">
      <div class="app__container container">
        <transition name="fade" mode="out-in">
          <router-view :cards="cards"></router-view>
        </transition>
      </div>
    </div>
    <div class="app__footer"></div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      cards: [
        {
          imgSrc: 'img_about_1.webp',
          title: 'Company',
        },
        {
          imgSrc: 'img_about_2.webp',
          title: 'Work',
        },
        {
          imgSrc: 'img_about_3.webp',
          title: 'Study',
        },
        {
          imgSrc: 'img_about_4.webp',
          title: 'Clients',
        },
        {
          imgSrc: 'img_about_5.webp',
          title: 'Success',
        },
      ]
    };
  },
  methods: {},
};
</script>

<style lang="scss"></style>
