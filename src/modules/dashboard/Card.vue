<template>
   <div class="relative">
   <div class="card-shadow group w-[300px] bg-white rounded-md px-3 pb-4 space-y-3 overflow-hidden">
      <!-- <div class="w-56 h-72 absolute z-50 bg-red-100 right-0 top-0"></div> -->
      <div
         class="absolute h-1 w-full bottom-0 left-0 z-10 bg-opacity-20"
         :class="[data.theme]"
         v-show="!!data.tasks.total"
      >
         <div
            class="absolute h-1 bg-opacity-75 bottom-0 left-0"
            :class="[data.theme]"
            :style="{width: `${calculateTaskProgress(data.tasks.total, data.tasks.completed)}%`}"
         ></div>
      </div>

      <div class="flex items-center justify-between w-full">
         <button
            class="px-2 py-0.5 rounded-full text-white text-[10px] font-medium capitalize"
            :class="[`${data.theme}`]"
         >{{data.category}}</button>
         <CardDropdown>
            <button class="bg-white rounded border border-transparent px-1 py-0.5 group-hover:border-gray-100 group-hover:shadow focus:border-gray-100 focus:shadow focus:outline-none">
               <svg class="w-4 h-4" width="12" height="3" viewBox="0 0 12 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 1.5C3 1.89782 2.84196 2.27936 2.56066 2.56066C2.27936 2.84196 1.89782 3 1.5 3C1.10218 3 0.720644 2.84196 0.43934 2.56066C0.158035 2.27936 0 1.89782 0 1.5C0 1.10218 0.158035 0.720645 0.43934 0.43934C0.720644 0.158036 1.10218 0 1.5 0C1.89782 0 2.27936 0.158036 2.56066 0.43934C2.84196 0.720645 3 1.10218 3 1.5ZM7.5 1.5C7.5 1.89782 7.34196 2.27936 7.06066 2.56066C6.77936 2.84196 6.39782 3 6 3C5.60218 3 5.22064 2.84196 4.93934 2.56066C4.65804 2.27936 4.5 1.89782 4.5 1.5C4.5 1.10218 4.65804 0.720645 4.93934 0.43934C5.22064 0.158036 5.60218 0 6 0C6.39782 0 6.77936 0.158036 7.06066 0.43934C7.34196 0.720645 7.5 1.10218 7.5 1.5ZM10.5 3C10.8978 3 11.2794 2.84196 11.5607 2.56066C11.842 2.27936 12 1.89782 12 1.5C12 1.10218 11.842 0.720645 11.5607 0.43934C11.2794 0.158036 10.8978 0 10.5 0C10.1022 0 9.72064 0.158036 9.43934 0.43934C9.15804 0.720645 9 1.10218 9 1.5C9 1.89782 9.15804 2.27936 9.43934 2.56066C9.72064 2.84196 10.1022 3 10.5 3Z" fill="#9CA3AF"/>
               </svg>
            </button>
         </CardDropdown>
      </div>

      <div class="flex flex-col items-start">
         <p class="text-xs font-semibold text-gray-700 text-left" v-if="!!data.title">{{data.title}}</p>
         <p class="text-xs font-normal text-gray-400 text-left mt-0.5" v-if="!!data.description">{{data.description}}</p>
      </div>

      <div class="flex items-center space-x-2" v-if="!!data.due">
         <svg :class="[data.due === 'Today' ? 'text-red-400' : 'text-gray-400']" width="11" height="12" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.57143C0 1.88944 0.270918 1.23539 0.753154 0.753154C1.23539 0.270918 1.88944 0 2.57143 0H11.1429C11.302 0 11.4581 0.0443269 11.5935 0.128014C11.7289 0.2117 11.8383 0.33144 11.9095 0.473817C11.9807 0.616193 12.0108 0.775581 11.9965 0.934119C11.9822 1.09266 11.9241 1.24408 11.8286 1.37143L9.64286 4.28571L11.8286 7.2C11.9241 7.32734 11.9822 7.47877 11.9965 7.63731C12.0108 7.79585 11.9807 7.95523 11.9095 8.09761C11.8383 8.23999 11.7289 8.35973 11.5935 8.44341C11.4581 8.5271 11.302 8.57143 11.1429 8.57143H2.57143C2.3441 8.57143 2.12608 8.66173 1.96534 8.82248C1.80459 8.98322 1.71429 9.20124 1.71429 9.42857V12C1.71429 12.2273 1.62398 12.4453 1.46323 12.6061C1.30249 12.7668 1.08447 12.8571 0.857143 12.8571C0.629814 12.8571 0.411797 12.7668 0.251051 12.6061C0.0903058 12.4453 0 12.2273 0 12V2.57143Z" fill="currentColor"/>
         </svg>
         <p class="text-xs font-medium" :class="[data.due === 'Today' ? 'text-red-400' : 'text-gray-400']">{{data.due}}</p>
      </div>

      <div class="flex items-center justify-between">
         <div>
            <AvatarGroup size="sm" :avatars="data.participants"/>
         </div>
         <div class="flex items-center space-x-2">
            <div class="flex items-center" v-if="!!data.tasks.total">
               <svg class="w-4 h-4" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6 12.8571C7.5913 12.8571 9.11742 12.225 10.2426 11.0998C11.3679 9.97456 12 8.44844 12 6.85714C12 5.26584 11.3679 3.73972 10.2426 2.6145C9.11742 1.48928 7.5913 0.85714 6 0.85714C4.4087 0.85714 2.88258 1.48928 1.75736 2.6145C0.632141 3.73972 0 5.26584 0 6.85714C0 8.44844 0.632141 9.97456 1.75736 11.0998C2.88258 12.225 4.4087 12.8571 6 12.8571ZM8.78025 5.88739C8.91687 5.74594 8.99246 5.55649 8.99076 5.35984C8.98905 5.16319 8.91017 4.97508 8.77111 4.83603C8.63206 4.69697 8.44395 4.61809 8.2473 4.61638C8.05065 4.61468 7.8612 4.69027 7.71975 4.82689L5.25 7.29664L4.28025 6.32689C4.1388 6.19027 3.94935 6.11468 3.7527 6.11638C3.55605 6.11809 3.36794 6.19697 3.22889 6.33603C3.08983 6.47508 3.01095 6.66319 3.00924 6.85984C3.00754 7.05649 3.08313 7.24594 3.21975 7.38739L4.71975 8.88739C4.8604 9.02799 5.05113 9.10698 5.25 9.10698C5.44887 9.10698 5.6396 9.02799 5.78025 8.88739L8.78025 5.88739Z" fill="#9CA3AF"/>
               </svg>
               <p class="text-xs font-medium text-gray-400 ml-1">{{data.tasks.completed}}/{{data.tasks.total}}</p>
            </div>
            <div class="flex items-center" v-if="!!data.attachments">
               <svg class="w-4 h-4" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.77101 3.25152L3.77962 7.24291C3.66385 7.35472 3.57151 7.48847 3.50799 7.63635C3.44446 7.78423 3.41103 7.94328 3.40963 8.10422C3.40823 8.26516 3.4389 8.42476 3.49984 8.57372C3.56079 8.72268 3.65079 8.85802 3.76459 8.97182C3.8784 9.08563 4.01373 9.17563 4.16269 9.23657C4.31165 9.29752 4.47126 9.32819 4.6322 9.32679C4.79314 9.32539 4.95219 9.29195 5.10007 9.22843C5.24795 9.1649 5.38169 9.07256 5.4935 8.9568L9.38066 4.96541C9.82224 4.5082 10.0666 3.89585 10.0611 3.26024C10.0555 2.62463 9.80059 2.01662 9.35113 1.56716C8.90167 1.1177 8.29365 0.862754 7.65805 0.857231C7.02244 0.851708 6.41009 1.09605 5.95288 1.53763L2.06512 5.52842C1.38314 6.21041 1 7.13538 1 8.09985C1 9.06433 1.38314 9.9893 2.06512 10.6713C2.74711 11.3533 3.67208 11.7364 4.63656 11.7364C5.60104 11.7364 6.52601 11.3533 7.208 10.6713L11 6.88777" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
               <p class="text-xs font-medium text-gray-400 ml-1">{{data.attachments}}</p>
            </div>
            <div class="flex items-center" v-if="!!data.comments">
               <svg class="w-4 h-4" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.33333 4.85714H4.34M7 4.85714H7.00667M9.66667 4.85714H9.67333M5 8.85714H2.33333C1.97971 8.85714 1.64057 8.71666 1.39052 8.46661C1.14048 8.21657 1 7.87743 1 7.52381V2.19047C1 1.83685 1.14048 1.49771 1.39052 1.24766C1.64057 0.997615 1.97971 0.85714 2.33333 0.85714H11.6667C12.0203 0.85714 12.3594 0.997615 12.6095 1.24766C12.8595 1.49771 13 1.83685 13 2.19047V7.52381C13 7.87743 12.8595 8.21657 12.6095 8.46661C12.3594 8.71666 12.0203 8.85714 11.6667 8.85714H8.33333L5 12.1905V8.85714Z" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
               <p class="text-xs font-medium text-gray-400 ml-1">{{data.comments}}</p>
            </div>
         </div>
      </div>
   </div>
   </div>
</template>

<script>
export default {
   name: "Card"
}
</script>

<script setup>
import AvatarGroup from "../../components/AvatarGroup.vue";
import CardDropdown from "./CardDropdown.vue";

defineProps({
   data: Object
});

const calculateTaskProgress = (total, completed) => {
   return Math.round((completed / total) * 100) ;
}
</script>

<style lang="scss" scoped>
.card-shadow {
   box-shadow: -1px 2px 2px 0px rgba(0, 0, 0, 0.08), 1px 0px 2px 0px rgba(0, 0, 0, 0.05);
}
</style>