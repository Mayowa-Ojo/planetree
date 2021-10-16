<template>
   <slot :isOpen="isOpen" :toggleDialog="toggleDialog"></slot>
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
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
         >
            <div class="md:w-[600px] w-full md:p-5 p-4 rounded-md fixed inset-0 z-10 m-auto bg-white md:space-y-4 space-y-3" :style="{height: 'fit-content'}">
               <DialogTitle class="lg:text-lg text-sm font-semibold text-gray-600">Create new card</DialogTitle>

               <hr class="md:my-3 my-1 h-0.5 bg-gray-100">

               <div class="flex space-x-8">
                  <div class="md:w-3/4 w-full space-y-3">
                     <div class="space-y-2">
                        <label class="lg:text-sm text-xs text-gray-600 font-medium">Title</label>
                        <div class="lg:h-9 md:h-8 h-7 w-full bg-gray-50 border border-gray-200 py-1 px-3 flex items-center rounded-md focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-200 focus-within:border-blue-300">
                           <input type="text" v-model="title" class="w-full h-full appearance-none bg-transparent lg:text-sm text-xs text-gray-600 focus:outline-none">
                        </div>
                     </div>
                     <div class="space-y-2">
                        <label class="lg:text-sm text-xs text-gray-600 font-medium flex items-center justify-between">
                           <span>Description</span>
                           <span class="text-[10px] font-semibold text-gray-400 -mb-1">205</span>
                        </label>
                        <div class="w-full bg-gray-50 border border-gray-200 py-1 px-2 flex items-center rounded-md focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-200 focus-within:border-blue-300">
                           <textarea
                              class="w-full h-full appearance-none bg-transparent lg:text-sm text-xs text-gray-600 focus:outline-none"
                              rows="3"
                              placeholder="Add a more detailed description..."
                              v-model="description"
                           ></textarea>
                        </div>
                     </div>
                     <div class="space-y-3 pt-3">
                        <div class="flex items-center">
                           <p class="text-[16px] font-semibold text-gray-600">Activity</p>
                           <svg class="w-3.5 h-3.5 text-gray-400 ml-2" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6C12 7.5913 11.3679 9.11742 10.2426 10.2426C9.11742 11.3679 7.5913 12 6 12C4.4087 12 2.88258 11.3679 1.75736 10.2426C0.632141 9.11742 0 7.5913 0 6C0 4.4087 0.632141 2.88258 1.75736 1.75736C2.88258 0.632141 4.4087 0 6 0C7.5913 0 9.11742 0.632141 10.2426 1.75736C11.3679 2.88258 12 4.4087 12 6ZM6 3.75C5.86822 3.74987 5.73874 3.78447 5.62459 3.8503C5.51043 3.91613 5.41564 4.01088 5.34975 4.125C5.30217 4.21341 5.23733 4.29136 5.15907 4.35425C5.08081 4.41713 4.99072 4.46366 4.89414 4.49108C4.79756 4.51849 4.69646 4.52624 4.59683 4.51386C4.4972 4.50149 4.40107 4.46923 4.31414 4.41901C4.22721 4.36879 4.15124 4.30162 4.09075 4.2215C4.03026 4.14138 3.98646 4.04992 3.96197 3.95256C3.93748 3.8552 3.93278 3.75391 3.94816 3.6547C3.96354 3.55549 3.99868 3.46038 4.0515 3.375C4.29916 2.94608 4.68143 2.61087 5.13902 2.42135C5.59661 2.23182 6.10394 2.19858 6.58235 2.32677C7.06076 2.45496 7.4835 2.73742 7.78502 3.13035C8.08653 3.52328 8.24998 4.00472 8.25 4.5C8.25013 4.96546 8.10596 5.41952 7.83732 5.79964C7.56868 6.17976 7.18881 6.46724 6.75 6.6225V6.75C6.75 6.94891 6.67098 7.13968 6.53033 7.28033C6.38968 7.42098 6.19891 7.5 6 7.5C5.80109 7.5 5.61032 7.42098 5.46967 7.28033C5.32902 7.13968 5.25 6.94891 5.25 6.75V6C5.25 5.80109 5.32902 5.61032 5.46967 5.46967C5.61032 5.32902 5.80109 5.25 6 5.25C6.19891 5.25 6.38968 5.17098 6.53033 5.03033C6.67098 4.88968 6.75 4.69891 6.75 4.5C6.75 4.30109 6.67098 4.11032 6.53033 3.96967C6.38968 3.82902 6.19891 3.75 6 3.75ZM6 9.75C6.19891 9.75 6.38968 9.67098 6.53033 9.53033C6.67098 9.38968 6.75 9.19891 6.75 9C6.75 8.80109 6.67098 8.61032 6.53033 8.46967C6.38968 8.32902 6.19891 8.25 6 8.25C5.80109 8.25 5.61032 8.32902 5.46967 8.46967C5.32902 8.61032 5.25 8.80109 5.25 9C5.25 9.19891 5.32902 9.38968 5.46967 9.53033C5.61032 9.67098 5.80109 9.75 6 9.75Z" fill="currentColor"/>
                           </svg>
                        </div>
                        <div class="flex items-center space-x-3">
                           <div class="relative flex-auto h-9 bg-gray-50 border border-gray-200 py-1 px-3 flex items-center rounded-full focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-200 focus-within:border-blue-300">
                              <input type="text" placeholder="Write a comment..." class="w-full h-full appearance-none bg-transparent lg:text-sm text-xs text-gray-600 focus:outline-none">
                              <span class="inline-flex items-center space-x-2 absolute right-3 top-3">
                                 <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12ZM3.75 5.25C3.94891 5.25 4.13968 5.17098 4.28033 5.03033C4.42098 4.88968 4.5 4.69891 4.5 4.5C4.5 4.30109 4.42098 4.11032 4.28033 3.96967C4.13968 3.82902 3.94891 3.75 3.75 3.75C3.55109 3.75 3.36032 3.82902 3.21967 3.96967C3.07902 4.11032 3 4.30109 3 4.5C3 4.69891 3.07902 4.88968 3.21967 5.03033C3.36032 5.17098 3.55109 5.25 3.75 5.25ZM9 4.5C9 4.69891 8.92098 4.88968 8.78033 5.03033C8.63968 5.17098 8.44891 5.25 8.25 5.25C8.05109 5.25 7.86032 5.17098 7.71967 5.03033C7.57902 4.88968 7.5 4.69891 7.5 4.5C7.5 4.30109 7.57902 4.11032 7.71967 3.96967C7.86032 3.82902 8.05109 3.75 8.25 3.75C8.44891 3.75 8.63968 3.82902 8.78033 3.96967C8.92098 4.11032 9 4.30109 9 4.5ZM8.652 8.65125C8.72163 8.58157 8.77686 8.49885 8.81453 8.40783C8.85219 8.3168 8.87156 8.21925 8.87153 8.12073C8.87149 8.02222 8.85205 7.92468 8.81432 7.83368C8.77659 7.74268 8.72131 7.66001 8.65162 7.59037C8.58194 7.52074 8.49923 7.46552 8.4082 7.42785C8.31718 7.39018 8.21962 7.37081 8.12111 7.37085C8.0226 7.37088 7.92506 7.39032 7.83406 7.42805C7.74306 7.46578 7.66038 7.52107 7.59075 7.59075C7.16881 8.01256 6.59662 8.24952 6 8.24952C5.40338 8.24952 4.83119 8.01256 4.40925 7.59075C4.26862 7.45002 4.07784 7.37092 3.87889 7.37085C3.67994 7.37078 3.48911 7.44974 3.34837 7.59037C3.20764 7.73101 3.12854 7.92178 3.12847 8.12073C3.1284 8.31969 3.20737 8.51052 3.348 8.65125C3.69623 8.99957 4.10967 9.27589 4.56471 9.4644C5.01974 9.65292 5.50746 9.74995 6 9.74995C6.49254 9.74995 6.98026 9.65292 7.43529 9.4644C7.89033 9.27589 8.30377 8.99957 8.652 8.65125Z" fill="#9CA3AF"/>
                                 </svg>
                                 <svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.85714 2.14286C2.85714 1.57454 3.08291 1.02949 3.48477 0.627628C3.88664 0.225765 4.43168 0 5 0C5.56832 0 6.11337 0.225765 6.51523 0.627628C6.91709 1.02949 7.14286 1.57454 7.14286 2.14286V5C7.14286 5.56832 6.91709 6.11337 6.51523 6.51523C6.11337 6.91709 5.56832 7.14286 5 7.14286C4.43168 7.14286 3.88664 6.91709 3.48477 6.51523C3.08291 6.11337 2.85714 5.56832 2.85714 5V2.14286ZM5.71429 9.95C6.90444 9.77807 7.99278 9.18303 8.77989 8.27392C9.567 7.3648 10.0002 6.20251 10 5C10 4.81056 9.92475 4.62888 9.79079 4.49492C9.65684 4.36097 9.47515 4.28571 9.28571 4.28571C9.09627 4.28571 8.91459 4.36097 8.78064 4.49492C8.64668 4.62888 8.57143 4.81056 8.57143 5C8.57143 5.9472 8.19515 6.85561 7.52538 7.52538C6.85561 8.19515 5.9472 8.57143 5 8.57143C4.0528 8.57143 3.14439 8.19515 2.47462 7.52538C1.80485 6.85561 1.42857 5.9472 1.42857 5C1.42857 4.81056 1.35332 4.62888 1.21936 4.49492C1.08541 4.36097 0.903726 4.28571 0.714286 4.28571C0.524845 4.28571 0.343164 4.36097 0.209209 4.49492C0.0752549 4.62888 4.42398e-08 4.81056 4.42398e-08 5C-0.00015983 6.20251 0.433 7.3648 1.22011 8.27392C2.00722 9.18303 3.09556 9.77807 4.28571 9.95V11.4286H2.14286C1.95342 11.4286 1.77174 11.5038 1.63778 11.6378C1.50383 11.7717 1.42857 11.9534 1.42857 12.1429C1.42857 12.3323 1.50383 12.514 1.63778 12.6479C1.77174 12.7819 1.95342 12.8571 2.14286 12.8571H7.85714C8.04658 12.8571 8.22826 12.7819 8.36222 12.6479C8.49617 12.514 8.57143 12.3323 8.57143 12.1429C8.57143 11.9534 8.49617 11.7717 8.36222 11.6378C8.22826 11.5038 8.04658 11.4286 7.85714 11.4286H5.71429V9.95Z" fill="#9CA3AF"/>
                                 </svg>
                              </span>
                           </div>
                           <div class="h-8 w-8 rounded-full bg-gray-200 p-0.5">
                              <img src="../../assets/memoji-1.png" alt="user avatar" class="w-full h-full object-cover">
                           </div>
                        </div>
                     </div>
                  </div>

                  <div class="md:w-1/4 w-auto py-2 space-y-2">
                     <p class="text-xs font-semibold text-gray-600 uppercase md:inline-block hidden">add to card</p>
                     <span class="w-9 h-8 flex items-center justify-center bg-gray-100 rounded md:hidden flex">
                        <svg class="w-3 h-3 text-gray-400" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0C5.26522 0 5.51957 0.105357 5.70711 0.292893C5.89464 0.48043 6 0.734784 6 1V4H9C9.26522 4 9.51957 4.10536 9.70711 4.29289C9.89464 4.48043 10 4.73478 10 5C10 5.26522 9.89464 5.51957 9.70711 5.70711C9.51957 5.89464 9.26522 6 9 6H6V9C6 9.26522 5.89464 9.51957 5.70711 9.70711C5.51957 9.89464 5.26522 10 5 10C4.73478 10 4.48043 9.89464 4.29289 9.70711C4.10536 9.51957 4 9.26522 4 9V6H1C0.734784 6 0.48043 5.89464 0.292893 5.70711C0.105357 5.51957 0 5.26522 0 5C0 4.73478 0.105357 4.48043 0.292893 4.29289C0.48043 4.10536 0.734784 4 1 4H4V1C4 0.734784 4.10536 0.48043 4.29289 0.292893C4.48043 0.105357 4.73478 0 5 0Z" fill="currentColor"/>
                        </svg>
                     </span>
                     <LabelsDropdown @update-label="setLabel">
                        <button class="flex items-center md:w-full w-9 h-8 px-2 rounded bg-gray-100 hover:bg-gray-200 transition-colors duration-150 ease-linear">
                           <svg class="w-[18px] h-[18px] md:mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                           </svg>
                           <span class="text-sm font-medium text-gray-600 md:inline-block hidden">Labels</span>
                        </button>
                     </LabelsDropdown>
                     <ChecklistDropdown>
                        <button class="flex items-center md:w-full w-9 h-8 px-2 rounded bg-gray-100 hover:bg-gray-200 transition-colors duration-150 ease-linear">
                           <svg class="w-4 h-4 md:mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                           </svg>
                           <span class="text-sm font-medium text-gray-600 md:inline-block hidden">Checklist</span>
                        </button>
                     </ChecklistDropdown>
                     <AttachmentDropdown>
                        <button class="flex items-center md:w-full w-9 h-8 px-2 rounded bg-gray-100 hover:bg-gray-200 transition-colors duration-150 ease-linear">
                           <svg class="w-4 h-4 md:mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                           </svg>
                           <span class="text-sm font-medium text-gray-600 md:inline-block hidden">Attachment</span>
                        </button>
                     </AttachmentDropdown>
                     <AssigneeDropdown>
                        <button class="flex items-center md:w-full w-9 h-8 px-2 rounded bg-gray-100 hover:bg-gray-200 transition-colors duration-150 ease-linear">
                           <svg class="w-[18px] h-[18px] md:mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path>
                           </svg>
                           <span class="text-sm font-medium text-gray-600 md:inline-block hidden">Assignee</span>
                        </button>
                     </AssigneeDropdown>
                     <DeadlineDropdown>
                        <button class="flex items-center md:w-full w-9 h-8 px-2 rounded bg-gray-100 hover:bg-gray-200 transition-colors duration-150 ease-linear">
                           <svg class="w-[18px] h-[18px] md:mr-2 text-gray-400" width="417" height="512" viewBox="0 0 417 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M416 304C416 418.9 322.9 512 208 512C93.1 512 0 418.9 0 304C0 200 76.3 113.8 176 98.5V64H148C141.4 64 136 58.6 136 52V12C136 5.4 141.4 0 148 0H268C274.6 0 280 5.4 280 12V52C280 58.6 274.6 64 268 64H240V98.5C277.5 104.3 311.7 120.1 339.7 143.1L367.2 115.6C371.9 110.9 379.5 110.9 384.2 115.6L412.5 143.9C417.2 148.6 417.2 156.2 412.5 160.9L382.5 190.9C403.7 223.3 416 262.2 416 304ZM240 340V188.5C240 181.9 234.6 176.5 228 176.5H188C181.4 176.5 176 181.9 176 188.5V340C176 346.6 181.4 352 188 352H228C234.6 352 240 346.6 240 340Z" fill="currentColor"/>
                           </svg>
                           <span class="text-sm font-medium text-gray-600 md:inline-block hidden">Deadline</span>
                        </button>
                     </DeadlineDropdown>
                  </div>
               </div>

               <div class="flex items-center justify-between">
                  <button
                     class="md:px-5 px-3.5 md:py-2 py-1.5 rounded-md bg-gray-200 text-gray-600 font-medium lg:text-sm md:text-xs text-[11px] mt-2 hover:bg-gray-300"
                     @click="toggleDialog(false)"
                  >Cancel</button>
                  <button
                     class="md:px-5 px-3.5 md:py-2 py-1.5 rounded-md bg-indigo-400 text-white font-medium lg:text-sm md:text-xs text-[11px] mt-2 hover:bg-indigo-500"
                     @click="handleSubmit"
                  >Create</button>
               </div>
            </div>
         </TransitionChild>
      </Dialog>
   </TransitionRoot>
</template>

<script>
export default {
   name: "CreateCard"
}
</script>

<script setup>
import { ref, defineProps } from "vue";
import {
   Dialog,
   DialogOverlay,
   DialogTitle,
   TransitionRoot,
   TransitionChild
} from "@headlessui/vue";
import LabelsDropdown from "./LabelsDropdown.vue";
import ChecklistDropdown from "./ChecklistDropdown.vue";
import AttachmentDropdown from "./AttachmentDropdown.vue";
import AssigneeDropdown from "./AssigneeDropdown.vue";
import DeadlineDropdown from "./DeadlineDropdown.vue";
import { useBoard } from "../composables/useBoard";

const props = defineProps({
   board: String
});

const { createCard } = useBoard();

const isOpen = ref(false);

const title = ref("");

const description = ref("");

const label = ref("");

const toggleDialog = (value) => {
   isOpen.value = value;
}

const setLabel = (val) => {
   label.value = val;
}

const handleSubmit = () => {
   createCard({
      board: props.board,
      title: title.value,
      description: description.value,
      category: label.value
   });

   title.value = "";
   description.value = "";
   
   toggleDialog(false);
}
</script>

<style lang="scss" scoped>

</style>