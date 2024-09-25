<template>
  <div class="px-16 mt-16 lg:px-20 pt-28 lg:pt-28 font-medium mb-12">
    <!-- Hero -->
    <header
      class="w-full h-auto flex flex-col lg:flex-row justify-evenly items-center px-4 lg:px-8 mb-20"
    >
      <!-- Left Side: Case Studies Text -->
      <div class="text-center lg:text-left mb-4 lg:mb-0">
        <h1 class="text-xl lg:text-3xl font-bold mb-10 text-blue-900">
          Turnkey project is one of the most special modes of  <span class="text-orange-500"> carrying out international business</span>
        </h1>
       
      </div>

      <!-- Right Side: Linked Image -->
      <!-- <iframe src="https://lottie.host/embed/21cfd672-9aa5-4bc1-be64-92f6cadc4a47/a1fauFY7Nq.json" class="h-full object-contain mx-auto"></iframe> -->
      <img  class="w-full max-w-[30rem] object-contain mx-auto lg:mx-0" src="@/assets/img/home-page/turnkey-projects.png" alt="Turnkey Projects">
    </header>

    <!-- Introduction -->
    <section class="pb-16 ">
      <div
        class=" mx-auto flex flex-col lg:flex-row items-center lg:space-x-8"
      >
        <!-- Image Section -->
        <div class="flex-shrink-0 lg:w-1/2">
          <img
            src="https://img.freepik.com/free-vector/business-leaders-shaking-hands_74855-4376.jpg?ga=GA1.1.1075107906.1721390152"
            alt="Introduction Image"
            class="w-full h-auto object-cover"
          />
        </div>
        <!-- Text Section -->
        <div class="lg:w-1/2 mt-8 lg:mt-0">
          <h2 class="text-4xl font-bold text-blue-950 mb-6 headerTitle">
            Introduction
          </h2>
          <p class="text-gray-700 text-lg leading-relaxed">
            Our turnkey project solutions provide end-to-end services, ensuring
            a seamless experience from planning to execution. Whether you're
            launching a new business or expanding an existing one, we handle
            everything so you can focus on what you do best.
          </p>
        </div>
      </div>
    </section>



    <!-- Benefits -->
    <LandingBenefits />
       <!-- Solutions -->
       <div class="solutions pb-16 mb-12 m-4">
      <h2
        class="mt-28 text-2xl lg:text-3xl font-bold text-center mb-10 text-blue-900"
      >
        <span class="headerTitle">Solutions</span>
      </h2>
      <div
        class="solution-items flex flex-wrap justify-center gap-x-4 gap-y-6 w-full"
      >
        <div
          class="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33%-1rem)] solution-item flex flex-col items-center text-center p-4 transition-transform transform hover:scale-105 bg-white shadow-lg rounded-lg"
          v-for="(solution, index) in solutions"
          :key="index"
        >
          <div class="solution-icon mb-6">
            <img
              :src="solution.icon"
              alt="Solution Icon"
              class="h-16 w-16 mx-auto"
            />
          </div>
          <div class="solution-text text-center">
            <h3 class="text-2xl font-semibold text-blue-900 mb-4">
              {{ solution.title }}
            </h3>
            <p class="text-gray-700 text-lg leading-relaxed">
              {{ solution.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Process -->
     <div class="mt-28 mx-8">
    <LandingProcess/></div>

    <!-- Success Story -->
  
<section class="mx-8 py-16 bg-gray-50">
  <div class="mx-4 sm:mx-8 md:mx-12">
    <div class="text-center mb-8 md:mb-16">
      <h2
        class="text-4xl font-bold text-blue-950 mb-12 text-center headerTitle inline-block opacity-0 animate-fadeIn"
      >
        Stories of <span class="text-orange-500">Successful Startups</span>
      </h2>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Success Story Card 1 -->
      <div
        class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
      >
        <div class="relative overflow-hidden">
          <img
            src="@/assets/img/out-team/start-up2.png"
            alt="Startup 1"
            class="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
          />
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold text-blue-950 mb-4">
            Startup 1
          </h3>
          <p class="text-gray-700 mb-4">
            "Our startup transformed with the comprehensive support
            provided. The expert guidance was invaluable."
          </p>
          <p class="font-medium text-gray-600">- Founder, Startup 1</p>
        </div>
      </div>
      <!-- Success Story Card 2 -->
      <div
        class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
      >
        <div class="relative overflow-hidden">
          <img
            src="@/assets/img/out-team/start-up1.png"
            alt="Startup 2"
            class="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
          />
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold text-blue-950 mb-4">
            Startup 2
          </h3>
          <p class="text-gray-700 mb-4">
            "The startup package covered all our needs from branding to
            launch. Highly recommend!"
          </p>
          <p class="font-medium text-gray-600">- CEO, Startup 2</p>
        </div>
      </div>
      <!-- Success Story Card 3 -->
      <div
        class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
      >
        <div class="relative overflow-hidden">
          <img
            src="@/assets/img/out-team/start-up3.png"
            alt="Startup 3"
            class="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
          />
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold text-blue-950 mb-4">
            Startup 3
          </h3>
          <p class="text-gray-700 mb-4">
            "We achieved our goals faster than expected thanks to the
            dedicated support and expertise."
          </p>
          <p class="font-medium text-gray-600">- Founder, Startup 3</p>
        </div>
      </div>
    </div>
  </div>
</section>

    <!-- Faq -->
  <LandingFaq />

    <!-- Blog -->
    <section class="py-16">
      <div class=" mx-8">
        <div class="text-center mb-12">
          <h2
            class="text-4xl font-bold text-blue-900 mb-12 text-center headerTitle inline"
          >
            Related <span class="text-orange-500">Blogs</span>
          </h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Blog Card 1 -->
          <div
            class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src="https://via.placeholder.com/400x250"
              alt="Blog Post 1"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-blue-950 mb-4">
                Blog Post 1
              </h3>
              <p class="text-gray-600 mb-4">
                Insights on how to prepare for a successful startup launch.
              </p>
              <a href="#" class="text-blue-600 hover:underline font-medium"
                >Read More</a
              >
            </div>
          </div>
          <!-- Blog Card 2 -->
          <div
            class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src="https://via.placeholder.com/400x250"
              alt="Blog Post 2"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-blue-950 mb-4">
                Blog Post 2
              </h3>
              <p class="text-gray-600 mb-4">
                Top 5 mistakes to avoid when starting your business.
              </p>
              <a href="#" class="text-blue-600 hover:underline font-medium"
                >Read More</a
              >
            </div>
          </div>
          <!-- Blog Card 3 -->
          <div
            class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src="https://via.placeholder.com/400x250"
              alt="Blog Post 3"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-blue-950 mb-4">
                Blog Post 3
              </h3>
              <p class="text-gray-600 mb-4">
                Essential tools for modern startups.
              </p>
              <a href="#" class="text-blue-600 hover:underline font-medium"
                >Read More</a
              >
            </div>
          </div>
          <!-- Blog Card 4 -->
          <div
            class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src="https://via.placeholder.com/400x250"
              alt="Blog Post 4"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-blue-950 mb-4">
                Blog Post 4
              </h3>
              <p class="text-gray-600 mb-4">
                How to scale your startup successfully.
              </p>
              <a href="#" class="text-blue-600 hover:underline font-medium"
                >Read More</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- Contact CTA -->
  <LandingContact />
</template>

<script>
export default {
  data() {
    return {
      solutions: [
        {
          title: "Secretarial Boost",
          description:
            "Our product instantly generates resolutions, drafts, and e-forms with a single click",
          icon: "data:image/png;base64,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", // Image for Secretarial Boost
        },
        {
          title: "Compliance Calendar",
          description:
            "Monitors deadlines and sends timely reminders, ensuring you never miss a compliance requirement",
          icon: "data:image/png;base64,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", // Image for Compliance Calendar
        },
        {
          title: "Data Bank",
          description:
            "Seamlessly syncs previous compliance data and establishes a robust database for all future documents",
          icon: "data:image/png;base64,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", // Image for Data Bank
        },
        {
          title: "Regulatory Alerts",
          description:
            "Receives real-time legal updates to stay compliant with evolving regulations",
          icon: "data:image/png;base64,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", // Image for Regulatory Alerts
        },
        {
          title: "Compliance Analysis",
          description:
            "Identifies and scrutinizes previous instances of non-compliance",
          icon: "data:image/png;base64,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", // Image for Compliance Analysis
        },
        {
          title: "Workflow Optimization",
          description:
            "Tracks ongoing compliance processes with precision for optimized efficiency",
          icon: "data:image/png;base64,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", // Image for Process Tracking
        },
      ],
      services: [
        {
          title: "Business Plan Development",
          description:
            "Crafting comprehensive and strategic business plans tailored to your needs.",
          image:
            "https://img.freepik.com/free-vector/illustration-people-avatar-business-plan-concept_53876-37211.jpg?ga=GA1.2.1075107906.1721390152&semt=ais_hybrid",
          alt: "Business Plan Development",
        },
        {
          title: "Market Research & Analysis",
          description:
            "In-depth analysis to understand market trends and consumer behavior.",
          image:
            "https://img.freepik.com/free-vector/big-isolated-employee-working-office-workplace-flat-illustration_1150-41780.jpg?ga=GA1.2.1075107906.1721390152&semt=ais_hybrid",
          alt: "Market Research & Analysis",
        },
        {
          title: "Branding & Design Services",
          description:
            "Creating a strong brand identity through innovative design solutions.",
          image:
            "https://img.freepik.com/premium-vector/brand-construction-concept-illustration_86047-751.jpg?ga=GA1.2.1075107906.1721390152&semt=ais_hybrid",
          alt: "Branding & Design Services",
        },
        {
          title: "Website & App Development",
          description:
            "Developing responsive and user-friendly websites and applications.",
          image:
            "https://img.freepik.com/free-vector/hand-drawn-flat-design-homepage-illustration_23-2149255390.jpg?ga=GA1.2.1075107906.1721390152&semt=ais_hybrid",
          alt: "Website & App Development",
        },
        {
          title: "Legal & Financial Consultation",
          description:
            "Providing expert advice on legal and financial matters for your business.",
          image:
            "https://img.freepik.com/free-vector/background-with-advocacy-elements_23-2147811918.jpg?ga=GA1.2.1075107906.1721390152&semt=ais_hybrid",
          alt: "Legal & Financial Consultation",
        },
      ],
    };
  },
};
</script>
<style>
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fadeIn {
    animation: fadeIn 1.2s ease-out forwards;
  }
</style>