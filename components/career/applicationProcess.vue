<template>
    <div class="py-20 relative flex flex-col lg:flex-row items-start justify-start lg:justify-between">
      <div class="relative flex-1 text-center timeline-step flex lg:flex-col flex-row" v-for="(step, index) in steps" :key="index">
        <div class="relative">
          <div class="icon relative lg:w-36 lg:h-36 w-28 h-28 bg-white border-2 border-orange-500 rounded-full flex items-center justify-center mx-auto mb-5 shadow-md transform transition-transform duration-300 ease-in-out z-10">
            <img class="lg:w-32 w-20 h-auto" :src="step.icon" :alt="step.title" />
          </div>
          <div v-if="index < steps.length - 1" class="relative lg:-top-24 -top-16 lg:left-1/2 lg:h-0.5 lg:w-full h-full w-0.5 bg-gray-400 z-0 mx-auto"></div>
        </div>
        <div class="lg:-mt-2.5 flex flex-col justify-center">
          <h3 class="lg:text-xl text-sm text-neutral-900 mb-2.5">{{ step.title }}</h3>
          <p class="lg:text-sm text-xs text-neutral-800 mx-auto lg:w-48 w-auto">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Import all icons
  import magnifyingGlassIcon from '@/assets/img/career/application/magnifying-glass.png';
  import uploadIcon from '@/assets/img/career/application/upload.png';
  import checklistIcon from '@/assets/img/career/application/checklist.png';
  import microphoneIcon from '@/assets/img/career/application/microphone.png';
  import thumbsUpIcon from '@/assets/img/career/application/thumbs-up.png';
  
  const steps = ref([
    {
      title: 'Explore Open Positions',
      description: 'Browse through the available positions that match your skills and interests.',
      icon: magnifyingGlassIcon,
    },
    {
      title: 'Submit Your Application',
      description: 'Complete the online application form and upload your documents.',
      icon: uploadIcon,
    },
    {
      title: 'Application Review',
      description: 'Our recruitment team will review your application and get back to you shortly.',
      icon: checklistIcon,
    },
    {
      title: 'Interview Process',
      description: 'If shortlisted, you’ll be invited for an interview, which may include a phone, video, or in-person meeting.',
      icon: microphoneIcon,
    },
    {
      title: 'Final Decision',
      description: 'If selected, you’ll receive an offer letter and onboarding details.',
      icon: thumbsUpIcon,
    },
  ]);
  </script>
  
  <style scoped>

  .timeline-step:first-child .timeline-line {
    left: 50%;
    width: 50%;
  }
  
  .timeline-step:last-child .timeline-line {
    right: 50%;
    left: auto;
    width: 50%;
  }
  
  .timeline-step:hover .icon {
    transform: scale(1.1);
  }
  </style>
  