<template>
  <div>
    <!-- Tool Button for Small Screens -->
    <div
      class="flex justify-center bg-white mt-5 sm:flex md:hidden absolute z-100 top-[5rem] left-[32px]"
    >
      <button @click="toggleSidebar" class="text-blue-950 font-bold border-2 p-2">
        <i class="material-icons">apps</i>
      </button>
    </div>

    <!-- Sidebar for Medium Screens and Larger, Drawer for Small Screens -->
    <div
      :class="[
        'duration-1000 ease-in-out fixed inset-0 bg-transparent z-50 transition-transform transform',
        { 'translate-x-0': isSidebarOpen, '-translate-x-full': !isSidebarOpen },
        'md:translate-x-0 md:static md:flex',
      ]"
    >
      <div class="bg-white pl-4 lg:p-m-4 md:w-72 w-fit">
        <!-- Close Button for Drawer -->
        <div class="md:hidden flex justify-end">
          <button @click="toggleSidebar" class="text-red-500 font-bold p-2">
            X
          </button>
        </div>

        <!-- Search Bar -->
        <div class="flex justify-center lg:mt-5 lg:p-2 pr-8">
          <input
            v-model="searchTerm"
            type="text"
            placeholder="Search..."
            class="border-2 border-gray-300 rounded-md px-3 py-2 w-full max-w-xs"
          />
        </div>

        <!-- Sidebar Items -->
        <div class="space-y-1 overflow-y-auto thin-scrollbar h-full lg:h-[72vh] pr-5">
          <template v-for="(group, index) in filteredSidebarItems" :key="index">
            <div>
              <template v-for="(item, subIndex) in group.items" :key="subIndex">
                <router-link v-if="item.route" :to="item.route" custom>
                  <a
                    @click.prevent="navigate(item.route)"
                    :class="[
                      'flex items-center px-4 py-3 rounded-lg transition-colors cursor-pointer sidebarItem',
                      {
                        'bg-blue-950 text-white': selectedRoute === item.route,
                        'hover:bg-gray-200': selectedRoute !== item.route,
                      },
                    ]"
                  >
                    <i class="material-icons">{{ item.icon }}</i>
                    <span class="ml-3 font-medium">{{ item.label }}</span>
                  </a>
                </router-link>
                <a
                  v-else
                  :href="item.url"
                  :target="item.target"
                  class="flex items-center px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors sidebarItem"
                >
                  <i class="material-icons">{{ item.icon }}</i>
                  <span class="ml-3 font-medium">{{ item.label }}</span>
                </a>
              </template>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

// Define props
const props = defineProps({
  sidebarItems: {
    type: Array,
    required: true,
  },
});

// Sort sidebar items alphabetically
const sortedSidebarItems = computed(() => {
  return [...props.sidebarItems].sort((a, b) => a.label.localeCompare(b.label));
});

// Group sidebar items by the first letter of their label
const groupedSidebarItems = computed(() => {
  const groups = [];
  let currentLetter = "";

  sortedSidebarItems.value.forEach((item) => {
    const itemLetter = item.label.charAt(0).toUpperCase();
    if (itemLetter !== currentLetter) {
      currentLetter = itemLetter;
      groups.push({ letter: currentLetter, items: [] });
    }
    groups[groups.length - 1].items.push(item);
  });

  return groups;
});

const isSidebarOpen = ref(false);
const router = useRouter();
const route = useRoute();
const searchTerm = ref("");
const selectedRoute = ref("");

// Set the initial selected route on component mount
onMounted(() => {
  if (typeof window !== "undefined") {
    selectedRoute.value = window.location.pathname;
  }
});

// Toggle sidebar visibility
function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}

// Navigate to a selected route and close the sidebar
function navigate(route) {
  router.push(route);
  isSidebarOpen.value = false; // Close sidebar after navigation
  selectedRoute.value = route;
}

// Filter sidebar items based on the search term
const filteredSidebarItems = computed(() => {
  if (!searchTerm.value.trim()) {
    return groupedSidebarItems.value;
  }

  const filteredGroups = groupedSidebarItems.value.map((group) => {
    const filteredItems = group.items.filter((item) =>
      item.label.toLowerCase().includes(searchTerm.value.trim().toLowerCase())
    );
    return { letter: group.letter, items: filteredItems };
  });

  return filteredGroups.filter((group) => group.items.length > 0);
});
</script>

<style scoped>
.sidebarItem {
  border-bottom: 1px solid #e5e5e5;
}
</style>
