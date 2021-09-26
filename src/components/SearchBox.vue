<template>
   <div class="lg:h-8 h-7 lg:w-[258px] w-[240px] bg-gray-50 border border-gray-200 py-1 px-3 flex items-center rounded-md focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-100">
      <svg class="lg:w-4 lg:h-4 w-3 h-3" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M11.9174 10.9893L9.07221 8.14413C9.01831 8.09023 8.948 8.06211 8.873 8.06211H8.56364C9.30189 7.20668 9.74952 6.09345 9.74952 4.87476C9.74952 2.18192 7.5676 0 4.87476 0C2.18192 0 0 2.18192 0 4.87476C0 7.5676 2.18192 9.74952 4.87476 9.74952C6.09345 9.74952 7.20668 9.30189 8.06211 8.56364V8.873C8.06211 8.948 8.09257 9.01831 8.14413 9.07221L10.9893 11.9174C11.0995 12.0275 11.2776 12.0275 11.3877 11.9174L11.9174 11.3877C12.0275 11.2776 12.0275 11.0995 11.9174 10.9893ZM4.87476 8.62458C2.80299 8.62458 1.12495 6.94654 1.12495 4.87476C1.12495 2.80299 2.80299 1.12495 4.87476 1.12495C6.94654 1.12495 8.62458 2.80299 8.62458 4.87476C8.62458 6.94654 6.94654 8.62458 4.87476 8.62458Z" fill="#9CA3AF"/>
      </svg>
      <input type="text" placeholder="Search..." class="w-full h-full appearance-none bg-transparent lg:text-sm text-xs text-gray-600 ml-2 focus:outline-none">
   </div>
</template>

<script>
export default {
   name: "SearchBox"
}

</script>

<style lang="scss" scoped>

</style>