<template>
  <div class="w-full flex flex-wrap gap-4 p-4">
    <!-- Input Component Start -->
    <div
      class="thin-scrollbar flex-1 min-w-full max-w-[40rem] max-h-[45rem] lg:min-w-0 bg-blue p-8 sm:p-12 lg:ml-12 md:h-[70vh] lg:h-[82vh] shadow-md rounded-xl overflow-auto thin-scrollbar flex flex-col justify-between">
      <div v-if="!showResults" class="flex flex-col items-center h-full mb-20 lg:px-12">
        <div class="flex justify-center">
          <h2 class="text-xl lg:text-3xl mb-10 headerTitle">
            80G <span class="text-orange-500"> Calculator</span>
          </h2>
        </div>

        <div class="flex-grow w-full">
          <div class="space-y-10 mb-5">
            <div>
              <label for="employeeType" class="block text-sm sm:text-sm ml-2 text-gray-400 mb-2">Donation Type</label>
              <div class="relative">
                <button @click="toggleDropdown" class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex justify-between items-center">
                  {{ selectedOption.label }}
                  <span class="material-icons">arrow_drop_down</span>
                </button>
                <div v-if="dropdownOpen" class="absolute z-10 bg-white border border-gray-300 rounded-md w-full mt-1 max-h-60 overflow-auto">
                  <div v-for="option in dropdownOptions" :key="option.id" class="px-3 py-2 font-bold hover:bg-gray-100 cursor-pointer" @click="selectOption(option)">
                    {{ option.label }}
                    <div v-if="option.items" class="ml-4">
                      <div v-for="item in option.items" :key="item" class="px-3 py-2 hover:bg-gray-200 cursor-pointer font-normal">
                        {{ item }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="input-container">
              <input id="basic-pay" type="number" placeholder=" " required v-model.number="basicPay"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              <label for="basic-pay" class="label">
                {{ employeeType === "private-not-covered" ? "Gross Total Income (₹)" : "Gross Total Income (₹)" }}
              </label>
            </div>
            <div class="input-container">
              <input id="da" type="number" required placeholder=" " v-model.number="ea"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              <label for="da" class="label">
                Chapter VI-A Deductions except 80G </label>
            </div>
            <div class="input-container">
              <input id="da" type="number" required placeholder=" " v-model.number="fa"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              <label for="da" class="label">
                Exempt Income </label>
            </div>
            <div class="input-container">
              <input id="da" type="number" required placeholder=" " v-model.number="ga"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              <label for="da" class="label">
                Income chargeable to tax at special rate </label>
            </div>
            <div class="input-container">
              <input id="da" type="number" required placeholder=" " v-model.number="da"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              <label for="da" class="label">
                Donations</label>
            </div>
          </div>
        </div>

        <div class="flex w-full gap-4 pb-12">
          <button @click="calculateGratuity" :disabled="!isFormValid" :class="{
            'flex-1 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg': true,
            'cursor-not-allowed opacity-50': !isFormValid,
          }">
            Calculate
          </button>
          <button @click="resetFields" class="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg outline-btn">
            Reset
          </button>
        </div>
      </div>

      <!-- Result -->
      <div v-else class="text-black">
        <div class="flex">
          <button @click="back"
            class="bg-transparent border-[1.5px] border-gray-100 shadow-sm rounded-full p-2 flex items-center justify-center"
            style="width: 48px; height: 48px">
            <span class="material-icons text-gray-600">arrow_back</span>
          </button>
          <h1 class="text-3xl mx-auto font-bold text-center mb-8">Result</h1>
        </div>
        <ToolResult :labels="resultsLabels"></ToolResult>
        <div>
          <div class="flex justify-between">
            <button @click="resetFields" class="w-full mr-2 mt-6 h-fit py-3 px-7 mb-6 outline-btn">
              Re-Calculate
            </button>
          </div>
        </div>
      </div>
      <!-- Result End -->
    </div>
    <!-- Input Component End -->

    <!-- Chart -->
    <div class="flex bg-white py-6 rounded-xl flex-col pt-0 mt-8 lg:mt-0 w-full lg:w-fit">
      <ToolCalculatorDetails :chartData="doughnutChartData" :lineChartData="LineChartData" :faqs="faqs" />
    </div>
    <!-- Chart End -->
  </div>
</template>

