<script setup lang="ts">
defineProps({
  base: {
    type: String,
    required: true,
  },
  menuItems: {
    type: Array,
    required: true,
  },
});
const formatText = function (param: string) {
  return param.split("/").join("-").split(" ").join("-").toLowerCase();
};
</script>
<template>
  <div class="bg-white rounded-sm p-4">
    <div class="flex justify-between items-start gap-12 px-10">
      <div class="flex flex-col gap-2 flex-1" v-for="menuItem in menuItems">
        <div class="font-semibold text-neutral-600">
          {{ menuItem.title }}
        </div>
        <div
          class="text-xs text-neutral-700 px-2 hover:text-blue-500 flex flex-col gap-1.5"
          v-for="(menu, i) in menuItem.menuItems"
        >
          <div v-if="menu.menuItems" class="flex flex-col gap-1.5">
            <div
              class="text-semibold pb-1 hover:translate-x-1 transition duration-200"
            >
              {{ menu.title }}
            </div>
            <div class="flex flex-col">
              <nuxt-link
                :href="`${base}/${formatText(item)}`"
                v-for="(item, j) in menu.menuItems"
              >
                <span
                  class="text-gray-600 hover:text-blue-400 text-nowrap text-justify pt-2 pl-2 border border-y-0 border-r-0 border-l-gray-400"
                  :class="j === 0 ? 'pt-0' : ''"
                  >{{ item }}</span
                >
              </nuxt-link>
            </div>
          </div>
          <div
            v-else="menu.menuItems"
            class="text-semibold text-nowrap flex flex-col gap-2"
          >
            <nuxt-link
              v-if="menuItem.title === 'Tools'"
              class="hover:translate-x-1 transition duration-200"
              :href="`${base}/tools/${formatText(menu)}`"
            >
              {{ menu }}
            </nuxt-link>

            <nuxt-link
              v-else-if="menuItem.title === 'Templates'"
              class="hover:translate-x-1 transition duration-200"
              :href="`${base}/templates/${formatText(menu)}`"
            >
              {{ menu }}
            </nuxt-link>

            <nuxt-link
              v-else
              class="hover:translate-x-1 transition duration-200"
              :href="`${base}/${formatText(menu)}`"
            >
              {{ menu }}
            </nuxt-link>

            <div
              v-if="i + 1 < menuItem.menuItems.length"
              class="h-[0.5px] bg-gray-100"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
