<template>
  <div>
    <button class="px-8 py-4" v-bind="$attrs" v-on="$listeners">
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  inheritAttrs: false
}
</script>

<style scoped></style>
