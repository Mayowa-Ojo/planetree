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
      <PopoverPanel class="absolute z-10 right-0 top-10 w-[272px] bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
         <div class="py-3.5 space-y-3.5">
            <div class="flex items-center justify-between px-3">
               <p class="text-sm font-semibold text-gray-600">Add a checklist</p>
               <PopoverButton class="p-0.5">
                  <svg class="text-gray-400" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M0.243744 0.254151C0.39986 0.0980824 0.61157 0.0104077 0.832318 0.0104077C1.05307 0.0104077 1.26478 0.0980824 1.42089 0.254151L4.9948 3.82806L8.5687 0.254151C8.6455 0.174639 8.73736 0.111218 8.83892 0.0675877C8.94049 0.0239574 9.04973 0.00099198 9.16027 3.14326e-05C9.27081 -0.000929114 9.38043 0.0201343 9.48274 0.0619929C9.58505 0.103851 9.678 0.165667 9.75617 0.243832C9.83433 0.321997 9.89615 0.414947 9.93801 0.517258C9.97987 0.619569 10.0009 0.729191 9.99997 0.83973C9.99901 0.950268 9.97604 1.05951 9.93241 1.16108C9.88878 1.26264 9.82536 1.3545 9.74585 1.4313L6.17194 5.0052L9.74585 8.57911C9.89749 8.73612 9.98141 8.94641 9.97951 9.16469C9.97761 9.38296 9.89006 9.59176 9.73571 9.74611C9.58136 9.90047 9.37256 9.98802 9.15428 9.98992C8.936 9.99181 8.72571 9.9079 8.5687 9.75626L4.9948 6.18235L1.42089 9.75626C1.26388 9.9079 1.05359 9.99181 0.835314 9.98992C0.617036 9.98802 0.408236 9.90047 0.253884 9.74611C0.099533 9.59176 0.0119801 9.38296 0.0100833 9.16469C0.00818653 8.94641 0.0920978 8.73612 0.243744 8.57911L3.81765 5.0052L0.243744 1.4313C0.0876747 1.27518 0 1.06347 0 0.842726C0 0.621978 0.0876747 0.410267 0.243744 0.254151Z" fill="currentColor"/>
                  </svg>
               </PopoverButton>
            </div>

            <hr class="bg-gray-200">

            <div class="w-full px-3.5 space-y-2">
               <label class="lg:text-sm text-xs text-gray-600 font-medium">Title</label>
               <div
                  class="h-7 w-full py-0.5 px-2 bg-gray-50 border border-gray-200 flex items-center rounded focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-200 focus-within:border-blue-300"
               >
                  <input type="text" placeholder="Enter a short title" class="w-full h-full appearance-none bg-transparent lg:text-sm text-xs text-gray-600 focus:outline-none">
               </div>
            </div>

            <div class="w-full px-3.5 space-y-2">
               <label class="lg:text-sm text-xs text-gray-600 font-medium">Copy items from...</label>
               <button class="h-7 w-full py-0.5 px-3 bg-gray-50 border border-gray-200 flex items-center justify-between rounded focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-200 focus-within:border-blue-300">
                  <span class="text-xs font-medium text-gray-400">Select card</span>
                  <svg class="" width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292787 0.305288C0.480314 0.117817 0.734622 0.0125018 0.999786 0.0125018C1.26495 0.0125018 1.51926 0.117817 1.70679 0.305288L4.99979 3.59829L8.29279 0.305288C8.38503 0.209778 8.49538 0.133596 8.61738 0.0811869C8.73939 0.0287779 8.87061 0.00119157 9.00339 3.7757e-05C9.13616 -0.00111606 9.26784 0.0241854 9.39074 0.0744663C9.51364 0.124747 9.62529 0.199 9.71918 0.292893C9.81307 0.386786 9.88733 0.498438 9.93761 0.621334C9.98789 0.744231 10.0132 0.87591 10.012 1.00869C10.0109 1.14147 9.9833 1.27269 9.93089 1.39469C9.87848 1.5167 9.8023 1.62704 9.70679 1.71929L5.70679 5.71929C5.51926 5.90676 5.26495 6.01207 4.99979 6.01207C4.73462 6.01207 4.48031 5.90676 4.29279 5.71929L0.292787 1.71929C0.105316 1.53176 0 1.27745 0 1.01229C0 0.747124 0.105316 0.492816 0.292787 0.305288Z" fill="#9CA3AF"/>
                  </svg>
               </button>
            </div>
            
         </div>

         <hr class="my-3.5 bg-gray-200">

         <div class="px-3 mb-3.5">
            <button class="w-full h-8 flex items-center justify-center space-x-2 bg-indigo-400 hover:bg-indigo-500 transition-colors duration-150 ease-linear rounded-md">
               <span class="text-xs font-medium text-white">Add</span>
            </button>
         </div>
      </PopoverPanel>
      </transition>
   </Popover>
</template>

<script>
export default {
   name: "ChecklistDropdown"
}
</script>

<script setup>
import { Popover , PopoverButton, PopoverPanel } from "@headlessui/vue";

</script>

<style lang="scss" scoped></style>