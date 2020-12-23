<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard v-for="event in Event" :key="event.id" :event="event" />
  </div>
</template>
<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'
export default {
  components: {
    EventCard
  },
  data() {
    return {
      Event: []
    }
  },
  created() {
    // eslint-disable-next-line no-undef
    EventService.getEvents()
      .then(response => {
        this.Event = response.data
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  }
}
</script>
