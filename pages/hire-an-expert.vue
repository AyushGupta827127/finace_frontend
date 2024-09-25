<template>
  <div class="px-16 lg:px-28 pt-28 lg:pt-36 font-medium mb-12">
    <!-- Header: Introduction -->
    <header class="mb-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div class="flex flex-col gap-6">
          <div class="text-4xl md:text-5xl text-blue-950 font-bold">
            Hire An
            <span class="text-orange-500">Expert</span>
          </div>
          <div class="text-lg text-gray-600">
            Hire an Expert based on your needs and budget. We provide an
            in-house professional who helps with consultations and day-to-day
            activities.
          </div>
          <button
            class="px-6 py-3 w-fit bg-blue-950 hover:bg-orange-500 text-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            Get Suggestion
          </button>
        </div>
        <div class="relative h-64 md:h-96">
          <iframe
            class="absolute inset-0 w-full h-full"
            src="https://lottie.host/embed/8b7bebe0-d38c-42a7-aa6a-bd566ae77b50/gP65mTxs2g.json"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </header>

    <!-- Benifits Section -->
    <LandingBenefits />
  </div>

    <!-- Call to Action -->
   <LandingContact />
</template>

