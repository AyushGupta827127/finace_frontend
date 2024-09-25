<template>
  <div class="">
    <div class="flex justify-center">
      <div
        class="bg-white border border-gray-200 shadow-md rounded-lg p-2 md:p-6 max-w-lg w-full"
      >
        <div class="font-semibold mb-4">
          <div
            v-for="(item, index) in labels"
            :key="index"
            class="flex justify-between mb-2 border border-gray-200 shadow-md rounded-lg py-3 px-1 md:px-3 max-w-lg w-full"
          >
            <span class="text-blue-900">{{ item.label }} </span>
            <span>{{ formatNumber(item.value) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    labels: {
      type: Array,
      required: true,
      validator: (value) => {
        // Validate if each item in the array has 'label' and 'value' properties
        return value.every(
          (item) => item.hasOwnProperty("label") && item.hasOwnProperty("value")
        );
      },
    },
  },
  methods: {
    // Format the value to Indian numbering system
    formatNumber(value) {
      // Ensure the value is a string
      value = value.toString();
      if (value.includes("%")) return value;
      const hasSymbol = value.includes("₹");
      const numericValue = value.replace(/[^\d.]/g, "");
      const [integer, decimal] = numericValue.split(".");

      // Split the integer part into groups
      const lastThreeDigits = integer.slice(-3);
      const otherDigits = integer.slice(0, -3);
      const formattedInteger =
        otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",") +
        (otherDigits ? "," : "") +
        lastThreeDigits;
      const formattedNumber = formattedInteger + (decimal ? `.${decimal}` : "");
      return hasSymbol ? `₹ ${formattedNumber}` : formattedNumber;
    },
  },
};
</script>

<style scoped>
/* Optional: Add scoped styles if necessary */
</style>
