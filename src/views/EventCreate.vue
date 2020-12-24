<template>
  <div>
    <h1>Create an Event</h1>
    <form @submit.prevent="createEvent">
      <label>Select a category</label>
      <select>
        <option></option>
      </select>

      <h3>Name & describe your event</h3>
      <div class="field">
        <label>Title</label>
        <br />
        <input type="text" placeholder="Add an event title" />
      </div>

      <div class="field">
        <label>Description</label>
        <input type="text" placeholder="Add a description" />
      </div>

      <h3>Where is your event?</h3>
      <div class="field">
        <label>Location</label>
        <input type="text" placeholder="Add a location" />
      </div>

      <h3>When is your event?</h3>

      <div class="field">
        <label>Date</label>
        <datepicker placeholder="Select a date" />
      </div>

      <div class="field">
        <label>Select a time</label>
        <select>
          <option v-for="time in times" :key="time">{{ time }}</option>
        </select>
      </div>

      <input type="submit" class="button -fill-gradient" value="Submit" />
    </form>
  </div>
</template>
<script>
import Datepicker from 'vuejs-datepicker'
const times = []
for (var i = 0; i <= 24; i++) {
  times.push(i + ':00')
}
export default {
  components: {
    Datepicker
  },
  data() {
    return {
      times
    }
  }
}
</script>
<style scoped>
.field {
  @apply mb-8;
}
</style>
