<template>
  <div class="title" :class="classes">{{ title }}</div>
</template>

<script>
export default {
  name: "Title",
  props: {
    types: Array,
    title: String,
  },
  computed: {
    classes() {
      let classes = [];
      if (this.types.length !== 0) {
        this.types.forEach((type) => {
          classes.push(`title__${type}`);
        });
      }
      return classes;
    },
  },
};
</script>

<style lang="scss">
.title {
  &__main {
    @include font($font, 40px, 800, 1em);
  }

  &__sub {
    @include font($font, 26px, 800, 1.3em);
  }
}
</style>
