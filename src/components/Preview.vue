<template>
  <div class="preview">
    <div class="preview__gallery">
      <div class="preview__img-container" v-for="img in images" :key="img.src">
        <img class="preview__img" :src="require(`/assets/images/${img.src}`)" :alt="img.title" />
      </div>
    </div>
    <div class="preview__text">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    images: Array,
  },
};
</script>

<style lang="scss" scoped>
.preview {
  &__gallery {
    display: grid;
    grid-template-areas:
      "a a a a"
      "b b c c"
      "b b c c";
    gap: 10px;
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__img-container {
    &:first-child {
      grid-area: a;
    }

    &:nth-child(2) {
      grid-area: b;
    }

    &:nth-child(3) {
      grid-area: c;
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__text {
    @include font($font, 16px, 400, 1.4em);
  }
}

@media screen and (min-width: 1024px) {
  .preview {
    &__gallery {
      grid-template-areas: none;
      grid-template-columns: repeat(3, 1fr);
    }

    &__img-container {
      &:first-child,
      &:nth-child(2),
      &:nth-child(3) {
        grid-area: auto;
      }
    }
  }
}
</style>
