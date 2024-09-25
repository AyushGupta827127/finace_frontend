<script setup lang="ts">
const services = [
  {
    title: 'Portfolio Tracking',
    caption: 'Lorem ipsum dolor .',
    desc: 'A Portfolio management tool that allows users to track their investments, monitor performance, set alerts for price movements, and generate customized reports. Access to market data, stock screeners, financial ratios, and technical analysis tools to help users research and analyze investment opportunities.'
  },
  {
    title: 'Community Forums',
    caption: 'Lorem ipsum dolor .',
    desc: 'An online community where users can connect with like-minded investors, share insights, discuss investment ideas, and learn from each ohters experiences.'
  },
  {
    title: 'Content Marketing',
    caption: 'Lorem ipsum dolor .',
    desc: 'the platform produces high-quality educational content, including articles, video, and webinars, to attract users through search engines, social media, and other digital channels.'
  },
  {
    title: 'Partnerships',
    caption: 'Lorem ipsum dolor .',
    desc: 'Finace India Investments collaborates with influencers, bloggers, industry expert, and media outlets to increase brand visibility and reach a wider audience'
  },
  {
    title: 'Refferal Program',
    caption: 'Lorem ipsum dolor .',
    desc: 'Finace India Investments incentivizes users to refer their friends and family members by offering discounts on subscription fees or other rewards for successful referrals.'
  },
  {
    title: 'Social Media Engagement',
    caption: 'Lorem ipsum dolor .',
    desc: 'Finace India Investments maintains an active presence on social media platforms such as Twitter, LinkedIn, and Facebook, Where it shares Investment tips, market updates, and user-generated content to nengage with its target audience.'
  }
];

const infos = [
{
    title: 'Portfolio Management',
    caption: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta cum vel quam., sit amet consectetur adipisicing elit. Soluta cum vel quam., sit amet consectetur adipisicing elit. Soluta cum vel quam., sit amet consectetur adipisicing elit. Soluta cum vel quam. .',
    desc: 'hello'
  },
  {
    title: 'Risk management',
    caption: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta cum vel quam., sit amet consectetur adipisicing elit. Soluta cum vel quam., sit amet consectetur adipisicing elit. Soluta cum vel quam., sit amet consectetur adipisicing elit. Soluta cum vel quam. .',
    desc: 'hello'
  },
  {
    title: 'Capital',
    caption: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta cum vel quam., sit amet consectetur adipisicing elit. Soluta cum vel quam., sit amet consectetur adipisicing elit. Soluta cum vel quam., sit amet consectetur adipisicing elit. Soluta cum vel quam. .',
    desc: 'hello'
  },
  {
    title: 'Capital',
    caption: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta cum vel quam., sit amet consectetur adipisicing elit. Soluta cum vel quam., sit amet consectetur adipisicing elit. Soluta cum vel quam., sit amet consectetur adipisicing elit. Soluta cum vel quam. .',
    desc: 'hello'
  },
]

const details = [
  {
    title: 'Extensive Knowledge',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta cum vel quam.'
  },
  {
    title: 'Risk Management',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta cum vel quam.'
  },
  {
    title: 'Team Approach',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta cum vel quam.'
  },
  {
    title: 'Advanced technology',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta cum vel quam.'
  },
  {
    title: 'Time Saving',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta cum vel quam.'
  },
  {
    title: 'Customized Advice',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta cum vel quam.'
  }
]
</script>
<template>
  <div class="">
    <div class="bg-blue-100">
      <div class="mx-28 my-20 py-20">
        <div class="text-4xl text-center">Finace India Investments</div>
      </div>
    </div>
    <div class="mx-28 my-24">
      <div class="flex gap-4">
        <div v-for="info in infos" class="border border-black p-4">
          <div class="font-extrabold text-black text-lg"> {{ info.title }} </div>
          <div> {{ info.caption }} </div>
        </div>
      </div>
    </div>
    <div class="mx-28 my-24 flex gap-16">
      <img src="@/assets/img/service/privacy.jpeg" width="350">
      <div>
        <div class="text-4xl text-black">About Us</div>
        <div class="text-base my-6">Finace India Investment iis an online platform designed to empower self-directed investors in India by providing them with the tools, resources and community support they need to amke informed investment desicions.</div>
        <div class="text-base my-6">We aim to democratize access to financial markets and promote financial literacy among retail investors</div>
      </div>
    </div>
    <div class="bg-blue-100">
      <div class="mx-28 my-24 py-16">
        <div class="text-center text-4xl">
          <div>Believe Us when</div>
          <div>it Comes to Investment</div>
        </div>
        <div class="flex justify-center items-center">
          <!-- <img src="@/assets/img/service/privacy.jpeg" width="150" class="rounded" alt=""> -->
          <div class="text-center">
            <div class="my-7 px-24">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta cum vel quam, quo consequatur adipisci id
              dicta aspernatur, necessitatibus qui atque quae saepe iure iusto eius perspiciatis consequuntur ducimus
              debitis.
            </div>
            <button class="primary-btn">Request Call</button>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-28 my-24">
      <div class="text-center text-2xl my-7">
        <div>Why Choose Us</div>
        <div>Reason For Choose Counsolve</div>
      </div>
      <!-- <div class="grid grid-cols-3 gap-7">
        <div v-for="detail in details" class="border border-black p-7">
          <div class="text-xl text-black font-extrabold"> {{ detail.title }} </div>
          <div> {{ detail.description }} </div>
        </div>
      </div> -->
      <div class="flex flex-wrap justify-center gap-x-4 gap-y-6">
      <div v-for="service in services" :key="service.title"
        class="relative group shadow-lg border border-gray-100 rounded px-5 py-6 text-center w-full md:w-auto overflow-hidden">
        <div
          class="absolute inset-0 bg-gradient-to-b from-blue-950 to-slate-900 transition-custom transform -translate-y-full group-hover:translate-y-0 z-0">
        </div>

        <div class="flex items-center justify-start gap-2 mb-4 w-64 relative z-10">
          <img class="w-12 h-auto p-2 bg-white rounded-full border border-gray-200" src="@/assets/icons/icon.png" />
          <div class="flex flex-col text-justify pl-2 border-2 border-y-0 border-r-0 border-l-orange-500 relative z-10">
            <span class="text-lg md:text-2xl text-black group-hover:text-white transition-custom">
              {{ service.title }}
            </span>
            <span class="text-xs mt-1 tracking-tight text-black group-hover:text-white transition-custom">
              {{ service.caption }}
            </span>
          </div>
        </div>
        <div class="text-justify text-sm w-auto md:w-64 pb-8 relative z-10 text-black group-hover:text-white transition-custom">
          {{ service.desc }}
        </div>

        <!-- <div class="absolute bottom-4 right-4 flex justify-end cursor-pointer text-xs text-gray-300 group-hover:text-white transition-custom">
          <div class="flex items-center gap-2">
            view more
            <img class="w-2 h-2" src="@/assets/icons/right-arrow.svg" />
          </div>
        </div> -->
      </div>
    </div>
    </div>
    <landingTestimonials />
    <!-- <landingAchivements /> -->
  </div>
</template>
<style scoped></style>