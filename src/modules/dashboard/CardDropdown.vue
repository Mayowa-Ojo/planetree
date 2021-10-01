<template>
   <Menu as="div" class="" v-slot="{ open }">
      <MenuButton as="div" class="focus:outline-none">
         <slot></slot>
      </MenuButton>

      <transition
         enter-active-class="transition duration-150 ease-out"
         enter-from-class="transform scale-95 opacity-0"
         enter-to-class="transform scale-100 opacity-100"
         leave-active-class="transition duration-100 ease-in"
         leave-from-class="transform scale-100 opacity-100"
         leave-to-class="transform scale-95 opacity-0"
      >
      <MenuItems class="absolute z-50 right-3 w-56 py-3.5 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
         <div class="px-3 mb-3">
            <div
               class="h-7 w-full py-0.5 px-2 bg-gray-50 border border-gray-200 flex items-center rounded focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-200 focus-within:border-blue-300"
               :class="[(open) ? 'bg-white ring-2 ring-blue-200 border-blue-300' : '']"
            >
               <input type="text" placeholder="Filter actions" class="w-full h-full appearance-none bg-transparent lg:text-sm text-xs text-gray-600 focus:outline-none">
            </div>
         </div>
         <div class="px-3 space-y-1">
            <MenuItem v-slot="{ active }">
               <button :class="[active? 'bg-green-50' : 'bg-transparent', 'w-full py-1.5 px-2 flex items-center space-x-2 transition-colors duration-150 ease-linear rounded']">
                  <svg class="text-gray-600" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0.5C5.26522 0.5 5.51957 0.605357 5.70711 0.792893C5.89464 0.98043 6 1.23478 6 1.5V4.5H9C9.26522 4.5 9.51957 4.60536 9.70711 4.79289C9.89464 4.98043 10 5.23478 10 5.5C10 5.76522 9.89464 6.01957 9.70711 6.20711C9.51957 6.39464 9.26522 6.5 9 6.5H6V9.5C6 9.76522 5.89464 10.0196 5.70711 10.2071C5.51957 10.3946 5.26522 10.5 5 10.5C4.73478 10.5 4.48043 10.3946 4.29289 10.2071C4.10536 10.0196 4 9.76522 4 9.5V6.5H1C0.734784 6.5 0.48043 6.39464 0.292893 6.20711C0.105357 6.01957 0 5.76522 0 5.5C0 5.23478 0.105357 4.98043 0.292893 4.79289C0.48043 4.60536 0.734784 4.5 1 4.5H4V1.5C4 1.23478 4.10536 0.98043 4.29289 0.792893C4.48043 0.605357 4.73478 0.5 5 0.5Z" fill="currentColor"/>
                  </svg>
                  <span class="text-xs font-medium text-gray-600">Add card</span>
               </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
               <button :class="[active? 'bg-green-50' : 'bg-transparent', 'w-full py-1.5 px-2 flex items-center space-x-2 transition-colors duration-150 ease-linear rounded']">
                  <svg class="w-3.5 h-3.5 text-gray-600 -ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path>
                  </svg>
                  <span class="text-xs font-medium text-gray-600 transform -translate-x-0.5">Duplicate</span>
               </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
               <button :class="[active? 'bg-green-50' : 'bg-transparent', 'w-full py-1.5 px-2 flex items-center space-x-2 transition-colors duration-150 ease-linear rounded']">
                  <svg class="text-gray-600" width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M3.22222 3.72222H9.88889M9.88889 3.72222L7.66667 1.5M9.88889 3.72222L7.66667 5.94444M7.66667 9.27778H1M1 9.27778L3.22222 11.5M1 9.27778L3.22222 7.05556" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span class="text-xs font-medium text-gray-600 flex-auto text-left">Move to</span>
                  <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M0.234522 7.76548C0.0843579 7.61527 0 7.41157 0 7.19917C0 6.98677 0.0843579 6.78307 0.234522 6.63286L2.87222 3.99516L0.234522 1.35747C0.0886136 1.2064 0.00787682 1.00406 0.00970184 0.794041C0.0115269 0.584021 0.0957675 0.38312 0.24428 0.234608C0.392792 0.086096 0.593693 0.0018553 0.803713 3.02798e-05C1.01373 -0.00179474 1.21607 0.078942 1.36714 0.224851L4.57114 3.42886C4.72131 3.57907 4.80567 3.78277 4.80567 3.99516C4.80567 4.20756 4.72131 4.41126 4.57114 4.56147L1.36714 7.76548C1.21693 7.91564 1.01323 8 0.80083 8C0.588433 8 0.384732 7.91564 0.234522 7.76548Z" fill="#4B5563"/>
                  </svg>
               </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
               <button :class="[active? 'bg-green-50' : 'bg-transparent', 'w-full py-1.5 px-2 flex items-center space-x-2 transition-colors duration-150 ease-linear rounded']">
                  <svg class="w-3.5 h-3.5 text-gray-600 -ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                  </svg>
                  <span class="text-xs font-medium text-gray-600">Edit card</span>
               </button>
            </MenuItem>
         </div>

         <hr class="my-2 bg-gray-100">

         <div class="px-3 space-y-1">
            <MenuItem v-slot="{ active }">
               <button :class="[active? 'bg-green-50' : 'bg-transparent', 'w-full py-1.5 px-2 flex items-center space-x-2 transition-colors duration-150 ease-linear rounded']">
                  <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path>
                  </svg>
                  <span class="text-xs font-medium text-gray-600">Events</span>
               </button>
            </MenuItem>
         </div>

         <hr class="my-2 bg-gray-100">

         <div class="px-3 space-y-1">
            <MenuItem v-slot="{ active }">
               <button :class="[active? 'bg-green-50' : 'bg-transparent', 'w-full py-1.5 px-2 flex items-center space-x-2 transition-colors duration-150 ease-linear rounded']">
                  <svg class="text-gray-600 w-3.5 h-3.5" width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M2.11111 3.27778H9.88889M2.11111 3.27778C1.81643 3.27778 1.53381 3.16072 1.32544 2.95234C1.11706 2.74397 1 2.46135 1 2.16667C1 1.87198 1.11706 1.58937 1.32544 1.38099C1.53381 1.17262 1.81643 1.05556 2.11111 1.05556H9.88889C10.1836 1.05556 10.4662 1.17262 10.6746 1.38099C10.8829 1.58937 11 1.87198 11 2.16667C11 2.46135 10.8829 2.74397 10.6746 2.95234C10.4662 3.16072 10.1836 3.27778 9.88889 3.27778M2.11111 3.27778V8.83334C2.11111 9.12802 2.22817 9.41064 2.43655 9.61901C2.64492 9.82738 2.92754 9.94445 3.22222 9.94445H8.77778C9.07246 9.94445 9.35508 9.82738 9.56345 9.61901C9.77183 9.41064 9.88889 9.12802 9.88889 8.83334V3.27778M4.88889 5.5H7.11111" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span class="text-xs font-medium text-gray-600">Archive</span>
               </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
               <button :class="[active? 'bg-green-50' : 'bg-transparent', 'w-full py-1.5 px-2 flex items-center space-x-2 transition-colors duration-150 ease-linear rounded']">
                  <svg class="text-gray-600 w-3.5 h-3.5" width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M4.33333 5.94444V9.27778M6.55556 5.94444V9.27778M1 3.72222H9.88889M9.33333 3.72222L8.85167 10.4678C8.83171 10.7481 8.70628 11.0105 8.50062 11.202C8.29496 11.3935 8.02437 11.5 7.74333 11.5H3.14556C2.86452 11.5 2.59393 11.3935 2.38827 11.202C2.18261 11.0105 2.05718 10.7481 2.03722 10.4678L1.55556 3.72222H9.33333ZM7.11111 3.72222V2.05556C7.11111 1.90821 7.05258 1.76691 6.94839 1.66272C6.84421 1.55853 6.7029 1.5 6.55556 1.5H4.33333C4.18599 1.5 4.04468 1.55853 3.9405 1.66272C3.83631 1.76691 3.77778 1.90821 3.77778 2.05556V3.72222H7.11111Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span class="text-xs font-medium text-gray-600">Delete</span>
               </button>
            </MenuItem>
         </div>
      </MenuItems>
      </transition>
   </Menu>
</template>

<script>
export default {
   name: "CardDropdown"
}
</script>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
</script>

<style lang="scss" scoped>

</style>