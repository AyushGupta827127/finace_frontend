<template>
  <div>
    <nav class="w-full flex justify-between items-center shadow-sm py-4 px-6 md:px-28 fixed top-0 z-20 bg-white">
      <nuxt-link href="/">
        <LayoutBrandLogo />
      </nuxt-link>
      <Menu class="hidden lg:flex" />
      <div class="gap-4 hidden lg:flex">
        <nuxt-link href="/get-started">
          <button class="base-btn">
            Get Started
          </button>
        </nuxt-link>
        <nuxt-link href="/hire-an-expert">
          <button class="base-btn">
            Hire an Expert
          </button>
        </nuxt-link>
      </div>
      <!-- Drawer Toggle Button for Small Screens -->
      <div class="lg:hidden flex">
        <button @click="toggleDrawer" class="text-blue-950 font-bold">
          <img v-if="isDrawerOpen" src="@/assets/img/misc/cross.png" width="30" alt="">
          <img v-else src="@/assets/img/misc/dots.png" width="24" alt="">
        </button>
      </div>
    </nav>
    <div
      :class="['duration-1000 ease fixed inset-0 z-50 transition-transform transform top-[70px]', { 'translate-x-0': isDrawerOpen, 'translate-x-full': !isDrawerOpen }, 'lg:translate-x-0 lg:static lg:flex',]">
      <div
        class="bg-white shadow-lg rounded-lg p-4 w-full lg:hidden right-0 top-0 h-full transition-transform transform"
        :class="{ 'translate-x-0': isDrawerOpen, 'translate-x-full': !isDrawerOpen, }">
        <MenuDrawer @closeDrawer="isDrawerOpen = false" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isDrawerOpen = ref(false);

function toggleDrawer() {
  isDrawerOpen.value = !isDrawerOpen.value;
}
</script>
