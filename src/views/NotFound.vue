<template>
  <div class="flex justify-center items-center flex-col">
    <h1 class="text-gray-500 text-xl">
      <span class="text-3xl font-semibold">Oops!!</span> The {{ resource }} Page
      is not found
    </h1>
    <router-link class="text-green-400" :to="{ name: 'event-list' }"
      >Go back to homepage</router-link
    >
  </div>
</template>
