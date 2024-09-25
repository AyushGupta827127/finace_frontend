<script setup lang="ts">

const sliders = [
  {
    title: 'Services',
    caption: 'Explore our range of financial services designed to cater to your every need. From personalized financial planning to tax advisory and wealth management, we provide solutions that help you achieve your financial goals efficiently.',
    actions: ['Know More'],
    lottieUrl: 'https://lottie.host/embed/9037067a-4c58-46ff-b65d-a5dce754d02a/rSew60dptQ.json'
  },
  {
    title: 'Investment',
    caption: 'Secure your future with our tailored investment strategies. We offer comprehensive guidance on mutual funds, stocks, bonds, and other investment vehicles to help you grow your wealth and achieve financial independence.',
    actions: ['Know More'],
    lottieUrl: 'https://lottie.host/embed/4451bfc7-94ad-4b53-bea6-b6b991415ba0/Hcqhsu2kPQ.json'
  },
  {
    title: 'Capital',
    caption: 'Maximize your capital with our expert advice and strategic planning. Whether you’re looking to raise funds for a new venture or optimize your existing capital, we provide the insights and resources to help you succeed.',
    actions: ['Know More'],
    lottieUrl: 'https://lottie.host/embed/d1874276-62db-4028-8201-1da3ed257883/WI3y8q6bEX.json'
  },
  {
    title: 'Foundation',
    caption: 'Build a strong financial foundation with our comprehensive services. We assist you in laying down the essential building blocks for long-term financial stability and growth, ensuring your financial health for years to come.',
    lottieUrl: 'https://lottie.host/embed/3044d8df-bbd6-41d2-9420-262bc97afaf9/PIeEp6UFF6.json'
  }
];

</script>

<template>
  <div class="w-full">
    <UtilSliderComponent>
      <div v-for="(item, i) in sliders" :key="item.title" class="w-full slide flex flex-col md:flex-row p-8 md:p-28 gap-4">
        <div class="flex flex-col justify-between pt-20 md:py-8 w-full md:w-1/2">
          <div class="relative flex flex-col gap-4">
            <div class="flex gap-2 flex-wrap">
              <span class="text-3xl font-semibold text-blue-950">Finace India</span>
              <span class="text-3xl font-semibold text-orange-500">{{ item.title }}</span>
            </div>
            <span class="text-gray-600">{{ item.caption }}</span>
            <!-- <div class="corner !w-32 !h-32 !rotate-90 !bg-gray-100/50 bottom-0 -mb-16 -mr-8" style="top: unset"></div> -->
            <!-- <div class="corner !w-32 !h-32 !rotate-90 bottom-0 -mb-20 -mr-12" style="top: unset"></div> -->
          </div>
          <div class="flex gap-4 py-4">
            <nuxt-link :href="action.split(' ').join('-').toLowerCase()" target="_blank" v-for="action in item.actions" :key="action">
              <button class="primary-btn">{{ action }}</button>
            </nuxt-link>
          </div>
        </div>
        <div class="w-full hidden md:block md:w-1/2">
          <iframe class="h-72 w-full" :src="item.lottieUrl"></iframe>
        </div>
      </div>
    </UtilSliderComponent>
  </div>
</template>
