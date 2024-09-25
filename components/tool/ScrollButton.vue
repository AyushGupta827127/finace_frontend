<template>
  <button
    v-if="showButton"
    class="fixed bottom-36 right-14 bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-transform transform hover:scale-110 active:scale-90"
    @click="scrollToTop"
  >
    <span class="text-2xl font-extrabold">↑</span> <!-- Updated icon with Tailwind text size -->
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const showButton = ref(false);

const handleScroll = () => {
  showButton.value = window.scrollY > 300; // Show button if scrolled down 300px
};

const scrollToTop = () => {
  // Smooth scrolling implementation using requestAnimationFrame
  const scrollDuration = 1000; // Duration of the scroll animation in milliseconds
  const start = window.scrollY;
  const startTime = performance.now();

  const scroll = (currentTime) => {
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / scrollDuration, 1);
    const easing = easeInOutQuad(progress);

    window.scrollTo(0, start - (start * easing));

    if (progress < 1) {
      requestAnimationFrame(scroll);
    }
  };

  const easeInOutQuad = (t) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  requestAnimationFrame(scroll);
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
/* Ensure smooth scrolling behavior for the entire page */
html {
  scroll-behavior: smooth;
}
</style>
