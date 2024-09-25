<template>
  <div class="accordion w-full rounded-lg p-4">
    <div
      v-for="(faq, index) in faqs"
      :key="index"
      class="faq-item rounded-lg"
    >
      <button
        @click="toggleFaq(index)"
        class="faq-question rounded-lg w-full text-left py-4 px-6 flex justify-between items-center focus:outline-none"
      >
        <span
          :class="{
            'text-blue-900': faq.active,
            'text-gray-700': !faq.active,
            'font-semibold': faq.active,
            'transition-colors duration-300': true,
          }"
        >
          {{ faq.question }}
        </span>
        <span
          :class="{
            'transform rotate-180': faq.active,
            'transition-transform duration-300': true,
            'text-orange-400': faq.active,
            'text-gray-600': !faq.active,
          }"
        >
          {{ faq.active ? '-' : '+' }}
        </span>
      </button>
      <div
        v-show="faq.active"
        class="faq-answer w-full px-6 py-4 text-gray-700 transition-all duration-300 bg-white"
      >
        {{ faq.answer }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    faqs: {
      type: Array,
      required: true
    }
  },
  methods: {
    toggleFaq(index) {
      this.faqs.forEach((faq, i) => {
        if (i === index) {
          faq.active = !faq.active;
        } else {
          faq.active = false;
        }
      });
    }
  }
};
</script>

<style scoped>
.faq-item {
  cursor: pointer;
  margin-bottom: 4px; /* Add gap between items */
}
.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
}
.faq-answer {
  background-color: #E5E7EB;
  overflow: hidden; /* Prevent the answer from taking more width than its parent */
  text-overflow: ellipsis; /* Add ellipsis if the text overflows */
  border-radius: 10px;
}
</style>
