<script setup lang="ts">
defineProps({
    base: {
        type: String,
        required: true,
    },
    menuItems: {
        type: Array,
        required: true
    }
})
</script>
<template>
    <div class="bg-white rounded-sm p-4">
        <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-2" v-for="menu in menuItems">
                <nuxt-link class="hover:translate-x-1 transition duration-200" :href="`${base}/${menu.split(' ').join('-').toLowerCase()}`">
                    <div class="text-xs text-neutral-700 px-2 hover:text-blue-500 text-nowrap">{{ menu }}</div>
                </nuxt-link>
                <div class="h-[0.5px] bg-gray-100"></div>
            </div>
        </div>
    </div>
</template>