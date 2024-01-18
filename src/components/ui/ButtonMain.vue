<template>
  <button class="button" :class="classes" @click="$emit('clickBtn')">
    <span class="button__title">{{ title }}</span>
  </button>
</template>

<script>
export default {
  name: "ButtonMain",
  props: {
    title: {
      type: String,
    },
    btnTypes: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  computed: {
    classes() {
      let classes = [];
      if (this.btnTypes.length !== 0) {
        this.btnTypes.forEach(type => {
            classes.push(`button_${type}`);
        })
      }
      return classes;
    },
  },
};
</script>

<style lang="scss">
.button {
  &_close {
    width: 30px;
    height: 30px;
    background: url("/assets/images/icons/icon_close_white.svg") center / contain no-repeat;
  }
}
</style>
