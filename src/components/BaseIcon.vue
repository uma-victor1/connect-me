<template>
  <div>
    <svg class="icon">
      <use v-bind="{ 'xlink:href': '/feather-sprite.svg#' + name }" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'BaseIcon',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    name: String,
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    }
  }
}
</script>

<style scoped></style>
