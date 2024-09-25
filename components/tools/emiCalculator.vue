<template>
  <div class="w-full flex flex-wrap gap-4 p-4">
    <!-- Input Component Start -->
    <div
      class="thin-scrollbar flex-1 min-w-full max-w-[40rem] max-h-[45rem] lg:min-w-0 bg-blue p-8 sm:p-12 lg:ml-12 md:h-[70vh] lg:h-[82vh] shadow-md rounded-xl overflow-auto thin-scrollbar flex flex-col justify-between"
    >
      <div v-if="!isCalculated" class="flex flex-col items-center h-full lg:px-12">
        <div class="flex justify-center">
          <h2 class="text-xl lg:text-3xl mb-10 headerTitle">
            EMI <span class="text-orange-500"> Calculator</span>
          </h2>
        </div>
        <!-- <div class="w-full flex mb-8">
          <label class="mr-12">
            <input type="radio" value="basic" v-model="accountType" />
            Basic
          </label>
          <label>
            <input type="radio" value="advance" v-model="accountType" />
            Advance
          </label>
        </div> -->

        <div v-if="accountType === 'basic'" class="w-full">
          <div class="flex-grow w-full">
            <div class="space-y-10 mb-5">
              <div class="input-container">
                <input
                  id="loan-amount"
                  type="number"
                  required
                  placeholder=" "
                  v-model.number="loanAmount"
                  class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <label for="loan-amount" class="label">Loan Amount:</label>
              </div>

              <div class="input-container">
                <input
                  id="interest-rate"
                  type="number"
                  placeholder=" "
                  v-model.number="interestRate"
                  class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <label for="interest-rate" class="label">Interest Rate:</label>
              </div>

              <div class="input-container">
                <input
                  id="start-date"
                  type="date"
                  placeholder=" "
                  v-model="startDate"
                  class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <label for="start-date" class="label">Start Date:</label>
              </div>
              <div class="flex-row sm:flex sm:space-x-8 align-middle mt-3">
                <div>
                  <div class="input-container">
                    <input
                      id="loan-tenure"
                      type="number"
                      placeholder=" "
                      v-model.number="tenureValue"
                      class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />

                    <label for="loan-tenure" class="label">Loan Tenure:</label>
                  </div>
                </div>
                <div class="align-middle mt-5 w-full sm:w-1/2">
                  <div
                    class="flex items-center border rounded-lg border-blue-500 px-6 py-2"
                  >
                    <select
                      v-model="tenureUnit"
                      class="bg-transparent text-black focus:outline-none w-full"
                    >
                      <option value="months">Months</option>
                      <option value="years">Years</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="accountType === 'advance'" class="w-full">
          <div class="flex-grow w-full">
            <div class="space-y-10 mb-5"></div>
          </div>
        </div>

        <div class="flex w-full gap-4 pb-10">
          <button
            @click="showDoughnutChart"
            class="w-1/2 mr-2 mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-2 md:px-5 rounded-lg"
          >
            Calculate
          </button>
          <button
            @click="reset"
            class="w-1/2 mt-6 py-3 px-2 md:px-5 outline-btn"
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
              @click="reset"
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
      loanAmount: "",
      interestRate: "",
      tenureValue: "",
      tenureUnit: "years",
      reportType: "yearly",
      accountType: "basic",
      showModal: false,
      reportData: [],
      reportData2: [],
      doughnutChartData: null,
      LineChartData: null,
      isCalculated: false,
      resultsLabels: [],
      faqs: [
        {
          question: "What is EMI?",
          answer:
            "EMI stands for Equated Monthly Installment, a fixed monthly loan repayment including principal and interest.",
          active: false,
        },
        {
          question: "How is EMI calculated?",
          answer:
            "EMI is based on the loan amount, interest rate, and tenure, including both principal and interest.",
          active: false,
        },
        {
          question: "How accurate is the EMI calculator?",
          answer:
            "The calculator provides estimates; actual amounts may vary slightly based on lender specifics.",
          active: false,
        },
      ],
    };
  },
  computed: {
    tableHeaders() {
      return ["Period", "Principal Paid", "Interest Paid", "Year End Balance"];
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
    minTenure() {
      return this.tenureUnit === "years" ? 1 : 12;
    },
    maxTenure() {
      return this.tenureUnit === "years" ? 30 : 360;
    },
    tenureInMonths() {
      return this.tenureUnit === "years"
        ? this.tenureValue * 12
        : this.tenureValue;
    },
    tenureInYears() {
      return this.tenureUnit === "months"
        ? this.tenureValue / 12
        : this.tenureValue;
    },
  },

  methods: {
    calculateEMI() {
      const principal = this.loanAmount;
      const annualInterestRate = this.interestRate / 100;
      const monthlyInterestRate = annualInterestRate / 12;
      const numberOfMonths = this.tenureInMonths;

      const emi =
        (principal *
          monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, numberOfMonths)) /
        (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);

      return emi;
    },
    calculateTotalInterest() {
      const emi = this.calculateEMI();
      const numberOfMonths = this.tenureInMonths;
      const totalPayment = emi * numberOfMonths;
      const totalInterest = totalPayment - this.loanAmount;

      return totalInterest;
    },
    calculateTotalAmount() {
      const emi = this.calculateEMI();
      const numberOfMonths = this.tenureInMonths;
      const totalPayment = emi * numberOfMonths;

      return totalPayment;
    },
    showDoughnutChart() {
      // Validation check for empty fields
      if (
        !this.loanAmount ||
        !this.interestRate ||
        !this.tenureValue ||
        !this.startDate
      ) {
        alert("Please fill in all fields.");
        return;
      }

      // Calculate percentages for doughnut chart
      const totalPayment = this.calculateTotalAmount();
      const totalInterest = this.calculateTotalInterest();
      const totalPrincipal = totalPayment - totalInterest;

      this.resultsLabels = [
        {
          label: "Loan Amount",
          value: `₹ ${this.loanAmount.toFixed(2)}`,
        },
        {
          label: "Total EMI Paid",
          value: `₹ ${this.calculateTotalAmount().toFixed(2)}`,
        },
        {
          label: "Interest Paid",
          value: `₹ ${this.calculateTotalInterest().toFixed(2)}`,
        },
        { label: "Monthly EMI", value: `₹ ${this.calculateEMI().toFixed(2)}` },
        {
          label: "Interest Rate",
          value: `${this.interestRate.toFixed(2)} %`,
        },
      ];

      // Prepare data for doughnut chart
      this.doughnutChartData = {
        labels: ["Principal Paid", "Interest Paid"],
        datasets: [
          {
            backgroundColor: ["#003366", "#FB923C"],
            data: [totalPrincipal, totalInterest],
          },
        ],
      };

      // Prepare data for Line chart
      this.LineChartData = {
        labels: ["1", "2", "3", "4", "5"], // Adjust as needed
        datasets: [
          {
            label: "Principal Paid",
            borderColor: "#003366",
            backgroundColor: "rgba(0, 51, 102, 0.2)",
            data: [totalPrincipal / 4, totalPrincipal / 2, totalPrincipal], // Adjust data as needed
          },
          {
            label: "Interest Paid",
            borderColor: "#FB923C",
            backgroundColor: "rgba(251, 146, 60, 0.2)",
            data: [totalInterest / 4, totalInterest / 2, totalInterest], // Adjust data as needed
          },
        ],
      };
      this.isCalculated = true; // Set isCalculated to true after calculation
    },
    generateReport() {
      const numberOfMonths = this.tenureInMonths;
      const emi = this.calculateEMI();
      const monthlyInterestRate = this.interestRate / 100 / 12;
      const startDate = new Date(this.startDate);

      let remainingBalance = this.loanAmount;
      const report = [];

      let yearlyPrincipalPaid = 0;
      let yearlyInterestPaid = 0;

      for (let i = 1; i <= numberOfMonths; i++) {
        const interestPaid = remainingBalance * monthlyInterestRate;
        const principalPaid = emi - interestPaid;
        remainingBalance -= principalPaid;

        const currentDate = new Date(startDate);
        currentDate.setMonth(currentDate.getMonth() + i - 1);

        if (this.reportType === "monthly") {
          report.push({
            period: currentDate.toLocaleDateString("en-GB", {
              year: "numeric",
              month: "long",
            }),
            principalPaid,
            interestPaid,
            remainingBalance,
          });
        } else if (this.reportType === "yearly") {
          yearlyPrincipalPaid += principalPaid;
          yearlyInterestPaid += interestPaid;

          if (i % 12 === 0 || i === numberOfMonths) {
            report.push({
              period: currentDate.getFullYear(),
              principalPaid: yearlyPrincipalPaid,
              interestPaid: yearlyInterestPaid,
              remainingBalance,
            });
            yearlyPrincipalPaid = 0;
            yearlyInterestPaid = 0;
          }
        }
      }
      return report;
    },
    yearlyReport() {
      this.showModal = true; // Show modal after generating report
      this.reportType = "yearly";
      this.reportData = this.generateReport();
      this.reportType = "monthly";
      this.reportData2 = this.generateReport();
    },
    reset() {
      // Reset all input fields and data properties to default values
      this.loanAmount = "";
      this.interestRate = "";
      this.tenureValue = "";
      this.tenureUnit = "years";
      this.reportType = "yearly";
      this.showModal = false;
      this.reportData = [];
      this.doughnutChartData = null;
      this.isCalculated = false; // Reset isCalculated to false
      this.LineChartData = null;
    },
    back() {
      this.showModal = false;
      this.reportData = [];
      this.doughnutChartData = null;
      this.isCalculated = false; // Reset isCalculated to false
      this.LineChartData = null;
    },
  },
};
</script>
