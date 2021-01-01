<template>
  <div>
    <h1 class="text-2xl text-gray-800 font-semibold mb-4">
      Events Listing for {{ user.user.name }}
    </h1>
    <EventCard v-for="event in Event" :key="event.id" :event="event" />
    <div class="text-green-500 mt-5">
      <template v-if="page != 1">
        <router-link
          :to="{ name: 'event-list', query: { page: page - 1 } }"
          rel="prev"
          >Prev Page</router-link
        >
        |
      </template>
      <template v-if="eventsTotal > page * 3">
        <router-link
          :to="{ name: 'event-list', query: { page: page + 1 } }"
          rel="prev"
          >Next Page</router-link
        >
      </template>
    </div>
  </div>
</template>
<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'
export default {
  components: {
    EventCard
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    ...mapState({
      Event: 'events',
      eventsTotal: 'eventsTotal',
      user: 'user'
    })
  },
  created() {
    this.$store.dispatch('fetchEvents', {
      perpage: 3,
      page: this.page
    })
  }
}
</script>
<style scoped>
a.router-link-exact-active {
  color: #42b983;
}
</style>
