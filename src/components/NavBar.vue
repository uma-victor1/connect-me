<template>
  <nav>
    <router-link class="logo" to="/">Connect-Me</router-link>
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
.logo {
  font-size: 2rem;
  color: #42b983;
  text-decoration: none;
}
nav {
  display: flex;
  justify-content: space-between;
}
</style>
