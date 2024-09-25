<template>
  <div class="w-full flex flex-wrap gap-4 p-4">
    <!-- Input Component Start -->
    <div
      class="thin-scrollbar flex-1 min-w-full max-w-[40rem] max-h-[45rem] lg:min-w-0 bg-blue p-8 sm:p-12 lg:ml-12 md:h-[70vh] lg:h-[82vh] shadow-md rounded-xl overflow-auto thin-scrollbar flex flex-col justify-between"
    >
      <div
        v-if="!showResults"
        class="flex flex-col items-center h-full mb-20 lg:px-12"
      >
        <div class="flex justify-center">
          <h2 class="text-xl lg:text-3xl mb-10 headerTitle">
            FIRE <span class="text-orange-500"> Calculator</span>
          </h2>
        </div>

        <div class="flex-grow w-full">
          <div class="space-y-10 mb-5">
            <div class="input-container">
              <input
                id="monthly-expense"
                type="number"
                placeholder=" "
                required
                v-model.number="monthlyExpense"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <label for="monthly-expense" class="label">
                Monthly Expenses (₹)
              </label>
            </div>
            <div class="input-container">
              <input
                id="current-age"
                type="number"
                required
                placeholder=" "
                v-model.number="currentAge"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <label for="current-age" class="label"> Current age </label>
            </div>
            <div class="input-container">
              <input
                id="retirement-age"
                type="number"
                required
                placeholder=" "
                v-model.number="retirementAge"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <label for="retirement-age" class="label"> Retirement Age </label>
            </div>
            <div class="input-container">
              <input
                id="inflation-rate"
                type="number"
                required
                placeholder=" "
                v-model.number="inflationRate"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <label for="inflation-rate" class="label">
                Assumed Inflation Rate
              </label>
            </div>
            <div class="input-container">
              <input
                id="coast-FireAge"
                type="number"
                required
                placeholder=" "
                v-model.number="coastFireAge"
                class="input block w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <label for="coast-FireAge" class="label">
                Desired Coast FIRE age
              </label>
            </div>
          </div>
        </div>

        <div class="flex w-full gap-4 pb-12">
          <button
            @click="calculateFIRE"
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
        <ToolResult :labels="resultsLabels"></ToolResult>
        <div>
          <div class="flex justify-between">
            <button
              @click="resetFields"
              class="w-full mr-2 mt-6 h-fit py-3 px-7 mb-6 outline-btn"
            >
              Re-Calculate
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
  </div>
</template>

