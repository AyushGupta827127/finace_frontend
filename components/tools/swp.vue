<template>
  <div class="w-full flex flex-wrap gap-4 p-4">
    <!-- Input Component Start -->
    <div
      class="thin-scrollbar flex-1 min-w-full max-w-[40rem] max-h-[45rem] lg:min-w-0 bg-blue p-8 sm:p-12 lg:ml-12 md:h-[70vh] lg:h-[82vh] shadow-md rounded-xl overflow-auto thin-scrollbar flex flex-col justify-between"
    >
      <div v-if="!isCalculated" class="flex flex-col items-center h-full lg:px-12">
        <div class="flex justify-center">
          <h2 class="text-xl lg:text-3xl mb-10 headerTitle">
            SWP <span class="text-orange-500"> Calculator</span>
          </h2>
        </div>

        <div class="flex-grow w-full">
          <div class="space-y-10 mb-5">
            <div class="input-container">
              <input
                type="number"
                v-model.number="initialAmount"
                placeholder=" "
                class="input block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <label class="label">Initial Amount (₹)</label>
            </div>
            <div class="input-container">
              <input
                type="number"
                v-model.number="withdrawalAmount"
                placeholder=" "
                class="input block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <label class="label">Withdrawal (per month)</label>
            </div>
            <div class="input-container">
              <input
                type="number"
                v-model.number="annualInterestRate"
                placeholder=" "
                class="input block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <label class="label">Expected Rate (%)</label>
            </div>
            <!--  the Deposit term input  start-->
            <div class="mb-4">
              <div class="flex-row lg:flex lg:space-x-4 m-auto">
                <div class="input-container">
                  <input
                    type="number"
                    v-model.number="investmentPeriod"
                    placeholder=" "
                    :min="minPeriod"
                    class="input block w-60 text-black px-8 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <label class="label">Investment Period</label>
                </div>
                <div class="w-full sm:w-1/2">
                  <select
                    v-model="periodType"
                    @change="updateMinPeriod"
                    class="w-full px-3 mt-5 mb-6 border border-gray-400 rounded-md py-2 text-black"
                  >
                    <option value="years">Years</option>
                    <option value="months">Months</option>
                  </select>
                </div>
              </div>
            </div>
            <!--  the Deposit term input end -->
          </div>
        </div>

        <div class="flex w-full gap-4 pb-10">
          <button
            @click="calculateSWP"
            class="w-1/2 mr-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-2 md:px-5 rounded-lg"
          >
            Calculate
          </button>
          <button
            @click="resetForm"
            class="w-1/2 py-3 px-2 md:px-9 outline-btn"
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

        <!-- Include EMIResults component -->
        <ToolResult :labels="resultsLabels"></ToolResult>
        <div>
          <div class="flex justify-between">
            <button
              @click="resetForm"
              class="w-1/2 mr-2 mt-6 h-fit py-3 px-7 mb-6 outline-btn"
            >
              Re-Calculate
            </button>
            <button
              @click="openReportModal"
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
    <ToolReport
      :showModal="showReportModal"
      :tableHeaders="tableHeaders"
      :yearlyReportData="yearlyReportData"
      :monthlyReportData="monthlyReportData"
      @close="showReportModal = false"
    ></ToolReport>
  </div>
</template>

