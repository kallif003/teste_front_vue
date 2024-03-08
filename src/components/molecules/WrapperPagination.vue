<template>
  <div
    class="w-full mt-4 flex sm:flex-col justify-between items-center px-8 sm:mb-8"
    v-if="totalPages.length > 1 || itemsPerPage > 10"
  >
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
/* eslint-disable no-undef */
import { PropType } from "vue";

defineProps({
  totalPages: {
    type: Array as PropType<number[]>,
    required: true,
  },

  itemsPerPage: {
    type: Number,
    required: true,
  },
});
</script>
