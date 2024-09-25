<template>
     <div class="md:mt-28">
      <section class="mt-16 px-4 md:px-8">
        <h2
          class="text-2xl lg:text-3xl font-bold text-center mb-10 text-blue-900"
        >
          <span class="headerTitle">
            Our <span class="text-orange-500">Journey</span>
          </span>
        </h2>
        <div class="relative">
          <div
            class="border-l-4 border-orange-500 absolute h-full left-1/2 transform -translate-x-1/2"
          ></div>

          <!-- Timeline Item 1 -->
          <div
            class="mb-20 flex justify-between items-center w-full left-timeline"
          >
            <div
              class="order-1 w-5/12 px-4 py-4 bg-white rounded-lg shadow-md text-left transform transition-transform hover:scale-105 mr-auto relative"
            >
              <div class="flex justify-start items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKx3GnXxpsnKua41NQsL0ppliI3c7Qr_uOeQ&s"
                  alt="Founded"
                  class="w-8 h-8 mr-4"
                />
                <h4 class="text-lg font-semibold text-blue-900">
                  2022 | Founded
                </h4>
              </div>
              <p class="text-gray-700 mt-2">
                On 1st April 2022, Finace India started its journey as
                consulting firm with two partners.
              </p>
              <span class="timeline-pointer left-pointer"></span>
            </div>
            <div class="order-1 w-5/12"></div>
          </div>

          <!-- Timeline Item 2 -->
          <div
            class="mb-20 flex justify-between items-center w-full right-timeline"
          >
            <div class="order-1 w-5/12"></div>
            <div
              class="order-1 w-5/12 px-4 py-4 bg-white rounded-lg shadow-md text-left transform transition-transform hover:scale-105 ml-auto relative"
            >
              <div class="flex justify-start items-center">
                <img
                  src="data:image/png;base64,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"
                  alt="First Product Launch"
                  class="w-8 h-8 mr-4"
                />
                <h4 class="text-lg font-semibold text-blue-900">
                  2022 | Prototype Developed
                </h4>
              </div>
              <p class="text-gray-700 mt-2">
                In July 2022, Finace India Developed turnkey model to meet
                market requirement.
              </p>
              <span class="timeline-pointer right-pointer"></span>
            </div>
          </div>

          <!-- Timeline Item 3 -->
          <div
            class="mb-20 flex justify-between items-center w-full left-timeline"
          >
            <div
              class="order-1 w-5/12 px-4 py-4 bg-white rounded-lg shadow-md text-left transform transition-transform hover:scale-105 mr-auto relative"
            >
              <div class="flex justify-start items-center">
                <img
                  src="data:image/png;base64,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"
                  alt="Global Expansion"
                  class="w-8 h-8 mr-4"
                />
                <h4 class="text-lg font-semibold text-blue-900">
                  2022 | Startup Recognition
                </h4>
              </div>
              <p class="text-gray-700 mt-2">
                In Nov 2022, Finace India was recognized by Dept. of Industries,
                Govt. of Bihar and recieved seed fund of 10 Lakhs.
              </p>
              <span class="timeline-pointer left-pointer"></span>
            </div>
            <div class="order-1 w-5/12"></div>
          </div>

          <!-- Timeline Item 4 -->
          <div
            class="mb-20 flex justify-between items-center w-full right-timeline"
          >
            <div class="order-1 w-5/12"></div>
            <div
              class="order-1 w-5/12 px-4 py-4 bg-white rounded-lg shadow-md text-left transform transition-transform hover:scale-105 ml-auto relative"
            >
              <div class="flex justify-start items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqsZV186d0NKxuENaxqIhUz8eujHYQGLsNaQ&s"
                  alt="Industry Recognition"
                  class="w-8 h-8 mr-4"
                />
                <h4 class="text-lg font-semibold text-blue-900">
                  2023 | Revenue Generation
                </h4>
              </div>
              <p class="text-gray-700 mt-2">
                In April 2023, Our Turnkey Model turned out to be a big HIT.
                Finace India crossed benchmark of 10 Lakh Revenue.
              </p>
              <span class="timeline-pointer right-pointer"></span>
            </div>
          </div>

          <!-- Timeline Item 5 -->
          <div
            class="mb-20 flex justify-between items-center w-full left-timeline"
          >
            <div
              class="order-1 w-5/12 px-4 py-4 bg-white rounded-lg shadow-md text-left transform transition-transform hover:scale-105 mr-auto relative"
            >
              <div class="flex justify-start items-center">
                <img
                  src="data:image/png;base64,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"
                  alt="Present Day"
                  class="w-8 h-8 mr-4"
                />
                <h4 class="text-lg font-semibold text-blue-900">
                  2024 | 5X Growth
                </h4>
              </div>
              <p class="text-gray-700 mt-2">
                In March 2024, Finace India crossed revenue of 53 Lakhs. And
                decided to dedicate itself to reg-tech solution and develop
                compliance management suite.
              </p>
              <span class="timeline-pointer left-pointer"></span>
            </div>
            <div class="order-1 w-5/12"></div>
          </div>

          <!-- Timeline Item 6 -->
          <div
            class="mb-20 flex justify-between items-center w-full right-timeline"
          >
            <div class="order-1 w-5/12"></div>
            <div
              class="order-1 w-5/12 px-4 py-4 bg-white rounded-lg shadow-md text-left transform transition-transform hover:scale-105 ml-auto relative"
            >
              <div class="flex justify-start items-center">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Industry Recognition"
                  class="w-8 h-8 mr-4"
                />
                <h4 class="text-lg font-semibold text-blue-900">
                  2024 | Tech Advancement
                </h4>
              </div>
              <p class="text-gray-700 mt-2">
                In Present , we are looking for funding to contribute in
                technology development.
              </p>
              <span class="timeline-pointer right-pointer"></span>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>
<style scoped>
/* Custom styles for the roadmap */
.right-timeline::before {
  content: " ";
  position: absolute;
  top: 1.5rem;
  right: -0.5rem;
  height: 0;
  width: 0;
}

.left-timeline::before {
  content: " ";
  position: absolute;
  top: 1.5rem;
  left: -0.5rem;
  height: 0;
  width: 0;
}

/* Add more space between timeline items */
.mb-20 {
  margin-bottom: -20px; /* Adjust this value to increase/decrease space between items */
}

/* Timeline pointer styles */
.timeline-pointer {
  position: absolute;
  width: 0;
  height: 0;
}

.left-pointer {
  border-top: 0.5rem solid transparent;
  border-bottom: 0.5rem solid transparent;
  border-right: 0.5rem solid #f6ad55; /* Change to your preferred color */
  right: -2rem; /* Adjust as needed for alignment */
  top: 50%;
  transform: translateY(-50%);
}

.right-pointer {
  border-top: 0.5rem solid transparent;
  border-bottom: 0.5rem solid transparent;
  border-left: 0.5rem solid #f6ad55; /* Change to your preferred color */
  left: -2rem; /* Adjust as needed for alignment */
  top: 50%;
  transform: translateY(-50%);
}
</style>
