<template>
   <div class="flex items-center -space-x-2">
      <div 
         class="p-0.5 rounded-full bg-gray-200 border border-white"
         :class="[sizes[size]]"
         v-for="i in avatars > 4 ? 4 : avatars"
         :key="i"
      >
         <img :src="getImage(i)" alt="user avatar" class="w-full h-full object-cover">
      </div>
      <div 
         class="p-0.5 rounded-full bg-gray-200 border border-white"
         :class="[sizes[size]]"
         v-if="avatars > 4"
      >
         <div class="flex items-center justify-center bg-white w-full h-full rounded-full">
            <p class="text-[10px] font-semibold text-gray-600">+{{avatars - 4}}</p>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "AvatarGroup"
}
</script>
<script setup>
import { computed } from "@vue/reactivity";

defineProps({
   size: String,
   avatars: Number
});

const sizes = {
   sm: "w-6 h-6",
   md: "w-7 h-7"
}

const getImage = computed(() => {
   return (index) => {
      const url = new URL(`../assets/memoji-${index}.png`, import.meta.url);

      return url;
   }
});
</script>


<style lang="scss" scoped>

</style>