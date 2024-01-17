<template>
  <div class="gallery">
    <div class="gallery__card" v-for="card in cards" :key="card.imgSrc">
      <Card :card="card"></Card>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  name: "Gallery",
  props: {
    cards: Array,
  },
  components: {
    Card,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
.gallery {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
}

@media screen and (min-width: 768px) {
  .gallery {
    grid-template-columns: repeat(auto-fit, minmax(700px, 1fr));
  }
}
</style>
