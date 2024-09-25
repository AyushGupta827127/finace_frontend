<template>
  <div class=" p-7 mt-8 font-medium"> 
       <!-- Header Section with Text and Linked Image -->
    <header class="w-full h-auto flex flex-col lg:flex-row justify-evenly items-center px-4 lg:px-10">
      <!-- Left Side: Case Studies Text -->
      <div class="text-center lg:text-left mb-4 lg:mb-0 ml-10">
        <h1 class="text-2xl lg:text-4xl font-bold mb-4 ">
          <span class="lg: lg:ml-0 ml-44 text-blue-900">Frequently Asked</span> 
          <span class="ml-2 text-orange-500">Questions</span>
        </h1>
        <span class="block text-xl">The master key of knowledge is, indeed, a persistent and frequent questioning.</span>
      </div>

      <!-- Right Side: Linked Image -->
        <img src="https://img.freepik.com/premium-vector/frequently-asked-questions-flat-illustration_773186-525.jpg?ga=GA1.1.1217921431.1721647597" alt="Header Image" class="h-full object-contain mx-auto" />
    
    </header>

    <section class="question-section mt-20">
      <div class="question-form">
        <label for="question-input">Ask your questions</label>
        <input type="text" id="question-input" class="mr-5" v-model="question" placeholder="Type your question here" />
        <button @click="searchQuestion" >Send</button>
        <p v-if="sentMessage" class="sent-message">{{ sentMessage }}</p>
      </div>
    </section>

    <section class="designer-qna mt-20">
      <h2>Questions & Answers</h2>
      <div class="qna-container">
        <div v-for="(qa, index) in displayedQnA" :key="index" class="qa-item  h-[250px] overflow-y-auto thin-scrollbar">
          <h3 class="question">{{ qa.question }}</h3>
          <p class="answer ">{{ qa.answer }}</p>
        </div>
      </div>
      <button v-if="showMore" @click="toggleShowMore" class="show-more-btn">Show More</button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'FaqBanner',
  data() {
    return {
      quotes: [
        '“The future belongs to those who believe in the beauty of their dreams.” '
      ],
      question: '',
      designerQnA: [
        { question: 'What inspires your designs?', answer: 'I find inspiration in nature and contemporary art.Lorem ipsum dolor sit amet consectetur adipisicing elit. In doloribus cum eius repellendus, voluptatem, unde exercitationem adipisci fuga magnam, nihil aspernatur aliquam autem saepe laboriosam atque quia! Rerum, vitae sit! In doloribus cum eius repellendus, voluptatem, unde exercitationem adipisci fuga magnam, nihil aspernatur aliquam autem saepe laboriosam atque quia! Rerum, vitae sit! ' },
        { question: 'How do you start a new project?', answer: 'I begin by researching trends and brainstorming ideas.Lorem ipsum dolor sit amet consectetur adipisicing elit. In doloribus cum eius repellendus, voluptatem, unde exercitationem adipisci fuga magnam, nihil aspernatur aliquam autem saepe laboriosam atque quia! Rerum, vitae sit!' },
        { question: 'What tools do you use for design?', answer: 'I primarily use Adobe Creative Suite and Sketch.Lorem ipsum dolor sit amet consectetur adipisicing elit. In doloribus cum eius repellendus, voluptatem, unde exercitationem adipisci fuga magnam, nihil aspernatur aliquam autem saepe laboriosam atque quia! Rerum, vitae sit!' },
        { question: 'Can you describe your design process?', answer: 'I follow a structured process: research, ideation, prototyping, and testing.Lorem ipsum dolor sit amet consectetur adipisicing elit. In doloribus cum eius repellendus, voluptatem, unde exercitationem adipisci fuga magnam, nihil aspernatur aliquam autem saepe laboriosam atque quia! Rerum, vitae sit!' },
        { question: 'How do you handle design critiques?', answer: 'I view critiques as opportunities for growth and refinement.Lorem ipsum dolor sit amet consectetur adipisicing elit. In doloribus cum eius repellendus, voluptatem, unde exercitationem adipisci fuga magnam, nihil aspernatur aliquam autem saepe laboriosam atque quia! Rerum, vitae sit!' },
        { question: 'What trends are you excited about?', answer: 'I’m excited about the rise of minimalistic designs and sustainable materials.Lorem ipsum dolor sit amet consectetur adipisicing elit. In doloribus cum eius repellendus, voluptatem, unde exercitationem adipisci fuga magnam, nihil aspernatur aliquam autem saepe laboriosam atque quia! Rerum, vitae sit!' },
        { question: 'Do you work with other designers?', answer: 'Yes, collaboration with other designers often leads to innovative results.Lorem ipsum dolor sit amet consectetur adipisicing elit. In doloribus cum eius repellendus, voluptatem, unde exercitationem adipisci fuga magnam, nihil aspernatur aliquam autem saepe laboriosam atque quia! Rerum, vitae sit!' },
        { question: 'What advice would you give to aspiring designers?', answer: 'Keep experimenting and don’t be afraid to take risks.Lorem ipsum dolor sit amet consectetur adipisicing elit. In doloribus cum eius repellendus, voluptatem, unde exercitationem adipisci fuga magnam, nihil aspernatur aliquam autem saepe laboriosam atque quia! Rerum, vitae sit!' },
        { question: 'How do you stay updated with industry trends?', answer: 'I regularly attend design conferences and follow influential designers on social media.Lorem ipsum dolor sit amet consectetur adipisicing elit. In doloribus cum eius repellendus, voluptatem, unde exercitationem adipisci fuga magnam, nihil aspernatur aliquam autem saepe laboriosam atque quia! Rerum, vitae sit!' },
        { question: 'What is your favorite project you have worked on?', answer: 'My favorite project was designing a sustainable fashion line that incorporated recycled materials.Lorem ipsum dolor sit amet consectetur adipisicing elit. In doloribus cum eius repellendus, voluptatem, unde exercitationem adipisci fuga magnam, nihil aspernatur aliquam autem saepe laboriosam atque quia! Rerum, vitae sit!' }
      ],
      showMore: true,
      sentMessage: ''
    };
  },
  computed: {
    displayedQnA() {
      return this.showMore ? this.designerQnA.slice(0, 6) : this.designerQnA;
    }
  },
  methods: {
    searchQuestion() {
      if (this.question.trim() === '') {
        this.sentMessage = 'Please fill in the field.';
      } else {
        this.sentMessage = 'Your question was sent successfully!';
        this.question = '';
      }
      setTimeout(() => {
        this.sentMessage = '';
      }, 3000);
    },
    toggleShowMore() {
      this.showMore = !this.showMore;
    }
  }
};
</script>
<
<style scoped>
.faq-banner {
  position: relative;
  background-image: url('https://pearlproductioncdn-angdc5fwcje2hzgs.z01.azurefd.net/drupal-files/2023-07/faq-banner-desktop_0.webp');
  /* replace with your image path */
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 100px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.faq-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  /* darker background image */
  z-index: 1;
}

