<template>
  <div class="w-full flex flex-wrap gap-4 p-4">
    <!-- Input Component Start -->
    <div
      class="thin-scrollbar flex-1 min-w-full max-w-[40rem] max-h-[45rem] lg:min-w-0 bg-blue p-8 sm:p-12 lg:ml-12 md:h-[70vh] lg:h-[82vh] shadow-md rounded-xl overflow-auto thin-scrollbar flex flex-col justify-between"
    >
      <div v-if="!showResults" class="flex flex-col items-center h-full mb-20 lg:px-12">
        <div class="flex justify-center">
          <h2 class="text-xl lg:text-3xl mb-10 headerTitle">
            Gratuity <span class="text-orange-500"> Calculator</span>
          </h2>
        </div>

        <div class="flex-grow w-full">
          <div class="space-y-10 mb-5">
            <div class="">
              <label
                for="employeeType"
                class="block text-sm sm:text-sm ml-2 text-gray-400 mb-2"
                >Employee Type</label
              >
              <select
                v-model="employeeType"
                id="employeeType"
                name="employeeType"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="government">Government Employee</option>
                <option value="private-covered">
                  Private Employee - Covered Under Gratuity Act
                </option>
                <option value="private-not-covered">
                  Private Employee - Not Covered Under Gratuity Act
                </option>
              </select>
            </div>
            <div class="input-container">
              <input
                id="basic-pay"
                type="number"
                placeholder=" "
                required
                v-model.number="basicPay"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <label for="basic-pay" class="label">{{
                employeeType === "private-not-covered"
                  ? "10 months Average basic pay (₹)"
                  : "Last drawn monthly basic pay (₹)"
              }}</label>
            </div>
            <div class="input-container">
              <input
                id="da"
                type="number"
                required
                placeholder=" "
                v-model.number="da"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <label for="da" class="label">{{
                employeeType === "private-not-covered"
                  ? "10 months Average DA (₹)"
                  : "Last drawn monthly DA (₹)"
              }}</label>
            </div>
            <div class="mb-4">
              <label
                for="years"
                class="block text-sm sm:text-sm ml-2 text-gray-400 mb-2"
                >Employment duration (Years and Months)</label
              >
              <div class="flex flex-col sm:flex-row gap-4">
                <input
                  v-model.number="years"
                  type="number"
                  id="years"
                  name="years"
                  class="input block w-full sm:w-1/2 text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Years"
                  min="5"
                  @input="validateYears"
                />
                <input
                  v-model.number="months"
                  type="number"
                  id="months"
                  name="months"
                  class="input block w-full sm:w-1/2 text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Months"
                />
              </div>
              <p v-if="years < 5" class="text-red-500 text-sm mt-2">
                Minimum 5 years required.
              </p>
            </div>
          </div>
        </div>

        <div class="flex w-full gap-4">
          <button
            @click="calculateGratuity"
            :disabled="!isFormValid"
            :class="{
              'flex-1 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg': true,
              'cursor-not-allowed opacity-50': !isFormValid,
            }"
          >
            Calculate
          </button>
          <button
            @click="resetFields"
            class="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg outline-btn"
          >
            Reset
          </button>
        </div>
      </div>

      <!-- Result -->
      <div v-else class="text-black">
        <div class="flex">
          <button
            @click="back"
            class="bg-transparent border-[1.5px] border-gray-100 shadow-sm rounded-full p-2 flex items-center justify-center"
            style="width: 48px; height: 48px"
          >
            <span class="material-icons text-gray-600">arrow_back</span>
          </button>
          <h1 class="text-3xl mx-auto font-bold text-center mb-8">Result</h1>
        </div>
        <ToolResult :labels="resultsLabels"></ToolResult>
        <div>
          <div class="flex justify-between">
            <button
              @click="resetFields"
              class="w-full mr-2 mt-6 h-fit py-3 px-7 mb-6 outline-btn"
            >
              Re-Calculate
            </button>
          </div>
        </div>
      </div>
      <!-- Result End -->
    </div>
    <!-- Input Component End -->

    <!-- Chart -->
    <div
      class="flex bg-white py-6 rounded-xl flex-col pt-0 mt-8 lg:mt-0 w-full lg:w-fit"
    >
      <ToolCalculatorDetails
        :chartData="doughnutChartData"
        :lineChartData="LineChartData"
        :faqs="faqs"
      />
    </div>
    <!-- Chart End -->
  </div>
</template>

