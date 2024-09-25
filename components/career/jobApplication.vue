<template>
    <div>
        <details v-for="(job, index) in jobs" name="menu" class="w-full group px-4  border border-inset border-b-2 border-x-0 border-t-0 border-gray-100">
            <summary class="w-full flex justify-between items-center text-left py-3 cursor-pointer" :class="index === activeMenu ? `border border-inset border-b-1 border-x-0 border-t-0 border-gray-100 font-medium` : ``" @click="activeMenu === index ? activeMenu = -1 : activeMenu = index">
                {{job.title}}
                <svg :class="index === activeMenu ? 'rotate-180' : 'rotate-0'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 transition-transform duration-300 ease-in-out">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </summary>
            <div class="m-4">
                <p><strong>Number of Positions:</strong> {{ job.numberOfPositions }}</p>
                <p><strong>Job Description:</strong> {{ job.shortJD }}</p>
                <p><strong>Send your resume to:</strong> <a :href="`mailto:${job.email}`">{{ job.email }}</a></p>
                <p><strong>Posted on:</strong> {{ job.postingDate }}</p>
            </div>
        </details>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const activeMenu = ref(-1)
  const jobs = ref([
    {
      title: 'Software Engineer',
      numberOfPositions: 3,
      shortJD: 'Responsible for developing and maintaining web applications.',
      email: 'jobs@company.com',
      postingDate: '2024-08-28',
    },
    {
      title: 'Product Manager',
      numberOfPositions: 1,
      shortJD: 'Lead product development and strategy for new initiatives.',
      email: 'pmjobs@company.com',
      postingDate: '2024-08-25',
    },
    // Add more jobs as needed
  ]);
  </script>