<script>
import numberToWords from "number-to-words";
export default {
  data() {
    return {
      monthlyExpense: 3000,
      currentAge: 30,
      retirementAge: 60,
      inflationRate: 10,
      coastFireAge: 40,
      fireNumber: null,
      yearsToFIRE: null,
      showResults: false,
      doughnutChartData: null,
      LineChartData: null,
      resultsLabels: [],
      showModal: false,
      faqs: [
        {
          question: "What is a FIRE calculator?",
          answer:
            "A FIRE calculator estimates the amount you need to achieve financial independence based on your savings rate and expected returns.",
          active: false,
        },
        {
          question: "How is FIRE calculated?",
          answer:
            "FIRE is calculated by determining how much you need to save to cover your annual expenses indefinitely.",
          active: false,
        },
        {
          question: "How accurate is the FIRE calculator?",
          answer:
            "The calculator provides estimates; actual amounts may vary based on your personal circumstances and market conditions.",
          active: false,
        },
      ],
    };
  },
  computed: {
    isFormValid() {
      return (
        this.monthlyExpense > 0 &&
        this.currentAge > 0 &&
        this.retirementAge > 0 &&
        this.inflationRate > 0 &&
        this.coastFireAge >= 0
      );
    },
  },
  methods: {
    calculateFIRE() {
      const monthlyExpense = parseFloat(this.monthlyExpense || 0);
      const currentAge = parseFloat(this.currentAge || 0);
      const retirementAge = parseFloat(this.retirementAge || 0);
      const inflationRate = parseFloat(this.inflationRate || 0) / 100;
      const coastFireAge = parseFloat(this.coastFireAge || 0);

      const coast_fire = this.calculateCoastFIRE(
        monthlyExpense,
        currentAge,
        inflationRate * 100,
        coastFireAge,
        12.8,
        7,
        6
      );
      const lean_fire = this.calculateLeanFIRE(
        monthlyExpense,
        currentAge,
        inflationRate * 100,
        retirementAge,
        12.8,
        7,
        6
      );
      // Define withdrawal rate for Fat FIRE (e.g., 3.5%)
      const fatFireWithdrawalRate = 0.035;

      // Calculate annual expenses at current age
      const annualExpenseAtCurrentAge = monthlyExpense * 12;

      // Calculate years until retirement
      const yearsUntilRetirement = retirementAge - currentAge;

      // Calculate annual expenses at retirement age
      const annualExpensesAtRetirementAge =
        annualExpenseAtCurrentAge *
        Math.pow(1 + inflationRate, yearsUntilRetirement);

      // Calculate FIRE number using the 25x rule
      const fireNumber = annualExpensesAtRetirementAge * 25;

      // Calculate Fat FIRE number
      const fatFireNumber =
        annualExpensesAtRetirementAge / fatFireWithdrawalRate;

      // Calculate years to FIRE
      const yearlySavings =
        monthlyExpense * currentAge + coastFireAge * inflationRate;
      const yearsToFIRE =
        Math.log(fireNumber / (coastFireAge + yearlySavings)) /
        Math.log(1 + inflationRate);

      this.fireNumber = fireNumber.toFixed(2);
      this.yearsToFIRE = Math.ceil(yearsToFIRE);

      this.showResults = true;

      this.resultsLabels = [
        {
          label: "Expense Today",
          value: `₹ ${annualExpenseAtCurrentAge.toFixed(2)}`,
        },
        {
          label: `Expense at ${retirementAge}`,
          value: `₹ ${annualExpensesAtRetirementAge.toFixed(2)}`,
        },
        { label: "FIRE", value: `₹ ${this.fireNumber}` },
        { label: "Coast FIRE", value: `₹ ${coast_fire.toFixed(2)}` },
        // { label: "Lean FIRE", value: `₹ ${lean_fire.toFixed(2)}` },
        // { label: `Fat FIRE`, value: `₹ ${fatFireNumber.toFixed(2)}` },
      ];

      this.doughnutChartData = {
        datasets: [
          {
            data: [fireNumber, coastFireAge],
            backgroundColor: ["#003366", "#FB923C"],
          },
        ],
        labels: ["FIRE Number", "Current Savings"],
      };

      // Prepare data for Line chart
      this.LineChartData = {
        labels: ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"], // Adjust as needed
        datasets: [
          {
            label: "Annual Income",
            borderColor: "#003366",
            backgroundColor: "rgba(0, 51, 102, 0.2)",
            data: [monthlyExpense / 4, monthlyExpense / 2, monthlyExpense], // Adjust data as needed
          },
          {
            label: "Annual Expenses",
            borderColor: "#FB923C",
            backgroundColor: "rgba(251, 146, 60, 0.2)",
            data: [retirementAge / 4, retirementAge / 2, retirementAge], // Adjust data as needed
          },
        ],
      };
    },
    calculateCoastFIRE(
      currentExpenses,
      currentAge,
      inflationRate,
      coastFIREAge,
      annualReturn,
      postRetirementReturn,
      postRetirementInflation
    ) {
      // Calculate future monthly expenses at the Coast FIRE age
      const yearsUntilCoastFIRE = coastFIREAge - currentAge;
      const futureMonthlyExpensesAtCoastFIRE =
        currentExpenses *
        Math.pow(1 + inflationRate / 100, yearsUntilCoastFIRE);

      // Convert future monthly expenses to annual expenses
      const futureAnnualExpensesAtCoastFIRE =
        futureMonthlyExpensesAtCoastFIRE * 12;

      // Calculate the real return during retirement
      const realReturnDuringRetirement =
        postRetirementReturn / 100 - postRetirementInflation / 100;

      // Adjusted calculation of the corpus needed at the Coast FIRE age
      const corpusNeededAtCoastFIRE =
        futureAnnualExpensesAtCoastFIRE / realReturnDuringRetirement;

      // Calculate the Coast FIRE corpus needed at the current age with adjusted annual return
      const coastFIRECorpus =
        corpusNeededAtCoastFIRE /
        Math.pow(1 + annualReturn / 100, yearsUntilCoastFIRE);

      return coastFIRECorpus;
    },
    calculateLeanFIRE(
      currentExpenses,
      currentAge,
      inflationRate,
      retirementAge,
      annualReturn,
      postRetirementReturn,
      postRetirementInflation
    ) {
      // Calculate the number of years until retirement
      const yearsUntilRetirement = retirementAge - currentAge;

      // Calculate future monthly expenses at retirement age
      const futureMonthlyExpensesAtRetirement =
        currentExpenses *
        Math.pow(1 + inflationRate / 100, yearsUntilRetirement);

      // Convert future monthly expenses to annual expenses
      const futureAnnualExpensesAtRetirement =
        futureMonthlyExpensesAtRetirement * 12;

      // Calculate the real return during retirement
      const realReturnDuringRetirement =
        postRetirementReturn / 100 - postRetirementInflation / 100;

      // Calculate the corpus needed at retirement age
      const requiredCorpus =
        futureAnnualExpensesAtRetirement / realReturnDuringRetirement;

      // Calculate the Lean FIRE corpus needed at the current age
      const leanFIRECorpus =
        requiredCorpus / Math.pow(1 + annualReturn / 100, yearsUntilRetirement);

      return leanFIRECorpus;
    },
    resetFields() {
      this.monthlyExpense = null;
      this.currentAge = null;
      this.retirementAge = null;
      this.inflationRate = null;
      this.coastFireAge = null;
      this.fireNumber = null;
      this.yearsToFIRE = null;
      this.showResults = false;
      this.doughnutChartData = null;
      this.LineChartData = null;
      this.resultsLabels = [];
    },
    back() {
      this.showResults = false;
    },
  },
};
</script>
