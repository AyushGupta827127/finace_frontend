<template>
  <div class="w-full flex flex-wrap gap-4 p-4">
    <!-- Input Component Start -->
    <div
      class="thin-scrollbar flex-1 min-w-full max-w-[40rem] max-h-[45rem] lg:min-w-0 bg-blue p-8 sm:p-12 lg:ml-12 md:h-[70vh] lg:h-[82vh] shadow-md rounded-xl overflow-auto thin-scrollbar flex flex-col justify-between"
    >
      <div v-if="!isCalculated" class="flex flex-col items-center h-full lg:px-12">
        <div class="flex justify-center">
         <h2 class="text-xl lg:text-3xl mb-10 headerTitle">
            Zero Coupon <span class="text-orange-500"> Bond Calculator</span>
          </h2>
        </div>

        <div class="flex-grow w-full">
          <div class="space-y-10 mb-5">
            <div class="input-container">
              <input
                id="num-of-bonds"
                type="number"
                required
                placeholder=" "
                v-model.number="numOfBonds"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <label for="num-of-bonds" class="label">Number of Bonds:</label>
            </div>

            <div class="input-container">
              <input
                id="purchase-price"
                type="number"
                placeholder=" "
                v-model.number="purchasePrice"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <label for="purchase-price" class="label">Purchase Price:</label>
            </div>

            <div class="input-container">
              <input
                id="purchase-expense"
                type="number"
                placeholder=" "
                v-model.number="purchaseExpense"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <label for="purchase-expense" class="label"
                >Purchase Expense:</label
              >
            </div>

            <div class="input-container">
              <input
                id="purchase-date"
                type="date"
                placeholder=" "
                v-model="purchaseDate"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <label for="purchase-date" class="label">Purchase Date:</label>
            </div>

            <div class="input-container">
              <input
                id="sold-price"
                type="number"
                placeholder=" "
                v-model.number="soldPrice"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <label for="sold-price" class="label">Sold Price:</label>
            </div>

            <div class="input-container">
              <input
                id="sold-expense"
                type="number"
                placeholder=" "
                v-model.number="soldExpense"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <label for="sold-expense" class="label">Sold Expense:</label>
            </div>

            <div class="input-container">
              <input
                id="sold-date"
                type="date"
                placeholder=" "
                v-model="soldDate"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <label for="sold-date" class="label">Sold Date:</label>
            </div>
          </div>
        </div>

        <div class="flex w-full gap-4 pb-10">
          <button
            @click="calculateCapitalGain"
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
      numOfBonds: "",
      purchasePrice: "",
      purchaseExpense: "",
      purchaseDate: "",
      soldPrice: "",
      soldExpense: "",
      soldDate: "",
      isCalculated: false,
      resultsLabels: [],
      doughnutChartData: null,
      LineChartData: null,
      faqs: [
        {
          question: "What is a Zero-Coupon Bond calculator?",
          answer:
            "A Zero-Coupon Bond calculator estimates the bond's maturity value based on investment amount and interest rate.",
          active: false,
        },
        {
          question: "How is Zero-Coupon Bond value calculated?",
          answer:
            "Value is based on the purchase price, interest rate, and time to maturity.",
          active: false,
        },
        {
          question: "What details are needed for the calculator?",
          answer:
            "You need purchase price, interest rate, and maturity period for accurate estimates.",
          active: false,
        },
        {
          question: "How accurate is the Zero-Coupon Bond calculator?",
          answer:
            "The calculator provides estimates; actual value may vary based on interest rate changes and market conditions.",
          active: false,
        },
      ],
    };
  },
  methods: {
    calculateCapitalGain() {
      // Validation check for empty fields
      if (
        !this.numOfBonds ||
        !this.purchasePrice ||
        !this.purchaseExpense ||
        !this.purchaseDate ||
        !this.soldPrice ||
        !this.soldExpense ||
        !this.soldDate
      ) {
        alert("Please fill in all fields.");
        return;
      }

      const numOfBonds = parseFloat(this.numOfBonds);
      const purchasePrice = parseFloat(this.purchasePrice);
      const purchaseExpense = parseFloat(this.purchaseExpense);
      const soldPrice = parseFloat(this.soldPrice);
      const soldExpense = parseFloat(this.soldExpense);

      const totalPurchaseCost = (purchasePrice + purchaseExpense) * numOfBonds;
      const totalSoldValue = (soldPrice - soldExpense) * numOfBonds;

      const capitalGain = totalSoldValue - totalPurchaseCost;

      this.resultsLabels = [
        { label: "Number of Bonds", value: `${numOfBonds}` },
        { label: "Purchase Price", value: `₹ ${purchasePrice.toFixed(2)}` },
        { label: "Purchase Expense", value: `₹ ${purchaseExpense.toFixed(2)}` },
        { label: "Sold Price", value: `₹ ${soldPrice.toFixed(2)}` },
        { label: "Sold Expense", value: `₹ ${soldExpense.toFixed(2)}` },
        {
          label: "Total Purchase Cost",
          value: `₹ ${totalPurchaseCost.toFixed(2)}`,
        },
        { label: "Total Sold Value", value: `₹ ${totalSoldValue.toFixed(2)}` },
        { label: "Capital Gain", value: `₹ ${capitalGain.toFixed(2)}` },
      ];

      // Prepare data for doughnut chart
      this.doughnutChartData = {
        labels: ["Total Purchase Cost", "Total Sold Value"],
        datasets: [
          {
            label: "Cost and Value",
            data: [totalPurchaseCost, totalSoldValue],
            backgroundColor: ["#003366", "#FB923C"],
          },
        ],
      };

      // Prepare data for line chart
      this.LineChartData = {
        labels: ["Purchase", "Sale"],
        datasets: [
          {
            label: "Value Over Time",
            data: [totalPurchaseCost, totalSoldValue],
            borderColor: "#FB923C",
            fill: false,
          },
        ],
      };

      this.isCalculated = true;
    },
    reset() {
      this.numOfBonds = "";
      this.purchasePrice = "";
      this.purchaseExpense = "";
      this.purchaseDate = "";
      this.soldPrice = "";
      this.soldExpense = "";
      this.soldDate = "";
      this.isCalculated = false;
      this.resultsLabels = [];
      this.doughnutChartData = null;
      this.LineChartData = null;
    },
    back() {
      this.isCalculated = false;
    },
  },
};
</script>