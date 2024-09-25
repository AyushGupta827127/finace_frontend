<script setup>
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import "./style.css"
const app = ref(null)

if (document)
  document.title = "Finace India"
</script>
<template>
  <div ref="app" class="!text-neutral-600 text-sm bg-white selection:bg-blue-50/50 selection:text-neutral-500 leading-6">
    <LayoutNavbar />
    <NuxtPage />
      <LayoutFooter />
      <ToolScrollButton />
      <ToolChat/>

  </div>
</template>
<style>

html {
  font-family: "Poppins", sans-serif
}
</style>