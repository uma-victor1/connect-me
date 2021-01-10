<template>
  <div>
    <button
      class="text-white rounded-md px-6 py-2 bg-gradient-to-r from-green-400 to-blue-500"
      v-bind="$attrs"
      v-on="$listeners"
    >
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
