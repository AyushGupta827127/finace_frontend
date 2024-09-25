<template>
  <div class="w-full flex flex-wrap gap-4 p-4">
    <!-- Input Component Start -->
    <div
      class="thin-scrollbar flex-1 min-w-full max-w-[40rem] max-h-[45rem] lg:min-w-0 bg-blue p-8 sm:p-12 lg:ml-12 md:h-[70vh] lg:h-[82vh] shadow-md rounded-xl overflow-auto thin-scrollbar flex flex-col justify-between"
    >
      <div v-if="!isCalculated" class="flex flex-col items-center h-full lg:px-12">
        <div class="flex justify-center">
          <h2 class="text-lg sm:text-xl lg:text-3xl mb-6 sm:mb-10 headerTitle">
            SIP <span class="text-orange-500"> Calculator</span>
          </h2>
        </div>

        <!-- Mode Selection -->
        <div class="w-full flex mb-8">
          <label class="mr-6 sm:mr-12">
            <input type="radio" value="basic" v-model="mode" />
            Basic
          </label>
          <label>
            <input type="radio" value="advanced" v-model="mode" />
            Advance
          </label>
        </div>

        <div v-if="mode === 'basic'" class="w-full">
          <div class="flex-grow w-full">
            <div class="space-y-10 mb-5">
              <div class="input-container">
                <input
                  id="monthly-investment"
                  type="number"
                  v-model.number="monthlyInvestment"
                  required
                  placeholder=" "
                  class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <label for="loan-amount" class="label"
                  >Monthly Investment (₹)</label
                >
              </div>

              <div class="input-container">
                <input
                  id="annual-interest-rate"
                  type="number"
                  v-model.number="annualInterestRate"
                  required
                  placeholder=" "
                  class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <label for="loan-amount" class="label"
                  >Annual Interest Rate (%)</label
                >
              </div>

              <div
                class="flex flex-col sm:flex-row sm:items-center sm:space-x-6"
              >
                <div class="input-container w-full sm:w-1/2">
                  <input
                    id="investment-period-adv"
                    type="number"
                    v-model.number="investmentPeriod"
                    required
                    placeholder=" "
                    class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <label for="loan-amount" class="label"
                    >Investment Period</label
                  >
                </div>
                <div class="w-full sm:w-1/2 mt-4 sm:mt-0">
                  <select
                    id="period-type"
                    v-model="periodType"
                    class="input block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="years">Years</option>
                    <option value="months">Months</option>
                  </select>
                </div>
              </div>
              <!-- Action Buttons -->
              <div class="flex w-full gap-4 pb-10">
                <button
                  @click="calculateSIP"
                  class="w-1/2 mr-2 mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-2 md:px-5 rounded-lg"
                >
                  Calculate
                </button>
                <button
                  @click="resetCalculator"
                  class="w-1/2 mt-6 py-3 px-2 md:px-9 outline-btn"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
        <div v-if="mode === 'advanced'" class="w-full">
          <div class="flex-grow w-full">
            <div class="space-y-10 mb-5">
              <div class="input-container">
                <input
                  id="lump-sum-amount"
                  type="number"
                  v-model.number="lumpSumAmount"
                  required
                  placeholder=" "
                  class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <label for="loan-amount" class="label"
                  >Lump Sum Amount (₹)</label
                >
              </div>

              <div class="input-container">
                <input
                  id="monthly-investment-adv"
                  type="number"
                  v-model.number="monthlyInvestment"
                  required
                  placeholder=" "
                  class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <label for="loan-amount" class="label"
                  >Monthly Investment (₹)</label
                >
              </div>

              <div class="input-container">
                <input
                  id="annual-increase-decrease"
                  type="number"
                  v-model.number="annualIncreaseDecrease"
                  required
                  placeholder=" "
                  class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <label for="loan-amount" class="label"
                  >Annual Increase/Decrease (₹)</label
                >
              </div>

              <div class="input-container">
                <input
                  id="annual-interest-rate-adv"
                  type="number"
                  v-model.number="annualInterestRate"
                  required
                  placeholder=" "
                  class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <label for="loan-amount" class="label"
                  >Expected Returns Rate (%)</label
                >
              </div>

              <div
                class="flex flex-col sm:flex-row sm:items-center sm:space-x-6"
              >
                <div class="input-container w-full sm:w-1/2">
                  <input
                    id="investment-period-adv"
                    type="number"
                    v-model.number="investmentPeriod"
                    required
                    placeholder=" "
                    class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <label for="loan-amount" class="label"
                    >Investment Period</label
                  >
                </div>
                <div class="w-full sm:w-1/2 mt-4 sm:mt-0">
                  <select
                    id="period-type"
                    v-model="periodType"
                    class="input block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="years">Years</option>
                    <option value="months">Months</option>
                  </select>
                </div>
              </div>
              <!-- Action Buttons -->
              <div class="flex w-full gap-4 pb-10">
                <button
                  @click="calculateSIP"
                  class="w-1/2 mr-2 mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-2 md:px-5 rounded-lg"
                >
                  Calculate
                </button>
                <button
                  @click="resetCalculator"
                  class="w-1/2 mt-6 py-3 px-2 md:px-9 outline-btn"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Result -->
      <div v-else class="text-black">
        <div class="flex items-center">
          <button
            @click="back"
            class="bg-transparent border-[1.5px] border-gray-100 shadow-sm rounded-full p-2 flex items-center justify-center"
            style="width: 48px; height: 48px"
          >
            <span class="material-icons text-gray-600">arrow_back</span>
          </button>
          <h1
            class="text-xl sm:text-3xl mx-auto font-bold text-center mb-4 sm:mb-8"
          >
            Result
          </h1>
        </div>
        <!-- Include EMIResults component -->
        <ToolResult :labels="resultsLabels"></ToolResult>
        <div>
          <div class="flex flex-col sm:flex-row justify-between">
            <button
              @click="resetCalculator"
              class="w-full sm:w-1/2 mr-0 sm:mr-2 mt-6 h-fit py-3 px-7 mb-4 sm:mb-6 outline-btn"
            >
              Re-Calculate
            </button>
            <button
              @click="yearlyReport"
              class="w-full sm:w-1/2 mt-6 h-fit bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg"
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
      monthlyInvestment: null,
      lumpSumAmount: null,
      annualIncreaseDecrease: null,
      annualInterestRate: null,
      investmentPeriod: null,
      periodType: "years", // Default period type
      totalValue: null,
      mode: "basic", // Default mode is basic
      chart: null, // Reference to Chart.js instance
      showReportModal: false,
      reportData: [],
      reportData2: [],
      reportType: "yearly", // Default report type
      doughnutChartData: null,
      LineChartData: null,
      resultsLabels: [],
      isCalculated: false,
      faqs: [
        {
          question: "What is a SIP calculator?",
          answer:
            "A SIP calculator estimates the future value of investments made through a Systematic Investment Plan.",
          active: false,
        },
        {
          question: "How is SIP return calculated?",
          answer:
            "Returns are based on the investment amount, frequency, tenure, and expected rate of return.",
          active: false,
        },
        {
          question: "What details are needed for the calculator?",
          answer:
            "You need investment amount, frequency, tenure, and expected annual return rate for accurate estimates.",
          active: false,
        },
        {
          question: "How accurate is the SIP calculator?",
          answer:
            "The calculator provides estimates; actual returns may vary based on market performance and investment choices.",
          active: false,
        },
      ],
    };
  },
  watch: {
    mode() {
      this.resetCalculator();
    },
  },
  computed: {
    tableHeaders() {
      return ["Period", "Principal Paid", "Interest Paid", "Remaining Balance"];
    },
    yearlyReportData() {
      return this.reportData.map((entry) => [
        entry.period,
        `₹ ${entry.amountDeposited.toFixed(2)}`,
        `₹ ${entry.returnsEarned.toFixed(2)}`,
        `₹ ${entry.endBalance.toFixed(2)}`,
      ]);
    },
    monthlyReportData() {
      return this.reportData2.map((entry) => [
        entry.period,
        `₹ ${entry.amountDeposited.toFixed(2)}`,
        `₹ ${entry.returnsEarned.toFixed(2)}`,
        `₹ ${entry.endBalance.toFixed(2)}`,
      ]);
    },
    formattedTotalValue() {
      return this.totalValue
        ? this.totalValue.toLocaleString("en-IN", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })
        : "0.00";
    },
  },
  methods: {
    calculateSIP() {
      if (this.mode === "basic") {
        this.calculateBasicSIP();
      } else if (this.mode === "advanced") {
        this.calculateAdvancedSIP();
      }
      this.generateDoughnutChart();
    },

    calculateBasicSIP() {
      if (
        this.monthlyInvestment &&
        this.annualInterestRate &&
        this.investmentPeriod
      ) {
        const monthlyRate = this.annualInterestRate / 12 / 100;
        const numberOfMonths =
          this.periodType === "years"
            ? this.investmentPeriod * 12
            : this.investmentPeriod;

        this.totalValue =
          this.monthlyInvestment *
          (((1 + monthlyRate) ** numberOfMonths - 1) / monthlyRate) *
          (1 + monthlyRate);
        this.isCalculated = true;
        this.resultsLabels = [
          { label: "Total Value", value: `₹ ${this.totalValue.toFixed(2)}` },

          {
            label: "Monthly Investment",
            value: `₹ ${this.monthlyInvestment.toFixed(2)}`,
          },
          {
            label: "Annual Interest Rate",
            value: `${this.annualInterestRate.toFixed(2)}%`,
          },
          {
            label: "Investment Period",
            value: `${this.investmentPeriod} ${this.periodType}`,
          },
        ];
      } else {
        alert("Please fill in all fields");
        return;
      }
    },

    calculateAdvancedSIP() {
      if (
        this.lumpSumAmount !== undefined &&
        this.monthlyInvestment !== undefined &&
        this.annualInterestRate !== undefined &&
        this.investmentPeriod !== undefined
      ) {
        // Convert annual interest rate to monthly
        const monthlyRate = this.annualInterestRate / 12 / 100;
        const numberOfMonths =
          this.periodType === "years"
            ? this.investmentPeriod * 12
            : this.investmentPeriod;

        // Future Value of Lump Sum
        const FV_lump_sum =
          this.lumpSumAmount * (1 + monthlyRate) ** numberOfMonths;

        // Future Value of Monthly Deposits (Annuity)
        const FV_annuity =
          this.monthlyInvestment *
          (((1 + monthlyRate) ** numberOfMonths - 1) / monthlyRate) *
          (1 + monthlyRate); // Adjust for immediate end-of-month contribution

        // Total Future Value
        this.totalValue = FV_lump_sum + FV_annuity;

        this.isCalculated = true;
        this.resultsLabels = [
          { label: "Total Value", value: `₹ ${this.totalValue.toFixed(2)}` },
          {
            label: "Lump Sum Amount",
            value: `₹ ${this.lumpSumAmount.toFixed(2)}`,
          },
          {
            label: "Monthly Investment",
            value: `₹ ${this.monthlyInvestment.toFixed(2)}`,
          },
          {
            label: "Annual Increase/Decrease",
            value: `₹ ${this.annualIncreaseDecrease.toFixed(2)}`,
          },
          {
            label: "Annual Interest Rate",
            value: `${this.annualInterestRate.toFixed(2)} %`,
          },
          {
            label: "Investment Period",
            value: `${this.investmentPeriod} ${this.periodType}`,
          },
        ];
      } else {
        alert("Please fill in all fields");
        return;
      }
    },

    generateDoughnutChart() {
      if (!this.isCalculated) return;

      const investment =
        this.monthlyInvestment *
        (this.periodType === "years"
          ? this.investmentPeriod * 12
          : this.investmentPeriod);
      const interest = this.totalValue - investment;

      // Prepare data for doughnut chart
      this.doughnutChartData = {
        labels: ["Investment", "Interest"],
        datasets: [
          {
            backgroundColor: ["#003366", "#FB923C"],
            data: [investment, interest],
          },
        ],
      };

      // Prepare data for Line chart
      this.LineChartData = {
        labels: ["1", "2", "3", "4", "5"], // Adjust as needed
        datasets: [
          {
            label: "Investment",
            borderColor: "#003366",
            backgroundColor: "rgba(0, 51, 102, 0.2)",
            data: [investment / 4, investment / 2, investment], // Adjust data as needed
          },
          {
            label: "Interest",
            borderColor: "#FB923C",
            backgroundColor: "rgba(251, 146, 60, 0.2)",
            data: [interest / 4, interest / 2, interest], // Adjust data as needed
          },
        ],
      };
    },

    resetCalculator() {
      this.monthlyInvestment = null;
      this.lumpSumAmount = null;
      this.annualIncreaseDecrease = null;
      this.annualInterestRate = null;
      this.investmentPeriod = null;
      this.periodType = "years"; // Reset to default
      this.totalValue = null;
      this.isCalculated = false;
      this.LineChartData = null;
    },

    generateReport() {
      const report = [];
      const monthlyRate = this.annualInterestRate / 12 / 100;
      const numberOfPeriods =
        this.periodType === "years"
          ? this.investmentPeriod * 12
          : this.investmentPeriod;
      let balance = this.lumpSumAmount || 0;
      let monthlyInvestment = this.monthlyInvestment;

      if (this.mode === "advanced") {
        if (this.reportType === "yearly") {
          for (let month = 1; month <= numberOfPeriods; month++) {
            balance += monthlyInvestment;
            balance *= 1 + monthlyRate;

            if (month % 12 === 0) {
              const amountDeposited = this.monthlyInvestment * 12;
              const totalDeposited =
                this.lumpSumAmount + amountDeposited * (month / 12);
              const returnsEarned = balance - totalDeposited;

              report.push({
                period: `Year ${month / 12}`,
                amountDeposited: totalDeposited,
                returnsEarned: returnsEarned,
                endBalance: balance,
              });

              monthlyInvestment *= 1 + this.annualIncreaseDecrease / 100 / 12;
            }
          }
        } else if (this.reportType === "monthly") {
          for (let month = 1; month <= numberOfPeriods; month++) {
            balance += monthlyInvestment;
            balance *= 1 + monthlyRate;

            const totalDeposited =
              this.lumpSumAmount + this.monthlyInvestment * month;
            const returnsEarned = balance - totalDeposited;

            report.push({
              period: `Month ${month}`,
              amountDeposited: totalDeposited,
              returnsEarned: returnsEarned,
              endBalance: balance,
            });

            monthlyInvestment *= 1 + this.annualIncreaseDecrease / 100 / 12;
          }
        }
      } else if (this.mode === "basic") {
        if (this.reportType === "yearly") {
          let g = 0;
          for (let month = 1; month <= numberOfPeriods; month++) {
            if (month % 12 == 0) {
              let amountDeposited = monthlyInvestment * 12;
              let returnsEarned = 0;
              // balance += monthlyInvestment + returnsEarned;
              balance =
                this.monthlyInvestment *
                (((1 + monthlyRate) ** month - 1) / monthlyRate) *
                (1 + monthlyRate);
              returnsEarned = balance - amountDeposited - amountDeposited * g;
              g++;
              report.push({
                period: `Year ${month / 12}`,
                amountDeposited: amountDeposited,
                returnsEarned: returnsEarned,
                endBalance: balance,
              });
              monthlyInvestment *= 1 + this.annualIncreaseDecrease / 100 / 12; // Adjust for monthly increase/decrease
            }
          }
        } else if (this.reportType === "monthly") {
          let g = 0;
          for (let month = 1; month <= numberOfPeriods; month++) {
            let amountDeposited = monthlyInvestment;
            let returnsEarned = 0;
            // balance += monthlyInvestment + returnsEarned;
            balance =
              this.monthlyInvestment *
              (((1 + monthlyRate) ** month - 1) / monthlyRate) *
              (1 + monthlyRate);
            returnsEarned = balance - monthlyInvestment - amountDeposited * g;
            g++;
            report.push({
              period: `Month ${month}`,
              amountDeposited: amountDeposited,
              returnsEarned: returnsEarned,
              endBalance: balance,
            });
            monthlyInvestment *= 1 + this.annualIncreaseDecrease / 100 / 12; // Adjust for monthly increase/decrease
          }
        }
      }

      return report;
    },

    yearlyReport() {
      this.showReportModal = true; // Show modal after generating report
      this.reportType = "yearly";
      this.reportData = this.generateReport();
      this.reportType = "monthly";
      this.reportData2 = this.generateReport();
    },

    back() {
      this.isCalculated = false;
      this.LineChartData = null;
    },
  },
};
</script>