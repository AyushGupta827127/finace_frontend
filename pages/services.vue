<script setup lang="ts">
const registrations = [
    {
        title: 'Shop/Proprietorship Registration',
        desc: 'lorem ipsum dolor init'
    },
    {
        title: 'Partnership Registration',
        desc: 'lorem ipsum dolor init'
    },
    {
        title: 'Limited Liability Partnership (LLP)',
        desc: 'lorem ipsum dolor init'
    },
    {
        title: 'Startup India Organization',
        desc: 'lorem ipsum dolor init'
    },
    {
        title: 'One Person Company',
        desc: 'lorem ipsum dolor init'
    },
    {
        title: 'Public Limited Company',
        desc: 'lorem ipsum dolor init'
    },
    {
        title: 'Nidhi limited Company',
        desc: 'lorem ipsum dolor init'
    },
    {
        title: 'Farmers Producers Company',
        desc: 'lorem ipsum dolor init'
    },
    {
        title: 'Section-8 (NGO)',
        desc: 'lorem ipsum dolor init'
    },
    {
        title: 'Subsidaiary Company',
        desc: 'lorem ipsum dolor init'
    },
    {
        title: 'UAE Comapny',
        desc: 'lorem ipsum dolor init'
    }
]
</script>
<template>
    <div>
        <div class="bg-blue-100 py-2 mt-20">
            <div class="mx-28 my-24">
                <div class="text-center text-3xl text-orange-500 my-7">Finace India Investments</div>
                <div class="text-center px-12">Secure your future with our tailored investment strategies. We offer
                    comprehensive guidance on mutual funds, stocks, bonds, and other investment vehicles to help you
                    grow your wealth and achieve financial independence.</div>
            </div>
        </div>
        <div class="mx-28 my-24">
            <div class="text-3xl text-center text-orange-500 my-12">Registration</div>
            <div class="flex gap-12">
                <img src="@/assets/img/service/privacy.jpeg" width="150" alt="">
                <div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mollitia temporibus sit totam
                    cupiditate enim repudiandae, molestias illo pariatur voluptatibus quae. Libero amet velit vero. A
                    quisquam voluptatibus dolorem aperiam!
                </div>
            </div>
            <div>
                <div class="grid grid-cols-4 gap-7">
                    <div v-for="registration in registrations" class="border p-4 border-black">
                        <div class="text-lg text-black text-center"> {{ registration.title }} </div>
                        <div class="text-center"> {{ registration.desc }} </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>