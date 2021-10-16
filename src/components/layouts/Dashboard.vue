<template>
   <main class="2xl:container bg-gray-50 w-full h-screen mx-auto flex">
      <div class="xl:w-1/6 lg:w-1/5 md:w-1/12 w-auto md:relative absolute transform md:translate-x-0 -translate-x-full  bg-white border-r border-gray-200">
         <SidebarCollapsed v-if="isTablet || isMobile"/>
         <Sidebar v-else/>
      </div>
      <div class="flex flex-col xl:w-5/6 lg:w-4/5 md:w-11/12 w-full">
         <div class="py-5 md:px-8 px-4 bg-white border-b border-gray-200">
            <DashboardHeader/>
         </div>
         <div class="overflow-x-auto overflow-y-auto whitespace-nowrap scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-400 scrollbar-thumb-rounded">
            <Boards/>
         </div>
      </div>
   </main>

</template>

<script>
export default {
   name: "DashboardLayout"
}
</script>
<script setup>
import Sidebar from "../../modules/dashboard/Sidebar.vue";
import DashboardHeader from "../../modules/dashboard/Header.vue";
import Boards from "../../modules/dashboard/Boards.vue";
import SidebarCollapsed from "../../modules/dashboard/SidebarCollapsed.vue";
import { useMedia } from "../../modules/hooks/useMedia";

const isTablet = useMedia("(min-width: 460px) and (max-width: 768px)");
const isMobile = useMedia("(max-width: 425px)");

</script>

<style lang="scss" scoped>

</style>