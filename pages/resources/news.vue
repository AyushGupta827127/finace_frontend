<template>
  <div>
    <!-- Banner Section -->
    <div class="relative w-full h-[300px] mt-20">
      <div class="w-full h-full object-contain bg-cover bg-center" :style="{ backgroundImage: 'url(\'https://www.shutterstock.com/image-photo/digital-contents-concept-social-networking-260nw-2164090919.jpg\')' }">
        <!-- Quote Box -->
        <div class="absolute bottom-10 left-10 bg-white bg-opacity-70 p-4 rounded-lg shadow-md">
          <p class="text-lg font-semibold text-gray-800">"Bad news travels at the speed of light; good news travels like molasses"</p>
          <p class="text-gray-600 mt-2"></p>
        </div>
      </div>
    </div>

    <!-- News Cards Section -->
    <div class="flex flex-wrap gap-5 justify-center mt-10 mx-5">
      <div v-for="news in newsArticles" :key="news.id" class="w-80 border border-gray-200 rounded-lg overflow-hidden shadow-md mb-12">
        <img :src="news.image" alt="News Image" class="w-full h-40 object-cover" />
        <div class="p-4">
          <h3 class="text-xl font-semibold mb-2">{{ news.title }}</h3>
          <p class="text-gray-600">{{ news.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsBanner',
  data() {
    return {
      // Sample news articles data
      newsArticles: [
        {
          id: 1,
          title: 'Breaking News 1',
          description: 'Description for breaking news 1.',
          image: 'https://via.placeholder.com/150'
        },
        {
          id: 2,
          title: 'Breaking News 2',
          description: 'Description for breaking news 2.',
          image: 'https://via.placeholder.com/150'
        },
        {
          id: 3,
          title: 'Breaking News 3',
          description: 'Description for breaking news 3.',
          image: 'https://via.placeholder.com/150'
        },
        {
          id: 4,
          title: 'Breaking News 4',
          description: 'Description for breaking news 4.',
          image: 'https://via.placeholder.com/150'
        }
      ]
    };
  }
};
</script>

<style scoped>
.bg-cover {
  background-size: cover;
  background-position: center;
}
</style>
