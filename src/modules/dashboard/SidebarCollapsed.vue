<template>
   <aside class="w-full h-full px-3.5 py-5 flex flex-col items-center relative">
      <button
         class="absolute w-8 h-9 rounded-r-md bg-gray-200 flex items-center justify-center -right-8 top-5"
         @click="toggleDialog(true)"
      >
         <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 1.5C3 0.671573 2.32843 0 1.5 0C0.671574 0 0 0.671573 0 1.5V12.5C0 13.3284 0.671573 14 1.5 14C2.32843 14 3 13.3284 3 12.5L3 1.5Z" fill="#9CA3AF"/>
            <path d="M5 10.9877C5 11.2529 5.10532 11.5072 5.29279 11.6947C5.48032 11.8822 5.73462 11.9875 5.99979 11.9875C6.26495 11.9875 6.51926 11.8822 6.70679 11.6947L10.7068 7.69471C10.8943 7.50718 10.9996 7.25288 10.9996 6.98771C10.9996 6.72255 10.8943 6.46824 10.7068 6.28071L6.70679 2.28071C6.51819 2.09855 6.26558 1.99776 6.00339 2.00004C5.74119 2.00232 5.49038 2.10749 5.30497 2.29289C5.11956 2.4783 5.01439 2.72911 5.01211 2.99131C5.00983 3.25351 5.11063 3.50611 5.29279 3.69471L8.58579 6.98771L5.29279 10.2807C5.10532 10.4682 5 10.7225 5 10.9877Z" fill="#9CA3AF"/>
         </svg>
      </button>
      <div class="flex items-center">
         <div class="w-9 h-9 bg-indigo-400 flex items-center justify-center rounded-md">
            <svg width="22" height="20" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M9.04226 3.5751C9.57473 2.65283 10.9059 2.65283 11.4384 3.5751L16.6116 12.5354C17.1441 13.4576 16.4785 14.6105 15.4135 14.6105H5.0671C4.00216 14.6105 3.33657 13.4576 3.86904 12.5354L9.04226 3.5751Z" stroke="#F9FAFB" stroke-width="1.5" stroke-linejoin="round"/>
               <path d="M13.8824 6.70849C14.4149 5.78622 15.7461 5.78622 16.2785 6.70849L21.4517 15.6688C21.9842 16.591 21.3186 17.7439 20.2537 17.7439H9.90725C8.84231 17.7439 8.17672 16.591 8.70919 15.6688L13.8824 6.70849Z" fill="#818CF8" stroke="#FDE68A" stroke-width="1.5" stroke-linejoin="round"/>
            </svg>
         </div>
      </div>

      <div class="flex-auto">
         <div class="mt-10 flex-auto">
            <ul class="">
               <li class="flex items-center my-0.5 py-2 px-2.5 hover:bg-gray-200 cursor-pointer rounded-md">
                  <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M10 8V1L1 12H8V19L17 8H10Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
               </li>
               <li class="flex items-center my-0.5 py-2 px-2.5 hover:bg-gray-200 cursor-pointer rounded-md relative">
                  <svg class="w-5 h-5" fill="none" stroke="#4B5563" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="absolute right-0 bottom-0 text-[9px] font-semibold text-white inline-block py-0.5 px-1 rounded-md bg-red-400">35</span>
               </li>
            </ul>
         </div>

         <hr class="my-5 bg-gray-100">

         <div class="">
            <ul class="">
               <li class="flex items-center my-0.5 py-2 px-2.5 hover:bg-gray-200 cursor-pointer rounded-md">
                  <svg class="w-5 h-5" fill="none" stroke="#4B5563" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
               </li>
               <li class="flex items-center my-0.5 py-2 px-2.5 hover:bg-gray-200 cursor-pointer rounded-md">
                  <svg class="w-5 h-5" fill="none" stroke="#4B5563" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
               </li>
               <li class="flex items-center my-0.5 py-2 px-2.5 hover:bg-gray-200 cursor-pointer rounded-md">
                  <svg class="w-5 h-5" fill="none" stroke="#4B5563" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
               </li>
               <li class="flex items-center my-0.5 py-2 px-2.5 hover:bg-gray-200 cursor-pointer rounded-md">
                  <svg class="w-5 h-5" fill="none" stroke="#4B5563" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
                  </svg>
               </li>
               <li class="flex items-center my-0.5 py-2 px-2.5 hover:bg-gray-200 cursor-pointer rounded-md">
                  <svg class="w-5 h-5" fill="none" stroke="#4B5563" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
               </li>
               <li class="flex items-center my-0.5 py-2 px-2.5 hover:bg-gray-200 cursor-pointer rounded-md">
                  <svg class="w-5 h-5" fill="none" stroke="#4B5563" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                  </svg>
               </li>
               <li class="flex items-center my-0.5 py-2 px-2.5 hover:bg-gray-200 cursor-pointer rounded-md">
                  <svg class="w-5 h-5" fill="none" stroke="#4B5563" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
               </li>
            </ul>
         </div>
      </div>

      <div class="">
         <ul class="">
            <li class="flex items-center my-0.5 py-2 px-2.5 hover:bg-gray-200 cursor-pointer rounded-md">
               <svg class="w-5 h-5" fill="none" stroke="#4B5563" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
               </svg>
            </li>
            <li class="flex items-center my-0.5 py-2 px-2.5 hover:bg-gray-200 cursor-pointer rounded-md">
               <svg class="w-5 h-5" fill="none" stroke="#4B5563" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
               </svg>
            </li>
         </ul>
      </div>
   </aside>

   <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="toggleDialog">
         <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
         >
            <DialogOverlay class="fixed inset-0" :style="{background: 'rgba(0,0,0,0.3)'}"/>
         </TransitionChild>

         <TransitionChild
            as="template"
            enter="duration-300 ease-out transform"
            enter-from="opacity-0 -translate-x-full"
            enter-to="opacity-100 translate-x-0"
            leave="duration-200 ease-in transform"
            leave-from="opacity-100 translate-x-0"
            leave-to="opacity-0 -translate-x-full"
         >
            <div class="md:w-1/4 w-1/2 h-full fixed inset-0 z-10 bg-white">
               <button
                  class="absolute w-8 h-9 rounded-r-md bg-gray-600 flex items-center justify-center -right-8 top-5"
                  @click="toggleDialog(false)"
               >
                  <svg class="text-gray-100 transform rotate-180" width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M3 1.5C3 0.671573 2.32843 0 1.5 0C0.671574 0 0 0.671573 0 1.5V12.5C0 13.3284 0.671573 14 1.5 14C2.32843 14 3 13.3284 3 12.5L3 1.5Z" fill="currentColor"/>
                     <path d="M5 10.9877C5 11.2529 5.10532 11.5072 5.29279 11.6947C5.48032 11.8822 5.73462 11.9875 5.99979 11.9875C6.26495 11.9875 6.51926 11.8822 6.70679 11.6947L10.7068 7.69471C10.8943 7.50718 10.9996 7.25288 10.9996 6.98771C10.9996 6.72255 10.8943 6.46824 10.7068 6.28071L6.70679 2.28071C6.51819 2.09855 6.26558 1.99776 6.00339 2.00004C5.74119 2.00232 5.49038 2.10749 5.30497 2.29289C5.11956 2.4783 5.01439 2.72911 5.01211 2.99131C5.00983 3.25351 5.11063 3.50611 5.29279 3.69471L8.58579 6.98771L5.29279 10.2807C5.10532 10.4682 5 10.7225 5 10.9877Z" fill="currentColor"/>
                  </svg>
               </button>
               <Sidebar/>
            </div>
         </TransitionChild>
      </Dialog>
   </TransitionRoot>
</template>

<script>
export default {
name: "SidebarCollapsed",
}
</script>

<script setup>
import { ref } from "vue";
import { Dialog, DialogOverlay, TransitionRoot, TransitionChild } from "@headlessui/vue";
import Sidebar from "./Sidebar.vue";

const isOpen = ref(false);

const toggleDialog = (value) => {
   isOpen.value = value;
}
</script>

<style lang="scss" scoped>

</style>