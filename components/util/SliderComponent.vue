<script setup>
import { ref, onMounted } from 'vue';
import Glide from '@glidejs/glide';

const glide = ref(null);

onMounted(() => {
  new Glide(glide.value, {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    autoplay: 3000,
    hoverpause: true,
    animationDuration: 900,
    animationTimingFunc: 'ease-in-out',
  }).mount();
});
</script>
<template>
  <div class="carousel relative w-full overflow-hidden">
    <div ref="glide" class="glide">
      <!-- Slides -->
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <slot></slot>
        </ul>
      </div>
      <!-- Controls -->
      <div
        class="absolute left-0 flex items-center justify-between w-full h-0 px-4 top-1/2"
        data-glide-el="controls"
      >
        <button
          class="inline-flex items-center justify-center w-8 h-8 transition duration-300 lg:w-12 lg:h-12 text-slate-700 hover:text-slate-900 focus-visible:outline-none"
          data-glide-dir="<"
          aria-label="prev slide"
        >
          <img class="w-5 h-5" src="@/assets/icons/left-arrow.svg" />
        </button>
        <button
          class="inline-flex items-center justify-center w-8 h-8 transition duration-300 lg:w-12 lg:h-12 text-slate-700 hover:text-slate-900 focus-visible:outline-none"
          data-glide-dir=">"
          aria-label="next slide"
        >
          <img class="w-5 h-5" src="@/assets/icons/right-arrow.svg" />
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.glide__slides {
  display: flex;
  align-items: center;
}

.glide__slide {
  flex: 0 0 100vw;
}

.carousel-control {
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
}

.carousel-control:hover {
  background: rgba(255, 255, 255, 0.8);
}

.carousel-control.prev {
  position: absolute;
  left: 10px;
}

.carousel-control.next {
  position: absolute;
  right: 10px;
}
</style>
