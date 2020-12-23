<template>
  <router-link
    class="eventlink"
    :to="{ name: 'event-show', params: { id: event.id } }"
  >
    <div class="Event">
      <span>@{{ event.time }} on {{ event.date }}</span>
      <h4>{{ event.title }}</h4>
      <BaseIcon name="users">{{ event.attendees.length }} attending</BaseIcon>
    </div></router-link
  >
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    event: {
      type: Object
    }
  }
}
</script>

<style scoped>
.eventlink {
  color: inherit;
  text-decoration: none;
}
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
  color: #7b9b8d;
}
</style>
