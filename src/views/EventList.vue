<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard v-for="event in Event" :key="event.id" :event="event" />
  </div>
</template>
<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'
export default {
  components: {
    EventCard
  },
  computed: mapState({
    Event: 'events'
  }),
  created() {
    this.$store.dispatch('fetchEvents')
  }
}
</script>
