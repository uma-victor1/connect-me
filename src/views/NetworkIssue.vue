<template>
  <div class="flex flex-col h-full items-center justify-center">
    <h1 class="text-3xl font-medium">uh-ohh!!</h1>
    <p class="text-2xl">
      Looks like you're experiencing some network issues. Go back to home page
    </p>
    <router-link :to="{ name: 'event-list' }">Back to home page</router-link>
  </div>
</template>
