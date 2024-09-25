<script setup lang="ts">
import {ref} from 'vue'
import menu from '@/assets/config/menu.json'
const MenuList = menu

const activeMenu = ref(-1)

function formatLink(title: string) {
  return title.toLowerCase().replace(/\s+/g, '-');
}
</script>

<template>
    <div class="w-full flex flex-col gap-4 font-normal">
        <details v-for="(menu, index) in MenuList" name="menu" class="group px-4  border border-inset border-b-2 border-x-0 border-t-0 border-gray-100">
            <summary class="w-full flex justify-between items-center text-left py-3 cursor-pointer" :class="index === activeMenu ? `border border-inset border-b-1 border-x-0 border-t-0 border-gray-100 font-medium` : ``" @click="activeMenu === index ? activeMenu = -1 : activeMenu = index">
                {{menu.title}}
                <svg :class="index === activeMenu ? 'rotate-180' : 'rotate-0'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 transition-transform duration-300 ease-in-out">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </summary>
            <div v-if="typeof menu.menuItems[0] !== 'object'" class="pl-2 space-y-2">
                <nuxt-link v-for="menuItem in menu.menuItems" :key="menuItem" :href="formatLink(`/${menu.title}/${menuItem}`)" @click="$emit('closeDrawer')">
                <div class="w-full p-2">
                    {{ menuItem }}
                </div>
                </nuxt-link>
            </div>
            <div v-else class="pl-2 space-y-2" style="height:calc(100vh - 450px); overflow-y: scroll; scroll-behavior: smooth;">
                <div v-for="menuItem in menu.menuItems" :key="menuItem.title">
                    <div class="w-full p-2">
                        {{ menuItem.title }}
                        <div class="m-1">
                            <div v-for="m in menuItem.menuItems" :key="m" class="pl-2 py-2" :class="typeof m !== 'object' ? `border-l-2 border-l-gray-100` : ``"> 
                                <nuxt-link v-if="typeof m !== 'object'" :href="menuItem.title === 'Tools' ? formatLink(`/${menu.title}/${menuItem.title}/${m.split('/').join('-')}`) : formatLink(`/${menu.title}/${m.split('/').join('-')}`)" @click="$emit('closeDrawer')">
                                    {{ m }}
                                </nuxt-link>
                                <div v-else>
                                    {{ m.title }}
                                    <div class="m-1">
                                        <div v-for="n in m.menuItems" :key="n" class="pl-2 py-2 border-l-2 border-l-gray-100">
                                            <nuxt-link :href="formatLink(`/${menu.title}/${n}`)" @click="$emit('closeDrawer')">
                                                {{ n }}
                                            </nuxt-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </details>
        <div class="flex gap-4 justify-between mt-4">
            <nuxt-link href="/get-started" class="w-1/2">
                <button
                    class="px-4 py-2 bg-blue-950 hover:bg-orange-500 rounded text-white shadow-lg w-full" @click="$emit('closeDrawer')">
                    Get Started
                </button>
            </nuxt-link>
            <nuxt-link href="/hire-an-expert" class="w-1/2">
                <button
                    class="px-4 py-2 bg-blue-950 hover:bg-orange-500 rounded text-white shadow-lg w-full" @click="$emit('closeDrawer')">
                    Hire an Expert
                </button>
            </nuxt-link>
        </div>
    </div>
</template>

<style scoped>
.divider {
  border: 0px;
  height: 1px;
  width: 90%;
  background: radial-gradient(78.32% 50% at 50% 50%,#9092a3 0%,rgba(224, 224, 224, 0) 100%);
}
</style>
