<template>
  <div class="min-h-screen flex flex-col justify-center items-center bg-gray-100">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-red-500 mb-4">Oops!</h1>
      <h2 class="text-3xl text-gray-800 mb-2">
        <span v-if="error.statusCode">{{ error.statusCode }}</span>
        <span v-else>500</span>
      </h2>
      <p class="text-lg text-gray-600 mb-8">
        <span v-if="error.message">{{ error.message }}</span>
        <span v-else>Something went wrong.</span>
      </p>
      <nuxt-link to="/" class="bg-blue-500 text-white px-4 py-2 rounded">
        Go Back Home
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => ({ statusCode: 500, message: 'Something went wrong.' })
    }
  }
}
</script>

<style>
body {
  margin: 0;
}
</style>
