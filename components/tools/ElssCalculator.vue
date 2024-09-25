<template>
  <div class="w-full flex flex-wrap gap-4 p-4  justify-start">
    <!-- Input Component Start -->
    <div
      class=" thin-scrollbar  flex-1 min-w-full max-w-[40rem] max-h-[45rem] lg:min-w-0 bg-blue p-8 sm:p-12 lg:ml-12 md:h-[70vh] lg:h-[82vh] shadow-md rounded-xl overflow-auto thin-scrollbar flex flex-col justify-between"
    >
      <div  v-if="!isCalculated" class="flex flex-col items-center h-full lg:px-12">
        <div class="flex justify-center">
          <h2 class="text-xl lg:text-3xl mb-10 text-center headerTitle">
            ELSS <span class="text-orange-500"> Calculator</span>
          </h2>
        </div>

        <div class="flex-grow w-full">
          <div class="space-y-10 mb-5">
            <div class="input-container">
              <input
                id="monthly-investment"
                type="number"
                placeholder=" "
                v-model.number="investment"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <label for="monthly-investment" class="label"
                >Lump Sum Amount (₹)</label
              >
            </div>
            <div class="input-container">
              <input
                id="annual-interest-rate"
                type="number"
                placeholder=" "
                v-model.number="rate"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <label for="annual-interest-rate" class="label"
                >Expected Returns Rate (%)</label
              >
            </div>
          </div>
          <!--  the Deposit term input  start-->
          <div class="flex flex-wrap gap-4 w-full">
            <div class="input-container flex-1">
              <input
                id="investment-period"
                type="number"
                placeholder=" "
                v-model.number="years"
                :min="minPeriod"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <label for="investment-period" class="label">Deposit Term</label>
            </div>
            <div class="input-container flex-1">
              <select
                v-model="periodType"
                @change="updateMinPeriod"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="months">Months</option>
                <option value="years">Years</option>
              </select>
            </div>
          </div>
          <!--  the Deposit term input end -->
        </div>

        <div class="flex w-full gap-4 mt-10">
          <button
            @click="calculateELSS"
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
      <div
        v-else
        class="text-black "
      >
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
          <div class="flex justify-between">
            <button
              @click="resetFields"
              class="w-1/2 mr-2 mt-6 h-fit py-3 px-7 mb-6 outline-btn"
            >
              Re-Calculate
            </button>
            <button
              @click="showReport"
              class="w-1/2 mt-6 h-fit bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg"
            >
              Generate Report
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
    <!-- Report Start -->

    <ToolReport
      :showModal="showModal"
      :tableHeaders="tableHeaders"
      :yearlyReportData="yearlyReportData"
      :monthlyReportData="monthlyReportData"
      @close="showModal = false"
    />
    <!-- Report End -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      investment: "",
      rate: "",
      years: "",
      periodType: "years",
      minPeriod: 3,
      showModal: false,
      reportData: [],
      reportData2: [],
      reportView: "yearly", // Default view
      doughnutChartData: null,
      LineChartData: null,
      isCalculated: false,
      resultsLabels: [],
      faqs: [
        {
          question: "What is an ELSS calculator?",
          answer:
            "An ELSS calculator estimates potential returns on Equity-Linked Savings Schemes based on your inputs.",
          active: false,
        },
        {
          question: "How is ELSS return calculated?",
          answer:
            "ELSS return is based on investment amount, tenure, and expected growth rate over time.",
          active: false,
        },
        {
          question: "How accurate is the ELSS calculator?",
          answer:
            "The calculator provides estimates; actual returns may vary based on market performance and investment terms.",
          active: false,
        },
      ],
    };
  },
  computed: {
    tableHeaders() {
      return [
        "Month/Year",
        " Amount Deposited",
        "Returns Earned",
        "Maturity Amount",
      ];
    },
    yearlyReportData() {
      return this.reportData.map((entry) => [
        entry.period,
        `₹ ${entry.amountDeposited.toFixed(2)}`,
        `₹ ${entry.returnsEarned.toFixed(2)}`,
        `₹ ${entry.balance.toFixed(2)}`,
      ]);
    },
    monthlyReportData() {
      return this.reportData2.map((entry) => [
        entry.period,
        `₹ ${entry.amountDeposited.toFixed(2)}`,
        `₹ ${entry.returnsEarned.toFixed(2)}`,
        `₹ ${entry.balance.toFixed(2)}`,
      ]);
    },
    isFormValid() {
      return (
        this.investment > 0 && this.rate > 0 && this.years >= this.minPeriod
      );
    },
  },
  methods: {
    updateMinPeriod() {
      this.minPeriod = this.periodType === "years" ? 3 : 36;
      this.years = ""; // Clear the input field to force re-validation
    },
    calculateELSS() {
      const investment = parseFloat(this.investment);
      const rate = parseFloat(this.rate);
      const period = parseFloat(this.years);

      if (
        isNaN(investment) ||
        isNaN(rate) ||
        isNaN(period) ||
        investment <= 0 ||
        rate <= 0 ||
        period <= 0
      ) {
        alert("Please enter valid values!");
        return;
      }

      if (this.periodType === "years" && period < 3) {
        alert("The minimum investment period for years is 3.");
        return;
      }

      if (this.periodType === "months" && period < 36) {
        alert("The minimum investment period for months is 36.");
        return;
      }

      const n = this.periodType === "years" ? 1 : 12; // n is 1 for years, 12 for months
      const r = rate / 100; // Convert rate to decimal
      const t = period; // Years or months

      const maturedAmount = investment * Math.pow(1 + r / n, n * t);

      // Calculate returns
      const returns = maturedAmount - investment;

      this.resultsLabels = [
        { label: "Matured Amount", value: `₹ ${maturedAmount.toFixed(2)}` },
        { label: "Returns", value: `₹ ${returns.toFixed(2)}` },
        { label: "Lump Sum Amount", value: `₹ ${investment.toFixed(2)}` },
        { label: "Rate", value: `${rate.toFixed(2)} %` },
      ];

      // Prepare data for doughnut chart
      this.doughnutChartData = {
        labels: ["Total Amount Invested", "Returns Earned"],
        datasets: [
          {
            backgroundColor: ["#003366", "#FB923C"],
            data: [investment, returns],
          },
        ],
      };

      // Prepare data for Line chart
      this.LineChartData = {
        labels: ["1", "2", "3", "4", "5"], // Adjust as needed
        datasets: [
          {
            label: "Total Amount Invested",
            borderColor: "#003366",
            backgroundColor: "rgba(0, 51, 102, 0.2)",
            data: [investment / 4, investment / 2, investment], // Adjust data as needed
          },
          {
            label: "Returns Earned",
            borderColor: "#FB923C",
            backgroundColor: "rgba(251, 146, 60, 0.2)",
            data: [returns / 4, returns / 2, returns], // Adjust data as needed
          },
        ],
      };

      this.isCalculated = true; // Set isCalculated to true after calculation
    },
    resetFields() {
      this.investment = "";
      this.rate = "";
      this.years = "";
      this.periodType = "years";
      this.minPeriod = 3;
      this.showModal = false;
      this.isCalculated = false; // Reset isCalculated to false
      this.doughnutChartData = null;
      this.LineChartData = null;
    },

    // show report monthly/yearly
    showReport() {
      const investment = parseFloat(this.investment);
      const rate = parseFloat(this.rate);

      const period = parseFloat(this.years);

      const monthlyRate = rate / 100 / 12;
      const months = this.periodType === "years" ? period * 12 : period;
      const maturedAmount =
        investment *
        (((1 + monthlyRate) ** months - 1) / monthlyRate) *
        (1 + monthlyRate);

      this.reportView = "yearly";
      this.reportData = this.generateReportData(investment, rate, months);
      this.reportView = "monthly";
      this.reportData2 = this.generateReportData(investment, rate, months);
      this.showModal = true;
    },

    // report data return
    generateReportData(investment, rate, months) {
      const monthlyRate = rate / 100 / 12;
      let balance = investment;
      const reportData = [];
      const reportData2 = [];
      const n = this.periodType === "years" ? 1 : 12; // n is 1 for years, 12 for months
      const r = rate / 100; // Convert rate to decimal

      // for yearly report
      if (this.reportView === "yearly") {
        for (let i = 1; i <= months; i++) {
          balance += balance * monthlyRate;
          if (i % 12 === 0) {
            const yearsElapsed = i / 12;
            const yearEndBalance =
              investment * Math.pow(1 + r / n, n * yearsElapsed);
            const returnsEarned = yearEndBalance - investment; // Total returns earned over the period
            const amountDeposited = i === 12 ? investment : 0;

            reportData.push({
              period: `Year ${yearsElapsed}`,
              amountDeposited: amountDeposited,
              returnsEarned: returnsEarned,
              balance: yearEndBalance,
            });
          }
        }
        return reportData;
      }
      // for monthly report
      else if (this.reportView === "monthly") {
        let yearEndBalance = investment;
        let returnsEarned =
          investment * Math.pow(1 + r / n, n * 1) - investment; // Total returns earned over the period
        let amountDeposited = yearEndBalance;
        // for monthly report
        for (let i = 1; i <= months; i++) {
          if (i > 1) {
            amountDeposited = 0;
          }
          balance += balance * monthlyRate;
          let yearsElapsed = i / 12;

          if (i % 12 === 0) {
            yearEndBalance = investment * Math.pow(1 + r / n, n * yearsElapsed);
          }
          if (i % 13 === 0) {
            yearsElapsed = (i - 1) / 12;
            returnsEarned =
              investment * Math.pow(1 + r / n, n * (yearsElapsed + 1)) -
              investment; // Total returns earned over the period
          }
          reportData.push({
            period: `Month ${i}`,
            amountDeposited: amountDeposited,
            returnsEarned: returnsEarned / 12,
            balance: yearEndBalance,
          });
        }
        return reportData;
      }
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