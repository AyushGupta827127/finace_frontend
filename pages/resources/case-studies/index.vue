<template>
  <div class="p-16 mt-8 font-medium">
    <!-- Header Section with Text and Linked Image -->
    <header class="w-full h-auto flex flex-col lg:flex-row justify-evenly items-center px-4 lg:px-10">
      <!-- Left Side: Case Studies Text -->
      <div class="text-center lg:text-left mb-4 lg:mb-0 ">
        <h1 class="text-2xl lg:text-4xl font-bold mb-4">
          <span class="mr-4 lg:mr-4 lg:ml-0 ml-44 text-blue-900">Case</span> 
          <span class="text-orange-500">Studies</span>
        </h1>
        <span class="block text-xl">A case study is a comprehensive report of the results of theory testing or examining emerging themes of a business in real life context</span>
      </div>

      <!-- Right Side: Linked Image -->

        <img src="https://img.freepik.com/premium-vector/business-contract-cooperation-trending-concept-flat-illustration_720185-372.jpg?ga=GA1.1.1217921431.1721647597&semt=ais_user" alt="Header Image" class="h-full object-contain mx-auto" />
        
      </header>
    </div>

    <!-- Case Studies Cards Section -->
    <div class="flex flex-wrap justify-center mt-8 mx-2 lg:mx-5">
      <div v-for="caseStudy in caseStudies" :key="caseStudy.id" class="w-full md:w-2/3 lg:w-1/3 xl:w-[450px] border border-gray-300 rounded-lg overflow-hidden shadow-md mx-2 mb-12">
        <div class="w-full h-[250px]">
          <img :src="caseStudy.image" alt="Case Study Image" class="w-full h-full object-cover" />
        </div>
        <div class="p-4">
          <h3 class="text-lg lg:text-xl font-semibold mb-2">{{ caseStudy.title }}</h3>
          <p class="text-gray-600 mb-2">{{ caseStudy.description }}</p>
          <nuxt-link :to="`/resources/case-studies/${caseStudy.id}`" class="text-blue-500 hover:underline">
            Read More
          </nuxt-link>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CaseStudiesPage',
  data() {
    return {
      // Sample case studies data with additional details
      caseStudies: [
        {
          id: 1,
          title: 'Case Study 1',
          description: 'Description for case study 1. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam aliquam saepe tenetur, necessitatibus iure velit minus unde eius architecto quam repellat in fugit ullam, eaque eveniet cum repellendus rem consectetur.',
          image: 'https://img.freepik.com/premium-vector/editorial-commission-concept-illustration_86047-766.jpg?ga=GA1.1.1217921431.1721647597&semt=ais_user',
          link: '#'
        },
        {
          id: 2,
          title: 'Case Study 2',
          description: 'Description for case study 2. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam aliquam saepe tenetur, necessitatibus iure velit minus unde eius architecto quam repellat in fugit ullam, eaque eveniet cum repellendus rem consectetur.',
          image: 'https://img.freepik.com/premium-vector/editorial-commission-concept-illustration_86047-766.jpg?ga=GA1.1.1217921431.1721647597&semt=ais_user',
          link: '#'
        },
        {
          id: 3,
          title: 'Case Study 3',
          description: 'Description for case study 3. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam aliquam saepe tenetur, necessitatibus iure velit minus unde eius architecto quam repellat in fugit ullam, eaque eveniet cum repellendus rem consectetur.',
          image: 'https://img.freepik.com/premium-vector/editorial-commission-concept-illustration_86047-766.jpg?ga=GA1.1.1217921431.1721647597&semt=ais_user',
          link: '#'
        }
      ]
    };
  }
};
</script>

<style scoped>
/* Add any scoped CSS here */
</style>