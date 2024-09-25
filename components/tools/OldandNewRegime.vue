<template>
  <div class="w-full flex flex-wrap gap-4 p-4">
    <!-- Input Component Start -->
    <div
      class="thin-scrollbar flex-1 min-w-full max-w-[40rem] max-h-[45rem] lg:min-w-0 bg-blue p-8 sm:p-12 lg:ml-12 md:h-[70vh] lg:h-[82vh] shadow-md rounded-xl overflow-auto thin-scrollbar flex flex-col justify-between"
    >
      <div v-if="!isCalculated" class="flex flex-col items-center h-full lg:px-12">
        <div class="flex justify-center">
          <h2 class="text-xl lg:text-3xl mb-10 headerTitle">
            Old & New  <span class="text-orange-500"> Regime</span>
          </h2>
        </div>

        <!-- Tabs -->
        <div class="flex justify-center mb-8 md:mb-12">
          <button
            @click="selectedTab = 'old'"
            :class="{
              'bg-blue-500 text-white': selectedTab === 'old',
              'bg-gray-200 text-black': selectedTab !== 'old',
            }"
            class="py-2 px-2 md:px-4 rounded-l-lg focus:outline-none"
          >
            Old Regime
          </button>
          <button
            v-if="canChooseNewRegime"
            @click="selectedTab = 'new'"
            :class="{
              'bg-blue-500 text-white': selectedTab === 'new',
              'bg-gray-200 text-black': selectedTab !== 'new',
            }"
            class="py-2 px-2 md:px-4 rounded-r-lg focus:outline-none"
          >
            New Regime
          </button>
        </div>

        <div class="flex-grow w-full">
          <div class="space-y-10 mb-5">
            <div class="input-container">
              <select
                v-model="AssessmentYear"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="2025">2025-26</option>
                <option value="2024">2024-25</option>
                <option value="2023">2023-24</option>
              </select>
              <label for="assessment-year" class="label">Assessment Year</label>
            </div>
            <div class="input-container">
              <select
                v-model="TaxpayerCategory"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="Individual">Individual</option>
                <option value="HUF">HUF</option>
                <option value="Firm">Firm</option>
                <option value="LLP">LLP</option>
                <option value="Domestic Company">Domestic Company</option>
                <option value="Foreign Company">Foreign Company</option>
                <option value="AOP/BOI">AOP/BOI</option>
                <option value="Cooperative Society">Cooperative Society</option>
                <option value="Trust">Trust</option>
              </select>
              <label for="residential-status" class="label"
                >Taxpayer Category</label
              >
            </div>
            <div class="input-container">
              <select
                v-model="ResidentialStatus"
                :disabled="isNonResident"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="Resident">Resident</option>
                <option value="RNOR">
                  RNOR (Resident But Not Ordinarily Resident)
                </option>
                <option value="NR">NR (Non Resident)</option>
              </select>
              <label for="residential-status" class="label"
                >Residential Status</label
              >
            </div>
            <div class="input-container" v-if="!isNonIndividualTaxPayer">
              <select
                v-model="ageGroup"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="below60">Below 60 Years</option>
                <option value="between60and80">Between 60 and 80 Years</option>
                <option value="above80">Above 80 Years</option>
              </select>
              <label for="age-group" class="label">Age Group</label>
            </div>
            <div class="input-container">
              <input
                id="due-date"
                type="date"
                required
                placeholder=" "
                v-model="dueDate"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <label for="due-date" class="label"
                >Due Date of Return u/s 139(1)</label
              >
            </div>

            <div class="input-container">
              <input
                id="actual-submission-date"
                type="date"
                required
                placeholder=" "
                v-model="actualSubmissionDate"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <label for="actual-submission-date" class="label"
                >Actual Date of Submission of Return</label
              >
            </div>

            <!-- Title for Income and Tax Calculation Details -->
            <div>
              <h3 class="text-md md:text-lg font-semibold">
                Gross Total Income
              </h3>
            </div>

            <div class="input-container">
              <input
                id="incomefromsalary"
                type="number"
                required
                placeholder=" "
                v-model.number="incomefromsalary"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <label for="gross-income" class="label">Income from salary</label>
            </div>

            <div class="input-container">
              <input
                id="incomefromhouse"
                type="number"
                required
                placeholder=" "
                v-model.number="incomefromhouse"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <label for="incomefromhouse" class="label"
                >Income from house</label
              >
            </div>

            <div class="input-container">
              <input
                id="incomefrombussiness"
                type="number"
                required
                placeholder=" "
                v-model.number="incomefrombussiness"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <label for="incomefrombussiness" class="label"
                >Income from bussiness</label
              >
            </div>

            <div class="input-container">
              <input
                id="incomefromothersource"
                type="number"
                required
                placeholder=" "
                v-model.number="incomefromothersource"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <label for="incomefromothersource" class="label"
                >Income from other source</label
              >
            </div>

            <!-- Title for Income and Tax Calculation Details -->
            <div>
              <h3 class="text-md md:text-lg font-semibold">Total Deductions</h3>
            </div>

            <div class="input-container">
              <input
                id="deductions"
                type="number"
                required
                placeholder=" "
                v-model.number="deductions"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <label for="deductions" class="label"> Except 80G Deductions</label>
            </div>

              <div class="input-container">
              <input
                id="deductions_80g"
                type="number"
                required
                placeholder=" "
                v-model.number="deductions_80g"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <label for="deductions" class="label"> 80G Deductions</label>
            </div>
          </div>
        </div>

        <div class="flex w-full gap-4 pb-10">
          <button
            @click="calculateTax"
            class="w-1/2 mr-2 mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-2 md:px-5 rounded-lg"
          >
            Calculate
          </button>
          <button @click="reset" class="w-1/2 mt-6 py-3 px-2 md:px-9 outline-btn">
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
      selectedTab: "old",
      AssessmentYear: "2024",
      TaxpayerCategory: "Individual",
      ResidentialStatus: "Resident",
      ageGroup: "below60",
      grossIncome: "",
      deductions: "",
      deductions_80g: "",
      doughnutChartData: null,
      LineChartData: null,
      isCalculated: false,
      resultsLabels: [],
      incomefromsalary: "",
      incomefromhouse: "",
      incomefrombussiness: "",
      incomefromothersource: "",
      faqs: [
        {
          question: "What are the old and new tax regimes?",
          answer:
            "The old regime allows deductions and exemptions; the new regime offers lower tax rates but fewer deductions.",
          active: false,
        },
        {
          question: "Which tax regime should I choose?",
          answer:
            "The choice depends on your income, deductions, and exemptions. Use the calculator to compare.",
          active: false,
        },
      ],
    };
  },
  computed: {
    // Add this computed property
    canChooseNewRegime() {
      return ["Individual", "HUF", "AOP/BOI"].includes(this.TaxpayerCategory);
    },
    // Existing properties
    isNonResident() {
      return (
        this.TaxpayerCategory !== "Individual" &&
        this.TaxpayerCategory !== "HUF"
      );
    },
    isNonIndividualTaxPayer() {
      return this.TaxpayerCategory !== "Individual";
    },
  },

  watch: {
    TaxpayerCategory() {
      if (this.TaxpayerCategory === "Foreign Company") {
        this.ResidentialStatus = "NR";
      } else {
        this.ResidentialStatus = "Resident"; // Reset to default if the category is changed
      }
    },
  },
  methods: {
    validateInputs() {
      const requiredFields = [
        "AssessmentYear",
        "TaxpayerCategory",
        "ResidentialStatus",
        "dueDate",
        "actualSubmissionDate",
        "incomefromsalary",
        "incomefromhouse",
        "incomefrombussiness",
        "incomefromothersource",
        "deductions",
        "deductions_80g"
      ];

      // Validate all required fields
      for (const field of requiredFields) {
        if (
          this[field] === "" ||
          this[field] === null ||
          this[field] === undefined
        ) {
          alert(
            `Please fill in the ${field
              .replace(/([A-Z])/g, " $1")
              .toLowerCase()}`
          );
          return false;
        }
      }

      return true;
    },

    calculateTaxableIncome() {
      const salaryafteratc =
        this.incomefromsalary >= 50000
          ? this.incomefromsalary - 50000
          : this.incomefromsalary;

      const salaryafterhousetax =
        this.incomefromhouse - this.incomefromhouse * 0.3;

      this.grossIncome =
        salaryafteratc +
        salaryafterhousetax +
        this.incomefrombussiness +
        this.incomefromothersource;

      if (this.selectedTab === "old") {
        return this.grossIncome - this.deductions - this.deductions_80g;
      } else {
        return this.grossIncome;
      }
    },
    calculateTax() {
      if (!this.validateInputs()) {
        return;
      }

      this.isCalculated = true;

      if (
        this.TaxpayerCategory === "Individual" ||
        this.TaxpayerCategory === "HUF"
      ) {
        let oldRegimeTax = 0;
        let newRegimeTax = 0;
        let totalAmount = this.calculateTaxableIncome();
        oldRegimeTax = this.calculateOldRegimeTax();
        newRegimeTax = this.calculateNewRegimeTax();

        if (this.selectedTab === "old") {
          this.doughnutChartData = {
            labels: ["Taxable Income", "Total Tax on Income"],
            datasets: [
              {
                data: [totalAmount, oldRegimeTax],
                backgroundColor: ["#003366", "#FB923C"],
                hoverBackgroundColor: ["#003366", "#FB923C"],
              },
            ],
          };
          this.LineChartData = {
            labels: ["Taxable Income", "Total Tax on Income"],
            datasets: [
              {
                label: "Tax Comparison",
                backgroundColor: "rgba(255, 165, 0, 0.2)", // Orange
                borderColor: "rgba(255, 165, 0, 1)", // Orange
                pointBackgroundColor: "rgba(0, 0, 255, 1)", // Blue
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(0, 0, 255, 1)", // Blue
                data: [totalAmount, oldRegimeTax],
              },
            ],
          };

          this.resultsLabels = [
            { label: "Taxable Income", value: totalAmount },
            { label: "Total Tax on Income", value: oldRegimeTax },
          ];
        } else {
          this.doughnutChartData = {
            labels: ["Taxable Income", "Total Tax on Income"],
            datasets: [
              {
                data: [totalAmount, newRegimeTax],
                backgroundColor: ["#003366", "#FB923C"],
                hoverBackgroundColor: ["#003366", "#FB923C"],
              },
            ],
          };
          this.LineChartData = {
            labels: ["Taxable Income", "Total Tax on Income"],
            datasets: [
              {
                label: "Tax Comparison",
                backgroundColor: "rgba(255, 165, 0, 0.2)", // Orange
                borderColor: "rgba(255, 165, 0, 1)", // Orange
                pointBackgroundColor: "rgba(0, 0, 255, 1)", // Blue
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(0, 0, 255, 1)", // Blue
                data: [totalAmount, newRegimeTax],
              },
            ],
          };

          this.resultsLabels = [
            { label: "Taxable Income", value: totalAmount },
            { label: "Total Tax on Income", value: newRegimeTax },
          ];
        }
      } else if (this.TaxpayerCategory === "AOP/BOI") {
        const taxableIncome = this.calculateTaxableIncome();
        let taxableAmount = this.calculateOldRegimeTax();

        this.doughnutChartData = {
          labels: ["Taxable Income", "Total Tax on Income"],
          datasets: [
            {
              data: [taxableIncome, taxableAmount],
              backgroundColor: ["#003366", "#FB923C"],
              hoverBackgroundColor: ["#003366", "#FB923C"],
            },
          ],
        };
        this.LineChartData = {
          labels: ["Taxable Income", "Total Tax on Income"],
          datasets: [
            {
              label: "Tax Comparison",
              backgroundColor: "rgba(255, 165, 0, 0.2)", // Orange
              borderColor: "rgba(255, 165, 0, 1)", // Orange
              pointBackgroundColor: "rgba(0, 0, 255, 1)", // Blue
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(0, 0, 255, 1)", // Blue
              data: [taxableIncome, taxableAmount],
            },
          ],
        };

        if (this.deductions == "0") {
          this.deductions = "0";
        }

        this.resultsLabels = [
          { label: "Taxable Income", value: taxableIncome },
          { label: "Total Tax on Income", value: taxableAmount },
        ];
      } else {
        let taxableAmount = 0;
        const taxableIncome = this.calculateTaxableIncome();
        if (
          this.TaxpayerCategory === "Foreign Company" ||
          this.TaxpayerCategory === "Trust"
        ) {
          taxableAmount = this.calculateTrustTax();
        } else {
          taxableAmount = this.calculateFirmTax();
        }
        this.doughnutChartData = {
          labels: ["Taxable Income", "Total Tax on Income"],
          datasets: [
            {
              data: [taxableIncome, taxableAmount],
              backgroundColor: ["#003366", "#FB923C"],
              hoverBackgroundColor: ["#003366", "#FB923C"],
            },
          ],
        };
        this.LineChartData = {
          labels: ["Taxable Income", "Total Tax on Income"],
          datasets: [
            {
              label: "Tax Comparison",
              backgroundColor: "rgba(255, 165, 0, 0.2)", // Orange
              borderColor: "rgba(255, 165, 0, 1)", // Orange
              pointBackgroundColor: "rgba(0, 0, 255, 1)", // Blue
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(0, 0, 255, 1)", // Blue
              data: [taxableIncome, taxableAmount],
            },
          ],
        };

        if (this.deductions == "0") {
          this.deductions = "0";
        }

        this.resultsLabels = [
          { label: "Taxable income", value: taxableIncome },
          { label: "Total Deduction", value: this.deductions },
          { label: "Total Tax on Income", value: taxableAmount },
        ];
      }
    },
    calculateFirmTax() {
      const taxableIncome = this.calculateTaxableIncome();
      let tax = 0;
      tax = taxableIncome * 0.3;
      tax = tax + tax * 0.04;
      return tax;
    },
    calculateTrustTax() {
      const taxableIncome = this.calculateTaxableIncome();
      let tax = taxableIncome * 0.4;

      if (taxableIncome > 10000000 && taxableIncome <= 100000000) {
        tax += tax * 0.02; // 2% surcharge on the tax
      } else if (taxableIncome > 100000000) {
        tax += tax * 0.05; // 5% surcharge on the tax
      }
      tax = tax + tax * 0.04;
      return tax;
    },
    calculateOldRegimeTax() {
      const taxableIncome = this.calculateTaxableIncome();
      let tax = 0;

      const slabs = {
        below60: [250000, 300000, 500000, 1000000],
        between60and80: [300000, 500000, 1000000],
        above80: [500000, 1000000],
      };

      const rates = {
        below60: [0.05, 0.05, 0.2, 0.3],
        between60and80: [0.05, 0.2, 0.3],
        above80: [0.2, 0.3],
      };

      const slab = slabs[this.ageGroup];
      const taxRates = rates[this.ageGroup];

      if (taxableIncome <= slab[0]) {
        tax = 0;
      } else if (taxableIncome <= slab[1]) {
        tax = (taxableIncome - slab[0]) * taxRates[0];
      } else if (taxableIncome <= slab[2]) {
        tax =
          (slab[1] - slab[0]) * taxRates[0] +
          (taxableIncome - slab[1]) * taxRates[1];
      } else if (taxableIncome <= slab[3]) {
        tax =
          (slab[1] - slab[0]) * taxRates[0] +
          (slab[2] - slab[1]) * taxRates[1] +
          (taxableIncome - slab[2]) * taxRates[2];
      } else {
        tax =
          (slab[1] - slab[0]) * taxRates[0] +
          (slab[2] - slab[1]) * taxRates[1] +
          (slab[3] - slab[2]) * taxRates[2] +
          (taxableIncome - slab[3]) * taxRates[3];
      }
      tax = tax + tax * 0.04;
      return tax;
    },
    calculateNewRegimeTax() {
      const taxableIncome = this.calculateTaxableIncome();
      // const taxableIncome = this.grossIncome;
      let tax = 0;

      const slabs = [300000, 600000, 900000, 1200000, 1500000];
      const rates = [0.05, 0.1, 0.15, 0.2, 0.3];

      if (taxableIncome <= slabs[0]) {
        tax = 0;
      } else if (taxableIncome <= slabs[1]) {
        tax = (taxableIncome - slabs[0]) * rates[0];
      } else if (taxableIncome <= slabs[2]) {
        tax =
          (slabs[1] - slabs[0]) * rates[0] +
          (taxableIncome - slabs[1]) * rates[1];
      } else if (taxableIncome <= slabs[3]) {
        tax =
          (slabs[1] - slabs[0]) * rates[0] +
          (slabs[2] - slabs[1]) * rates[1] +
          (taxableIncome - slabs[2]) * rates[2];
      } else if (taxableIncome <= slabs[4]) {
        tax =
          (slabs[1] - slabs[0]) * rates[0] +
          (slabs[2] - slabs[1]) * rates[1] +
          (slabs[3] - slabs[2]) * rates[2] +
          (taxableIncome - slabs[3]) * rates[3];
      } else {
        tax =
          (slabs[1] - slabs[0]) * rates[0] +
          (slabs[2] - slabs[1]) * rates[1] +
          (slabs[3] - slabs[2]) * rates[2] +
          (slabs[4] - slabs[3]) * rates[3] +
          (taxableIncome - slabs[4]) * rates[4];
      }
      tax = tax + tax * 0.04;
      return tax;
    },
    reset() {
      this.isCalculated = false;
      this.grossIncome = "";
      this.deductions = "";
      this.deductions_80g = "";
      this.results = {};
    },
    back() {
      this.isCalculated = false;
    },
  },
};
</script>