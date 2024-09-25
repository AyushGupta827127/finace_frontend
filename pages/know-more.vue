<template>
    <div class="container mt-48">
      <div v-for="(category, index) in categories" :key="index" class="category-card">
        <img :src="category.image" alt="category image" class="category-image" />
        <!-- <div class="category-title">{{ category.title }}</div> -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        categories: [
          {
            title: 'Classifieds',
            image: 'https://img.freepik.com/free-photo/pixel-art-river-landscape-illustration_23-2151793063.jpg?uid=R158193689&ga=GA1.1.1217921431.1721647597&semt=ais_hybrid',
          },
          {
            title: 'Food Delivery',
            image: 'https://img.freepik.com/premium-photo/4k-mountain-wallpaper-background_1020200-12010.jpg?w=360',
          },
          {
            title: 'Housing',
            image: 'https://img.freepik.com/free-photo/digital-art-beautiful-mountains_23-2151123347.jpg?uid=R158193689&ga=GA1.1.1217921431.1721647597&semt=ais_hybrid',
          },
          {
            title: 'Edtech',
            image: 'https://img.freepik.com/premium-photo/painting-bench-with-sunset-background_1023618-13253.jpg?uid=R158193689&ga=GA1.1.1217921431.1721647597&semt=ais_hybrid',
          },
          {
            title: 'Prosus Ventures',
            image: 'https://img.freepik.com/free-photo/vertical-shot-road-going-through-beautiful-colorful-trees-captured-day-time_181624-8309.jpg?uid=R158193689&ga=GA1.1.1217921431.1721647597&semt=ais_hybrid',
          },
          {
            title: 'Prosus Ventures',
            image: 'https://img.freepik.com/free-photo/photorealistic-view-tree-nature-with-branches-trunk_23-2151478040.jpg?uid=R158193689&ga=GA1.1.1217921431.1721647597&semt=ais_hybrid',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: space-between;
    gap: 3px;
    padding: 2px;
  }
  
  .category-card {
    flex: 1;
    text-align: center;
    border-radius: 8px;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: relative;
    transition: flex 1.5s ease;
    cursor: pointer;
  }
  
  .category-card:hover {
    flex: 5.5;
  }
  
  .category-image {
    width: 100%;
    height: 60vh;
    /* object-fit: cover; */
    transition: transform 1.5s ease;
  }
  
  .category-card:hover .category-image {
    transform: scaleX(1);
  }
  
  .category-title {
    padding: 10px 0;
    font-weight: bold;
    font-size: 18px;
  }
  </style>
  