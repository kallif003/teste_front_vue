<template>
  <div :class="container_class">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
/* eslint-disable no-undef */
import { IContainerVariant } from "@/utils/interface";
import { cva } from "class-variance-authority";
import { computed } from "vue";

const props = defineProps<{
  type: keyof IContainerVariant;
}>();

const container_class = computed(() => {
  return cva("", {
    variants: {
      intent: {
        page: `
				bg-black
				h-screen
				flex
				flex-col
				justify-center
				px-8
				
        `,

        paginationContainer: `
					flex
					justify-around
					items-center
					text-[#c9c9c9]
					w-[33%]
					
				`,

        itemsPerPageContainer: `
					flex
					justify-evenly
					w-[20%]
					items-center
          sm:w-[40%]
          sm:space-x-2
				`,

        loadingContainer: `
					w-full
					h-full 
					flex
					justify-center
					items-center 
					z-30
					fixed 
					top-0 
					left-0`,
      },
    },
  })({
    intent: props.type,
  });
});
</script>
