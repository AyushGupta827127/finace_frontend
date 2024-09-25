<template>
  <div class="w-full flex flex-wrap gap-4 p-4">
    <!-- Input Component Start -->
    <div
      class="thin-scrollbar flex-1 min-w-full max-w-[40rem] max-h-[45rem] lg:min-w-0 bg-blue p-8 sm:p-12 lg:ml-12 md:h-[70vh] lg:h-[82vh] shadow-md rounded-xl overflow-auto thin-scrollbar flex flex-col justify-between"
    >
      <div v-if="!isCalculated" class="flex flex-col items-center h-full mb-10 lg:px-12">
        <div class="flex justify-center">
          <h2 class="text-xl lg:text-3xl mb-10 headerTitle">
            HRA <span class="text-orange-500"> Calculator</span>
          </h2>
        </div>

        <div class="flex-grow w-full">
          <div class="space-y-10 mb-5">
            <div class="input-container">
              <input
                id="basic-salary"
                type="number"
                required
                placeholder=" "
                v-model.number="basicSalary"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <label for="basic-salary" class="label">Basic Salary + DA:</label>
            </div>

            <div class="input-container">
              <input
                id="hra-received"
                type="number"
                placeholder=" "
                v-model.number="hraReceived"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <label for="hra-received" class="label">HRA Received:</label>
            </div>

            <div class="input-container">
              <input
                id="rent-paid"
                type="number"
                placeholder=" "
                v-model.number="rentPaid"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <label for="rent-paid" class="label">Rent Paid:</label>
            </div>

            <div class="input-container">
              <select
                v-model="cityType"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="metro">Metro</option>
                <option value="non-metro">Non-Metro</option>
              </select>
              <label for="city-type" class="label">City Type:</label>
            </div>
          </div>
        </div>

        <div class="flex w-full gap-4">
          <button
            @click="calculateHRA"
            :disabled="!isFormValid"
            :class="{ 'cursor-not-allowed opacity-50': !isFormValid }"
            class="w-1/2 mr-2 mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-2 md:px-5 rounded-lg"
          >
            Calculate
          </button>
          <button
            @click="reset"
            class="w-1/2 mt-6 py-3 px-2 md:px-9 outline-btn"
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

        <!-- Include HRA Results component -->
        <ToolResult :labels="resultsLabels"></ToolResult>
        <div>
          <button
            @click="reset"
            class="w-full mt-6 h-fit py-2 px-4 mb-6 outline-btn"
          >
            Re-Calculate
          </button>
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
export default {
  data() {
    return {
      basicSalary: "",
      hraReceived: "",
      rentPaid: "",
      cityType: "metro",
      reportType: "yearly",
      showModal: false,
      reportData: [],
      doughnutChartData: null,
      LineChartData: null,
      isCalculated: false,
      resultsLabels: [],
      faqs: [
        {
          question: "What is an HRA calculator?",
          answer:
            "An HRA calculator estimates the house rent allowance based on your salary and rent details.",
          active: false,
        },
        {
          question: "How is HRA calculated?",
          answer:
            "HRA is calculated based on salary, actual rent paid, and applicable tax exemptions or rules.",
          active: false,
        },
        {
          question: "How accurate is the HRA calculator?",
          answer:
            "The calculator provides estimates; actual HRA may vary based on employer policies and tax laws.",
          active: false,
        },
      ],
    };
  },
  computed: {
    isFormValid() {
      return (
        this.basicSalary && this.hraReceived && this.rentPaid && this.cityType
      );
    },
  },
  methods: {
    calculateHRA() {
      // Validation check for empty fields
      if (!this.isFormValid) {
        alert("Please fill in all fields.");
        return;
      }

      const rentMinus10Percent = this.rentPaid - 0.1 * this.basicSalary;
      const basicSalaryPercentage =
        this.cityType === "metro"
          ? 0.5 * this.basicSalary
          : 0.4 * this.basicSalary;

      const hraExemption = Math.min(
        this.hraReceived,
        rentMinus10Percent,
        basicSalaryPercentage
      );
      const taxableHra = this.hraReceived - hraExemption;

      if (this.cityType === "metro") {
        this.resultsLabels = [
          {
            label: "HRA received",
            value: `₹ ${this.hraReceived.toFixed(2)}`,
          },

          {
            label: "Rent Paid in excess of 10% of salary",
            value: `₹ ${(this.rentPaid - this.basicSalary * 0.1).toFixed(2)}`,
          },
          {
            label: "50% of Basic Salary",
            value: `₹ ${(this.basicSalary * 0.5).toFixed(2)}`,
          },

          { label: "HRA Exemption", value: `₹ ${hraExemption.toFixed(2)}` },
          { label: "Taxable HRA", value: `₹ ${taxableHra.toFixed(2)}` },
        ];
      } else {
        this.resultsLabels = [
          {
            label: "HRA received",
            value: `₹ ${this.hraReceived.toFixed(2)}`,
          },
          {
            label: "Rent Paid in excess of 10% of salary",
            value: `₹ ${(this.rentPaid - this.basicSalary * 0.1).toFixed(2)}`,
          },
          {
            label: "40% of Basic Salary",
            value: `₹ ${(this.basicSalary * 0.4).toFixed(2)}`,
          },
          { label: "HRA Exemption", value: `₹ ${hraExemption.toFixed(2)}` },
          { label: "Taxable HRA", value: `₹ ${taxableHra.toFixed(2)}` },
        ];
      }

      // Prepare data for doughnut chart
      this.doughnutChartData = {
        labels: ["HRA Exemption", "Remaining Rent Paid"],
        datasets: [
          {
            backgroundColor: ["#003366", "#FB923C"],
            data: [hraExemption, this.rentPaid - hraExemption],
          },
        ],
      };

      // Prepare data for Line chart
      this.LineChartData = {
        labels: ["1", "2", "3", "4", "5"], // Adjust as needed
        datasets: [
          {
            label: "HRA Exemption",
            borderColor: "#003366",
            backgroundColor: "rgba(0, 51, 102, 0.2)",
            data: [hraExemption / 4, hraExemption / 2, hraExemption], // Adjust data as needed
          },
          {
            label: "Remaining Rent Paid",
            borderColor: "#FB923C",
            backgroundColor: "rgba(251, 146, 60, 0.2)",
            data: [
              (this.rentPaid - hraExemption) / 4,
              (this.rentPaid - hraExemption) / 2,
              this.rentPaid - hraExemption,
            ], // Adjust data as needed
          },
        ],
      };

      this.isCalculated = true; // Set isCalculated to true after calculation
    },
    reset() {
      // Reset all input fields and data properties to default values
      this.basicSalary = "";
      this.hraReceived = "";
      this.rentPaid = "";
      this.cityType = "metro";
      this.reportType = "yearly";
      this.showModal = false;
      this.reportData = [];
      this.doughnutChartData = null;
      this.LineChartData = null;
      this.isCalculated = false; // Reset isCalculated to false
    },
    back() {
      this.showModal = false;
      this.isCalculated = false; // Reset isCalculated to false
      this.doughnutChartData = null;
      this.LineChartData = null;
    },
  },
};
</script>