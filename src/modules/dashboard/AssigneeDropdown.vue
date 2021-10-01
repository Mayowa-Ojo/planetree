<template>
   <Popover class="relative" v-slot="{ open }">
      <PopoverButton class="md:w-full">
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
      <PopoverPanel class="absolute z-10 -top-1/2 -left-2 transform -translate-x-full -translate-y-1/2 w-[220px] bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
         <div class="py-3.5 space-y-3.5">
            <div class="flex items-center justify-between px-3.5">
               <p class="text-sm font-medium text-gray-500">Select assignees</p>
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
               >
                  <input type="text" placeholder="Filter members" class="w-full h-full appearance-none bg-transparent lg:text-sm text-xs text-gray-600 focus:outline-none">
               </div>
            </div>

            <div class="w-full px-3 space-y-3">
               <Switch
                  v-model="selectedUsers.arya"
                  :class="[selectedUsers.arya ? 'bg-indigo-400' : 'bg-gray-100', 'w-full h-8 flex items-center px-2 rounded-md']"
               >
                  <div class="w-6 h-6 p-0.5 rounded-full bg-gray-300">
                     <img src="../../assets/memoji-3.png" alt="user avatar" class="w-full h-full object-cover">
                  </div>
                  <span :class="[selectedUsers.arya ? 'text-white' : 'text-gray-600', 'text-xs font-medium ml-2 flex-auto text-left']">Arya Salim</span>
                  <svg :class="[selectedUsers.arya ? 'opacity-100' : 'opacity-0', 'ml-2']" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.707 6.707C11.8892 6.5184 11.99 6.2658 11.9877 6.0036C11.9854 5.7414 11.8802 5.49059 11.6948 5.30518C11.5094 5.11977 11.2586 5.0146 10.9964 5.01233C10.7342 5.01005 10.4816 5.11084 10.293 5.293L7 8.586L5.707 7.293C5.5184 7.11084 5.2658 7.01005 5.0036 7.01233C4.7414 7.0146 4.49059 7.11977 4.30518 7.30518C4.11977 7.49059 4.0146 7.7414 4.01233 8.0036C4.01005 8.2658 4.11084 8.5184 4.293 8.707L6.293 10.707C6.48053 10.8945 6.73484 10.9998 7 10.9998C7.26516 10.9998 7.51947 10.8945 7.707 10.707L11.707 6.707Z" fill="#34D399"/>
                  </svg>
               </Switch>
               <Switch
                  v-model="selectedUsers.jane"
                  :class="[selectedUsers.jane ? 'bg-indigo-400' : 'bg-gray-100', 'w-full h-8 flex items-center px-2 rounded-md']"
               >
                  <div class="w-6 h-6 p-0.5 rounded-full bg-gray-300">
                     <img src="../../assets/memoji-4.png" alt="user avatar" class="w-full h-full object-cover">
                  </div>
                  <span :class="[selectedUsers.jane ? 'text-white' : 'text-gray-600', 'text-xs font-medium ml-2 flex-auto text-left']">Jane Riddle</span>
                  <svg :class="[selectedUsers.jane ? 'opacity-100' : 'opacity-0', 'ml-2']" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.707 6.707C11.8892 6.5184 11.99 6.2658 11.9877 6.0036C11.9854 5.7414 11.8802 5.49059 11.6948 5.30518C11.5094 5.11977 11.2586 5.0146 10.9964 5.01233C10.7342 5.01005 10.4816 5.11084 10.293 5.293L7 8.586L5.707 7.293C5.5184 7.11084 5.2658 7.01005 5.0036 7.01233C4.7414 7.0146 4.49059 7.11977 4.30518 7.30518C4.11977 7.49059 4.0146 7.7414 4.01233 8.0036C4.01005 8.2658 4.11084 8.5184 4.293 8.707L6.293 10.707C6.48053 10.8945 6.73484 10.9998 7 10.9998C7.26516 10.9998 7.51947 10.8945 7.707 10.707L11.707 6.707Z" fill="#34D399"/>
                  </svg>
               </Switch>
               <Switch
                  v-model="selectedUsers.chris"
                  :class="[selectedUsers.chris ? 'bg-indigo-400' : 'bg-gray-100', 'w-full h-8 flex items-center px-2 rounded-md']"
               >
                  <div class="w-6 h-6 p-0.5 rounded-full bg-gray-300">
                     <img src="../../assets/memoji-1.png" alt="user avatar" class="w-full h-full object-cover">
                  </div>
                  <span :class="[selectedUsers.chris ? 'text-white' : 'text-gray-600', 'text-xs font-medium ml-2 flex-auto text-left']">Chris Nikola</span>
                  <svg :class="[selectedUsers.chris ? 'opacity-100' : 'opacity-0', 'ml-2']" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.707 6.707C11.8892 6.5184 11.99 6.2658 11.9877 6.0036C11.9854 5.7414 11.8802 5.49059 11.6948 5.30518C11.5094 5.11977 11.2586 5.0146 10.9964 5.01233C10.7342 5.01005 10.4816 5.11084 10.293 5.293L7 8.586L5.707 7.293C5.5184 7.11084 5.2658 7.01005 5.0036 7.01233C4.7414 7.0146 4.49059 7.11977 4.30518 7.30518C4.11977 7.49059 4.0146 7.7414 4.01233 8.0036C4.01005 8.2658 4.11084 8.5184 4.293 8.707L6.293 10.707C6.48053 10.8945 6.73484 10.9998 7 10.9998C7.26516 10.9998 7.51947 10.8945 7.707 10.707L11.707 6.707Z" fill="#34D399"/>
                  </svg>
               </Switch>
               <Switch
                  v-model="selectedUsers.brian"
                  :class="[selectedUsers.brian ? 'bg-indigo-400' : 'bg-gray-100', 'w-full h-8 flex items-center px-2 rounded-md']"
               >
                  <div class="w-6 h-6 p-0.5 rounded-full bg-gray-300">
                     <img src="../../assets/memoji-2.png" alt="user avatar" class="w-full h-full object-cover">
                  </div>
                  <span :class="[selectedUsers.brian ? 'text-white' : 'text-gray-600', 'text-xs font-medium ml-2 flex-auto text-left']">Brian Conolly</span>
                  <svg :class="[selectedUsers.brian ? 'opacity-100' : 'opacity-0', 'ml-2']" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.707 6.707C11.8892 6.5184 11.99 6.2658 11.9877 6.0036C11.9854 5.7414 11.8802 5.49059 11.6948 5.30518C11.5094 5.11977 11.2586 5.0146 10.9964 5.01233C10.7342 5.01005 10.4816 5.11084 10.293 5.293L7 8.586L5.707 7.293C5.5184 7.11084 5.2658 7.01005 5.0036 7.01233C4.7414 7.0146 4.49059 7.11977 4.30518 7.30518C4.11977 7.49059 4.0146 7.7414 4.01233 8.0036C4.01005 8.2658 4.11084 8.5184 4.293 8.707L6.293 10.707C6.48053 10.8945 6.73484 10.9998 7 10.9998C7.26516 10.9998 7.51947 10.8945 7.707 10.707L11.707 6.707Z" fill="#34D399"/>
                  </svg>
               </Switch>
            </div>

            <hr class="my-3.5 bg-gray-200">

            <div class="px-3">
               <div class="">
                  <button class="w-full h-8 mt-4 flex items-center justify-center space-x-2 bg-indigo-400 hover:bg-indigo-500 transition-colors duration-150 ease-linear rounded-md">
                     <span class="text-xs font-medium text-white">Assign</span>
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
   name: "AssigneeDropdown"
}
</script>

<script setup>
import { reactive } from "vue";
import { Popover , PopoverButton, PopoverPanel, Switch } from "@headlessui/vue";

const selectedUsers = reactive({
   arya: false,
   jane: false,
   chris: false,
   brian: false
});

</script>

<style lang="scss" scoped>
input::placeholder {
   font-size: 12px;
}

</style>