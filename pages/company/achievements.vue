<template>
  <div class="px-20 pt-28 font-medium mb-12">
    <!-- Header Section with Text and Linked Image -->
    <header
      class="w-full h-auto flex flex-col lg:flex-row justify-evenly items-center px-4 lg:px-10"
    >
      <!-- Left Side: Case Studies Text -->
      <div class="text-center lg:text-left mb-4 lg:mb-0">
        <h1 class="text-xl lg:text-3xl font-bold mb-10 text-blue-900">
          Never accept defeat, you may be<span class="text-orange-500">  one step away from success</span>
        </h1>
        <!-- <span class="block text-xl">
          A contact page should provide visitors with clear instructions on how
          to get in touch with your business
        </span> -->
      </div>

      <!-- Right Side: Linked Image -->
      <img
        src="https://img.freepik.com/free-vector/successful-business-team-concept_1150-52722.jpg?t=st=1723185226~exp=1723188826~hmac=d3ac7fa3e2f53d55e382eb2eeaddc30ecff4456caac78858d8810cfa8a358fa4&w=826"
        alt="Header Image"
        class="w-[50vw] h-full object-contain mx-auto"
      />
    </header>

    <!-- MileStone -->
    <section class="mt-16 px-4 md:px-8 mx-auto mb-28">
      <LandingOurJourney />
    </section>

    <!-- Award and Recogination -->
    <LandingRecognitions />
    <!-- caseStudy -->
    <section class="mt-16 px-4 md:px-8 mx-auto mb-28">
      <div class="text-center mb-12">
        <h2
          class="text-2xl lg:text-3xl font-bold text-blue-900 headerTitle inline"
        >
          Case <span class="text-orange-500"> Studies </span>
        </h2>
        <p class="text-gray-700 mt-4">
          Discover how we've empowered our clients to achieve their financial
          aspirations.
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-8">
        <div
          v-for="caseStudy in caseStudies"
          :key="caseStudy.id"
          class="w-full sm:w-[48%] md:w-[30%] lg:w-[30%] bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 mx-2 mb-12"
        >
          <div class="relative">
            <img
              :src="caseStudy.image"
              alt="Case Study Image"
              class="w-full h-48 object-cover"
            />
            <div
              class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
            >
             
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-blue-900 mb-3">
              {{ caseStudy.title }}
            </h3>
            <p class="text-gray-600 mb-6">
              {{ caseStudy.description }}
            </p>
            <div class="text-right">
              <nuxt-link
                :to="`/resources/case-studies/${caseStudy.id}`"
                class="text-gray-500 font-semibold hover:underline"
              >
                Learn More &rarr;
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Client testimonial -->
    <div class="mx-4 md:mx-20 my-20">
        <div class="grid grid-cols-2 gap-10">
            <div class="py-20">
                <div class="w-full h-full bg-gray-100"></div>
            </div>
            <div class="py-10">
                <div class="h-full overflow-hidden bg-white rounded shadow-2xl text-slate-500 shadow-slate-200">
                    <p class="text-xl md:text-2xl pl-2 border-[3px] border-y-0 border-r-0 border-l-orange-500 text-blue-950 font-medium mx-6 mt-10">What Clients say <span class="text-orange-500">about us</span></p>
                    <utilTestimony :testimony="{
                        content: 'Finace India has been a game-changer for our startup. Their one-click solutions made the legal process smooth and stress-free.',
                        by: 'Amit Verma',
                        by_caption: 'CEO, Startup Hub'
                    }" />
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: "CaseStudiesPage",
  data() {
    return {
      // Sample case studies data with additional details
      caseStudies: [
        {
          id: 1,
          title: "Case Study 1",
          description:
            "Description for case study 1. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam aliquam saepe tenetur, necessitatibus iure velit minus unde eius architecto quam repellat in fugit ullam, eaque eveniet cum repellendus rem consectetur.",
          image:
            "https://img.freepik.com/premium-vector/editorial-commission-concept-illustration_86047-766.jpg?ga=GA1.1.1217921431.1721647597&semt=ais_user",
          link: "#",
        },
        {
          id: 2,
          title: "Case Study 2",
          description:
            "Description for case study 2. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam aliquam saepe tenetur, necessitatibus iure velit minus unde eius architecto quam repellat in fugit ullam, eaque eveniet cum repellendus rem consectetur.",
          image:
            "https://img.freepik.com/premium-vector/editorial-commission-concept-illustration_86047-766.jpg?ga=GA1.1.1217921431.1721647597&semt=ais_user",
          link: "#",
        },
        {
          id: 3,
          title: "Case Study 3",
          description:
            "Description for case study 3. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam aliquam saepe tenetur, necessitatibus iure velit minus unde eius architecto quam repellat in fugit ullam, eaque eveniet cum repellendus rem consectetur.",
          image:
            "https://img.freepik.com/premium-vector/editorial-commission-concept-illustration_86047-766.jpg?ga=GA1.1.1217921431.1721647597&semt=ais_user",
          link: "#",
        },
      ],
      testimonials: [
        {
          id: 1,
          name: "John Doe",
          company: "Tech Solutions Inc.",
          message:
            "Great service! The team was incredibly professional and attentive to our needs. Their innovative solutions significantly improved our workflow and overall productivity.",
          image: "https://via.placeholder.com/64",
        },
        {
          id: 2,
          name: "Jane Smith",
          company: "Marketing Pros Ltd.",
          message:
            "Highly recommend! The expertise and support provided were exceptional. They delivered on their promises and went above and beyond to ensure our marketing campaigns were a success.",
          image: "https://via.placeholder.com/64",
        },
        {
          id: 3,
          name: "Michael Lee",
          company: "Startup Hub",
          message:
            "Exceptional experience! Their team was dedicated, detail-oriented, and brought fresh ideas to the table. Our business growth has been impressive since we started working with them.",
          image: "https://via.placeholder.com/64",
        },
        {
          id: 4,
          name: "Emily Johnson",
          company: "Creative Co.",
          message:
            "Impressive results! Their commitment to quality and customer satisfaction was evident throughout our project. We are thrilled with the outcomes and the positive impact on our brand.",
          image: "https://via.placeholder.com/64",
        },
        {
          id: 5,
          name: "Robert Brown",
          company: "Innovative Solutions LLC",
          message:
            "Outstanding service! The solutions provided were tailored to our specific needs, and the results exceeded our expectations. Their proactive approach made a significant difference to our business.",
          image: "https://via.placeholder.com/64",
        },
      ],
    };
  },
};
</script>
