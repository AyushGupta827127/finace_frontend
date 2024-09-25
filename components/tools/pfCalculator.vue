<template>
  <div class="w-full flex flex-wrap gap-4 p-4">
    <!-- Input Component Start -->
    <div
      class="thin-scrollbar flex-1 min-w-full max-w-[40rem] max-h-[45rem] lg:min-w-0 bg-blue p-8 sm:p-12 lg:ml-12 md:h-[70vh] lg:h-[82vh] shadow-md rounded-xl overflow-auto thin-scrollbar flex flex-col justify-between"
    >
      <div v-if="!showResults" class="flex flex-col items-center h-full lg:px-12">
        <div class="flex justify-center">
          <h2 class="text-xl lg:text-3xl mb-10 headerTitle">
            PPF <span class="text-orange-500"> Calculator</span>
          </h2>
        </div>
        <div class="flex">
          <label class="mr-4 mb-3">
            <input type="radio" value="new" v-model="accountType" />
            New Account
          </label>
          <label class="mb-8">
            <input type="radio" value="existing" v-model="accountType" />
            Existing Account
          </label>
        </div>
        <div v-if="accountType === 'new'" class="w-full">
          <div class="flex-grow w-full">
            <div class="space-y-10 mb-5">
              <div class="flex-row lg:flex lg:space-x-5 align-middle">
                <div class="w-full">
                  <div class="input-container">
                    <input
                      id="deposit-amount"
                      type="number"
                      v-model.number="depositAmount"
                      placeholder=" "
                      class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <label for="deposit-amount" class="label"
                      >Deposit Amount:</label
                    >
                  </div>
                </div>
                <div class="align-middle mt-5">
                  <div
                    class="flex items-center border rounded-lg border-blue-500 px-6 py-2"
                  >
                    <select
                      v-model="depositFrequency"
                      class="bg-transparent text-black focus:outline-none"
                    >
                      <option value="monthly">Monthly</option>
                      <option value="bi-monthly">Bi-Monthly</option>
                      <option value="quarterly">Quarterly</option>
                      <option value="half-yearly">Half-Yearly</option>
                      <option value="thrice-yearly">Thrice Yearly</option>
                      <option value="yearly">Yearly</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="input-container">
                <input
                  id="term-completed"
                  type="number"
                  v-model.number="termCompleted"
                  placeholder=" "
                  class="input block w-full text-black px-3 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <label for="term-completed" class="label"
                  >Maturity Period (years):</label
                >
                <p v-if="termCompleted < 15" class="text-red-500 text-sm">
                  Minimum 15 years required.
                </p>
              </div>
              <div class="input-container">
                <input
                  id="annual-interest-rate"
                  type="number"
                  v-model.number="annualInterestRate"
                  placeholder=" "
                  min="1"
                  max="100"
                  step="0.1"
                  class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <label for="annual-interest-rate" class="label"
                  >Annual Interest Rate:</label
                >
              </div>
            </div>
          </div>
        </div>
        <div v-if="accountType === 'existing'" class="w-full">
          <div class="flex-grow w-full">
            <div class="space-y-10 mb-5">
              <div class="input-container">
                <input
                  id="existing-balance"
                  type="number"
                  v-model.number="existingBalance"
                  placeholder=" "
                  class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-[-15px]"
                />
                <label for="existing-balance" class="label"
                  >PF Account Balance:</label
                >
              </div>
              <div
                class="flex-row sm:flex sm:space-x-5 align-middle mt-12 sm:mt-4 mb-8 sm:mb-2"
              >
                <div class="w-full">
                  <div class="input-container">
                    <input
                      id="deposit-amount"
                      type="number"
                      v-model.number="depositAmount"
                      placeholder=" "
                      class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <label for="deposit-amount" class="label"
                      >Deposit Amount:</label
                    >
                  </div>
                </div>
                <div class="align-middle mt-5">
                  <div
                    class="flex items-center border rounded-lg border-blue-500 px-6 py-2"
                  >
                    <select
                      v-model="depositFrequency"
                      class="bg-transparent text-black focus:outline-none"
                    >
                      <option value="monthly">Monthly</option>
                      <option value="bi-monthly">Bi-Monthly</option>
                      <option value="quarterly">Quarterly</option>
                      <option value="half-yearly">Half-Yearly</option>
                      <option value="thrice-yearly">Thrice Yearly</option>
                      <option value="yearly">Yearly</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="input-container">
                <select
                  id="term-completed"
                  v-model.number="termCompleted"
                  class="bg-transparent text-black input block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option :value="i" v-for="i in 14" :key="i">
                    {{ i }} <span> Financial Year </span>
                  </option>
                </select>
                <label for="term-completed" class="label"
                  >Term Completed (years):</label
                >
              </div>
              <div class="input-container">
                <input
                  id="annual-interest-rate"
                  type="number"
                  v-model.number="annualInterestRate"
                  placeholder=" "
                  min="1"
                  max="100"
                  step="0.1"
                  class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <label for="annual-interest-rate" class="label"
                  >Annual Interest Rate:</label
                >
              </div>
            </div>
          </div>
        </div>

        <div class="flex w-full gap-4 pb-10">
          <button
            @click="calculate"
            class="w-1/2 mr-2 bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-2 md:px-5 rounded-lg mb-2 focus:outline-none focus:shadow-outline"
          >
            Calculate
          </button>
          <button
            @click="resetForm"
            class="w-1/2 py-3 px-2 md:px-9 mb-2 outline-btn"
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
              @click="yearlyReport"
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
    <!-- Include ReportModal.vue component -->
    <ToolReport
      :showModal="showModal"
      :tableHeaders="tableHeaders"
      :yearlyReportData="yearlyReportData"
      :monthlyReportData="monthlyReportData"
      @close="showModal = false"
    ></ToolReport>
  </div>
