<template>
  <div class="flex w-full">
    <div class="text-black flex mt-36 lg:mt-16">
      <!-- Pass the sidebarItems as a prop to ToolSideBar -->
      <ToolSideBar :sidebarItems="sidebarItems" />
    </div>
    <div class="w-full flex mt-24 lg:mt-20 mb-10 justify-center">
      <div class="w-full">
        <template v-if="$route.params.tools === 'emi-calculator'">
          <ToolsEmi-calculator />
        </template>
        <template v-else-if="$route.params.tools === 'ppf-calculator'">
          <ToolsPf-calculator />
        </template>
        <template v-else-if="$route.params.tools === 'postoffice-scheme'">
          <ToolsPostOffice-Scheme />
        </template>
        <template v-else-if="$route.params.tools === 'elss-calculator'">
          <ToolsElssCalculator />
        </template>
        <template v-else-if="$route.params.tools === 'sip-calculator'">
          <ToolsSipCalculator />
        </template>
         <template v-else-if="$route.params.tools === '80-G-calculator'">
          <Tools80GCalculator />
        </template>
        <template v-else-if="$route.params.tools === 'gratuity-calculator'">
          <ToolsGratuityCalculator />
        </template>
        <template v-else-if="$route.params.tools === 'swp-calculator'">
          <ToolsSwp />
        </template>
        <template v-else-if="$route.params.tools === 'income-tax-calculator'">
          <ToolsIncomeTaxCalculator />
        </template>
        <template v-else-if="$route.params.tools === 'hra-calculator'">
          <ToolsHraCalculator />
        </template>
        <template v-else-if="$route.params.tools === 'zero-coupon-bond'">
          <ToolsZeroCouponBondCalculator />
        </template>
        <template v-else-if="$route.params.tools === 'real-estate'">
          <ToolsRealEstateCalculator />
        </template>
        <template v-else-if="$route.params.tools === 'old-new-regime'">
          <ToolsOldandNewRegime />
        </template>
           <template v-else-if="$route.params.tools === 'fire-calculator'">
          <ToolsFireCalculator />
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
          label: "EMI Calculator",
          icon: "calculate",
          route: "/resources/tools/emi-calculator",
        },
        {
          label: "PostOffice Scheme",
          icon: "local_post_office",
          route: "/resources/tools/postoffice-scheme",
        },
        {
          label: "SIP Calculator",
          icon: "savings",
          route: "/resources/tools/sip-calculator",
        },
        {
          label: "80G Calculator",
          icon: "filter_hdr",
          route: "/resources/tools/80-G-calculator",
        },
        {
          label: "Income Tax Calculator",
          icon: "account_balance",
          route: "/resources/tools/income-tax-calculator",
        },
        {
          label: "Old & New Regime Calculator",
          icon: "calculate",
          route: "/resources/tools/old-new-regime",
        },
        {
          label: "PPF Calculator",
          icon: "account_balance_wallet",
          route: "/resources/tools/ppf-calculator",
        },
        {
          label: "HRA Calculator",
          icon: "home_work",
          route: "/resources/tools/hra-calculator",
        },
        {
          label: "Gratuity Calculator",
          icon: "currency_rupee",
          route: "/resources/tools/gratuity-calculator",
        },
        {
          label: "SWP Calculator",
          icon: "trending_up",
          route: "/resources/tools/swp-calculator",
        },
        {
          label: "ELSS Calculator",
          icon: "show_chart",
          route: "/resources/tools/elss-calculator",
        },
        {
          label: "Zero coupon bond Calculator",
          icon: "receipt_long",
          route: "/resources/tools/zero-coupon-bond",
        },
        {
          label: "Real Estate Calculator",
          icon: "bar_chart",
          route: "/resources/tools/real-estate",
        },
         {
          label: "Fire Calculator",
          icon: "bar_chart",
          route: "/resources/tools/fire-calculator",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Add any specific styles if necessary */
</style>
