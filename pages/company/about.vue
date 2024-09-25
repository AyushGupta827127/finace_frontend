<template>
  <div class="px-16 pt-24 font-medium mb-12">
    <!-- Header Section with Text and Linked Image -->
    <header
      class="w-full h-auto flex flex-col lg:flex-row justify-evenly items-center px-4 lg:px-10"
    >
      <!-- Left Side: Case Studies Text -->
      <div class="text-center lg:text-left mb-4 lg:mb-0">
        <h1 class="text-xl lg:text-3xl font-bold mb-10 text-blue-900">
          Empowering Your Journey,
          <span class="text-orange-500">Every Step of the Way</span>
        </h1>
        <!-- <span class="block text-xl">
          A contact page should provide visitors with clear instructions on how
          to get in touch with your business
        </span> -->
      </div>

      <!-- Right Side: Linked Image -->
      <!-- <iframe src="https://lottie.host/embed/21cfd672-9aa5-4bc1-be64-92f6cadc4a47/a1fauFY7Nq.json" class="h-full object-contain mx-auto"></iframe> -->
      <img
        src="https://img.freepik.com/free-vector/business-team-brainstorming-discussing-startup-project_74855-6909.jpg?ga=GA1.1.1075107906.1721390152"
        alt="Header Image"
        class="h-full object-contain mx-auto"
      />
    </header>

    <!-- Company History Section with Infographic Roadmap Design -->
    <LandingOurStory />

    <!-- Our Team  -->
    <div class="md:mt-40 md:mb-24">
  <section class="mt-24 px-4 md:px-10">
    <h2 class="text-2xl lg:text-3xl font-bold text-center mb-10 text-blue-900">
      <span class="headerTitle">
        Our <span class="text-orange-500">Team</span>
      </span>
    </h2> 
    <div class="flex flex-wrap justify-center gap-x-4 gap-y-6 w-full">
  <div
    v-for="(member, index) in teamMembers"
    :key="index"
    class="team-member flex flex-col items-center text-center flex-grow-0 flex-shrink-0 basis-[calc(25%-1rem)] p-4 transition-transform transform hover:scale-105 bg-white shadow-lg rounded-lg"
  >
    <div class="relative w-24 h-24 rounded-full overflow-hidden shadow-md mb-4">
      <img
        :src="member.image"
        :alt="member.name"
        class="w-full h-full object-cover"
      />
    </div>
    <h4 class="text-lg font-semibold mb-1 text-gray-900">{{ member.name }}</h4>
    <p class="text-blue-800 text-md font-semibold mb-1">{{ member.role }}</p>
    <p class="text-gray-500 mb-4">{{ member.description }}</p>
  </div>
</div>

  </section>
