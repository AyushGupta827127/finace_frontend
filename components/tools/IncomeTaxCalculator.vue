<template>
  <div class="w-full flex flex-wrap gap-4 p-4">
    <!-- Input Component Start -->
    <div
      class="thin-scrollbar flex-1 min-w-full max-w-[40rem] max-h-[45rem] lg:min-w-0 bg-blue p-8 sm:p-12 lg:ml-12 md:h-[70vh] lg:h-[82vh] shadow-md rounded-xl overflow-auto thin-scrollbar flex flex-col justify-between"
    >
      <div v-if="!isCalculated" class="flex flex-col items-center h-full lg:px-12">
        <div class="flex justify-center">
            <h2 class="text-xl lg:text-3xl mb-10 headerTitle">
            INCOME TAX <span class="text-orange-500"> Calculator</span>
          </h2>
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
                v-model="ResidentialSatus"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="Resident">Individual</option>
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
                v-model="Bogus"
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
                id="gross-income"
                type="number"
                required
                placeholder=" "
                v-model.number="grossIncome"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <label for="gross-income" class="label"
                >Estimated Annual Income</label
              >
            </div>
            <div class="input-container">
              <input
                id="deductions"
                type="number"
                placeholder=" "
                v-model.number="deductions"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <label for="deductions" class="label">Except 80g Deductions :</label>
            </div>
             <div class="input-container">
              <input
                id="deductions_80g"
                type="number"
                placeholder=" "
                v-model.number="deductions_80g"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <label for="deductions" class="label">80G Deductions :</label>
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
      AssessmentYear: "2024",
      ResidentialSatus: "Resident",
      ageGroup: "below60",
      grossIncome: "",
      deductions: "",
      deductions_80g: "",
      showModal: false,
      reportData: [],
      doughnutChartData: null,
      LineChartData: null,
      isCalculated: false,
      resultsLabels: [],
      Bogus: "Resident",
      faqs: [
        {
          question: "What is an Income Tax calculator?",
          answer:
            "An Income Tax calculator estimates your tax liability based on income and deductions.",
          active: false,
        },
        {
          question: "How is Income Tax calculated?",
          answer:
            "Income Tax is calculated based on taxable income, applicable tax slabs, and eligible deductions.",
          active: false,
        },
        {
          question: "What information do I need to use the calculator?",
          answer:
            "You need details like income, deductions, exemptions, and tax-saving investments to use the calculator.",
          active: false,
        },
        {
          question: "How accurate is the Income Tax calculator?",
          answer:
            "The calculator provides estimates; actual tax liability may vary based on final assessments and regulations.",
          active: false,
        },
      ],
    };
  },
  computed: {
    isNonResident() {
      return (
        this.ResidentialSatus !== "Resident" && this.ResidentialSatus !== "HUF"
      );
    },
    isNonIndividualTaxPayer() {
      return this.ResidentialSatus !== "Resident";
    },
  },
  watch: {
    ResidentialSatus() {
      if (this.ResidentialSatus === "Foreign Company") {
        this.Bogus = "NR";
      } else {
        this.Bogus = "Resident"; // Reset to default if the category is changed
      }
    },
  },
  methods: {
    calculateTaxableIncome() {
      return this.grossIncome - this.deductions - this.deductions_80g;
    },
    calculateFirmTax() {
      const taxableIncome = this.calculateTaxableIncome();
      let tax = 0;
      tax = taxableIncome * 0.3;
      tax = tax + tax * 0.04; // 4% education & hospitality on the tax
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
      tax = tax + tax * 0.04; // 4% education & hospitality on the tax
      return tax;
    },
    calculateOldRegimeTax() {
      const taxableIncome = this.calculateTaxableIncome();
      if (taxableIncome <= 500000) {
        return 0;
      }
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
      // const taxableIncome = this.calculateTaxableIncome();
      const taxableIncome = this.grossIncome;
      if (taxableIncome <= 700000) {
        return 0;
      }
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
    calculateTax() {
      this.isCalculated = true;

      if (
        this.ResidentialSatus === "Resident" ||
        this.ResidentialSatus === "HUF"
      ) {
        let oldRegimeTax = 0;
        let newRegimeTax = 0;
        oldRegimeTax = this.calculateOldRegimeTax();
        newRegimeTax = this.calculateNewRegimeTax();
        // if (this.Bogus === "NR") {
        // ();
        //   newRegimeTax = this.calculateNewRegimeTax();
        // }//   oldRegimeTax = this.calculateOldRegimeTax_nonResident();
        //   newRegimeTax = this.calculateNewRegimeTax_nonResident();
        // } else {
        //   oldRegimeTax = this.calculateOldRegimeTax
        let totalTax = Math.min(oldRegimeTax, newRegimeTax);
        console.log(oldRegimeTax);
        this.doughnutChartData = {
          labels: ["Old Regime Tax", "New Regime Tax"],
          datasets: [
            {
              data: [oldRegimeTax, newRegimeTax],
              backgroundColor: ["#003366", "#FB923C"],
              hoverBackgroundColor: ["#003366", "#FB923C"],
            },
          ],
        };
        this.LineChartData = {
          labels: ["Old Regime Tax", "New Regime Tax"],
          datasets: [
            {
              label: "Tax Comparison",
              backgroundColor: "rgba(255, 165, 0, 0.2)", // Orange
              borderColor: "rgba(255, 165, 0, 1)", // Orange
              pointBackgroundColor: "rgba(0, 0, 255, 1)", // Blue
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(0, 0, 255, 1)", // Blue
              data: [oldRegimeTax, newRegimeTax],
            },
          ],
        };

        this.resultsLabels = [
          { label: "Old Regime Tax", value: oldRegimeTax },
          { label: "New Regime Tax", value: newRegimeTax },
          { label: "Total Saving", value: (oldRegimeTax-newRegimeTax) },
        ];
      } else if (this.ResidentialSatus === "AOP/BOI") {
        const taxableIncome = this.calculateTaxableIncome();
        let taxableAmount = this.calculateOldRegimeTax();

        this.doughnutChartData = {
          labels: ["Taxable Income", "Tax Amount"],
          datasets: [
            {
              data: [taxableIncome, taxableAmount],
              backgroundColor: ["#003366", "#FB923C"],
              hoverBackgroundColor: ["#003366", "#FB923C"],
            },
          ],
        };
        this.LineChartData = {
          labels: ["Taxable Income", "Tax Amount"],
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
          { label: "Total Deduction", value: this.deductions },
          { label: "Total Tax Payable", value: taxableAmount },
        ];
      } else {
        let taxableAmount = 0;
        const taxableIncome = this.calculateTaxableIncome();
        if (
          this.ResidentialSatus === "Foreign Company" ||
          this.ResidentialSatus === "Trust"
        ) {
          taxableAmount = this.calculateTrustTax();
        } else {
          taxableAmount = this.calculateFirmTax();
        }
        this.doughnutChartData = {
          labels: ["Total Amount", "Tax Amount"],
          datasets: [
            {
              data: [taxableIncome, taxableAmount],
              backgroundColor: ["#003366", "#FB923C"],
              hoverBackgroundColor: ["#003366", "#FB923C"],
            },
          ],
        };
        this.LineChartData = {
          labels: ["Total Amount", "Tax Amount"],
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
          { label: "Total Amount", value: taxableIncome },
          { label: "Total Deduction", value: this.deductions },
          { label: "Total Tax Payable", value: taxableAmount },
        ];
      }
    },
    reset() {
      this.AssessmentYear = "2023";
      this.ResidentialSatus = "Resident";
      this.ageGroup = "below60";
      this.grossIncome = "";
      this.deductions = "";
      this.deductions_80g = "";
      this.showModal = false;
      this.reportData = [];
      this.doughnutChartData = null;
      this.LineChartData = null;
      this.isCalculated = false;
      this.resultsLabels = [];
      this.Bogus = "Resident";
    },
    back() {
      this.isCalculated = false;
      this.doughnutChartData = null;
      this.LineChartData = null;
    },
  },
};
</script>