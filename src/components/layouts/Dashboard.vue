<template>
   <main class="2xl:container bg-gray-50 w-full h-screen mx-auto flex">
      <div class="w-80 bg-white border-r border-gray-200">
         <Sidebar />
      </div>
      <div class="flex flex-col w-full">
         <div class="p-8 bg-white border-b border-gray-200"></div>
         <div class="p-8"></div>
      </div>
   </main>

</template>

<script>
export default {
   name: "DashboardLayout"
}
</script>
<script setup>
import Sidebar from "../Sidebar.vue";
</script>

<style lang="scss" scoped>

</style>