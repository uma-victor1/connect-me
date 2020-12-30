<template>
  <nav>
    <router-link class="text-xl text-green-600 font-medium" to="/"
      >Connect-Me</router-link
    >
    <div id="nav">
      <router-link :to="{ name: 'event-list' }">List</router-link> |
      <router-link :to="{ name: 'event-create' }">Create</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="css" scoped>
nav {
  display: flex;
  justify-content: space-between;
}
</style>
