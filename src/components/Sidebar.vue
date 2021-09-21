<template>
   <aside class="w-full h-full px-3.5 py-5">
      <div class="flex items-center">
         <div class="w-10 h-10 bg-indigo-400 flex items-center justify-center rounded-md">
            <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M9.04226 3.5751C9.57473 2.65283 10.9059 2.65283 11.4384 3.5751L16.6116 12.5354C17.1441 13.4576 16.4785 14.6105 15.4135 14.6105H5.0671C4.00216 14.6105 3.33657 13.4576 3.86904 12.5354L9.04226 3.5751Z" stroke="#F9FAFB" stroke-width="1.5" stroke-linejoin="round"/>
               <path d="M13.8824 6.70849C14.4149 5.78622 15.7461 5.78622 16.2785 6.70849L21.4517 15.6688C21.9842 16.591 21.3186 17.7439 20.2537 17.7439H9.90725C8.84231 17.7439 8.17672 16.591 8.70919 15.6688L13.8824 6.70849Z" fill="#818CF8" stroke="#FDE68A" stroke-width="1.5" stroke-linejoin="round"/>
            </svg>
         </div>
         <div class="ml-3 flex-auto flex flex-col items-start">
            <p class="text-[18px] font-semibold text-gray-700">Triangle</p>
            <p class="text-[14px] font-medium text-gray-400 -mt-1">Workspace</p>
         </div>
         <div class="">
            <svg width="11" height="16" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" clip-rule="evenodd" d="M1.22201 9.42822C1.37222 9.27805 1.57592 9.19369 1.78832 9.19369C2.00071 9.19369 2.20442 9.27805 2.35463 9.42822L4.99232 12.0659L7.63002 9.42822C7.78109 9.28231 7.98343 9.20157 8.19345 9.2034C8.40347 9.20522 8.60437 9.28946 8.75288 9.43797C8.90139 9.58648 8.98563 9.78739 8.98746 9.99741C8.98928 10.2074 8.90855 10.4098 8.76264 10.5608L5.55863 13.7648C5.40842 13.915 5.20472 13.9994 4.99232 13.9994C4.77993 13.9994 4.57623 13.915 4.42602 13.7648L1.22201 10.5608C1.07185 10.4106 0.987487 10.2069 0.987487 9.99452C0.987487 9.78213 1.07185 9.57843 1.22201 9.42822Z" fill="#9CA3AF"/>
               <path fill-rule="evenodd" clip-rule="evenodd" d="M8.76548 4.57114C8.61527 4.72131 8.41157 4.80567 8.19917 4.80567C7.98677 4.80567 7.78307 4.72131 7.63286 4.57114L4.99516 1.93345L2.35747 4.57114C2.2064 4.71705 2.00406 4.79779 1.79404 4.79596C1.58402 4.79414 1.38312 4.7099 1.23461 4.56139C1.0861 4.41287 1.00186 4.21197 1.00003 4.00195C0.998205 3.79193 1.07894 3.5896 1.22485 3.43853L4.42886 0.234522C4.57907 0.0843579 4.78277 0 4.99516 0C5.20756 0 5.41126 0.0843579 5.56147 0.234522L8.76548 3.43853C8.91564 3.58874 9 3.79244 9 4.00484C9 4.21723 8.91564 4.42093 8.76548 4.57114Z" fill="#9CA3AF"/>
            </svg>
         </div>
      </div>

      <div class="mt-12">
         <ul class="">
            <li class="flex items-center my-0.5 py-2 px-2.5 -ml-2 hover:bg-gray-200 cursor-pointer rounded-md">
               <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 8V1L1 12H8V19L17 8H10Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
               <span class="text-15 font-medium text-gray-600 ml-3">Activity</span>
            </li>
            <li class="flex items-center my-0.5 py-2 px-2.5 -ml-2 hover:bg-gray-200 cursor-pointer rounded-md">
               <svg class="w-5 h-5" fill="none" stroke="#4B5563" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
               </svg>
               <span class="text-15 font-medium text-gray-600 ml-3">My Tasks</span>
            </li>
         </ul>
      </div>

      <hr class="my-5 bg-gray-100">

      <div class="">
         <ul class="">
            <li class="flex items-center my-0.5 py-2 px-2.5 -ml-2 hover:bg-gray-200 cursor-pointer rounded-md">
               <svg class="w-5 h-5" fill="none" stroke="#4B5563" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
               </svg>
               <span class="text-15 font-medium text-gray-600 ml-3">Overview</span>
            </li>
         </ul>
      </div>
   </aside>
</template>

<script>
export default {
   name: "Sidebar"
}

</script>

<style lang="scss" scoped>

</style>