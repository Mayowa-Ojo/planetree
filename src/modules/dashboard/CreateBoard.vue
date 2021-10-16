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
            <div class="md:w-[440px] w-10/12 md:p-5 p-4 rounded-md fixed inset-0 z-10 m-auto bg-white md:space-y-4 space-y-3" :style="{height: 'fit-content'}">
               <DialogTitle class="lg:text-lg text-sm font-semibold text-gray-600">Create new board</DialogTitle>

               <hr class="md:my-3 my-1 h-0.5 bg-gray-100">

               <div class="space-y-2">
                  <label class="lg:text-sm text-xs text-gray-600 font-medium">Title</label>
                  <div class="lg:h-9 md:h-8 h-7 w-full bg-gray-50 border border-gray-200 py-1 px-3 flex items-center rounded-md focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-200 focus-within:border-blue-300">
                     <input
                        type="text" placeholder=""
                        class="w-full h-full appearance-none bg-transparent lg:text-sm text-xs text-gray-600 focus:outline-none"
                        v-model="title"
                     >
                  </div>
               </div>
               <div class="space-y-2">
                  <label class="lg:text-sm text-xs text-gray-600 font-medium">Description</label>
                  <div class="lg:h-9 md:h-8 h-7 w-full bg-gray-50 border border-gray-200 py-1 px-3 flex items-center rounded-md focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-200 focus-within:border-blue-300">
                     <input
                        type="text" placeholder=""
                        class="w-full h-full appearance-none bg-transparent lg:text-sm text-xs text-gray-600 focus:outline-none"
                        v-model="description"
                     >
                  </div>
               </div>

               <RadioGroup class="space-y-2" v-model="permissions">
                  <RadioGroupLabel class="lg:text-sm text-xs text-gray-600 font-medium block">Permissions</RadioGroupLabel>
                  <div class="inline-flex items-center space-x-4 px-3 rounded-md h-8 bg-gray-100">
                     <RadioGroupOption v-slot="{ checked }" value="public">
                        <div class="flex items-center space-x-2 cursor-pointer">
                           <span
                              class="inline-flex items-center justify-center w-3 h-3 rounded-full border"
                              :class="checked ? 'bg-indigo-400 border-transparent' : 'bg-gray-50 border-gray-300'"
                           >
                              <span class="w-1 h-1 rounded-full bg-white" :class="checked ? 'inline-block' : 'hidden'"/>
                           </span>
                           <span class="lg:text-xs text-[11px] font-medium" :class="checked ? 'text-gray-600' : 'text-gray-400'">Public</span>
                        </div>
                     </RadioGroupOption>
                     <RadioGroupOption v-slot="{ checked }" value="private">
                        <div class="flex items-center space-x-2 cursor-pointer">
                           <span
                              class="inline-flex items-center justify-center w-3 h-3 rounded-full border"
                              :class="checked ? 'bg-indigo-400 border-transparent' : 'bg-gray-50 border-gray-300'"
                           >
                              <span class="w-1 h-1 rounded-full bg-white" :class="checked ? 'inline-block' : 'hidden'"/>
                           </span>
                           <span class="lg:text-xs text-[11px] font-medium" :class="checked ? 'text-gray-600' : 'text-gray-400'">Private</span>
                        </div>
                     </RadioGroupOption>
                  </div>
               </RadioGroup>

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
   name: "CreateBoard"
}
</script>

<script setup>
import { ref } from "vue";
import {
   Dialog,
   DialogOverlay,
   DialogTitle,
   RadioGroup,
   RadioGroupOption,
   RadioGroupLabel,
   TransitionRoot,
   TransitionChild
} from "@headlessui/vue";
import { useBoard } from "../composables/useBoard";

const { createBoard } = useBoard();

const isOpen = ref(false);

const permissions = ref("public")

const title = ref("");

const description = ref("");

const handleSubmit = () => {
   createBoard({
      title: title.value
   });

   title.value = "";
   description.value = "";

   toggleDialog(false);
}

const toggleDialog = (value) => {
   isOpen.value = value;
}
</script>

<style lang="scss" scoped>

</style>