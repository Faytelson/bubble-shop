<template>
  <div id="app">
    <div class="app__header">
      <Header></Header>
    </div>
    <div class="app__body">
      <div class="app__container container">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
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
    return {};
  },
  methods: {},
};
</script>

<style lang="scss"></style>
