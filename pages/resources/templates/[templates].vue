<template>
  <div class="flex w-full">
    <div class="text-black flex mt-36 lg:mt-16">
      <!-- Pass the sidebarItems as a prop to ToolSideBar -->
      <ToolSideBar :sidebarItems="sidebarItems" />
    </div>
    <div class="w-full flex mt-24 lg:mt-20 mb-10 justify-center">
      <div class="w-full">
        <template v-if="$route.params.templates === 'rent-agreement'">
         <TemplatesRentAggrement />
        </template>
        <template v-else>
          <ToolsErrorPage />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Sidebar items array
      sidebarItems: [
        {
          label: "Rent Agreement",
          icon: "receipt_long",
          route: "/resources/templates/rent-agreement",
        },
        {
          label: "Salary Slip",
          icon: "assignment",
          route: "/resources/templates/salary-slip",
        },
        {
          label: "Board Resolution for GST Application",
          icon: "gavel",
          route: "/resources/templates/board-resolution-for-gst-application",
        },
        {
          label: "Power of Attorney",
          icon: "description",
          route: "/resources/templates/power-of-attorney",
        },
        {
          label: "Partnership Agreement",
          icon: "handshake",
          route: "/resources/templates/partnership-agreement",
        },
        {
          label: "Agenda",
          icon: "event_note",
          route: "/resources/templates/agenda",
        },
        {
          label: "Employee Agreement",
          icon: "group",
          route: "/resources/templates/employee-agreement",
        },
        {
          label: "Invoice",
          icon: "receipt",
          route: "/resources/templates/invoice",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Add any specific styles if necessary */
</style>