<script>
import numberToWords from "number-to-words";
export default {
  data() {
    return {
      basicPay: null,
      da: null,
      years: null,
      months: null,
      gratuity: null,
      gratuitty: null,
      gratuittty: null,
      employeeType: "government", // Default selection
      showResults: false,
      doughnutChartData: null,
      LineChartData: null,
      reportData: [],
      resultsLabels: [],
      showModal: false,
      faqs: [
        {
          question: "What is a 80G calculator?",
          answer:
            "A 80G calculator estimates the 80G amount based on your Gross Total Income and Donation.",
          active: false,
        },
        {
          question: "How is 80G calculated?",
          answer:
            "80G is calculated based on your Gross Total Income and Donation.",
          active: false,
        },
        {
          question: "How accurate is the 80G calculator?",
          answer:
            "The calculator provides estimates; actual amounts may vary based on company policies and regulations.",
          active: false,
        },
      ],
      dropdownOpen: false,
      selectedOption: { id: 1, label: "List of Donations Eligible for 100% Deduction", items: [
        "National Defence Fund",
        "Prime Minister’s National Relief Fund",
        "National Foundation for Communal Harmony",
        "University Institution of National Eminence",
        "Zila Saksharta Samiti",
        "State Govt Fund for Medical Relief",
        "National Illness Assistance Fund",
        "National/State Blood Transfusion Council",
        "National Trust for Welfare",
        "National Sports Fund",
        "National Cultural Fund",
        "Technology Development and Application",
        "National Children’s Fund",
        "CM_relief_fund",
        "Army, Navy, Air Force Welfare Fund",
        "AP_cyclone_relief_fund",
        "Maharashtra CM Relief Fund, 1993",
        "CM’s Earthquake Relief Fund, Maharashtra",
        "Gujarat State Earthquake Relief Fund",
        "80G Fund for Gujarat Earthquake Relief",
        "PM’s Armenia Earthquake Relief Fund",
        "Africa Fund",
        "Swachh Bharat Kosh",
        "Clean Ganga Fund",
        "Drug_abuse_control_fund"
      ]},
    };
  },
  computed: {
    formattedGratuity() {
      if (this.gratuity === null) return "";
      return new Intl.NumberFormat("en-IN").format(this.gratuity);
    },
    isFormValid() {
      return (
        this.basicPay > 0 && this.da >= 0 
      );
    },
    dropdownOptions() {
      return [
        {
          id: 1,
          label: "List of Donations Eligible for 100% Deduction",
          items: [
            "National Defence Fund",
            "Prime Minister’s National Relief Fund",
            "National Foundation for Communal Harmony",
            "University Institution of National Eminence",
            "Zila Saksharta Samiti",
            "State Govt Fund for Medical Relief",
            "National Illness Assistance Fund",
            "National/State Blood Transfusion Council",
            "National Trust for Welfare",
            "National Sports Fund",
            "National Cultural Fund",
            "Technology Development and Application",
            "National Children’s Fund",
            "CM_relief_fund",
            "Army, Navy, Air Force Welfare Fund",
            "AP_cyclone_relief_fund",
            "Maharashtra CM Relief Fund, 1993",
            "CM’s Earthquake Relief Fund, Maharashtra",
            "Gujarat State Earthquake Relief Fund",
            "80G Fund for Gujarat Earthquake Relief",
            "PM’s Armenia Earthquake Relief Fund",
            "Africa Fund",
            "Swachh Bharat Kosh",
            "Clean Ganga Fund",
            "Drug_abuse_control_fund"
          ]
        },
        {
          id: 2,
          label: "List of Donations Eligible for 100% Deduction Subject to 10% of AGTI",
          items: [
            "Indira Gandhi Memorial Trust",
            "Rajiv Gandhi Foundation",
            "National Literary Fund",
            "Kerala State Government’s Relief Fund"
          ]
        },
        {
          id: 3,
          label: "List of Donations Eligible for 50% Deduction Subject to 10% of AGTI",
          items: [
            "Children’s Fund",
            "Educational Fund",
            "Relief Fund for Disabled",
            "Food Relief Fund",
            "Medical Relief Fund"
          ]
        }
      ];
    }
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.dropdownOpen = false;
    },
      convertNumberToWords(num) {
      if (num === null || num === undefined) return "";
      // Convert number to words
      let words = numberToWords.toWords(num);

      // Capitalize the first letter
      words = words.charAt(0).toUpperCase() + words.slice(1);

      return words;
    },

   

    calculateGratuity() {
      const basicPay = parseFloat(this.basicPay || 0);
      const da = parseFloat(this.da || 0);
      const ea = parseFloat(this.ea || 0);
      const fa = parseFloat(this.fa || 0);
      const ga = parseFloat(this.ga || 0);
      const years = parseInt(this.years || 0);
      const months = parseInt(this.months || 0);
      const adjustedYears = months >= 7 ? years + 1 : years;
      const totalMonths = adjustedYears * 12;

      switch (this.employeeType) {
        case "government":
          this.calculateGovernmentGratuity(basicPay, da, ea,fa,ga,totalMonths);
          break;
        case "private-covered":
          this.calculatePrivateCoveredGratuity(basicPay, da, ea,fa,ga,totalMonths);
          break;
        case "private-not-covered":
          this.calculatePrivateNotCoveredGratuity(basicPay, da, ea,fa,ga,totalMonths);
          break;
        default:
          this.gratuity = null;
      }

      this.showResults = true;

      this.resultsLabels = [
        { label: "Total Donation", value: `₹ ${this.da}` },
        { label: "Adjustable Total Income", value: `₹ ${this.gratuitty}` },
        { label: "10% of Adjustable Total Income", value: `₹ ${this.gratuittty}` },
        { label: "Donation Deductable", value: `₹ ${(this.gratuitty-this.gratuity)}` }
      ];

      this.doughnutChartData = {
        datasets: [
          {
            data: [basicPay, da],
            backgroundColor: ["#003366", "#FB923C"],
          },
        ],
        labels: ["Gross Total Income", "Donations"],
      };

      // Prepare data for Line chart
      this.LineChartData = {
        labels: ["1", "2", "3", "4", "5"], // Adjust as needed
        datasets: [
          {
            label: "Gross Total Income",
            borderColor: "#003366",
            backgroundColor: "rgba(0, 51, 102, 0.2)",
            data: [basicPay / 4, basicPay / 2, basicPay], // Adjust data as needed
          },
          {
            label: "Donation",
            borderColor: "#FB923C",
            backgroundColor: "rgba(251, 146, 60, 0.2)",
            data: [da / 4, da / 2, da], // Adjust data as needed
          },
        ],
      };
    },
    calculateGovernmentGratuity(basicPay, da, ea,fa,ga,totalMonths) {
      basicPay=basicPay-ea-fa-ga;
      const gratuityAmount = basicPay - da;
      this.gratuity = gratuityAmount.toFixed(2);
      this.gratuitty = basicPay.toFixed(2);
      this.gratuittty = (basicPay/10).toFixed(2);
    },
    calculatePrivateCoveredGratuity(basicPay, da, ea,fa,ga,totalMonths) {
      let gratuityAmount=0;
      basicPay=basicPay-ea-fa-ga;
      this.gratuitty = basicPay.toFixed(2);
      this.gratuittty = (basicPay/10).toFixed(2);
      if(basicPay/10>da){
    gratuityAmount = basicPay - da;
      }else{
       gratuityAmount = basicPay - basicPay/10;
      }
      this.gratuity = gratuityAmount.toFixed(2);
    },
    calculatePrivateNotCoveredGratuity(basicPay, da, ea,fa,ga,totalMonthss) {
      let gratuityAmount=0;
      basicPay=basicPay-ea-fa-ga;
      this.gratuitty = basicPay.toFixed(2);
      this.gratuittty = (basicPay/10).toFixed(2);
      if(basicPay/10>da/2){
    gratuityAmount = basicPay - da/2;
      }else{
       gratuityAmount = basicPay - basicPay/10;
      }
      this.gratuity = gratuityAmount.toFixed(2);
    },
    resetFields() {
      this.basicPay = null;
      this.da = null;
      this.years = null;
      this.months = null;
      this.gratuity = null;
      this.gratuitty = null;
      this.gratuittty = null;
      this.showResults = false;
    },
    back() {
      this.showResults = false;
    },
  },
};
</script>

<style scoped>

.dropdown-container {
  position: relative;
}

.dropdown-toggle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  cursor: pointer;
}

.arrow-icon {
  margin-left: 0.5rem;
}

.dropdown-options {
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;
}

.dropdown-item {
  padding: 0.5rem;
  cursor: pointer;
}

.dropdown-item:hover {
  background-color: #f0f0f0;
}
</style>
