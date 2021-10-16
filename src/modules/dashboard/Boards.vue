<template>
   <div class="flex space-x-8 md:m-8 m-5 pr-8" :style="{width: 'fit-content'}">
      <div class="flex flex-col space-y-5 min-w-[200px]" v-for="(board, idx) in Object.keys(boards)" :key="idx">
         <div class="flex items-center justify-between">
            <p class="text-xs font-semibold text-gray-700 uppercase">
               {{board}} <span class="text-gray-400 ml-2">5</span>
            </p>
            <CreateCard v-slot="{ toggleDialog }" :board="board">
               <button
                  class="p-2 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 focus:outline-none"
                  @click="toggleDialog(true)"
               >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0C5.26522 0 5.51957 0.105357 5.70711 0.292893C5.89464 0.48043 6 0.734784 6 1V4H9C9.26522 4 9.51957 4.10536 9.70711 4.29289C9.89464 4.48043 10 4.73478 10 5C10 5.26522 9.89464 5.51957 9.70711 5.70711C9.51957 5.89464 9.26522 6 9 6H6V9C6 9.26522 5.89464 9.51957 5.70711 9.70711C5.51957 9.89464 5.26522 10 5 10C4.73478 10 4.48043 9.89464 4.29289 9.70711C4.10536 9.51957 4 9.26522 4 9V6H1C0.734784 6 0.48043 5.89464 0.292893 5.70711C0.105357 5.51957 0 5.26522 0 5C0 4.73478 0.105357 4.48043 0.292893 4.29289C0.48043 4.10536 0.734784 4 1 4H4V1C4 0.734784 4.10536 0.48043 4.29289 0.292893C4.48043 0.105357 4.73478 0 5 0Z" fill="#4B5563"/>
                  </svg>
               </button>
            </CreateCard>
         </div>
         <div v-if="boards[board].length < 1" class="bg-gray-100 rounded-md border-2 border-dashed border-gray-300 hover:bg-gray-200">
            <CreateCard v-slot="{ toggleDialog }" :board="board">
               <button class="flex items-center p-4 space-x-4 w-full h-full" @click="toggleDialog(true)">
                  <svg class="text-gray-400 w-3 h-3" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0C5.26522 0 5.51957 0.105357 5.70711 0.292893C5.89464 0.48043 6 0.734784 6 1V4H9C9.26522 4 9.51957 4.10536 9.70711 4.29289C9.89464 4.48043 10 4.73478 10 5C10 5.26522 9.89464 5.51957 9.70711 5.70711C9.51957 5.89464 9.26522 6 9 6H6V9C6 9.26522 5.89464 9.51957 5.70711 9.70711C5.51957 9.89464 5.26522 10 5 10C4.73478 10 4.48043 9.89464 4.29289 9.70711C4.10536 9.51957 4 9.26522 4 9V6H1C0.734784 6 0.48043 5.89464 0.292893 5.70711C0.105357 5.51957 0 5.26522 0 5C0 4.73478 0.105357 4.48043 0.292893 4.29289C0.48043 4.10536 0.734784 4 1 4H4V1C4 0.734784 4.10536 0.48043 4.29289 0.292893C4.48043 0.105357 4.73478 0 5 0Z" fill="currentColor"/>
                  </svg>
                  <p class="text-xs font-medium text-gray-400 uppercase whitespace-nowrap">Add a card</p>
               </button>
            </CreateCard>
         </div>
         <draggable
            class="space-y-5"
            :list="boards[board]"
            group="projects"
            itemKey="id"
         >
            <template #item="{ element }">
               <Card :data="element"/>
            </template>
         </draggable>
      </div>

      <div
         class="flex flex-col items-start p-4 bg-gray-100 rounded-md border-2 border-dashed border-gray-300 hover:bg-gray-200"
         :style="{height: 'fit-content'}"
      >
         <CreateBoard v-slot="{ toggleDialog }">
            <button class="flex items-center space-x-4" @click="toggleDialog(true)">
               <svg class="text-gray-400 w-3 h-3" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0C5.26522 0 5.51957 0.105357 5.70711 0.292893C5.89464 0.48043 6 0.734784 6 1V4H9C9.26522 4 9.51957 4.10536 9.70711 4.29289C9.89464 4.48043 10 4.73478 10 5C10 5.26522 9.89464 5.51957 9.70711 5.70711C9.51957 5.89464 9.26522 6 9 6H6V9C6 9.26522 5.89464 9.51957 5.70711 9.70711C5.51957 9.89464 5.26522 10 5 10C4.73478 10 4.48043 9.89464 4.29289 9.70711C4.10536 9.51957 4 9.26522 4 9V6H1C0.734784 6 0.48043 5.89464 0.292893 5.70711C0.105357 5.51957 0 5.26522 0 5C0 4.73478 0.105357 4.48043 0.292893 4.29289C0.48043 4.10536 0.734784 4 1 4H4V1C4 0.734784 4.10536 0.48043 4.29289 0.292893C4.48043 0.105357 4.73478 0 5 0Z" fill="currentColor"/>
               </svg>
               <p class="text-xs font-medium text-gray-400 uppercase whitespace-nowrap">Add another board</p>
            </button>
         </CreateBoard>
         <!-- <Card :data="boards['to do'][0]"/> -->
      </div>
   </div>
</template>

<script>
export default {
   name: "Boards",
}
</script>

<script setup>
import draggable from "vuedraggable";
import Card from "./Card.vue";
import CreateCard from "./CreateCard.vue";
import CreateBoard from "./CreateBoard.vue";
import { useBoard } from "../composables/useBoard";

const { boards } = useBoard();
</script>

<style lang="scss" scoped>

</style>