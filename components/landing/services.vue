<script setup lang="ts">

import accIcon from '@/assets/icons/services/acc.png'
import compIcon from '@/assets/icons/services/comp.png'
import gstIcon from '@/assets/icons/services/gst.png'
import iprIcon from '@/assets/icons/services/ipr.png'
import itrIcon from '@/assets/icons/services/itr.png'
import licIcon from '@/assets/icons/services/lic.png'
import techIcon from '@/assets/icons/services/tech.png'

const services = [
  {
    title: "Company",
    caption: "Incorporation & Compliances",
    icon: compIcon,
    desc: "Simplify your business setup with our incorporation and compliance services. We handle all legal requirements.",
  },
  {
    title: "Trademark",
    caption: "IPR - Filing & Legal",
    icon: iprIcon,
    desc: "Protect your brand with our trademark registration and enforcement services. We manage the entire process.",
  },
  {
    title: "GST",
    caption: "Registration & Filing",
    icon: gstIcon,
    desc: "Ease your GST compliance with our registration, filing, and audit services. We ensure accuracy and efficiency.",
  },
  {
    title: "Income Tax",
    caption: "Filing & Legal",
    icon: itrIcon,
    desc: "Optimize your tax with our expert filing, planning, and representation services. Maximize your benefits with us.",
  },
  {
    title: "Accounting",
    caption: "Statutory & Internal Audit",
    icon: accIcon,
    desc: "Ensure clear financial reporting with our statutory and internal audit services. Reliable and accurate.",
  },
  {
    title: "Licenses",
    caption: "Food, Drug, Pollution, CPWD",
    icon: licIcon,
    desc: "Obtain necessary business licenses easily. We assist with food, drug, pollution, and CPWD licenses.",
  },
  {
    title: "Tech Solutions",
    caption: "Web & App Development",
    icon: techIcon,
    desc: "Boost your business with our web and app development services. Innovative solutions for a strong online presence.",
  },
];
</script>

<template>
  <div class="mx-7 md:mx-28 my-20 selection:bg-[#464646f0]">
    <div class="text-3xl font-semibold text-center pb-20 text-blue-950">
      Simplify, Comply, Succeed: 
      <span class="text-orange-500 font-medium">Your Legal and Financial Partner</span>
    </div>
    <div class="flex flex-wrap justify-center">
      <div v-for="service in services" :key="service.title"
        class="w-full md:w-1/4 p-2 mt-20">
        <div class="relative group shadow-lg bg-indigo-50/25 rounded-sm px-5 pt-16 pb-10 text-center flex flex-col items-start gap-2">
          <div class="absolute -top-10 left-8 w-24 h-24 p-4 bg-white border border-1.5 border-blue-950 overflow-hidden flex items-center justify-center">
            <img class="w-full" :src="service.icon" />
          </div>
          <div class="cornerr !rotate-90 !w-28 !h-28 bottom-0 !bg-orange-50/75" style="top: unset"></div>
          <div class="flex flex-col text-justify pl-2 border-2 border-y-0 border-r-0 border-l-orange-500 relative z-10">
            <span class="text-lg md:text-lg text-orange-600">
              {{ service.title }}
            </span>
            <span class="text-xs mt-1 tracking-tight">
              {{ service.caption }}
            </span>
          </div>
          <div class="text-wrap text-justify pt-2 z-10">
            {{ service.desc }}
          </div>
          <div class="flex justify-end cursor-pointer text-xs text-orange-600">
            <div class="flex items-center gap-2">
              Read more <span class="text-lg">&#x2B62; </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.transition-custom {
  transition: transform 4s ease-in-out, color 1s ease-in-out;
}

/* Hover Effect Background */
.group .bg-gradient-to-b {
  transform: translateY(100%);
  transition: transform 800ms ease-in-out;
}

.group:hover .bg-gradient-to-b {
  transform: translateY(0%);
}

/* Align Button to Bottom Right */
.absolute.bottom-4.right-4 {
  bottom: 16px;
  right: 16px;
}
</style>
