<template>
   <aside class="w-full h-full px-3.5 py-5 flex flex-col">
      <div class="flex items-center">
         <div class="lg:w-10 lg:h-10 md:w-9 md:h-9 w-8 h-8 bg-indigo-400 flex items-center justify-center md:rounded-md rounded">
            <svg class="md:w-7 md:h-7 w-6 h-6" width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M9.04226 3.5751C9.57473 2.65283 10.9059 2.65283 11.4384 3.5751L16.6116 12.5354C17.1441 13.4576 16.4785 14.6105 15.4135 14.6105H5.0671C4.00216 14.6105 3.33657 13.4576 3.86904 12.5354L9.04226 3.5751Z" stroke="#F9FAFB" stroke-width="1.5" stroke-linejoin="round"/>
               <path d="M13.8824 6.70849C14.4149 5.78622 15.7461 5.78622 16.2785 6.70849L21.4517 15.6688C21.9842 16.591 21.3186 17.7439 20.2537 17.7439H9.90725C8.84231 17.7439 8.17672 16.591 8.70919 15.6688L13.8824 6.70849Z" fill="#818CF8" stroke="#FDE68A" stroke-width="1.5" stroke-linejoin="round"/>
            </svg>
         </div>
         <div class="ml-3 flex-auto flex flex-col items-start">
            <p class="lg:text-[18px] md:text-base text-sm font-semibold text-gray-700">Triangle</p>
            <p class="lg:text-[14px] md:text-xs text-[11px] font-medium text-gray-400 lg:-mt-1">Workspace</p>
         </div>
         <div class="">
            <svg width="11" height="16" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" clip-rule="evenodd" d="M1.22201 9.42822C1.37222 9.27805 1.57592 9.19369 1.78832 9.19369C2.00071 9.19369 2.20442 9.27805 2.35463 9.42822L4.99232 12.0659L7.63002 9.42822C7.78109 9.28231 7.98343 9.20157 8.19345 9.2034C8.40347 9.20522 8.60437 9.28946 8.75288 9.43797C8.90139 9.58648 8.98563 9.78739 8.98746 9.99741C8.98928 10.2074 8.90855 10.4098 8.76264 10.5608L5.55863 13.7648C5.40842 13.915 5.20472 13.9994 4.99232 13.9994C4.77993 13.9994 4.57623 13.915 4.42602 13.7648L1.22201 10.5608C1.07185 10.4106 0.987487 10.2069 0.987487 9.99452C0.987487 9.78213 1.07185 9.57843 1.22201 9.42822Z" fill="#9CA3AF"/>
               <path fill-rule="evenodd" clip-rule="evenodd" d="M8.76548 4.57114C8.61527 4.72131 8.41157 4.80567 8.19917 4.80567C7.98677 4.80567 7.78307 4.72131 7.63286 4.57114L4.99516 1.93345L2.35747 4.57114C2.2064 4.71705 2.00406 4.79779 1.79404 4.79596C1.58402 4.79414 1.38312 4.7099 1.23461 4.56139C1.0861 4.41287 1.00186 4.21197 1.00003 4.00195C0.998205 3.79193 1.07894 3.5896 1.22485 3.43853L4.42886 0.234522C4.57907 0.0843579 4.78277 0 4.99516 0C5.20756 0 5.41126 0.0843579 5.56147 0.234522L8.76548 3.43853C8.91564 3.58874 9 3.79244 9 4.00484C9 4.21723 8.91564 4.42093 8.76548 4.57114Z" fill="#9CA3AF"/>
            </svg>
         </div>
      </div>

      <div class="flex-auto">
         <div class="mt-10 flex-auto">
            <ul class="">
               <a href="#" class="group focus:outline-none">
                  <li
                     class="flex items-center my-0.5 py-2 px-2.5 -ml-2 hover:bg-gray-200 group-focus:bg-gray-200 cursor-pointer rounded-md"
                     :class="{'bg-gray-200': activeDrawerItem === 'activity'}"
                     @click="setActiveDrawerItem('activity')"
                  >
                     <svg :class="[activeDrawerItem === 'activity' ? 'text-indigo-400' : 'text-gray-600', 'md:w-5 md:h-5 w-4 h-4']" width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 8V1L1 12H8V19L17 8H10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                     </svg>
                     <span :class="[activeDrawerItem === 'activity' ? 'text-indigo-400' : 'text-gray-600', 'lg:text-[15px] md:text-[1currentColorpx] text-xs font-medium ml-3']">Activity</span>
                  </li>
               </a>
               <a href="#" class="group focus:outline-none">
                  <li
                     class="flex items-center my-0.5 py-2 px-2.5 -ml-2 hover:bg-gray-200 group-focus:bg-gray-200 cursor-pointer rounded-md"
                     :class="{'bg-gray-200': activeDrawerItem === 'my tasks'}"
                     @click="setActiveDrawerItem('my tasks')"
                  >
                     <svg :class="[activeDrawerItem === 'my tasks' ? 'text-indigo-400' : 'text-gray-600', 'md:w-5 md:h-5 w-4 h-4']" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span :class="[activeDrawerItem === 'my tasks' ? 'text-indigo-400' : 'text-gray-600', 'lg:text-[15px] md:text-[13px] text-xs font-medium text-gray-600 ml-3 flex-auto text-left']">My Tasks</span>
                  <span class="lg:text-xs text-[10px] font-semibold text-white inline-block py-0.5 px-1.5 rounded-md bg-red-400">35</span>
               </li>
               </a>
            </ul>
         </div>

         <hr class="my-5 bg-gray-100">

         <div class="">
            <ul class="">
               <a href="#" class="group focus:outline-none">
                  <li
                     class="flex items-center my-0.5 py-2 px-2.5 -ml-2 hover:bg-gray-200 group-focus:bg-gray-200 cursor-pointer rounded-md"
                     :class="{'bg-gray-200': activeDrawerItem === 'overview'}"
                     @click="setActiveDrawerItem('overview')"
                  >
                     <svg :class="[activeDrawerItem === 'overview' ? 'text-indigo-400' : 'text-gray-600', 'md:w-5 md:h-5 w-4 h-4']" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                     </svg>
                     <span :class="[activeDrawerItem === 'overview' ? 'text-indigo-400' : 'text-gray-600', 'lg:text-[15px] md:text-[13px] text-xs font-medium ml-3']">Overview</span>
                  </li>
               </a>
               <a href="#" class="group focus:outline-none">
                  <li
                     class="flex items-center my-0.5 py-2 px-2.5 -ml-2 hover:bg-gray-200 group-focus:bg-gray-200 cursor-pointer rounded-md"
                     :class="{'bg-gray-200': activeDrawerItem === 'projects'}"
                     @click="setActiveDrawerItem('projects')"
                  >
                     <svg :class="[activeDrawerItem === 'projects' ? 'text-indigo-400' : 'text-gray-600', 'md:w-5 md:h-5 w-4 h-4']" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                     </svg>
                     <span :class="[activeDrawerItem === 'projects' ? 'text-indigo-400' : 'text-gray-600', 'lg:text-[15px] md:text-[13px] text-xs font-medium ml-3']">Projects</span>
                  </li>
               </a>
               <a href="#" class="group focus:outline-none">
                  <li
                     class="flex items-center my-0.5 py-2 px-2.5 -ml-2 hover:bg-gray-200 group-focus:bg-gray-200 cursor-pointer rounded-md"
                     :class="{'bg-gray-200': activeDrawerItem === 'calendar'}"
                     @click="setActiveDrawerItem('calendar')"
                  >
                     <svg :class="[activeDrawerItem === 'calendar' ? 'text-indigo-400' : 'text-gray-600', 'md:w-5 md:h-5 w-4 h-4']" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                     </svg>
                     <span :class="[activeDrawerItem === 'calendar' ? 'text-indigo-400' : 'text-gray-600', 'lg:text-[15px] md:text-[13px] text-xs font-medium ml-3']">Calendar</span>
                  </li>
               </a>
               <a href="#" class="group focus:outline-none">
                  <li
                     class="flex items-center my-0.5 py-2 px-2.5 -ml-2 hover:bg-gray-200 group-focus:bg-gray-200 cursor-pointer rounded-md"
                     :class="{'bg-gray-200': activeDrawerItem === 'campaign'}"
                     @click="setActiveDrawerItem('campaign')"
                  >
                     <svg :class="[activeDrawerItem === 'campaign' ? 'text-indigo-400' : 'text-gray-600', 'md:w-5 md:h-5 w-4 h-4']" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
                     </svg>
                     <span :class="[activeDrawerItem === 'campaign' ? 'text-indigo-400' : 'text-gray-600', 'lg:text-[15px] md:text-[13px] text-xs font-medium ml-3']">Campaign</span>
                  </li>
               </a>
               <a href="#" class="group focus:outline-none">
                  <li
                     class="flex items-center my-0.5 py-2 px-2.5 -ml-2 hover:bg-gray-200 group-focus:bg-gray-200 cursor-pointer rounded-md"
                     :class="{'bg-gray-200': activeDrawerItem === 'teams'}"
                     @click="setActiveDrawerItem('teams')"
                  >
                     <svg :class="[activeDrawerItem === 'teams' ? 'text-indigo-400' : 'text-gray-600', 'md:w-5 md:h-5 w-4 h-4']" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                     </svg>
                     <span :class="[activeDrawerItem === 'teams' ? 'text-indigo-400' : 'text-gray-600', 'lg:text-[15px] md:text-[13px] text-xs font-medium ml-3']">Teams</span>
                  </li>
               </a>
               <a href="#" class="group focus:outline-none">
                  <li
                     class="flex items-center my-0.5 py-2 px-2.5 -ml-2 hover:bg-gray-200 group-focus:bg-gray-200 cursor-pointer rounded-md"
                     :class="{'bg-gray-200': activeDrawerItem === 'analytics'}"
                     @click="setActiveDrawerItem('analytics')"
                  >
                     <svg :class="[activeDrawerItem === 'analytics' ? 'text-indigo-400' : 'text-gray-600', 'md:w-5 md:h-5 w-4 h-4']" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                     </svg>
                     <span :class="[activeDrawerItem === 'analytics' ? 'text-indigo-400' : 'text-gray-600', 'lg:text-[15px] md:text-[13px] text-xs font-medium ml-3']">Analytics</span>
                  </li>
               </a>
               <a href="#" class="group focus:outline-none">
                  <li
                     class="flex items-center my-0.5 py-2 px-2.5 -ml-2 hover:bg-gray-200 group-focus:bg-gray-200 cursor-pointer rounded-md"
                     :class="{'bg-gray-200': activeDrawerItem === 'billing'}"
                     @click="setActiveDrawerItem('billing')"
                  >
                     <svg :class="[activeDrawerItem === 'billing' ? 'text-indigo-400' : 'text-gray-600', 'md:w-5 md:h-5 w-4 h-4']" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                     </svg>
                     <span :class="[activeDrawerItem === 'billing' ? 'text-indigo-400' : 'text-gray-600', 'lg:text-[15px] md:text-[13px] text-xs font-medium ml-3']">Billing</span>
                  </li>
               </a>
            </ul>
         </div>
      </div>

      <div class="">
         <ul class="">
            <a href="#" class="group focus:outline-none">
               <li
                  class="flex items-center my-0.5 py-2 px-2.5 -ml-2 hover:bg-gray-200 cursor-pointer rounded-md"
                  :class="{'bg-gray-200': activeDrawerItem === 'help'}"
                  @click="setActiveDrawerItem('help')"
               >
                  <svg :class="[activeDrawerItem === 'help' ? 'text-indigo-400' : 'text-gray-600', 'md:w-5 md:h-5 w-4 h-4']" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span :class="[activeDrawerItem === 'help' ? 'text-indigo-400' : 'text-gray-600', 'lg:text-[15px] md:text-[13px] text-xs font-medium ml-3']">Help</span>
               </li>
            </a>
            <a href="#" class="group focus:outline-none">
               <li
                  class="flex items-center my-0.5 py-2 px-2.5 -ml-2 hover:bg-gray-200 cursor-pointer rounded-md"
                  :class="{'bg-gray-200': activeDrawerItem === 'settings'}"
                  @click="setActiveDrawerItem('settings')"
               >
                  <svg :class="[activeDrawerItem === 'settings' ? 'text-indigo-400' : 'text-gray-600', 'md:w-5 md:h-5 w-4 h-4']" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span :class="[activeDrawerItem === 'settings' ? 'text-indigo-400' : 'text-gray-600', 'lg:text-[15px] md:text-[13px] text-xs font-medium ml-3']">Settings</span>
               </li>
            </a>
         </ul>
      </div>
   </aside>
</template>

<script>
export default {
   name: "Sidebar"
}
</script>

<script setup>
import { ref } from "vue";

const activeDrawerItem = ref("projects")

const setActiveDrawerItem = (value) => {
   activeDrawerItem.value = value;
}
</script>

<style lang="scss" scoped>

</style>