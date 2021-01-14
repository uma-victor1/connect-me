<template>
  <router-link
    class="eventlink"
    :to="{ name: 'event-show', params: { id: event.id } }"
  >
    <div class="mb-4 shadow-md px-7 py-7 hover:shadow-xl">
      <span class="mb-4">@{{ event.time }} on {{ event.date }}</span>
      <h4 class="mb-2 mt-2">{{ event.title }}</h4>
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