.faq-banner-content {
  position: relative;
  z-index: 2;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  padding-right: 30px;
  background: rgba(0, 0, 0, 0.5);
  /* semi-transparent background for content */
  border-radius: 10px;
}

.quotes p {
  font-size: 24px;
  margin: 20px 0;
  font-style: italic;
  line-height: 1.5;
  animation: fadeIn 2s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.question-section {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.question-form {
  text-align: left;
  max-width: 970px;
  width: 100%;
}

.question-form label {
  font-size: 18px;
  margin-bottom: 10px;
  display: block;
}

.question-form input {
  width: calc(100% - 100px);
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 2px solid black;
  /* Set border color to black */
  font-size: 16px;
}

.question-form button {
  background-color: #1e3a8a; /* blue-950 */
  color: white;
  padding: 0.5rem 1rem; /* px-4, py-2 */
  border-radius: 0.25rem; /* rounded */
  font-size: 1rem; /* font-base */
  transition: background-color 0.3s ease;
}

.question-form button:hover {
  background-color: #f97316; /* orange-500 */
  animation: pulse 0.6s forwards; 
}

.sent-message {
  font-size: 16px;
  color: green;
  margin-top: 10px;
}

.designer-qna {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.designer-qna h2 {
  font-size: 28px;
  margin-bottom: 20px;
}

.qna-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
}

.qa-item {
  background: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.qa-item .question {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.qa-item .answer {
  font-size: 16px;
  margin-top: 5px;
}

.show-more-btn {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #6b665d;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

.show-more-btn:hover {
  background-color: #e67e22;
}
</style>
