<template>
  <div class="card">
    <div class="card__img-container">
      <img :src="require(`/assets/images/${card.imgSrc}`)" alt="" class="card__img" />
    </div>
    <div class="card__title">{{ card.title }}</div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    card: Object,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
.card {
  width: 100%;
  height: 100%;

  &__title {
    @include font($font, 18px, 400, 1em);
  }

  &__img-container {
    height: 200px;
    width: 100%;
    margin-bottom: 10px;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

@media screen and (min-width: 375px) {
  .card {
    &__img-container {
      height: 250px;
    }
  }
}

@media screen and (min-width: 425px) {
  .card {
    &__img-container {
      height: 400px;
    }
  }
}

@media screen and (min-width: 768px) {
    .card {
        &__img-container {
          height: 700px;
        }
      }
}
</style>