<script>
export default {
  data() {
    return {
      initialAmount: null,
      withdrawalAmount: null,
      annualInterestRate: null,
      investmentPeriod: null,
      showGraph: false,
      showReportModal: false,
      chart: null,
      reportData2: [],
      swpReport: [],
      monthlySwpReport: [],
      reportFrequency: "yearly", // Default to yearly report
      periodType: "years", // Default to years for investment period
      minPeriod: 1, // Minimum period in years
      totalWithdrawn: 0, // New property for total withdrawals
      totalReturns: 0, // New property for total returns
      isCalculated: false,
      resultsLabels: [],
      doughnutChartData: null,
      LineChartData: null,
      faqs: [
        {
          question: "What is an SWP calculator?",
          answer:
            "An SWP calculator estimates the amount you can withdraw systematically from your investment.",
          active: false,
        },
        {
          question: "How is SWP withdrawal amount calculated?",
          answer:
            "Withdrawal amount is based on initial investment, withdrawal frequency, tenure, and expected returns.",
          active: false,
        },
        {
          question: "What information is needed for the calculator?",
          answer:
            "You need initial investment, withdrawal amount, frequency, tenure, and expected return rate for accurate estimates.",
          active: false,
        },
        {
          question: "How accurate is the SWP calculator?",
          answer:
            "The calculator provides estimates; actual results may vary based on market conditions and investment performance.",
          active: false,
        },
      ],
    };
  },
  computed: {
    tableHeaders() {
      return ["Period", "Principal Paid", "Interest Paid", "Remaining Balance"];
    },
    yearlyReportData() {
      const data = this.swpReport;

      return data.map((entry) => [
        entry.period,
        `₹ ${entry.amountWithdrawn.toFixed(2)}`,
        `₹ ${entry.returnsEarned.toFixed(2)}`,
        `₹ ${entry.balance.toFixed(2)}`,
      ]);
    },
    monthlyReportData() {
      const data = this.monthlySwpReport;

      return data.map((entry) => [
        entry.period,
        `₹ ${entry.amountWithdrawn.toFixed(2)}`,
        `₹ ${entry.returnsEarned.toFixed(2)}`,
        `₹ ${entry.balance.toFixed(2)}`,
      ]);
    },
  },
  methods: {
    updateMinPeriod() {
      this.minPeriod = this.periodType === "years" ? 1 : 12;
      this.investmentPeriod = null; // Clear the input field to force re-validation
    },
    calculateSWP() {
      if (this.validateInputs()) {
        const monthlyInterestRate = this.annualInterestRate / 12 / 100;
        const numberOfMonths =
          this.periodType === "years"
            ? this.investmentPeriod * 12
            : this.investmentPeriod;

        let balance = this.initialAmount;
        let totalWithdrawn = 0;
        let annualWithdrawn = 0;
        let annualReturns = 0;
        let totalReturns = 0;

        const yearlyReport = [];
        const monthlyReport = [];
        const report = [];

        for (let month = 1; month <= numberOfMonths; month++) {
          const monthlyReturns = balance * monthlyInterestRate;
          const monthlyWithdrawal = this.withdrawalAmount;

          balance = balance + monthlyReturns - monthlyWithdrawal;
          totalWithdrawn += monthlyWithdrawal; // Accumulate total withdrawals
          annualWithdrawn += monthlyWithdrawal;
          annualReturns += monthlyReturns;
          totalReturns += monthlyReturns;

          report.push({
            period: month,
            amountWithdrawn: monthlyWithdrawal,
            returnsEarned: monthlyReturns,
            balance: balance,
          });

          monthlyReport.push({
            period: month,
            amountWithdrawn: monthlyWithdrawal,
            returnsEarned: monthlyReturns,
            balance: balance,
          });

          if (month % 12 === 0) {
            const year = month / 12;
            yearlyReport.push({
              period: year,
              amountWithdrawn: annualWithdrawn,
              returnsEarned: annualReturns,
              balance: balance,
            });
            annualWithdrawn = 0;
            annualReturns = 0;
          }
        }

        if (numberOfMonths % 12 !== 0) {
          yearlyReport.push({
            period: Math.ceil(numberOfMonths / 12),
            amountWithdrawn: annualWithdrawn,
            returnsEarned: annualReturns,
            balance: balance,
          });
        }
        this.swpReport = yearlyReport;
        this.monthlySwpReport = monthlyReport;
        this.totalWithdrawn = totalWithdrawn; // Update total withdrawn
        this.totalReturns = totalReturns; // Store the total returns

        this.resultsLabels = [
          {
            label: "Total Withdrawals",
            value: `₹ ${this.totalWithdrawn.toFixed(2)}`,
          },
          {
            label: "Total returns",
            value: `₹ ${this.totalReturns.toFixed(2)}`,
          },
          {
            label: "Initial Amount",
            value: `₹ ${this.initialAmount.toFixed(2)}`,
          },
          {
            label: "Final Value",
            value: `₹ ${(
              this.initialAmount -
              this.totalWithdrawn +
              this.totalReturns
            ).toFixed(2)}`,
          },
          {
            label: "Withdrawn Amount",
            value: `₹ ${this.withdrawalAmount.toFixed(2)}`,
          },
        ];

        // Prepare data for doughnut chart
        this.doughnutChartData = {
          labels: ["Total Withdrawn", "Total Return"],
          datasets: [
            {
              backgroundColor: ["#003366", "#FB923C"],
              data: [this.totalWithdrawn, this.totalReturns],
            },
          ],
        };

        // Prepare data for Line chart
        const lineChartLabels = Array.from(
          { length: numberOfMonths },
          (_, i) => i + 1
        );
        const lineChartWithdrawals = report.map(
          (entry) => entry.amountWithdrawn
        );
        const lineChartReturns = report.map((entry) => entry.returnsEarned);

        this.LineChartData = {
          labels: lineChartLabels,
          datasets: [
            {
              label: "Total Withdrawn",
              borderColor: "#003366",
              backgroundColor: "rgba(0, 51, 102, 0.2)",
              data: lineChartWithdrawals,
            },
            {
              label: "Total Return",
              borderColor: "#FB923C",
              backgroundColor: "rgba(251, 146, 60, 0.2)",
              data: lineChartReturns,
            },
          ],
        };

        this.isCalculated = true; // Set isCalculated to true after calculation
      }
    },
    validateInputs() {
      if (!this.initialAmount || this.initialAmount <= 0) {
        alert("Please enter a valid initial amount.");
        return false;
      }
      if (!this.withdrawalAmount || this.withdrawalAmount <= 0) {
        alert("Please enter a valid withdrawal amount.");
        return false;
      }
      if (!this.annualInterestRate || this.annualInterestRate <= 0) {
        alert("Please enter a valid expected rate of return.");
        return false;
      }
      if (!this.investmentPeriod || this.investmentPeriod < this.minPeriod) {
        alert(
          `Please enter at least (${this.minPeriod} ${this.periodType}) period.`
        );
        return false;
      }
      return true;
    },
    openReportModal() {
      this.showReportModal = true;
    },
    closeReportModal() {
      this.showReportModal = false;
    },
    resetForm() {
      this.initialAmount = null;
      this.withdrawalAmount = null;
      this.annualInterestRate = null;
      this.investmentPeriod = null;
      this.showGraph = false;
      this.LineChartData = null;
      this.chart = null;
      this.swpReport = [];
      this.monthlySwpReport = [];
      this.totalWithdrawn = 0; // Reset total withdrawals
      this.totalReturns = 0; // Reset total returns
      this.isCalculated = false; // Reset isCalculated to false
      this.reportData = [];
    },
    back() {
      this.isCalculated = false; // Reset isCalculated to false
      this.showGraph = false;
      this.LineChartData = null;
      this.chart = null;
    },
  },
};
</script>