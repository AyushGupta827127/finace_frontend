<script setup lang="ts">
    import menu from '@/assets/config/menu.json'
    const menuList = menu
</script>
<template>    
    <div class="flex justify-end items-center gap-6">
        <div class="" v-for="menu in menuList">
            <MenuItem :menu="menu"/>
        </div>
    </div>
</template>