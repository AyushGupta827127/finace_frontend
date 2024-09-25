<template>
  <div
    class="w-[89%] lg:w-fit max-w-[40rem] max-h-[45rem] flex-row text-black px-5 pb-2 pt-6 shadow-md rounded-xl m-auto md:h-[60vh] lg:h-[82vh]"
  >
    <div class="tabs border-b border-gray-200">
      <!-- Conditional Rendering of Tab Buttons -->

       <button
        v-if="isChartDataAvailable"
        @click="activeTab = 'chart'"
        :class="[
          'py-2 px-4 font-medium',
          'transition-colors duration-600 ease-in-out',
          'border-b-2',
          activeTab === 'chart'
            ? 'border-blue-500 text-blue-500'
            : 'border-transparent text-gray-600',
          'hover:text-blue-600',
        ]"
      >
        Doughnut
      </button>

      <button
        v-if="isChartDataAvailable"
        @click="activeTab = 'LineChartData'"
        :class="[
          'py-2 px-4 font-medium',
          'transition-colors duration-600 ease-in-out',
          'border-b-2',
          activeTab === 'LineChartData'
            ? 'border-blue-500 text-blue-500'
            : 'border-transparent text-gray-600',
          'hover:text-blue-600',
        ]"
      >
        LineChart
      </button>
      <button
        @click="activeTab = 'Info'"
        :class="[
          'py-2 px-4 font-medium',
          'transition-colors duration-600 ease-in-out',
          'border-b-2',
          activeTab === 'Info'
            ? 'border-blue-500 text-blue-500'
            : 'border-transparent text-gray-600',
          'hover:text-blue-600',
        ]"
      >
        Info
      </button>
    </div>

    <div
      class="content w-full lg:w-[19rem] h-[80%] overflow-auto thin-scrollbar"
    >
      <!-- Conditional Rendering of Components -->
      <div v-if="activeTab === 'chart' && isChartDataAvailable">
        <div class="mt-4 max-w-96 m-auto">
          <!-- Chart Section -->
          <ToolChart :chartData="chartData"></ToolChart>
          <div v-if="chartData" class="mt-4 mx-7">
            <div
              v-for="(percentage, label) in percentageData"
              :key="label"
              class="flex justify-between"
            >
              <span class="text-gray-600 font-semibold">{{ label }}</span>
              <span class="font-bold">{{ percentage }}%</span>
            </div>
          </div>
        </div>
      </div>

      <div v-if="activeTab === 'LineChartData' && isChartDataAvailable">
        <!-- LineChart component -->
        <ToolLineChart :chartData="lineChartData"></ToolLineChart>
        <div v-if="chartData" class="mt-4 mx-7">
          <div
            v-for="(percentage, label) in percentageData"
            :key="label"
            class="flex justify-between"
          >
            <span class="text-gray-600 font-semibold">{{ label }}</span>
            <span class="font-bold">{{ percentage }}%</span>
          </div>
        </div>
      </div>
      <div v-if="activeTab === 'Info'">
        <!-- Pass FAQs as a prop to AccordionFAQ -->
        <ToolAccordionFAQ :faqs="faqs"></ToolAccordionFAQ>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chartData: {
      type: Object,
      required: true,
    },
    lineChartData: {
      type: Object,
      required: true,
    },
    faqs: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeTab: "Info", // Default tab
    };
  },
  computed: {
    isChartDataAvailable() {
      return this.chartData && this.chartData.datasets && this.chartData.datasets.length > 0;
    },
    percentageData() {
      const total = this.chartData.datasets[0].data.reduce(
        (sum, value) => sum + value,
        0
      );
      return this.chartData.labels.reduce((result, label, index) => {
        result[label] = (
          (this.chartData.datasets[0].data[index] / total) *
          100
        ).toFixed(2);
        return result;
      }, {});
    },
  },
  watch: {
    chartData: {
      immediate: true,
      handler(newVal) {
        if (!newVal || !newVal.datasets || newVal.datasets.length === 0) {
          this.activeTab = 'Info';
        } else {
          this.activeTab = 'chart';
        }
      }
    }
  }
};
</script>

<style scoped>
/* Add any specific styles for this component here */
</style>