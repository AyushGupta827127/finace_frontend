<script setup lang="ts">
import { ref } from 'vue'
defineProps({
  menu: {
    type: Object,
    required: true
  }
})
const menuActive = ref(false)
const menuPopoverUI = {
  shadow: 'shadow-xl',
  rounded: 'rounded-sm',
  ring: 'ring-[0.25px] ring-gray-200 dark:ring-gray-200',
  width: '',
  base: 'overflow-hidden focus:outline-none relative'
}

const closeMenu = () => {
  menuActive.value = false
}
</script>

<template>
  <div>
    <UPopover
      v-if="typeof menu.menuItems[0] === 'object'"
      v-model:open="menuActive"
      :popper="{ offsetDistance: 20, placement: 'bottom' }"
      :ui="menuPopoverUI"
      mode="hover"
    >
      <div
        class="capitalize transition duration-300 cursor-pointer"
        @click="closeMenu"
      >
        {{ menu.title }}
      </div>
      <template #panel>
        <MenuMega
          :base="`/${menu.title.toLowerCase()}`"
          :menuItems="menu.menuItems"
          @click="closeMenu"
        />
      </template>
    </UPopover>
    <UPopover
      v-else
      v-model:open="menuActive"
      :popper="{ offsetDistance: 20, placement: 'bottom' }"
      :ui="{...menuPopoverUI, width: 'min-w-48'}"
      mode="hover"
    >
      <div
        class="capitalize transition duration-300 cursor-pointer"
        @click="closeMenu"
      >
        {{ menu.title }}
      </div>
      <template #panel>
        <MenuDropdown
          :base="`/${menu.title.toLowerCase()}`"
          :menuItems="menu.menuItems"
          @click="closeMenu"
        />
      </template>
    </UPopover>
  </div>
</template>
