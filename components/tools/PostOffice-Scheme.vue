<template>
  <div class="w-full flex flex-wrap gap-4 p-4">
    <!-- Input Component Start -->
    <div
      class="thin-scrollbar flex-1 min-w-full max-w-[40rem] max-h-[45rem] lg:min-w-0 bg-blue p-8 sm:p-12 lg:ml-12 md:h-[70vh] lg:h-[82vh] shadow-md rounded-xl overflow-auto thin-scrollbar flex flex-col justify-between"
    >
      <div v-if="!showResults" class="flex flex-col items-center h-full lg:px-12">
        <div class="flex justify-center">
          <h2 class="text-xl lg:text-3xl headerTitle">
            PostOffice <span class="text-orange-500"> Calculator</span>
          </h2>
        </div>

        <div class="flex-grow w-full">
          <div class="space-y-10 mb-5">
            <div class="input-container">
              <label class="w-full p-2">
                <select
                  v-model="accountType"
                  class="w-full border border-black rounded-md p-2 px-6"
                >
                  <option value="MonthlyIncome">
                    Monthly Income Calculator
                  </option>
                  <option value="NationalSavingCertificate">
                    National Saving Certificate Calculator
                  </option>
                  <option value="TimeDeposit">Time Deposit Calculator</option>
                  <option value="RecurringDeposit">
                    Recurring Deposit Calculator
                  </option>
                </select>
              </label>
            </div>
            <div
              v-if="
                accountType === 'MonthlyIncome' ||
                accountType === 'NationalSavingCertificate' ||
                accountType === 'TimeDeposit'
              "
              class="space-y-10 mb-8"
            >
              <div class="text-center">
                <div class="input-container">
                  <input
                    id="lump-sum-deposit"
                    type="number"
                    required
                    placeholder=" "
                    v-model.number="lumpSumDeposit"
                    class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <label for="lump-sum-deposit" class="label"
                    >Lump Sum Deposit:</label
                  >
                </div>
              </div>
            </div>

            <div
              v-if="accountType === 'RecurringDeposit'"
              class="space-y-8 mb-8"
            >
              <div class="text-center">
                <div class="input-container">
                  <input
                    id="monthly-deposit"
                    type="number"
                    required
                    placeholder=" "
                    v-model.number="monthlyDeposit"
                    class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <label for="monthly-deposit" class="label"
                    >Monthly Deposit:</label
                  >
                </div>
              </div>
            </div>

            <div class="space-y-12 my-8">
              <div class="input-container">
                <input
                  id="annual-interest-rate"
                  type="number"
                  required
                  placeholder=" "
                  v-model.number="annualInterestRate"
                  class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <label for="annual-interest-rate" class="label"
                  >Annual Interest Rate (%):</label
                >
              </div>

              <div v-if="accountType != 'TimeDeposit'" class="input-container">
                <input
                  id="term-years"
                  type="number"
                  disabled
                  placeholder=" "
                  v-model.number="termYears"
                  class="cursor-not-allowed input block w-full text-black bg-white px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <label for="term-years" class="label">Term (Years):</label>
              </div>
              <div v-if="accountType === 'TimeDeposit'" class="input-container">
                <input
                  id="term-years"
                  type="number"
                  placeholder=" "
                  v-model.number="termYears"
                  class="input block w-full text-black bg-white px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <label for="term-years" class="label">Term (Years):</label>
              </div>
            </div>
          </div>
        </div>

        <div class="flex w-full gap-4 pb-10">
          <button
            @click="calculate"
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
    <!-- Report -->

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
      accountType: "MonthlyIncome",
      lumpSumDeposit: "",
      monthlyDeposit: "",
      annualInterestRate: "",
      termYears: 5,
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
          question: "What is a Post Office Scheme calculator?",
          answer:
            "A Post Office Scheme calculator estimates returns based on your investment amount and tenure.",
          active: false,
        },
        {
          question: "How are returns calculated for Post Office Schemes?",
          answer:
            "Returns are based on the investment amount, interest rate, and scheme tenure.",
          active: false,
        },
        {
          question: "What information is needed for the calculator?",
          answer:
            "You need investment amount, interest rate, and tenure to use the calculator.",
          active: false,
        },
        {
          question: "How accurate is the Post Office Scheme calculator?",
          answer:
            "The calculator provides estimates; actual returns may vary based on scheme terms and interest rates.",
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
        "Interest Received",
        "Total Interest Received",
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
  methods: {
    calculate() {
      this.showResults = true;
      let totalDeposits = this.calculateTotalDeposits();
      let totalInterest = this.calculateTotalInterest();
      let maturityAmount = this.calculateMaturityAmount();

      if (this.accountType === "MonthlyIncome") {
        this.resultsLabels = [
          {
            label: "Total Deposit",
            value: `₹ ${this.calculateTotalDeposits().toFixed(2)}`,
          },
          {
            label: "Total Interest",
            value: `₹ ${this.calculateTotalInterest().toFixed(2)}`,
          },
          {
            label: "Monthly Interest",
            value: `₹ ${this.calculateMonthlyInterest().toFixed(2)}`,
          },
          {
            label: "Interest rate",
            value: `${this.annualInterestRate.toFixed(2)} %`,
          },
        ];
      } else if (this.accountType === "TimeDeposit") {
        this.resultsLabels = [
          {
            label: "Total Deposit",
            value: `₹ ${this.calculateTotalDeposits().toFixed(2)}`,
          },
          {
            label: "Total Interest",
            value: `₹ ${this.calculateTotalInterest().toFixed(2)}`,
          },
          {
            label: "Yearly Interest",
            value: `₹ ${this.calculateYearlyInterest().toFixed(2)}`,
          },
          {
            label: "Interest rate",
            value: `${this.annualInterestRate.toFixed(2)} %`,
          },
        ];
      } else {
        this.resultsLabels = [
          {
            label: "Total Deposit",
            value: `₹ ${this.calculateTotalDeposits().toFixed(2)}`,
          },
          {
            label: "Maturity Amount",
            value: `₹ ${this.calculateMaturityAmount().toFixed(2)}`,
          },
          {
            label: "Total Interest",
            value: `₹ ${this.calculateTotalInterest().toFixed(2)}`,
          },
        ];
      }

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
      if (this.accountType === "RecurringDeposit") {
        return this.monthlyDeposit * this.termYears * 12;
      }
      return this.lumpSumDeposit;
    },

    calculateMonthlyInterest() {
      return (this.lumpSumDeposit * this.annualInterestRate) / 1200;
    },

    calculateYearlyInterest() {
      return (this.lumpSumDeposit * this.annualInterestRate) / 100;
    },

    calculateTotalAmount() {
      return this.calculateTotalDeposits() + this.calculateTotalInterest();
    },

    calculateMaturityAmount() {
      if (this.accountType === "NationalSavingCertificate") {
        const r = this.annualInterestRate;
        const p = this.lumpSumDeposit;
        const n = this.termYears;
        return p * Math.pow(1 + r / 100, n);
      } else if (this.accountType === "RecurringDeposit") {
        const p = this.monthlyDeposit; // Monthly deposit amount
        const r = this.annualInterestRate / (100 * 4); // Monthly interest rate
        const n = this.termYears; // Total number of months

        var result = 0;

        for (let index = 1; index <= n * 12; index++) {
          result = result + p * Math.pow(1 + r, index / 3);
        }

        // Calculate maturity amount based on formula for recurring deposits
        return result;
      } else {
        return 0;
      }
    },

    calculateTotalInterest() {
      if (this.accountType === "MonthlyIncome") {
        return this.calculateMonthlyInterest() * 5 * 12;
      } else if (this.accountType === "TimeDeposit") {
        return this.calculateYearlyInterest() * this.termYears;
      } else if (this.accountType === "RecurringDeposit") {
        return this.calculateMaturityAmount() - this.calculateTotalDeposits();
      } else {
        const P = this.calculateTotalDeposits();
        const r = this.annualInterestRate / 100;
        const n = 1;
        const t = this.termYears;
        const A = P * Math.pow(1 + r / n, n * t);
        return A - P;
      }
    },

    generateReport() {
      // Generate report logic based on reportType
      // Example structure for generating report data
      let principal = this.lumpSumDeposit;
      let annualInterest = this.annualInterestRate;
      let term = this.termYears;

      // Clear previous data
      const report = [];

      // Generate report data based on account type
      if (this.accountType === "MonthlyIncome") {
        if (this.reportType === "yearly") {
          let InterestReceived = this.calculateMonthlyInterest() * 12;
          let principalPaid = this.lumpSumDeposit;
          let totalInterestReceived = 0;
          for (let i = 1; i <= term; i++) {
            if (i != 1) {
              principalPaid = 0;
            }

            totalInterestReceived = totalInterestReceived + InterestReceived;
            report.push({
              period: `Yearly ${i}`,
              principalPaid: principalPaid,
              interestPaid: InterestReceived,
              remainingBalance: totalInterestReceived,
            });
          }
        } else {
          let InterestReceived = this.calculateMonthlyInterest();
          let principalPaid = this.lumpSumDeposit;
          let totalInterestReceived = 0;
          for (let i = 1; i <= term * 12; i++) {
            if (i != 1) {
              principalPaid = 0;
            }
            totalInterestReceived = totalInterestReceived + InterestReceived;
            report.push({
              period: `monthly ${i}`,
              principalPaid: principalPaid,
              interestPaid: InterestReceived,
              remainingBalance: totalInterestReceived,
            });
          }
        }
      } else if (this.accountType === "TimeDeposit") {
        if (this.reportType === "monthly") {
          let monthlyInterestRate = annualInterest / 100 / 12;
          let InterestReceived = principal * monthlyInterestRate;
          let principalPaid = this.lumpSumDeposit;
          let totalInterestReceived = 0;
          let termInMonths = term * 12; // convert term from years to months

          for (let i = 1; i <= termInMonths; i++) {
            if (i != 1) {
              principalPaid = 0;
            }
            totalInterestReceived += InterestReceived;

            report.push({
              period: `Month ${i}`,
              principalPaid: principalPaid,
              interestPaid: InterestReceived,
              remainingBalance: totalInterestReceived,
            });
          }
        } else if (this.reportType === "yearly") {
          let InterestReceived = principal * (annualInterest / 100);
          let principalPaid = this.lumpSumDeposit;
          let totalInterestReceived = 0;

          for (let i = 1; i <= term; i++) {
            if (i != 1) {
              principalPaid = 0;
            }
            totalInterestReceived += InterestReceived;

            report.push({
              period: `Year ${i}`,
              principalPaid: principalPaid,
              interestPaid: InterestReceived,
              remainingBalance: totalInterestReceived,
            });
          }
        }
      } else if (this.accountType === "NationalSavingCertificate") {
        // Handle other account types (NationalSavingCertificate, RecurringDeposit)
        if (this.reportType === "yearly") {
          this.secondColumnName = "  Interest Earned ";
          this.thirdColumnName = "  Year End Balance ";
          for (let i = 1; i <= term; i++) {
            let interestPaid = principal * (annualInterest / 100);
            let remainingBalance = principal + interestPaid;
            let amountDeposited = this.lumpSumDeposit;

            if (i != 1) {
              amountDeposited = 0;
            }

            report.push({
              period: `Year ${i}`,
              principalPaid: amountDeposited,
              interestPaid,
              remainingBalance,
            });

            principal = remainingBalance;
          }
        } else {
          this.secondColumnName = "  Interest Earned ";
          this.thirdColumnName = "  Month End Balance ";

          let amountDeposited = this.lumpSumDeposit;
          let monthEndBalance = this.lumpSumDeposit;
          for (let year = 1; year <= term; year++) {
            let yearlyInterestPaid = principal * (annualInterest / 100);
            let monthlyInterestPaid = yearlyInterestPaid / 12;

            for (let month = 1; month <= 12; month++) {
              if (year !== 1 || month !== 1) {
                amountDeposited = 0;
              }
              if (month == 12) {
                monthEndBalance = monthEndBalance + yearlyInterestPaid;
              }

              report.push({
                period: `Month ${(year - 1) * 12 + month}`,
                principalPaid: amountDeposited,
                interestPaid: monthlyInterestPaid,
                remainingBalance: monthEndBalance,
              });

              principal += monthlyInterestPaid;
            }
          }
        }
      } else if (this.accountType === "RecurringDeposit") {
        const monthlyDeposit = this.monthlyDeposit;
        const monthlyInterestRate = this.annualInterestRate / 100 / 12;
        const totalMonths = this.termYears * 12;

        if (this.reportType === "monthly") {
          let balance = 0;
          let totalInterest = 0;
          let totalPrincipal = 0;
          for (let month = 1; month <= totalMonths; month++) {
            balance += monthlyDeposit;
            totalPrincipal += monthlyDeposit;
            let interest = balance * monthlyInterestRate;
            totalInterest += interest;
            balance += interest;

            report.push({
              period: `Month ${month}`,
              principalPaid: monthlyDeposit,
              interestPaid: interest,
              remainingBalance: balance,
            });
          }
        } else if (this.reportType === "yearly") {
          let balance = 0;
          let totalInterest = 0;
          let totalPrincipal = 0;
          for (let year = 1; year <= this.termYears; year++) {
            for (let month = 1; month <= 12; month++) {
              balance += monthlyDeposit;
              totalPrincipal += monthlyDeposit;
              let interest = balance * monthlyInterestRate;
              totalInterest += interest;
              balance += interest;
            }

            report.push({
              period: `Year ${year}`,
              principalPaid: totalPrincipal,
              interestPaid: totalInterest,
              remainingBalance: balance,
            });

            totalPrincipal = 0;
            totalInterest = 0;
          }
        }
      }
      return report;
    },
    yearlyReport(){
     this.showModal = true;
     this.reportType = "yearly";
     this.reportData = this.generateReport();
     this.reportType = "monthly";
     this.reportData2 = this.generateReport();
    },

    resetForm() {
      // Reset form logic
      this.accountType = "MonthlyIncome";
      this.lumpSumDeposit = "";
      this.monthlyDeposit = "";
      this.annualInterestRate = "";
      this.termYears = 5;
      this.showResults = false;
      this.doughnutChartData = null;
      this.LineChartData = null;
      this.reportData = [];
      this.showModal = false;
    },
    back() {
      this.showResults = false;
      this.doughnutChartData = null;
      this.LineChartData = null;
      this.showModal = false;
    },
  },
};
</script>