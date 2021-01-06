<template>
  <div class="col-span-6 sm:col-span-3">
    <label v-if="label" class="block text-sm font-medium text-gray-700">{{
      label
    }}</label>
    <input
      type="text"
      :value="value"
      v-bind="$attrs"
      class="mt-1 px-4 py-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      @input="updateValue"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ''
    },
    value: [String, Number]
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style scoped></style>
