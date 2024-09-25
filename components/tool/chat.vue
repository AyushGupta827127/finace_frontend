<template>
  <div class="w-full">
    <!-- Floating Slogan -->
    <div
      class="fixed bottom-28 right-10 animate-float text-blue-500 font-bold text-lg"
    >
      Ask FI's Ai
    </div>

    <!-- Chat Icon -->
    <div
      class="fixed bottom-10 right-12 animate-float w-16 h-16 rounded-full hover:scale-110 transition-transform duration-300 ease-in-out shadow-lg"
      v-if="!isChatOpen"
      @click="toggleChat"
    >
      <div
        class="w-full h-full rounded-full flex items-center justify-center cursor-pointer bg-blue-500"
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX0mKrzeX319CWVO-zz3O2uf9D7zdWMd_s5A&s"
          alt="Chat Bot"
          class="w-14 h-14 rounded-full"
        />
      </div>
    </div>

    <!-- Chat Window -->
    <div
      v-else
      class="fixed bottom-5 right-5 w-80 rounded-lg shadow-2xl border-2 border-blue-500"
    >
      <div class="w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div
          class="chat-header bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 font-bold flex justify-between items-center"
        >
          <span>FI Assistant</span>
          <button
            @click="toggleChat"
            class="text-white hover:text-red-500 transition duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          ref="chatMessages"
          class="chat-messages p-4 max-h-60 overflow-y-auto"
        >
          <div
            v-for="(message, index) in messages"
            :key="index"
            class="message my-2"
          >
            <div
              :class="{
                'text-right text-blue-600': message.user,
                'text-left text-green-600': !message.user,
              }"
            >
              <span
                class="inline-block px-3 py-1 rounded-lg"
                :class="{
                  'bg-blue-100': message.user,
                  'bg-green-100': !message.user,
                }"
              >
                {{ message.text }}
              </span>
            </div>
          </div>
          <!-- Typing Loader -->
          <div v-if="isTyping" class="typing-loader">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
        <div class="px-4">
          <div class="flex flex-col space-y-2" v-if="showSuggestions">
            <button
              v-for="(suggestion, index) in suggestions"
              :key="index"
              @click="sendSuggestion(suggestion)"
              class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              {{ suggestion }}
            </button>
          </div>
        </div>
        <div class="chat-input flex items-center p-2 border-t">
          <input
            v-model="userMessage"
            @keyup.enter="sendMessage"
            placeholder="Ask me anything..."
            class="flex-1 py-2 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <!-- Send Button -->
          <button
            @click="sendMessage"
            class="ml-2 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 19l7-7-7-7m7 7H5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import responses from "@/assets/config/response.json";
export default {
  data() {
    return {
      messages: [],
      userMessage: "",
      isChatOpen: false, // Controls if chat is open
      showSuggestions: true, // Controls if suggestions are visible
      isTyping: false, // Controls typing loader visibility
      responses,
      suggestions: ["gst registration", "itr refund", "company incorporation"],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.scrollToBottom();
    });
  },
  methods: {
    toggleChat() {
      this.isChatOpen = !this.isChatOpen; // Toggles chat visibility
      this.$nextTick(() => {
        this.scrollToBottom();
      });
    },
    sendMessage() {
      if (!this.userMessage) return;

      // Add user message to chat
      this.messages.push({ text: this.userMessage, user: true });

      // Scroll to bottom while loading
      this.$nextTick(() => {
        this.scrollToBottom();
      });

      // Show typing loader
      this.isTyping = true;

      // Simulate a delay for bot response
      setTimeout(() => {
        // Add bot response
        const response = this.getResponse(this.userMessage);
        this.messages.push({ text: response, user: false });

        // Hide suggestions after sending a message
        this.showSuggestions = false;

        // Hide typing loader
        this.isTyping = false;

        // Scroll to bottom after sending message
        this.$nextTick(() => {
          this.scrollToBottom();
        });

        // Clear the input
        this.userMessage = "";
      }, 1000); // Simulate a 1-second delay
    },
    sendSuggestion(suggestion) {
      // Add suggestion as user message
      this.userMessage = suggestion;
      this.sendMessage();
    },
    getResponse(message) {
      const lowerCaseMessage = message.toLowerCase();

      if (this.responses[lowerCaseMessage]) {
        return this.responses[lowerCaseMessage];
      } else {
        return "Sorry, I don't understand that.";
      }
    },
    scrollToBottom() {
      const chatMessages = this.$refs.chatMessages;
      chatMessages.scrollTop = chatMessages.scrollHeight;
    },
  },
};
</script>

<style scoped>
/* Floating effect for slogan */
@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Enhanced chat header design */
.chat-header {
  background-color: #3b82f6; /* Tailwind's blue-500 */
}

.chat-messages {
  max-height: 240px;
  overflow-y: auto;
}

/* Typing loader */
.typing-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.typing-loader .dot {
  background-color: #3b82f6; /* Tailwind's blue-500 */
  border-radius: 50%;
  height: 8px;
  width: 8px;
  margin: 0 4px;
  animation: typing 1.4s infinite ease-in-out;
}

.typing-loader .dot:nth-child(2) {
  animation-delay: 0.2s;
}

.typing-loader .dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes typing {
  0%,
  80%,
  100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}

/* Chat icon hover effect */
.chat-icon {
  background-color: #3b82f6; /* Tailwind's blue-500 */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  width: 4rem;
  height: 4rem;
  cursor: pointer;
}

/* Smooth scrollbar style */
.chat-messages::-webkit-scrollbar {
  width: 4px;
}

.chat-messages::-webkit-scrollbar-thumb {
  background-color: #3b82f6; /* Tailwind's blue-500 */
  border-radius: 4px;
}

/* Send button style */
.send-button {
  background-color: #3b82f6; /* Tailwind's blue-500 */
  color: white;
  padding: 0.5rem;
  border-radius: 9999px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.send-button:hover {
  background-color: #2563eb; /* Tailwind's blue-600 */
}
</style>
