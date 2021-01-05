<template>
  <div class="mt-10 sm:mt-0">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            Create an Event
          </h3>
          <p class="mt-1 text-sm text-gray-600">All information are required</p>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form method="POST" @submit.prevent="createEvent">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <BaseInput
                  id="title"
                  v-model="event.title"
                  label="title"
                  type="text"
                  placeholder="Add a title"
                  name="title"
                  autocomplete="title"
                />

                <BaseInput
                  id="description"
                  v-model="event.description"
                  label="description"
                  type="text"
                  placeholder="Add a description"
                  name="description"
                  autocomplete="description"
                />
                <BaseInput
                  id="location"
                  v-model="event.location"
                  label="location"
                  type="text"
                  placeholder="Add a location"
                  name="location"
                  autocomplete="location"
                />
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="date"
                    class="block text-sm font-medium text-gray-700"
                    >date</label
                  >
                  <datepicker
                    v-model="event.date"
                    class="mt-1 px-4 py-3 overflow-visible z-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    placeholder="Select a date"
                  />
                </div>

                <div class="col-span-6">
                  <label
                    for="time"
                    class="block text-sm font-medium text-gray-700"
                    >Time</label
                  >
                  <select
                    id="time"
                    v-model="event.time"
                    name="time"
                    autocomplete="time"
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option v-for="time in times" :key="time">
                      {{ time }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
export default {
  components: {
    Datepicker
  },
  data() {
    const times = []
    for (var i = 0; i <= 24; i++) {
      times.push(i + ':00')
    }
    return {
      times,
      categories: this.$store.state.categories,
      event: this.createFreshEventObject()
    }
  },
  methods: {
    createEvent() {
      this.$store
        .dispatch('event/createEvent', this.event)
        .then(() => {
          this.$router.push({
            name: 'event-show',
            params: { id: this.event.id }
          })
          this.event = this.createFreshEventObject()
        })
        .catch(() => {})
    },
    createFreshEventObject() {
      const user = this.$store.state.user.user
      const id = Math.floor(Math.random() * 10000000)
      return {
        id: id,
        user: user,
        category: '',
        organizer: user,
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        attendees: []
      }
    }
  }
}
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
