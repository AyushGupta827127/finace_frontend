<template>
  <div class="w-full flex flex-wrap gap-4 p-4">
    <!-- Input Component Start -->
    <div
      class="thin-scrollbar flex-1 min-w-full max-w-[40rem] max-h-[45rem] lg:min-w-0 bg-blue p-8 sm:p-12 lg:ml-12 md:h-[70vh] lg:h-[82vh] shadow-md rounded-xl overflow-auto thin-scrollbar flex flex-col justify-between"
    >
      <div v-if="!isCalculated" class="flex flex-col items-center h-full lg:px-12">
        <div class="flex justify-center">
         <h2 class="text-xl lg:text-3xl mb-10 headerTitle">
            Real Estate <span class="text-orange-500"> Calculator</span>
          </h2>
        </div>

        <div class="flex-grow w-full">
          <div class="space-y-10 mb-5">
                       <div class="input-container">
                <input
                  id="purchase-price"
                  type="number"
                  required
                  placeholder=" "
                  v-model.number="purchasePrice"
                  class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <label for="purchase-price" class="label"
                  >Purchase Price:</label
                >
              </div>

              <div class="input-container">
                <input
                  id="selling-price"
                  type="number"
                  required
                  placeholder=" "
                  v-model.number="sellingPrice"
                  class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <label for="selling-price" class="label">Selling Price:</label>
              </div>

              <div class="input-container">
                <input
                  id="costs-of-purchase"
                  type="number"
                  required
                  placeholder=" "
                  v-model.number="costsOfPurchase"
                  class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <label for="costs-of-purchase" class="label"
                  >Purchase Expense :</label
                >
              </div>

              <div class="input-container">
                <input
                  id="costs-of-sale"
                  type="number"
                  required
                  placeholder=" "
                  v-model.number="costsOfSale"
                  class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <label for="costs-of-sale" class="label">Sale Expense:</label>
              </div>

              <div class="input-container">
                <input
                  id="improvements"
                  type="number"
                  required
                  placeholder=" "
                  v-model.number="improvements"
                  class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <label for="improvements" class="label">Improvements:</label>
              </div>
          </div>
        </div>

        <div class="flex w-full gap-4 pb-10">
          <button
            @click="calculateCapitalGain"
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

        <!-- Include Capital Gain Results component -->
        <ToolResult :labels="resultsLabels"></ToolResult>
        <button
          @click="reset"
          class="w-full mt-6 h-fit py-2 px-4 mb-6 outline-btn"
        >
          Re-Calculate
        </button>
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
      purchasePrice: "",
      sellingPrice: "",
      costsOfPurchase: "",
      costsOfSale: "",
      improvements: "",
      isCalculated: false,
      resultsLabels: [],
      doughnutChartData: null,
      LineChartData: null,
      faqs: [
        {
          question: "What is a Real Estate calculator?",
          answer:
            "A Real Estate calculator estimates property costs, including mortgage payments and return on investment.",
          active: false,
        },
        {
          question: "How are property costs calculated?",
          answer:
            "Costs are calculated based on property price, down payment, loan term, and interest rate.",
          active: false,
        },
        {
          question: "What information do I need for the calculator?",
          answer:
            "You need property price, down payment, loan term, and interest rate for accurate estimates.",
          active: false,
        },
        {
          question: "How accurate is the Real Estate calculator?",
          answer:
            "The calculator provides estimates; actual costs may vary based on loan terms and market conditions.",
          active: false,
        },
      ],
    };
  },
  computed: {
    isFormValid() {
      return (
        this.purchasePrice &&
        this.sellingPrice &&
        this.costsOfPurchase >= "0"&&
        this.costsOfSale >= "0"&&
        this.improvements >= "0"
      );
    },
  },
  methods: {
    calculateCapitalGain() {
      // Validation check for empty fields
      if (!this.isFormValid) {
        alert("Please fill in all fields.");
        return;
      }

      const purchasePrice = parseFloat(this.purchasePrice);
      const sellingPrice = parseFloat(this.sellingPrice);
      const costsOfPurchase = parseFloat(this.costsOfPurchase);
      const costsOfSale = parseFloat(this.costsOfSale);
      const improvements = parseFloat(this.improvements);

      const capitalGain =
        sellingPrice -
        costsOfSale -
        (purchasePrice + costsOfPurchase + improvements);

      this.resultsLabels = [
        { label: "Purchase Price", value: `₹ ${purchasePrice.toFixed(2)}` },
        { label: "Selling Price", value: `₹ ${sellingPrice.toFixed(2)}` },
        { label: "Purchase Expense", value: `₹ ${costsOfPurchase.toFixed(2)}` },
        { label: "Sale Expense", value: `₹ ${costsOfSale.toFixed(2)}` },
        { label: "Improvements", value: `₹ ${improvements.toFixed(2)}` },
        { label: "Capital Gain", value: `₹ ${capitalGain.toFixed(2)}` },
      ];

      // Prepare data for doughnut chart
      this.doughnutChartData = {
        labels: [
          "Purchase Price",
          "Selling Price",
          "Purchase Expense",
          "Sale Expense",
          "Improvements",
        ],
        datasets: [
          {
            backgroundColor: [
              "#003366",
              "#FB923C",
              "#00A86B",
              "#FF6347",
              "#4682B4",
            ],
            data: [
              purchasePrice,
              sellingPrice,
              costsOfPurchase,
              costsOfSale,
              improvements,
            ],
          },
        ],
      };

      // Prepare data for Line chart
      this.LineChartData = {
        labels: ["1", "2", "3", "4", "5"], // Adjust as needed
        datasets: [
          {
            label: "Purchase Price",
            borderColor: "#003366",
            backgroundColor: "rgba(0, 51, 102, 0.2)",
            data: [purchasePrice / 4, purchasePrice / 2, purchasePrice], // Adjust data as needed
          },
          {
            label: "Selling Price",
            borderColor: "#FB923C",
            backgroundColor: "rgba(251, 146, 60, 0.2)",
            data: [sellingPrice / 4, sellingPrice / 2, sellingPrice], // Adjust data as needed
          },
          {
            label: "Purchase Expense",
            borderColor: "#004477",
            backgroundColor: "rgba(0, 51, 102, 0.2)",
            data: [costsOfPurchase / 4, costsOfPurchase / 2, costsOfPurchase], // Adjust data as needed
          },
          {
            label: "Sale Expense",
            borderColor: "#FA023F",
            backgroundColor: "rgba(251, 146, 60, 0.2)",
            data: [costsOfSale / 4, costsOfSale / 2, costsOfSale], // Adjust data as needed
          },
          {
            label: "Improvements",
            borderColor: "#FB029C",
            backgroundColor: "rgba(251, 146, 60, 0.2)",
            data: [improvements / 4, improvements / 2, improvements], // Adjust data as needed
          },
        ],
      };

      this.isCalculated = true; // Set isCalculated to true after calculation
    },
    reset() {
      // Reset all input fields and data properties to default values
      this.purchasePrice = "";
      this.sellingPrice = "";
      this.costsOfPurchase = "";
      this.costsOfSale = "";
      this.improvements = "";
      this.isCalculated = false; // Reset isCalculated to false
      this.resultsLabels = [];
      this.doughnutChartData = null;
      this.LineChartData = null;
    },
    back() {
      this.isCalculated = false; // Reset isCalculated to false
      this.doughnutChartData = null;
      this.LineChartData = null;
    },
  },
};
</script>