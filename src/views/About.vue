<template>
  <div class="about">
    <Title title="About us"></Title>
    <Gallery :cards="cards"></Gallery>
  </div>
</template>

<script>
import Title from "../components/ui/Title.vue";
import Gallery from "../components/Gallery.vue";

export default {
  name: "About",
  props: {
    cards: Array,
  },
  components: {
    Title,
    Gallery,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss"></style>