</template>

<script>
export default {
  data() {
    return {
      basicSalary: "",
      pfContribution: 12, // Assuming default PF contribution rate
      yearsOfService: "",
      tenureType: "yearly",
      accountType: "new",
      existingBalance: 0,
      annualInterestRate: "7.1", // Default annual interest rate in percent
      termCompleted: "15",
      depositFrequency: "yearly",
      depositAmount: "",
      showResults: false,
      showModal: false,
      doughnutChartData: null,
      LineChartData: null,
      reportData: [],
      reportData2: [],
      firstColumnName: "  Amount Deposited ",
      secondColumnName: "  Interest Received ",
      thirdColumnName: "  Total Interest Received  ",
      reportType: "yearly",
      resultsLabels: [],
      faqs: [
        {
          question: "What is a PPF calculator?",
          answer:
            "A PPF calculator estimates the maturity amount of your Public Provident Fund investment based on contributions and interest rate.",
          active: false,
        },
        {
          question: "How is PPF return calculated?",
          answer:
            "Returns are based on the amount invested annually, tenure, and the prevailing interest rate.",
          active: false,
        },
        {
          question: "What information do I need for the calculator?",
          answer:
            "You need annual contributions, tenure, and the current interest rate for accurate estimates.",
          active: false,
        },
        {
          question: "How accurate is the PPF calculator?",
          answer:
            "The calculator provides estimates; actual returns may vary based on interest rate changes and policy updates.",
          active: false,
        },
      ],
    };
  },
  computed: {
    tableHeaders() {
      return [
        "Period",
        "Amount Deposited",
        "Interest Paid",
        "Year End Balance",
      ];
    },
    yearlyReportData() {
      return this.reportData.map((entry) => [
        entry.period,
        `₹ ${entry.principalPaid.toFixed(2)}`,
        `₹ ${entry.interestPaid.toFixed(2)}`,
        `₹ ${entry.remainingBalance.toFixed(2)}`,
      ]);
    },
    monthlyReportData() {
      return this.reportData2.map((entry) => [
        entry.period,
        `₹ ${entry.principalPaid.toFixed(2)}`,
        `₹ ${entry.interestPaid.toFixed(2)}`,
        `₹ ${entry.remainingBalance.toFixed(2)}`,
      ]);
    },
  },
  watch: {
    accountType(newValue) {
      if (newValue === "new") {
        this.termCompleted = 15; // Set termCompleted to 15 for new accounts
      } else {
        this.termCompleted = 1; // Reset termCompleted for existing accounts
      }
    },
  },
  methods: {
    calculate() {
      this.showResults = true;
      let totalDeposits = this.calculateTotalDeposits();
      let totalInterest = this.calculateTotalInterest();
      let maturityAmount = this.calculateMaturityAmount();

      this.resultsLabels = [
        {
          label: "Maturity Amount",
          value: `₹ ${this.calculateMaturityAmount().toFixed(2)}`,
        },
        {
          label: "Total Deposit",
          value: `₹ ${this.calculateTotalDeposits().toFixed(2)}`,
        },
        {
          label: "Total Interest",
          value: `₹ ${this.calculateTotalInterest().toFixed(2)}`,
        },
        {
          label: "Interest Rate",
          value: `${this.annualInterestRate} %`,
        },
      ];

      this.doughnutChartData = {
        datasets: [
          {
            data: [totalDeposits, totalInterest],
            backgroundColor: ["#003366", "#FB923C"],
          },
        ],
        labels: ["Total Deposits", "Total Interest"],
      };
      // Prepare data for Line chart
      this.LineChartData = {
        labels: ["1", "2", "3", "4", "5"], // Adjust as needed
        datasets: [
          {
            label: "Total Deposits",
            borderColor: "#003366",
            backgroundColor: "rgba(0, 51, 102, 0.2)",
            data: [totalDeposits / 4, totalDeposits / 2, totalDeposits], // Adjust data as needed
          },
          {
            label: "Total Interest",
            borderColor: "#FB923C",
            backgroundColor: "rgba(251, 146, 60, 0.2)",
            data: [totalInterest / 4, totalInterest / 2, totalInterest], // Adjust data as needed
          },
        ],
      };
    },
    calculateTotalDeposits() {
      const depositPeriods = {
        monthly: 12,
        "bi-monthly": 6,
        quarterly: 4,
        "half-yearly": 2,
        "thrice-yearly": 3,
        yearly: 1,
      };
      if (this.accountType === "new") {
        return (
          this.depositAmount *
          this.termCompleted *
          depositPeriods[this.depositFrequency]
        );
      } else {
        return (
          this.depositAmount *
            (15 - this.termCompleted) *
            depositPeriods[this.depositFrequency] +
          this.existingBalance
        );
      }
    },
    calculateTotalInterest() {
      if (this.accountType === "new") {
        return (
          this.calculateMaturityAmount() -
          (parseFloat(this.existingBalance) + this.calculateTotalDeposits())
        );
      } else {
        return this.calculateMaturityAmount() - this.calculateTotalDeposits();
      }
    },
    calculateMaturityAmount() {
      if (this.accountType === "new") {
        const annualInterestRate = this.annualInterestRate / 100;

        const depositPeriods = {
          monthly: 12,
          "bi-monthly": 6,
          quarterly: 4,
          "half-yearly": 2,
          "thrice-yearly": 3,
          yearly: 1,
        };

        const n = depositPeriods[this.depositFrequency];
        const r = annualInterestRate / n;

        let futureValue = 0;
        const numberOfPeriods = this.termCompleted * n;
        if (this.depositAmount > 0) {
          futureValue =
            this.depositAmount *
            ((Math.pow(1 + r, numberOfPeriods) - 1) / r) *
            (1 + r);
        }

        return futureValue;
      } else {
        const annualInterestRate = this.annualInterestRate / 100;
        let pfBalance = parseFloat(this.existingBalance);
        const depositPeriods = {
          monthly: 12,
          "bi-monthly": 6,
          quarterly: 4,
          "half-yearly": 2,
          "thrice-yearly": 3,
          yearly: 1,
        };

        const n = depositPeriods[this.depositFrequency];
        const r = annualInterestRate / n;

        // Calculate future value of new deposits
        let futureValueNewDeposits = 0;
        const numberOfPeriodsNewDeposits = (15 - this.termCompleted) * n;
        if (this.depositAmount > 0) {
          futureValueNewDeposits =
            this.depositAmount *
            ((Math.pow(1 + r, numberOfPeriodsNewDeposits) - 1) / r) *
            (1 + r);
        }

        // Calculate future value of existing balance
        const numberOfPeriodsExistingBalance = (15 - this.termCompleted) * n;
        let futureValueExistingBalance = 0;
        if (pfBalance > 0) {
          futureValueExistingBalance =
            pfBalance * Math.pow(1 + r, numberOfPeriodsExistingBalance);
        }

        return futureValueExistingBalance + futureValueNewDeposits;
      }
    },
    generateReport() {
      // Clear previous data
      const report = [];
      // Define constants and variables needed for calculations
      const annualInterestRate = this.annualInterestRate / 100;
      let principal =
        this.accountType === "existing" ? parseFloat(this.existingBalance) : 0; // Initial principal

      // Determine number of deposit periods based on deposit frequency
      const depositPeriods = {
        monthly: 12,
        "bi-monthly": 6,
        quarterly: 4,
        "half-yearly": 2,
        "thrice-yearly": 3,
        yearly: 1,
      };
      const n = depositPeriods[this.depositFrequency];
      const r = annualInterestRate / n;

      // Calculate total periods
      const totalPeriods =
        this.accountType === "new"
          ? this.termCompleted * n
          : (15 - this.termCompleted) * n;

      let monthlyInterestRate = r / 12;
      let temp = this.depositAmount;
      // Generate report data based on account type
      let j = totalPeriods;
      let k = 0;
      let f = 0;
      let g = 0;
      for (let i = 1; i <= totalPeriods; i++) {
        let amountDeposited = 0;
        j--;
        let remainingBalance = 0;
        // For new accounts, add deposit amount every month
        if (this.accountType === "new") {
          amountDeposited = this.depositAmount;
          principal += amountDeposited;
          remainingBalance =
            this.depositAmount * ((Math.pow(1 + r, i) - 1) / r) * (1 + r);
        } else {
          // For existing accounts, add deposit amount at the end of each period
          if (i % n === 0) {
            amountDeposited = this.depositAmount;
            principal += amountDeposited;
            remainingBalance =
              this.existingBalance * Math.pow(1 + r, i) +
              this.depositAmount * ((Math.pow(1 + r, i) - 1) / r) * (1 + r);
          }
        }

        let interestPaid =
          remainingBalance - amountDeposited - amountDeposited * f - g;
        g = remainingBalance - amountDeposited - amountDeposited * f;
        if (f == 0 && this.accountType === "existing") {
          interestPaid = interestPaid - this.existingBalance;
        }
        f++;
        // Calculate remaining balance including interest paid
        principal += interestPaid;

        // Add entry to reportData
        let period;
        if (this.reportType === "yearly") {
          period = `Year ${Math.ceil(i / n)}`;

          report.push({
            period: period,
            principalPaid: parseFloat(amountDeposited.toFixed(2)),
            interestPaid: parseFloat(interestPaid.toFixed(2)),
            remainingBalance: parseFloat(remainingBalance.toFixed(2)),
          });
        } else {
          for (let l = 1; l <= 12; l++) {
            // k=k+l;
            period = `Month ${l + k}`;
            // interestPaid = remainingBalance-amountDeposited;
            if (l > 1) {
              amountDeposited = 0;
            }
            report.push({
              period: period,
              principalPaid: parseFloat(amountDeposited.toFixed(2)),
              interestPaid: parseFloat(interestPaid.toFixed(2) / 12),
              remainingBalance: parseFloat(remainingBalance.toFixed(2)),
            });
          }
        }
        k = k + 12;
        // Update principal for the next period
        principal = remainingBalance;
      }

      this.showModal = true; // Show the modal with generated report
      return report;
    },
    yearlyReport() {
      this.showModal = true; // Show the modal with generated report
      this.reportType = "yearly";
      this.reportData = this.generateReport();
      this.reportType = "monthly";
      this.reportData2 = this.generateReport();
    },
    resetForm() {
      this.basicSalary = "";
      this.pfContribution = 12;
      this.yearsOfService = "";
      this.tenureType = "yearly";
      this.existingBalance = 0;
      this.annualInterestRate = "7.1";
      this.depositFrequency = "yearly";
      this.depositAmount = "";
      this.showResults = false;
      this.doughnutChartData = null;
      this.LineChartData = null;
      this.reportData = [];
      this.showModal = false;
      if (this.accountType === "new") {
        this.termCompleted = 15;
      } else {
        this.termCompleted = 1;
      }
    },
    back() {
      this.showResults = false;
      this.doughnutChartData = null;
      this.showModal = false;
      this.LineChartData = null;
    },
  },
};
</script>