<script setup lang="ts">

const infos = [
  {
    title: 'Basic Company Information',
    description: 'The "Basic Company Information" section gathers essential details about the company, including its name, business type, industry, and incorporation date, which are crucial for legal recognition and compliance. This information establishes the companys identity and its operational framework.',
    img: '',
  },
  {
    title: 'Registered Address',
    description: '',
    img: '',
  },
  {
    title: 'Directors/Owners Information',
    description: '',
    img: '',
  },
  {
    title: 'Shareholder Information',
    description: '',
    img: '',
  },
  {
    title: 'Company Documents Upload',
    description: '',
    img: '',
  },
  {
    title: 'Bank Details',
    description: '',
    img: '',
  },
  {
    title: 'Business Activity',
    description: '',
    img: '',
  },
  {
    title: 'Terms and Conditions',
    description: '',
    img: '',
  },
  {
    title: 'Submit',
    description: '',
    img: '',
  }
]
</script>
<template>
  <div>
    <div class="mx-28 my-24">
      <img src="@/assets/img/service/privacy.jpeg" width="450" alt="">
      <div>
        <div class="grid grid-cols-3 gap-7">
          <div v-for="info in infos" class="border border-black p-7">
            <!-- <div> {{ info.img }} </div> -->
             <img :src="info.img" alt="">
            <div class=""> {{ info.title }} </div>
            <div> {{ info.description }} </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>