<template>
   <Popover class="relative" v-slot="{ open }">
      <PopoverButton class="w-full">
         <slot></slot>
      </PopoverButton>

      <transition
         enter-active-class="transition duration-200 ease-out"
         enter-from-class="translate-y-1 opacity-0"
         enter-to-class="translate-y-0 opacity-150"
         leave-active-class="transition duration-150 ease-in"
         leave-from-class="translate-y-0 opacity-100"
         leave-to-class="translate-y-1 opacity-0"
      >
      <PopoverPanel class="absolute z-10 right-0 top-10 w-[220px] bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
         <div class="py-3.5 space-y-3.5">
            <div class="flex items-center justify-between px-3">
               <p class="text-sm font-semibold text-gray-600">Select label</p>
               <PopoverButton class="p-0.5">
                  <svg class="text-gray-400" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M0.243744 0.254151C0.39986 0.0980824 0.61157 0.0104077 0.832318 0.0104077C1.05307 0.0104077 1.26478 0.0980824 1.42089 0.254151L4.9948 3.82806L8.5687 0.254151C8.6455 0.174639 8.73736 0.111218 8.83892 0.0675877C8.94049 0.0239574 9.04973 0.00099198 9.16027 3.14326e-05C9.27081 -0.000929114 9.38043 0.0201343 9.48274 0.0619929C9.58505 0.103851 9.678 0.165667 9.75617 0.243832C9.83433 0.321997 9.89615 0.414947 9.93801 0.517258C9.97987 0.619569 10.0009 0.729191 9.99997 0.83973C9.99901 0.950268 9.97604 1.05951 9.93241 1.16108C9.88878 1.26264 9.82536 1.3545 9.74585 1.4313L6.17194 5.0052L9.74585 8.57911C9.89749 8.73612 9.98141 8.94641 9.97951 9.16469C9.97761 9.38296 9.89006 9.59176 9.73571 9.74611C9.58136 9.90047 9.37256 9.98802 9.15428 9.98992C8.936 9.99181 8.72571 9.9079 8.5687 9.75626L4.9948 6.18235L1.42089 9.75626C1.26388 9.9079 1.05359 9.99181 0.835314 9.98992C0.617036 9.98802 0.408236 9.90047 0.253884 9.74611C0.099533 9.59176 0.0119801 9.38296 0.0100833 9.16469C0.00818653 8.94641 0.0920978 8.73612 0.243744 8.57911L3.81765 5.0052L0.243744 1.4313C0.0876747 1.27518 0 1.06347 0 0.842726C0 0.621978 0.0876747 0.410267 0.243744 0.254151Z" fill="currentColor"/>
                  </svg>
               </PopoverButton>
            </div>

            <hr class="bg-gray-200">

            <div class="w-full px-3">
               <div
                  class="h-7 w-full py-0.5 px-2 bg-gray-50 border border-gray-200 flex items-center rounded focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-200 focus-within:border-blue-300"
                  :class="[(open) ? 'bg-white ring-2 ring-blue-200 border-blue-300' : '']"
               >
                  <input type="text" placeholder="Filter options" class="w-full h-full appearance-none bg-transparent lg:text-sm text-xs text-gray-600 focus:outline-none">
               </div>
            </div>

            <RadioGroup class="" v-model="labels">
               <div class="space-y-2 px-3">
                  <RadioGroupOption v-slot="{ checked }" value="design">
                     <button :class="[checked ? 'bg-blue-400' : 'bg-gray-100', 'group flex items-center space-x-2 w-full h-8 px-2.5 rounded-md hover:bg-gray-200 focus:bg-gray-200 focus:outline-none']">
                        <span
                           class="inline-block w-2 h-2 rounded-full group-hover:bg-blue-400 group-focus:bg-blue-400"
                           :class="checked ? 'bg-white' : 'bg-blue-400'"
                        >
                        </span>
                        <span class="lg:text-xs text-[11px] font-medium capitalize group-hover:text-gray-600 group-focus:text-gray-600" :class="checked ? 'text-white' : 'text-gray-600'">design</span>
                     </button>
                  </RadioGroupOption>
                  <RadioGroupOption v-slot="{ checked }" value="research">
                     <button :class="[checked ? 'bg-pink-400' : 'bg-gray-100', 'group flex items-center space-x-2 w-full h-8 px-2.5 rounded-md hover:bg-gray-200 focus:bg-gray-200 focus:outline-none']">
                        <span
                           class="inline-block w-2 h-2 rounded-full group-hover:bg-pink-400 group-focus:bg-pink-400"
                           :class="checked ? 'bg-white' : 'bg-pink-400'"
                        >
                        </span>
                        <span class="lg:text-xs text-[11px] font-medium capitalize group-hover:text-gray-600 group-focus:text-gray-600" :class="checked ? 'text-white' : 'text-gray-600'">research</span>
                     </button>
                  </RadioGroupOption>
                  <RadioGroupOption v-slot="{ checked }" value="planning">
                     <button :class="[checked ? 'bg-green-400' : 'bg-gray-100', 'group flex items-center space-x-2 w-full h-8 px-2.5 rounded-md hover:bg-gray-200 focus:bg-gray-200 focus:outline-none']">
                        <span
                           class="inline-block w-2 h-2 rounded-full group-hover:bg-green-400 group-focus:bg-green-400"
                           :class="checked ? 'bg-white' : 'bg-green-400'"
                        >
                        </span>
                        <span class="lg:text-xs text-[11px] font-medium capitalize group-hover:text-gray-600 group-focus:text-gray-600" :class="checked ? 'text-white' : 'text-gray-600'">planning</span>
                     </button>
                  </RadioGroupOption>
                  <RadioGroupOption v-slot="{ checked }" value="content">
                     <button :class="[checked ? 'bg-yellow-400' : 'bg-gray-100', 'group flex items-center space-x-2 w-full h-8 px-2.5 rounded-md hover:bg-gray-200 focus:bg-gray-200 focus:outline-none']">
                        <span
                           class="inline-block w-2 h-2 rounded-full group-hover:bg-yellow-400 group-focus:bg-yellow-400"
                           :class="checked ? 'bg-white' : 'bg-yellow-400'"
                        >
                        </span>
                        <span class="lg:text-xs text-[11px] font-medium capitalize group-hover:text-gray-600 group-focus:text-gray-600" :class="checked ? 'text-white' : 'text-gray-600'">content</span>
                     </button>
                  </RadioGroupOption>
                  <RadioGroupOption v-slot="{ checked }" value="dev">
                     <button :class="[checked ? 'bg-red-400' : 'bg-gray-100', 'group flex items-center space-x-2 w-full h-8 px-2.5 rounded-md hover:bg-gray-200 focus:bg-gray-200 focus:outline-none']">
                        <span
                           class="inline-block w-2 h-2 rounded-full group-hover:bg-red-400 group-focus:bg-red-400"
                           :class="checked ? 'bg-white' : 'bg-red-400'"
                        >
                        </span>
                        <span class="lg:text-xs text-[11px] font-medium capitalize group-hover:text-gray-600 group-focus:text-gray-600" :class="checked ? 'text-white' : 'text-gray-600'">dev</span>
                     </button>
                  </RadioGroupOption>
               </div>
            </RadioGroup>
         </div>

         <hr class="mb-3.5 bg-gray-200">

         <div class="px-3 mb-3.5">
            <button class="w-full h-8 flex items-center justify-center space-x-2 bg-indigo-400 hover:bg-indigo-500 transition-colors duration-150 ease-linear rounded-md">
               <svg class="text-white" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0C5.26522 0 5.51957 0.105357 5.70711 0.292893C5.89464 0.48043 6 0.734784 6 1V4H9C9.26522 4 9.51957 4.10536 9.70711 4.29289C9.89464 4.48043 10 4.73478 10 5C10 5.26522 9.89464 5.51957 9.70711 5.70711C9.51957 5.89464 9.26522 6 9 6H6V9C6 9.26522 5.89464 9.51957 5.70711 9.70711C5.51957 9.89464 5.26522 10 5 10C4.73478 10 4.48043 9.89464 4.29289 9.70711C4.10536 9.51957 4 9.26522 4 9V6H1C0.734784 6 0.48043 5.89464 0.292893 5.70711C0.105357 5.51957 0 5.26522 0 5C0 4.73478 0.105357 4.48043 0.292893 4.29289C0.48043 4.10536 0.734784 4 1 4H4V1C4 0.734784 4.10536 0.48043 4.29289 0.292893C4.48043 0.105357 4.73478 0 5 0Z" fill="currentColor"/>
               </svg>
               <span class="text-xs font-medium text-white">New Label</span>
            </button>
         </div>
      </PopoverPanel>
      </transition>
   </Popover>
</template>

<script>
export default {
   name: "LabelsDropdown"
}
</script>

<script setup>
import { Popover , PopoverButton, PopoverPanel, RadioGroup, RadioGroupOption } from "@headlessui/vue";
import { ref } from "vue";

const labels = ref("design");
</script>

<style lang="scss" scoped></style>