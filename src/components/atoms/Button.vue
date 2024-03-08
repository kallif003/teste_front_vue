<template>
  <button :class="button_class"><slot></slot></button>
</template>

<script setup lang="ts">
/* eslint-disable no-undef */
import { IButtonVariant } from "@/utils/interface";
import { cva } from "class-variance-authority";
import { computed } from "vue";

const props = defineProps<{ btnType: keyof IButtonVariant }>();

const button_class = computed(() => {
  return cva(
    `shadow-[0_0.3rem_0.62rem_rgba(252,142,43,0.3)]
	 rounded-md 
	 flex 
	 justify-center
	 items-center 
	 font-[700]`,
    {
      variants: {
        intent: {
          paginationButton: `w-[2rem] !h-7 rounded-md`,

          filterButton: `shadow-none !h-8 w-full px-3`,
        },
      },
    }
  )({
    intent: props.btnType,
  });
});
</script>
