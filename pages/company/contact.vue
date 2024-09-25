<template>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
  <div class="px-16 pt-28 font-medium">
    <!-- Header Section with Text and Linked Image -->
    <header
      class="w-full h-auto flex flex-col lg:flex-row justify-evenly items-center px-4 lg:px-10"
    >
      <!-- Left Side: Case Studies Text -->
      <div class="text-center lg:text-left mb-4 lg:mb-0">
        <h1 class="text-2xl lg:text-3xl font-bold mb-4">
          <span class=" lg:ml-0 ml-44 text-blue-900">We're here to help you, </span>
          <span class="text-orange-500">every step of the way</span>
        </h1>
        <!-- <span class="block text-xl"
          >A contact page should provide visitors with clear instructions on how
          to get in touch with your business</span -->
        
      </div>

      <!-- Right Side: Linked Image -->
      <img
        src="https://img.freepik.com/free-vector/organic-flat-customer-support-illustration_23-2148899174.jpg?ga=GA1.1.1217921431.1721647597&semt=ais_user"
        alt="Header Image"
        class="h-full object-contain mx-auto"
      />
    </header>

    <!-- Contact Sections -->
    <div
      class="contact-sections flex flex-col md:flex-row justify-between my-8 gap-8 p-6 mt-28"
    >
      <!-- Image Section -->
      <div
        class="image-section transform scale-98 transition-opacity duration-1000 ease-in-out"
        :class="{ 'opacity-100 scale-100': isImageVisible }"
      >
        <img
          src="https://img.freepik.com/free-vector/motivational-speaker-launches-podcast-inspire-people-around-world_1150-52740.jpg?ga=GA1.1.1217921431.1721647597&semt=ais_user"
          alt="Contact Us"
          class="w-full h-auto rounded-lg"
        />
      </div>

      <!-- Contact Form -->
      <div
        class="contact-form w-full md:w-1/2 p-6 border-right-shadow p-4 opacity-0 transform scale-98 transition-opacity duration-1000 ease-in-out"
        :class="{ 'opacity-100 scale-100': isFormVisible }"
      >
        <h2 class="text-2xl mb-4 designer-font">Get in Touch</h2>
        <form @submit.prevent="submitForm" class="space-y-4">
          <div class="form-group">
            <label for="name" class="block mb-2 font-semibold">Name:</label>
            <input
              type="text"
              id="name"
              v-model="formData.name"
              class="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div class="form-group">
            <label for="phone" class="block mb-2 font-semibold"
              >Phone Number:</label
            >
            <input
              type="text"
              id="phone"
              v-model="formData.phone"
              class="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div class="form-group">
            <label for="email" class="block mb-2 font-semibold">Email:</label>
            <input
              type="email"
              id="email"
              v-model="formData.email"
              class="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            class="primary-btn"
          >
            Send Request
          </button>
        </form>
      </div>
    </div>
  </div>
  <!-- New Section with Blue Border -->
  <div class="bordered-section mt-8 ">
   <LandingContact />
  </div>

  <!-- Footer with Google Maps -->
  <div class="footer text-center text-gray-700 rounded-b-lg">
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.8494317262584!2d85.13186137522555!3d25.609919077447596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59346f4e3b4d%3A0xdaa21a164b9e944f!2sB-HUB!5e0!3m2!1sen!2sin!4v1721812714753!5m2!1sen!2sin"
        width="100%"
        height="350"
        style="border: 0; margin-left: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        phone: "",
        email: "",
      },
      address: "",
      email: "info@finaceindia.com",
      phoneNumber: "+1234567890",
      whatsappNumber: "+1234567890",
      isImageVisible: false,
      isFormVisible: false,
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: "ayushgupta.cspl@gmail.com",
            subject: "Form Submission",
            text: `<h2>User Details: </h2></br><p style="font-weight: 500; font-size: 21px;">Name: <span style="font-weight: 200; font-size: 18px;"> ${this.formData.name} </span> </p> </br>  <p style="font-weight: 500; font-size: 21px;">Email: <span style="font-weight: 200; font-size: 18px;"> ${this.formData.email} </span> </p> </br> <p style="font-weight: 500; font-size: 21px;">Phone: <span style="font-weight: 200; font-size: 18px;"> ${this.formData.phone} </span> </p>`
          }),
        });

        if (response.ok) {
          alert("Form Submitted successfully!");
          this.formData = "";
        } else {
          alert("Failed to Submit the form.");
        }
      } catch (error) {
        console.error("Error sending email:", error);
        alert("An error occurred while sending the data.");
      }
    },
  },
  mounted() {
    setTimeout(() => {
      console.log(process.env.EMAIL_USER);
      this.isFormVisible = true;
    }, 1000); // Fade-in effect for contact form
  },
};
</script>

<style scoped>
.icon-large {
  font-size: 3rem;
}
.designer-font {
        font-family: 'Raleway', sans-serif;
    }

</style>
