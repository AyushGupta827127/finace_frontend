<template>
  <div class="container mx-auto py-16 px-4">
    <div class="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0 md:space-x-8">
      <template v-for="(step, index) in steps" :key="index">
        <div class="flex flex-col items-center text-center space-y-4 group">
          <!-- Hexagon with Gradient, Shadow, and Animation -->
          <div
            :class="[
              'relative w-16 h-16 md:w-20 md:h-20 flex justify-center items-center rounded-full transition-transform duration-300 transform group-hover:scale-300 animate-float',
              step.bgGradient,
            ]"
          >
            <i
              :class="step.icon"
              class="text-white text-2xl md:text-3xl transition-transform duration-300 group-hover:scale-300"
            ></i>
          </div>
          <h3
            class="text-base md:text-lg font-semibold text-gray-800 transition-transform duration-500 group-hover:scale-150"
          >
            {{ step.title }}
          </h3>
        </div>

        <!-- Smooth Connector Line Between Hexagons -->
        <div
          v-if="index < steps.length - 1"
          class="hidden md:flex w-24 justify-center"
        >
          <div class="relative w-full h-2 bg-gradient-to-r from-transparent to-transparent">
            <div
              :class="[
                'absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r animate-draw',
                step.connectorGradient,
              ]"
            ></div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      steps: [
        {
          title: "Website Analysis",
          icon: "fas fa-search",
          bgGradient: "bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg",
          connectorGradient: "from-yellow-400 to-orange-500",
        },
        {
          title: "Layout Design with CSS",
          icon: "fas fa-paint-brush",
          bgGradient: "bg-gradient-to-r from-orange-400 to-orange-600 shadow-lg",
          connectorGradient: "from-orange-400 to-red-500",
        },
        {
          title: "Content Optimization",
          icon: "fas fa-text-height",
          bgGradient: "bg-gradient-to-r from-red-400 to-red-600 shadow-lg",
          connectorGradient: "from-red-400 to-purple-500",
        },
        {
          title: "User Friendly Navigation",
          icon: "fas fa-compass",
          bgGradient: "bg-gradient-to-r from-purple-400 to-purple-600 shadow-lg",
          connectorGradient: "from-purple-400 to-blue-500",
        },
        {
          title: "Validations",
          icon: "fas fa-check",
          bgGradient: "bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg",
          connectorGradient: "from-blue-400 to-teal-500",
        },
        {
          title: "Browser Compatibility",
          icon: "fas fa-globe",
          bgGradient: "bg-gradient-to-r from-teal-400 to-teal-600 shadow-lg",
          connectorGradient: "from-teal-400 to-green-500",
        },
        {
          title: "SEO Friendly",
          icon: "fas fa-search",
          bgGradient: "bg-gradient-to-r from-green-400 to-green-600 shadow-lg",
          connectorGradient: "from-green-400 to-yellow-500",
        },
      ],
    };
  },
};
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css";

/* Custom Floating Animation */
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Custom Draw Line Animation */
@keyframes draw {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.animate-draw {
  animation: draw 3s ease-out forwards;
}

/* Enlarging on Hover */
.group-hover\:scale-300:hover {
  transform: scale(3);
}
</style>
