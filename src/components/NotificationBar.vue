<template>
  <div>{{ notification.message }}</div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    notification: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped></style>
