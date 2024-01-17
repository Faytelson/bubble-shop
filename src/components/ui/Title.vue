<template>
  <div class="title">{{ title }}</div>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
.title {
    @include font($font, 40px, 800, 1em);
}
</style>
