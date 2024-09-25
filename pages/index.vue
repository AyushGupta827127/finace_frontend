<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});
</script>

<template>
  <div>
    <ToolLoader v-if="isLoading" />
    <div v-else>
      <LandingBanner />
      <LandingIntro />
      <LandingServices />
      <LandingTestimonials />
      <LandingHireAnExpert />
      <LandingProduct />
      <LandingRecognitions />
      <LandingAchivements />
      <LandingContact />
      <LandingLatestBlog />
    </div>
  </div>
</template>
