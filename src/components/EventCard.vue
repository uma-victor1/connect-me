<template>
  <router-link
    class="eventlink"
    :to="{ name: 'event-show', params: { id: event.id } }"
  >
    <div class="mb-4 shadow-md px-7 py-10 hover:shadow-xl">
      <span>@{{ event.time }} on {{ event.date }}</span>
      <h4>{{ event.title }}</h4>
      <BaseIcon name="users"
        >{{ event.attendees ? event.attendees.length : 0 }} attending</BaseIcon
      >
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

h4 {
  color: #7b9b8d;
}
</style>