</div>



    <!-- cards start-->
    <div
      class="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-8 mb-12 sm:mb-20 px-12"
    >
      <div
        class="flex flex-col gap-6 p-6 border border-gray-300 relative group overflow-hidden"
      >
        <div
          class="absolute inset-0 bg-gradient-to-b from-blue-950 to-slate-900 transition-custom transform -translate-y-full group-hover:translate-y-0 z-0"
        ></div>

        <div
          class="text-xl md:text-2xl pl-2 border-2 border-y-0 border-r-0 border-l-orange-500 text-blue-950 relative z-10 transition-custom group-hover:text-white"
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

    <!-- value And Culture -->
    <section class="mt-28 px-4 md:px-8">
      <h2
        class="text-2xl lg:text-3xl font-bold text-center mb-12 text-blue-900"
      >
        <span class="headerTitle">
          Our Values and
          <span class="text-orange-500"> Culture </span>
        </span>
      </h2>

      <!-- Features Section -->
      <!-- <transition name="fade"> -->
      <div class="mt-20 flex flex-col gap-6 md:gap-10">
        <div class="flex flex-col md:flex-row items-center gap-6">
          <img
            src="https://via.placeholder.com/150"
            alt="Feature 2"
            class="w-36 h-auto rounded-md ml-8 transition-transform duration-500 hover:scale-110"
          />
          <div class="max-w-xl">
            <h3
              class="text-xl md:text-2xl text-blue-900 font-medium headerTitle"
            >
              Innovative Work <span class="text-orange-500"> Environment</span>
            </h3>
            <p class="text-sm md:text-lg text-gray-600 mt-2 leading-relaxed">
              Experience a dynamic and innovative work environment where
              creativity and new ideas are encouraged and rewarded.
            </p>
          </div>
        </div>
        <div class="flex flex-col md:flex-row-reverse items-center gap-6">
          <img
            src="https://via.placeholder.com/150"
            alt="Feature 2"
            class="w-36 h-auto rounded-md mr-8 transition-transform duration-500 hover:scale-110"
          />
          <div class="max-w-xl">
            <h3
              class="text-xl md:text-2xl text-blue-900 font-medium headerTitle"
            >
              Professional <span class="text-orange-500"> Growth</span>
            </h3>
            <p class="text-sm md:text-lg text-gray-600 mt-2 leading-relaxed">
              Access to continuous learning and development opportunities to
              advance your career and stay ahead in the industry.
            </p>
          </div>
        </div>
        <div class="flex flex-col md:flex-row items-center gap-6">
          <img
            src="https://via.placeholder.com/150"
            alt="Feature 3"
            class="w-36 h-auto rounded-md ml-8 transition-transform duration-500 hover:scale-110"
          />
          <div class="max-w-xl">
            <h3
              class="text-xl md:text-2xl text-blue-900 font-medium headerTitle"
            >
              Collaborative <span class="text-orange-500"> Team</span>
            </h3>
            <p class="text-sm md:text-lg text-gray-600 mt-2 leading-relaxed">
              Join a team of talented professionals who work together to achieve
              common goals and drive success.
            </p>
          </div>
        </div>
        <div class="flex flex-col md:flex-row-reverse items-center gap-6">
          <img
            src="https://via.placeholder.com/150"
            alt="Feature 2"
            class="w-36 h-auto rounded-md mr-8 transition-transform duration-500 hover:scale-110"
          />
          <div class="max-w-xl">
            <h3
              class="text-xl md:text-2xl text-blue-900 font-medium headerTitle"
            >
              Employee <span class="text-orange-500"> Well-being</span>
            </h3>
            <p class="text-sm md:text-lg text-gray-600 mt-2 leading-relaxed">
              Benefit from comprehensive health and wellness programs designed
              to support your overall well-being.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- </transition> -->
  </div>
</template>
<script>
import gauravImage from "@/assets/img/out-team/gaurav.jpeg";
import manitImage from "@/assets/img/out-team/manit.jpeg";
import simranImage from "@/assets/img/out-team/simran.jpeg";
import mohiniImage from "@/assets/img/out-team/mohini.jpeg";
import amritImage from "@/assets/img/out-team/amrit.jpeg";
import sandeepImage from "@/assets/img/out-team/sandeep.jpeg";
import soumyaImage from '@/assets/img/out-team/soumya.jpeg';
export default {
  data() {
    return {
      teamMembers: [
        {
          name: "Gaurav Sharma",
          role: "Co-Founder",
          image: gauravImage,
          description: "5+ Years  in Accounting and Finance",
        },
        {
          name: "Manit k Singh",
          role: "Co-Founder",
          image: manitImage,
          description: "5+ Years in Compliance and Consultancy",
        },
        {
          name: "Soumya Poddar",
          role: "Project Manager",
          image: soumyaImage,
          description: "5+ Years in Development",
        },
        {
          name: "Sandeep K Pandit",
          role: "Senior Partner",
          image: sandeepImage,
          description: "7+ Years in Taxation & Audit",
        },
        {
          name: "Amrit Kumar",
          role: "Partner",
          image: amritImage,
          description: "5+ Years  in Accounting and Finance",
        },
        {
          name: "Simran Raj",
          role: "Compliance Officer",
          image: simranImage,
          description: "Deals in Secreterial Compliance",
        },
        {
          name: "Mohini Sinha",
          role: "Accounts Manager",
          image: mohiniImage,
          description: "2+ Years in Public Relations",
        },
      ],
    };
  },
};
</script>
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
