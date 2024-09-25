<template>
  <div class="bg-white w-full p-12 md:p-28 text-gray-500 flex flex-col gap-12 md:gap-24 mt-12">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="flex flex-col justify-center gap-6 md:gap-10">
        <h1 class="text-xl lg:text-4xl font-bold  text-blue-900">
          Get <span class="text-orange-500"> Started</span>
        </h1>
          <span class="text-lg font-medium text-blue-900">Powered by <span class="text-orange-500">Finace India</span></span>
        <div class="flex gap-4">
          <button class="primary-btn">
            Login
          </button>
          <button class="primary-btn">
            Get Demo
          </button>
        </div>
      </div>
      <div class="grid grid-cols-1">
        <img class="w-full" src="@/assets/img/product/hero-img.jpg" alt="Hero Image" />
      </div>
    </div>
    <div class="flex items-center justify-center text-3xl md:text-5xl text-center ">
      " We Mind Your Business "
    </div>

    <!-- cards start-->
     <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
      <div
        class="flex flex-col gap-6 p-6 border border-gray-300 relative group overflow-hidden"
      >
        <div
          class="absolute inset-0 bg-gradient-to-b from-blue-950 to-slate-900 transition-custom transform -translate-y-full group-hover:translate-y-0 z-0"
        ></div>

        <div
          class="text-xl md:text-2xl pl-2 border-2 border-y-0 border-r-0 border-l-orange-500 text-blue-950 relative z-10 group-hover:text-white transition-custom"
        >
          What We <span class="text-orange-500">Offer</span>
        </div>
        <div
          class="relative z-10 text-black transition-custom group-hover:text-white"
        >
          FI is offering a RegTech Solution that automates compliance and
          taxation processes for businesses of all sizes. Our automated
          compliance management suite ensures the highest standard of
          compliance, governance, and risk management in real-time. We use the
          latest technologies to provide robust solutions that reduce your
          manpower costs by automating your tedious and repetitive tasks.
        </div>
      </div>

      <div
        class="flex flex-col gap-6 p-6 border border-gray-300 relative group overflow-hidden"
      >
        <div
          class="absolute inset-0 bg-gradient-to-b from-blue-950 to-slate-900 transition-custom transform -translate-y-full group-hover:translate-y-0 z-0"
        ></div>

        <div
          class="text-xl md:text-2xl pl-2 border-2 border-y-0 border-r-0 border-l-orange-500 text-blue-950 relative z-10 transition-custom group-hover:text-white"
        >
          Why Choose <span class="text-orange-500">Us</span>
        </div>
        <div
          class="relative z-10 text-black transition-custom group-hover:text-white"
        >
          FI uses emerging technologies such as ML, Blockchain, Big Data, and AI
          to empower businesses by enhancing efficiency, minimizing regulatory
          risk, and reducing overall compliance costs through digital
          transformation. FI has a great team of CAs, CSs, Lawyers, IT
          Professionals, and Technicians that contribute to the continuous
          progress of the organization. We believe in continuous development
          based on research and feedback. We use the latest technologies.
        </div>
      </div>

      <div
        class="flex flex-col gap-6 p-6 border border-gray-300 relative group overflow-hidden"
      >
        <div
          class="absolute inset-0 bg-gradient-to-b from-blue-950 to-slate-900 transition-custom transform -translate-y-full group-hover:translate-y-0 z-0"
        ></div>

        <div
          class="text-xl md:text-2xl pl-2 border-2 border-y-0 border-r-0 border-l-orange-500 text-blue-950 relative z-10 transition-custom group-hover:text-white"
        >
          What are we <span class="text-orange-500">Solving</span>
        </div>
        <div
          class="relative z-10 text-black transition-custom group-hover:text-white"
        >
          <ul class="flex flex-col gap-2">
            <li>
              Absence of suitable tools & technologies for streamlined
              compliance operations
            </li>
            <li>
              Difficulty in interpreting complex & evolving regulations in real
              time
            </li>
            <li>
              Huge penalties & fines for noncompliance; and Compliance officers
              face the challenge of limited time
            </li>
            <li>Time-Consuming Repetitive Tasks</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- cards end  -->

    <!-- Images -->
    <div class="grid grid-cols-1 gap-4 mt-6">
      <div class="flex justify-center text-center">
        <div
          class="text-2xl md:text-3xl font-medium text-blue-950 pl-2 border-2 border-y-0 border-r-0 border-l-orange-500">
          Technologies <span class="text-orange-500">Stacks</span>
        </div>
      </div>
      <div class="overflow-hidden">
        <div class="scrolling-wrapper">
          <div class="scrolling">
            <img class="w-20 md:w-40 h-auto" src="@/assets/img/technology/big-data.png" alt="Big Data" />
            <img class="w-20 md:w-40 h-auto" src="@/assets/img/technology/block-chain.png" alt="Blockchain" />
            <img class="w-20 md:w-40 h-auto" src="@/assets/img/technology/ai.png" alt="AI" />
            <img class="w-20 md:w-40 h-auto" src="@/assets/img/technology/aws.png" alt="AWS" />
            <img class="w-20 md:w-40 h-auto" src="@/assets/img/technology/machine-learning.png"
              alt="Machine Learning" />
            <!-- Repeat images to create infinite loop -->
            <img class="w-20 md:w-40 h-auto" src="@/assets/img/technology/big-data.png" alt="Big Data" />
            <img class="w-20 md:w-40 h-auto" src="@/assets/img/technology/block-chain.png" alt="Blockchain" />
            <img class="w-20 md:w-40 h-auto" src="@/assets/img/technology/ai.png" alt="AI" />
            <img class="w-20 md:w-40 h-auto" src="@/assets/img/technology/aws.png" alt="AWS" />
            <img class="w-20 md:w-40 h-auto" src="@/assets/img/technology/machine-learning.png"
              alt="Machine Learning" />
          </div>
        </div>
      </div>
    </div>

    <!-- Our Journey -->
 <LandingOurJourney />
 </div>
</template>

<style>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  20% {
    transform: translateX(-20%);
  }

  40% {
    transform: translateX(-40%);
  }

  60% {
    transform: translateX(-60%);
  }

  80% {
    transform: translateX(-80%);
  }

  100% {
    transform: translateX(-100%);
  }
}

.scrolling-wrapper {
  display: flex;
  animation: scroll 15s linear infinite;
}

.scrolling {
  display: flex;
}

.scrolling img {
  min-width: 20%;
}

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
.absolute.bottom-3.right-3 {
  bottom: 12px;
  right: 12px;
}
</style>
