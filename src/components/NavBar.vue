<template>
  <div>
    <nav
      class="flex justify-between p-2 text-gray-900 bg-white rounded-lg shadow-sm"
    >
      <router-link class="text-xl text-green-600 font-medium" to="/"
        >Connect-Me</router-link
      >
      <div>
        <router-link :to="{ name: 'event-list' }">List</router-link> |
        <router-link :to="{ name: 'event-create' }">Create</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="css" scoped></style>