<script>
import numberToWords from "number-to-words";
export default {
  data() {
    return {
      basicPay: null,
      da: null,
      years: null,
      months: null,
      gratuity: null,
      employeeType: "government", // Default selection
      showResults: false,
      doughnutChartData: null,
      LineChartData: null,
      reportData: [],
      reportType: "yearly",
      resultsLabels: [],
      showModal: false,
      faqs: [
        {
          question: "What is a Gratuity calculator?",
          answer:
            "A Gratuity calculator estimates the gratuity amount based on your salary and tenure.",
          active: false,
        },
        {
          question: "How is Gratuity calculated?",
          answer:
            "Gratuity is calculated based on your salary, years of service, and applicable rules or formula.",
          active: false,
        },
        {
          question: "How accurate is the Gratuity calculator?",
          answer:
            "The calculator provides estimates; actual amounts may vary based on company policies and regulations.",
          active: false,
        },
      ],
    };
  },
  computed: {
    formattedGratuity() {
      if (this.gratuity === null) return "";
      return new Intl.NumberFormat("en-IN").format(this.gratuity);
    },
    isFormValid() {
      return (
        this.basicPay > 0 && this.da >= 0 && this.years >= 5 && this.months >= 0
      );
    },
  },
  methods: {
    convertNumberToWords(num) {
      if (num === null || num === undefined) return "";
      // Convert number to words
      let words = numberToWords.toWords(num);

      // Capitalize the first letter
      words = words.charAt(0).toUpperCase() + words.slice(1);

      return words;
    },

    validateYears() {
      if (this.years < 5) {
        this.years = 5; // Set minimum years to 5
      }
    },

    calculateGratuity() {
      const basicPay = parseFloat(this.basicPay || 0);
      const da = parseFloat(this.da || 0);
      const years = parseInt(this.years || 0);
      const months = parseInt(this.months || 0);
      const adjustedYears = months >= 7 ? years + 1 : years;
      const totalMonths = adjustedYears * 12;

      switch (this.employeeType) {
        case "government":
          this.calculateGovernmentGratuity(basicPay, da, totalMonths);
          break;
        case "private-covered":
          this.calculatePrivateCoveredGratuity(basicPay, da, totalMonths);
          break;
        case "private-not-covered":
          this.calculatePrivateNotCoveredGratuity(basicPay, da, totalMonths);
          break;
        default:
          this.gratuity = null;
      }

      this.showResults = true;

      this.resultsLabels = [
        { label: "Gratuity Amount", value: `₹ ${this.gratuity}` },
        { label: "Basic Pay", value: `₹ ${this.basicPay}` },
        { label: "DA", value: `₹ ${this.da}` },
      ];

      this.doughnutChartData = {
        datasets: [
          {
            data: [basicPay, da],
            backgroundColor: ["#003366", "#FB923C"],
          },
        ],
        labels: ["Basic Pay", "DA"],
      };

      // Prepare data for Line chart
      this.LineChartData = {
        labels: ["1", "2", "3", "4", "5"], // Adjust as needed
        datasets: [
          {
            label: "Basic Pay",
            borderColor: "#003366",
            backgroundColor: "rgba(0, 51, 102, 0.2)",
            data: [basicPay / 4, basicPay / 2, basicPay], // Adjust data as needed
          },
          {
            label: "DA",
            borderColor: "#FB923C",
            backgroundColor: "rgba(251, 146, 60, 0.2)",
            data: [da / 4, da / 2, da], // Adjust data as needed
          },
        ],
      };
    },
    calculateGovernmentGratuity(basicPay, da, totalMonths) {
      const gratuityAmount = ((basicPay + da) * totalMonths * 15) / 26 / 12;
      this.gratuity = gratuityAmount.toFixed(2);
    },
    calculatePrivateCoveredGratuity(basicPay, da, totalMonths) {
      const gratuityAmount = ((basicPay + da) * totalMonths * 15) / 26 / 12;
      this.gratuity = gratuityAmount.toFixed(2);
    },
    calculatePrivateNotCoveredGratuity(basicPay, da, totalMonths) {
      const gratuityAmount = ((basicPay + da) * totalMonths * 15) / 30 / 12;
      this.gratuity = gratuityAmount.toFixed(2);
    },
    resetFields() {
      this.basicPay = null;
      this.da = null;
      this.years = null;
      this.months = null;
      this.gratuity = null;
      this.employeeType = "government";
      this.showResults = false;
      this.doughnutChartData = null;
      this.LineChartData = null;
    },
    back() {
      this.showResults = false;
      this.doughnutChartData = null;
      this.LineChartData = null;
    },
  },
};
</script>