<template>
   <header class="w-full">
      <div class="flex items-center justify-between">
         <div class="flex items-center md:ml-8 lg:ml-0 ml-0 mt-1">
            <svg class="w-4 h-4 md:block hidden" width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" clip-rule="evenodd" d="M7.70689 13.6949C7.51936 13.8824 7.26505 13.9877 6.99988 13.9877C6.73471 13.9877 6.4804 13.8824 6.29287 13.6949L0.29279 7.69481C0.105317 7.50728 0 7.25297 0 6.98781C0 6.72264 0.105317 6.46833 0.29279 6.2808L6.29287 0.280716C6.48148 0.098555 6.73408 -0.00224065 6.99628 3.78031e-05C7.25848 0.00231625 7.5093 0.107487 7.69471 0.292897C7.88012 0.478308 7.98529 0.729123 7.98757 0.991324C7.98985 1.25352 7.88905 1.50613 7.70689 1.69473L3.41383 5.98779H15C15.2652 5.98779 15.5196 6.09315 15.7071 6.28069C15.8946 6.46823 16 6.72259 16 6.98781C16 7.25303 15.8946 7.50738 15.7071 7.69492C15.5196 7.88246 15.2652 7.98782 15 7.98782H3.41383L7.70689 12.2809C7.89436 12.4684 7.99968 12.7227 7.99968 12.9879C7.99968 13.2531 7.89436 13.5074 7.70689 13.6949Z" fill="#9CA3AF"/>
            </svg>
            <div class="md:ml-5 ml-8">
               <SearchBox/>
            </div>
         </div>
         <div class="flex items-center lg:space-x-5 md:space-x-4 mt-1">
            <svg class="lg:w-5 lg:h-5 w-4 h-4 md:block hidden" width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M12 15H17L15.595 13.595C15.4063 13.4063 15.2567 13.1822 15.1546 12.9357C15.0525 12.6891 15 12.4249 15 12.158V9C15.0002 7.75894 14.6156 6.54834 13.8992 5.53489C13.1829 4.52144 12.17 3.75496 11 3.341V3C11 2.46957 10.7893 1.96086 10.4142 1.58579C10.0391 1.21071 9.53043 1 9 1C8.46957 1 7.96086 1.21071 7.58579 1.58579C7.21071 1.96086 7 2.46957 7 3V3.341C4.67 4.165 3 6.388 3 9V12.159C3 12.697 2.786 13.214 2.405 13.595L1 15H6M12 15H6M12 15V16C12 16.7956 11.6839 17.5587 11.1213 18.1213C10.5587 18.6839 9.79565 19 9 19C8.20435 19 7.44129 18.6839 6.87868 18.1213C6.31607 17.5587 6 16.7956 6 16V15" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="lg:w-8 lg:h-8 w-7 h-7 p-0.5 rounded-full bg-gray-200">
               <img src="../../assets/memoji-1.png" alt="user avatar" class="w-full h-full object-cover">
            </div>
            <p class="lg:text-sm text-xs font-medium text-gray-700 md:inline-block hidden">Robert Zane</p>
            <svg class="md:block hidden" width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" clip-rule="evenodd" d="M0.302405 1.60164C0.484025 1.40799 0.735123 1.29439 1.00048 1.28584C1.26584 1.27729 1.52373 1.37449 1.71744 1.55605L5.11903 4.74528L8.30826 1.34368C8.49113 1.15531 8.74067 1.04629 9.00313 1.04012C9.26559 1.03395 9.51998 1.1311 9.7115 1.31067C9.90302 1.49023 10.0164 1.73784 10.0271 2.00016C10.0378 2.26247 9.9451 2.51851 9.76889 2.71312L5.89494 6.84503C5.71332 7.03869 5.46223 7.15228 5.19687 7.16083C4.93151 7.16938 4.67362 7.07219 4.47991 6.89063L0.348 3.01668C0.154344 2.83506 0.0407512 2.58396 0.0322009 2.3186C0.0236506 2.05324 0.120843 1.79535 0.302405 1.60164Z" fill="#374151"/>
            </svg>
         </div>
      </div>

      <div class="flex md:flex-row flex-col md:items-end items-start justify-between my-8">
         <div class="flex flex-col md:space-y-2 items-start md:mb-0 mb-6">
            <p class="lg:text-sm text-xs font-normal text-indigo-400">Checkout Experience Team</p>
            <p class="lg:text-2xl md:text-xl text-lg font-semibold text-gray-600">Storefront Checkout Revamp</p>
         </div>
         <AvatarGroup size="md" :avatars="8"/>
      </div>

      <div class="flex md:flex-row flex-col-reverse md:items-center items-start justify-between md:mt-0 -mt-4">
         <div class="flex items-center space-x-1">
            <button
               class="px-2.5 py-1.5 rounded-md flex items-center justify-center lg:text-sm text-xs font-medium transition-colors duration-150 ease-linear hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
               :class="[activeTab === 'boards' ? 'text-indigo-500 bg-gray-100' : 'bg-transparent text-gray-600']"
               @click="setActiveTab('boards')"   
            >
               Boards
            </button>
            <button
               class="px-2.5 py-1.5 rounded-md flex items-center justify-center lg:text-sm text-xs font-medium transition-colors duration-150 ease-linear hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
               :class="[activeTab === 'timeline' ? 'text-indigo-500 bg-gray-100' : 'bg-transparent text-gray-600']"
               @click="setActiveTab('timeline')"   
            >
               Timeline
            </button>
            <button
               class="px-2.5 py-1.5 rounded-md flex items-center justify-center lg:text-sm text-xs font-medium transition-colors duration-150 ease-linear hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
               :class="[activeTab === 'table' ? 'text-indigo-500 bg-gray-100' : 'bg-transparent text-gray-600']"
               @click="setActiveTab('table')"   
            >
               Table
            </button>
            <button
               class="px-2.5 py-1.5 rounded-md flex items-center justify-center lg:text-sm text-xs font-medium transition-colors duration-150 ease-linear hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
               :class="[activeTab === 'reports' ? 'text-indigo-500 bg-gray-100' : 'bg-transparent text-gray-600']"
               @click="setActiveTab('reports')"   
            >
               Reports
            </button>
            <button
               class="px-2.5 py-1.5 rounded-md flex items-center justify-center lg:text-sm text-xs font-medium transition-colors duration-150 ease-linear hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
               :class="[activeTab === 'files' ? 'text-indigo-500 bg-gray-100' : 'bg-transparent text-gray-600']"
               @click="setActiveTab('files')"   
            >
               Files
            </button>
         </div>
         <div class="flex items-center space-x-3 md:mb-0 mb-5">
            <button class="p-1.5 rounded border-2 border-gray-200 flex items-center justify-center hover:bg-gray-100 focus:bg-gray-100">
               <svg class="lg:w-4 lg:h-4 w-3 h-3" width="15" height="15" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5 6V8.5M13.5 8.5V11M13.5 8.5H16M13.5 8.5H11M9.33333 4.33333C9.33333 5.21739 8.98214 6.06523 8.35702 6.69036C7.7319 7.31548 6.88405 7.66667 6 7.66667C5.11594 7.66667 4.2681 7.31548 3.64298 6.69036C3.01786 6.06523 2.66667 5.21739 2.66667 4.33333C2.66667 3.44928 3.01786 2.60143 3.64298 1.97631C4.2681 1.35119 5.11594 1 6 1C6.88405 1 7.7319 1.35119 8.35702 1.97631C8.98214 2.60143 9.33333 3.44928 9.33333 4.33333ZM1 15.1667C1 13.8406 1.52678 12.5688 2.46447 11.6311C3.40215 10.6935 4.67392 10.1667 6 10.1667C7.32608 10.1667 8.59785 10.6935 9.53553 11.6311C10.4732 12.5688 11 13.8406 11 15.1667V16H1V15.1667Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
            </button>
            <button class="p-1.5 rounded border-2 border-gray-200 flex items-center justify-center hover:bg-gray-100 focus:bg-gray-100">
               <svg class="lg:w-4 lg:h-4 w-3 h-3" width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.51111 2.17067C7.88978 0.609778 10.1102 0.609778 10.4889 2.17067C10.5457 2.40515 10.6571 2.62291 10.814 2.80622C10.9708 2.98953 11.1688 3.1332 11.3917 3.22555C11.6146 3.3179 11.8561 3.35631 12.0967 3.33766C12.3372 3.31901 12.57 3.24382 12.776 3.11822C14.1476 2.28267 15.7182 3.85244 14.8827 5.22489C14.7572 5.4308 14.6822 5.66341 14.6636 5.9038C14.645 6.14419 14.6833 6.38557 14.7756 6.60834C14.8678 6.8311 15.0113 7.02896 15.1944 7.18582C15.3775 7.34269 15.5951 7.45414 15.8293 7.51111C17.3902 7.88978 17.3902 10.1102 15.8293 10.4889C15.5948 10.5457 15.3771 10.6571 15.1938 10.814C15.0105 10.9708 14.8668 11.1688 14.7744 11.3917C14.6821 11.6146 14.6437 11.8561 14.6623 12.0967C14.681 12.3372 14.7562 12.57 14.8818 12.776C15.7173 14.1476 14.1476 15.7182 12.7751 14.8827C12.5692 14.7572 12.3366 14.6822 12.0962 14.6636C11.8558 14.645 11.6144 14.6833 11.3917 14.7756C11.1689 14.8678 10.971 15.0113 10.8142 15.1944C10.6573 15.3775 10.5459 15.5951 10.4889 15.8293C10.1102 17.3902 7.88978 17.3902 7.51111 15.8293C7.4543 15.5948 7.34291 15.3771 7.18604 15.1938C7.02916 15.0105 6.83121 14.8668 6.60831 14.7744C6.38541 14.6821 6.14385 14.6437 5.9033 14.6623C5.66275 14.681 5.43 14.7562 5.224 14.8818C3.85244 15.7173 2.28178 14.1476 3.11733 12.7751C3.24276 12.5692 3.31782 12.3366 3.33643 12.0962C3.35504 11.8558 3.31666 11.6144 3.22442 11.3917C3.13218 11.1689 2.98868 10.971 2.80558 10.8142C2.62248 10.6573 2.40495 10.5459 2.17067 10.4889C0.609778 10.1102 0.609778 7.88978 2.17067 7.51111C2.40515 7.4543 2.62291 7.34291 2.80622 7.18604C2.98953 7.02916 3.1332 6.83121 3.22555 6.60831C3.3179 6.38541 3.35631 6.14385 3.33766 5.9033C3.31901 5.66275 3.24382 5.43 3.11822 5.224C2.28267 3.85244 3.85244 2.28178 5.22489 3.11733C6.11022 3.65778 7.26578 3.17956 7.51111 2.17067Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M11.6667 9C11.6667 9.70724 11.3857 10.3855 10.8856 10.8856C10.3855 11.3857 9.70724 11.6667 9 11.6667C8.29276 11.6667 7.61448 11.3857 7.11438 10.8856C6.61428 10.3855 6.33333 9.70724 6.33333 9C6.33333 8.29276 6.61428 7.61448 7.11438 7.11438C7.61448 6.61428 8.29276 6.33333 9 6.33333C9.70724 6.33333 10.3855 6.61428 10.8856 7.11438C11.3857 7.61448 11.6667 8.29276 11.6667 9Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
            </button>
            <button class="p-1.5 rounded border-2 border-gray-200 flex items-center justify-center hover:bg-gray-100 focus:bg-gray-100">
               <svg class="lg:w-4 lg:h-4 w-3 h-3" width="15" height="15" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.5 5.16667H8.50833M9.33333 11.8333H8.5V8.5H7.66667L9.33333 11.8333ZM16 8.5C16 9.48491 15.806 10.4602 15.4291 11.3701C15.0522 12.2801 14.4997 13.1069 13.8033 13.8033C13.1069 14.4997 12.2801 15.0522 11.3701 15.4291C10.4602 15.806 9.48491 16 8.5 16C7.51509 16 6.53982 15.806 5.62987 15.4291C4.71993 15.0522 3.89314 14.4997 3.1967 13.8033C2.50026 13.1069 1.94781 12.2801 1.5709 11.3701C1.19399 10.4602 1 9.48491 1 8.5C1 6.51088 1.79018 4.60322 3.1967 3.1967C4.60322 1.79018 6.51088 1 8.5 1C10.4891 1 12.3968 1.79018 13.8033 3.1967C15.2098 4.60322 16 6.51088 16 8.5Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
            </button>
            <CreateBoard v-slot="slotProps">
               <button
                  class="lg:py-2 py-1.5 xl:px-3 px-2 rounded-md bg-indigo-400 hover:bg-indigo-300 flex items-center justify-center"
                  @click="slotProps.toggleDialog(true)"
               >
                  <svg class="" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0C5.26522 0 5.51957 0.105357 5.70711 0.292893C5.89464 0.48043 6 0.734784 6 1V4H9C9.26522 4 9.51957 4.10536 9.70711 4.29289C9.89464 4.48043 10 4.73478 10 5C10 5.26522 9.89464 5.51957 9.70711 5.70711C9.51957 5.89464 9.26522 6 9 6H6V9C6 9.26522 5.89464 9.51957 5.70711 9.70711C5.51957 9.89464 5.26522 10 5 10C4.73478 10 4.48043 9.89464 4.29289 9.70711C4.10536 9.51957 4 9.26522 4 9V6H1C0.734784 6 0.48043 5.89464 0.292893 5.70711C0.105357 5.51957 0 5.26522 0 5C0 4.73478 0.105357 4.48043 0.292893 4.29289C0.48043 4.10536 0.734784 4 1 4H4V1C4 0.734784 4.10536 0.48043 4.29289 0.292893C4.48043 0.105357 4.73478 0 5 0Z" fill="white"/>
                  </svg>
                  <span class="text-xs font-medium text-white ml-2">New Board</span>
               </button>
            </CreateBoard>
         </div>
      </div>
   </header>
</template>

<script>
export default {
   name: "DashboardHeader",
}
</script>

<script setup>
import { ref } from "vue";
import SearchBox from "../../components/SearchBox.vue";
import AvatarGroup from "../../components/AvatarGroup.vue";
import CreateBoard from "./CreateBoard.vue";

const activeTab = ref("boards");

const setActiveTab = (value) => {
   activeTab.value = value;
}
</script>

<style lang="scss" scoped>

</style>