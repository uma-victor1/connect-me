<template>
  <div class="flex z-10">
    <div class="m-auto">
      <div class="bg-white rounded-lg border-gray-300 border p-3 shadow-lg">
        <div class="flex flex-row">
          <div class="ml-2 mr-6">
            <span class="font-semibold" :class="correctClass">{{
              notification.message
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      timeout: null
    }
  },
  computed: {
    correctClass() {
      return `--text-${this.notification.type}`
    }
  },
  mounted() {
    this.timeout = setTimeout(() => this.remove(this.notification), 5000)
  },
  beforeDestroy() {
    clearTimeout(this.timeout)
  },
  methods: {
    ...mapActions('notification', ['remove'])
  }
}
</script>

<style scoped>
.--text-success {
  color: green;
}
.--text-error {
  color: rgb(247, 44, 44);
}
</style>
