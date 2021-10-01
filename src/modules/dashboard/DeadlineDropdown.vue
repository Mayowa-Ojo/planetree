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
      <PopoverPanel class="absolute z-10 -top-1/2 -left-2 transform -translate-x-full -translate-y-1/2 w-[252px] bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
         <div class="py-3.5 space-y-3.5">
            <div class="flex items-center justify-between px-3.5">
               <p class="text-sm font-medium text-gray-600">Set due date</p>
               <PopoverButton class="p-0.5">
                  <svg class="text-gray-400" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M0.243744 0.254151C0.39986 0.0980824 0.61157 0.0104077 0.832318 0.0104077C1.05307 0.0104077 1.26478 0.0980824 1.42089 0.254151L4.9948 3.82806L8.5687 0.254151C8.6455 0.174639 8.73736 0.111218 8.83892 0.0675877C8.94049 0.0239574 9.04973 0.00099198 9.16027 3.14326e-05C9.27081 -0.000929114 9.38043 0.0201343 9.48274 0.0619929C9.58505 0.103851 9.678 0.165667 9.75617 0.243832C9.83433 0.321997 9.89615 0.414947 9.93801 0.517258C9.97987 0.619569 10.0009 0.729191 9.99997 0.83973C9.99901 0.950268 9.97604 1.05951 9.93241 1.16108C9.88878 1.26264 9.82536 1.3545 9.74585 1.4313L6.17194 5.0052L9.74585 8.57911C9.89749 8.73612 9.98141 8.94641 9.97951 9.16469C9.97761 9.38296 9.89006 9.59176 9.73571 9.74611C9.58136 9.90047 9.37256 9.98802 9.15428 9.98992C8.936 9.99181 8.72571 9.9079 8.5687 9.75626L4.9948 6.18235L1.42089 9.75626C1.26388 9.9079 1.05359 9.99181 0.835314 9.98992C0.617036 9.98802 0.408236 9.90047 0.253884 9.74611C0.099533 9.59176 0.0119801 9.38296 0.0100833 9.16469C0.00818653 8.94641 0.0920978 8.73612 0.243744 8.57911L3.81765 5.0052L0.243744 1.4313C0.0876747 1.27518 0 1.06347 0 0.842726C0 0.621978 0.0876747 0.410267 0.243744 0.254151Z" fill="currentColor"/>
                  </svg>
               </PopoverButton>
            </div>

            <hr class="bg-gray-200">

            <div class="w-full px-3.5 flex items-center justify-between">
               <div class="w-[116px] space-y-2">
                  <label class="lg:text-sm text-xs text-gray-600 font-normal">Date</label>
                  <div class="h-7 py-0.5 px-2 bg-gray-50 border border-gray-200 flex items-center rounded focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-200 focus-within:border-blue-300 relative">
                     <input type="text" placeholder="23/04/2021" class="w-full h-full appearance-none bg-transparent lg:text-sm text-xs text-gray-600 focus:outline-none">
                     <svg class="absolute right-2 top-1.5" width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6786 4.28571H0.321429C0.14392 4.28571 0 4.14179 0 3.96429V3C0 2.28991 0.575625 1.71429 1.28571 1.71429H2.57143V0.321429C2.57143 0.14392 2.71535 0 2.89286 0H3.96429C4.14179 0 4.28571 0.14392 4.28571 0.321429V1.71429H7.71429V0.321429C7.71429 0.14392 7.85821 0 8.03571 0H9.10714C9.28465 0 9.42857 0.14392 9.42857 0.321429V1.71429H10.7143C11.4244 1.71429 12 2.28991 12 3V3.96429C12 4.14179 11.8561 4.28571 11.6786 4.28571ZM0.321429 5.14286H11.6786C11.8561 5.14286 12 5.28678 12 5.46429V12.4286C12 13.1387 11.4244 13.7143 10.7143 13.7143H1.28571C0.575625 13.7143 0 13.1387 0 12.4286V5.46429C0 5.28678 0.14392 5.14286 0.321429 5.14286ZM9.249 7.71287L8.49447 6.95221C8.36946 6.82618 8.16595 6.82535 8.03992 6.95038L5.19964 9.76781L3.96804 8.52624C3.84303 8.40021 3.63948 8.39938 3.51346 8.52442L2.75282 9.27897C2.62679 9.40398 2.62596 9.6075 2.751 9.73353L4.96353 11.9639C5.08854 12.09 5.29205 12.0908 5.41808 11.9658L9.24718 8.16742C9.37321 8.04241 9.37404 7.83889 9.249 7.71287Z" fill="#9CA3AF"/>
                     </svg>
                  </div>
               </div>
               <div class="w-[80px] space-y-2">
                  <label class="lg:text-sm text-xs text-gray-600 font-normal">Time</label>
                  <div class="h-7 py-0.5 px-2 bg-gray-50 border border-gray-200 flex items-center rounded focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-200 focus-within:border-blue-300 relative">
                     <input type="text" placeholder="12:45" class="w-full h-full appearance-none bg-transparent lg:text-sm text-xs text-gray-600 focus:outline-none">
                     <svg class="absolute right-2 top-1.5 w-3.5 h-3.5" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 0C2.68548 0 0 2.68548 0 6C0 9.31452 2.68548 12 6 12C9.31452 12 12 9.31452 12 6C12 2.68548 9.31452 0 6 0ZM8.23766 7.57258L7.75379 8.17742C7.72204 8.21712 7.68277 8.25018 7.63824 8.2747C7.59371 8.29923 7.54479 8.31474 7.49426 8.32036C7.44374 8.32597 7.3926 8.32158 7.34377 8.30744C7.29494 8.29329 7.24937 8.26966 7.20968 8.2379L5.58871 7.035C5.47545 6.94432 5.38403 6.82933 5.32121 6.69855C5.25839 6.56776 5.22579 6.42452 5.22581 6.27944V2.51613C5.22581 2.41346 5.26659 2.31501 5.33918 2.24241C5.41178 2.16982 5.51024 2.12903 5.6129 2.12903H6.3871C6.48976 2.12903 6.58822 2.16982 6.66082 2.24241C6.73341 2.31501 6.77419 2.41346 6.77419 2.51613V6L8.17742 7.02823C8.21714 7.06 8.2502 7.09929 8.27473 7.14385C8.29925 7.18841 8.31476 7.23736 8.32035 7.28792C8.32594 7.33847 8.32152 7.38963 8.30733 7.43848C8.29315 7.48732 8.26947 7.53289 8.23766 7.57258Z" fill="#9CA3AF"/>
                     </svg>
                  </div>
               </div>
            </div>

            <SwitchGroup>
               <div class="flex items-center px-3.5">
                  <Switch
                     v-model="reminderEnabled"
                     :class='reminderEnabled ? "bg-indigo-400" : "bg-gray-300"'
                     class="relative inline-flex items-center h-4 w-[28px] transition-colors rounded-[15px]"
                  >
                     <span
                        :class='reminderEnabled ? "translate-x-4" : "translate-x-[3px]"'
                        class="inline-block w-2.5 h-2.5 transition-transform transform bg-white rounded-full"
                     />
                  </Switch>
                  <SwitchLabel class="text-xs font-medium text-gray-600 ml-2 cursor-pointer">Set reminder</SwitchLabel>
               </div>
            </SwitchGroup>

            <hr class="my-3.5 bg-gray-200">

            <div class="px-3.5">
               <div class="">
                  <button class="w-full h-8 mt-4 flex items-center justify-center space-x-2 bg-indigo-400 hover:bg-indigo-500 transition-colors duration-150 ease-linear rounded-md">
                     <span class="text-xs font-medium text-white">Schedule</span>
                  </button>
               </div>
            </div>
         </div>
      </PopoverPanel>
      </transition>
   </Popover>
</template>

<script>
export default {
   name: "AttachmentDropdown"
}
</script>

<script setup>
import { ref } from "vue";
import { Popover , PopoverButton, PopoverPanel, Switch, SwitchGroup, SwitchLabel } from "@headlessui/vue";

const reminderEnabled = ref(false);
</script>

<style lang="scss" scoped>
input::placeholder {
   font-size: 12px;
   font-weight: 500;
   color: #9CA3AF;
}
</style>