<template>
  <button class="burger" @click="$emit('burgerClick')">
    <div class="burger__line"></div>
  </button>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
  },
};
</script>

<style lang="scss">
.burger {
  width: 32px;
  height: 24px;
  position: relative;

  &::before,
  &::after {
    @include pseudo;
  }

  &::before,
  &::after,
  &__line {
    width: 100%;
    height: 4px;
    background-color: $color-black;
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }

  &__line {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
