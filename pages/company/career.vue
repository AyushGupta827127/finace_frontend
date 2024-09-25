<template>
  <div class="px-16 pt-28 font-medium">
    <!-- Header Section with Text and Linked Image -->
    <header
      class="w-full h-auto flex flex-col lg:flex-row justify-evenly items-center mx-2 lg:px-10"
    >
      <!-- Left Side: Case Studies Text -->
      <div class="text-center lg:text-left mb-4 lg:mb-0">
        <h1 class="text-2xl lg:text-3xl font-bold mb-4">
          <span class="mr-4 lg:mr-4 lg:ml-0 ml-44 text-blue-900"
            >Your career is a journey, not a destination,</span
          >
          <span class="text-orange-500"> Enjoy every step along the way</span>
        </h1>
        <!-- <span class="block text-xl">
          A contact page should provide visitors with clear instructions on how
          to get in touch with your business
        </span> -->
      </div>

      <!-- Right Side: Linked Image -->
      <img
        src="https://img.freepik.com/free-vector/business-leader-standing-arrow-holding-flag-flat-vector-illustration-cartoon-people-training-doing-business-plan-leadership-victory-challenge-concept_74855-9812.jpg?uid=R158343149&ga=GA1.1.161387979.1723114795&semt=ais_hybrid"
        alt="Header Image"
        class="h-full object-contain mx-auto"
      />
    </header>

    <careerLife />

    <!-- Features Section -->
    <LandingFeatures />

    <!-- Employee Feedback Section -->
    <div class="mt-20">
      <div class="mx-4 md:mx-28 my-8">
        <div class="grid grid-cols-2 gap-10">
          <div class="py-20">
            <div class="w-auto h-full flex justify-center">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/dx4Teh-nv3A?si=qL8S7osV0ROwtmWn&modestbranding=1&rel=0&showinfo=0&controls=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div class="py-10">
            <div
              class="h-full overflow-hidden bg-white rounded shadow-2xl text-slate-500 shadow-slate-200"
            >
              <p
                class="text-xl md:text-2xl pl-2 border-[3px] border-y-0 border-r-0 border-l-orange-500 text-blue-950 font-medium mx-6 mt-10"
              >
                Employee <span class="text-orange-500">Feedback</span>
              </p>
              <UtilSliderComponent>
                <div v-for="i of 3" class="pl-4">
                  <utilTestimony
                    :testimony="{
                      content:
                        'Finace India has been a game-changer for our startup. Their one-click solutions made the legal process smooth and stress-free.',
                      by: 'Amit Verma',
                      by_caption: 'CEO, Startup Hub',
                    }"
                  />
                </div>
              </UtilSliderComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fadeIn {
  animation: fadeIn 2s ease-in-out;
}
</style>
