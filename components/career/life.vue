<script setup lang="ts">
    import { ref } from 'vue'
    
    const images = [
        "https://jobs.washingtonpost.com/getasset/5c48ff8d-4e30-4ed7-a447-a4de335ecf45/",
        "https://jobs.washingtonpost.com/getasset/5c48ff8d-4e30-4ed7-a447-a4de335ecf45/",
        "https://jobs.washingtonpost.com/getasset/5c48ff8d-4e30-4ed7-a447-a4de335ecf45/",
        "https://jobs.washingtonpost.com/getasset/5c48ff8d-4e30-4ed7-a447-a4de335ecf45/",
        "https://jobs.washingtonpost.com/getasset/5c48ff8d-4e30-4ed7-a447-a4de335ecf45/",
        "https://jobs.washingtonpost.com/getasset/5c48ff8d-4e30-4ed7-a447-a4de335ecf45/",
        "https://jobs.washingtonpost.com/getasset/5c48ff8d-4e30-4ed7-a447-a4de335ecf45/",
        "https://jobs.washingtonpost.com/getasset/5c48ff8d-4e30-4ed7-a447-a4de335ecf45/",
      ]
      const showModal = ref(false)
      const selectedImage = ref("")
      const currentIndex = ref(0)

      
    function openImageModal (index) {
      currentIndex.value = index
      selectedImage.value = this.images[index]
      showModal.value = true
    }
    function closeImageModal () {
      showModal.value = false
    }
    function nextImage () {
      currentIndex.value = (currentIndex.value + 1) % images.length
      selectedImage.value = images[currentIndex.value]
    }
    function prevImage() {
      currentIndex.value = (currentIndex.value - 1) % images.length
      selectedImage.value = images[currentIndex.value]
    }
</script>
<template>
    <div class="text-center my-8">
      <h2 class="text-3xl font-bold text-blue-950 mb-12 text-center">
        Life At <span class="text-orange-500"> Finace </span>
      </h2>
    </div>
    <div class="mt-10 px-12">
      <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-4">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image"
          :alt="'Image ' + (index + 1)"
          @click="openImageModal(index)"
          class="w-full h-auto rounded-md transition-transform duration-500 hover:scale-105 cursor-pointer"
        />
      </div>
    </div>

    <div
      v-if="showModal"
      class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
    >
      <div class="relative flex items-center">
        <span
          class="absolute left-[-10px] text-black text-3xl cursor-pointer p-4"
          @click="prevImage"
          v-if="images.length > 1"
        >
          <span class="material-icons bg-white">arrow_back</span>
        </span>
        <img
          :src="selectedImage"
          alt="Large Image"
          class="max-w-full max-h-96 rounded-md"
        />
        <span
          class="absolute right-0 text-black text-3xl cursor-pointer p-4"
          @click="nextImage"
          v-if="images.length > 1"
        >
          <span class="material-icons bg-white">arrow_forward</span>
        </span>
        <span
          class="absolute top-2 right-2 text-red-800 text-5xl cursor-pointer"
          @click="closeImageModal"
          >&times;</span
        >
      </div>
    </div>
</template>