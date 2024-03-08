<template>
  <div :class="wrapper_class">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
/* eslint-disable no-undef */
import { IWrapperVariant } from "@/utils/interface";
import { cva } from "class-variance-authority";
import { computed } from "vue";

const props = defineProps<{ type: keyof IWrapperVariant }>();

const wrapper_class = computed(() => {
  return cva(``, {
    variants: {
      intent: {
        animationArea: `
          flex
          flex-col
          items-center
          justify-center
          h-[55%]
          w-[30%]
          xl:h-[50%]
          lg:w-[40%]
          md:w-[60%]
          sm:w-[80%]
        `,

        textArea: `
          flex 
          items-center 
          space-x-2 
          text-white 
          mt-2
        `,

        filter: `
          w-full 
          flex 
          items-center 
          justify-between 
          mb-2
        `,

        dataTable: `
          rounded-lg 
          shadow-[0_0.3rem_0.62rem_rgba(252,142,43,0.3)]
        `,

        titloArea: `
          flex 
          flex-col 
          items-center
        `,

        backgroundCard: `
            shadow-[0_0.3rem_0.62rem_rgba(252,142,43,0.3)]
            bg-v_white
            rounded-lg 
            text-black
            flex
        `,

        card: `
          h-20rem
          overflow-x-auto
          space-y-2
          px-2
        `,

        cardHeader: `
          bg-orange 
          px-2 
          py-2 
          rounded-lg
          text-white
        `,

        cardContent: `
          px-2 
          py-2 
          text-black
        `,
      },
    },
  })({
    intent: props.type,
  });
});
</script>

<style scoped>
.glass-effect {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(13.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.modalContainer {
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  animation: fadeInAnimation ease 0.3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}
</style>
