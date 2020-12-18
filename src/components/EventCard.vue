<template>
  <router-link
    class="eventlink"
    :to="{ name: 'event-show', params: { id: '1' } }"
  >
    <div class="Event">
      <span>@{{ Event.time }} on {{ Event.date }}</span>
      <h4>{{ Event.title }}</h4>
      <span
        >We have {{ Event.attendees.length }} people coming for the event</span
      >
    </div></router-link
  >
</template>

<script>
export default {
  name: 'EventCard',
  data() {
    return {
      Event: {
        id: 1,
        title: 'Beach cleanup',
        date: '19th December 2020',
        time: '6:00pm',
        attendees: [
          { id: 'abc123', name: 'Uma Victor' },
          { id: 'def456', name: 'Marvel Ken' }
        ]
      }
    }
  }
}
</script>

<style scoped>
.Event {
  box-shadow: inset;
  border: 1px solid grey;
  border-radius: 10px;
  padding: 20px 35px;
  text-align: left;
}
.Event:hover {
  transform: scale(1.05);
}
h4 {
  color: greenyellow;
}
</style>
