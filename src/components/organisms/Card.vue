<template>
  <div class="flex space-x-1" v-for="(items, index) in content" :key="index">
    <Wrapper type="cardHeader">
      <h1 v-for="(items, index) in headers" :key="index">
        {{ items.title }}
      </h1>
    </Wrapper>

    <Wrapper type="backgroundCard" class="overflow-x-auto">
      <Wrapper type="cardContent">
        <h1>- {{ items.product_id }}</h1>

        <h1>- {{ items.product_name }}</h1>

        <h1>-{{ items.titlo }}</h1>

        <h1>- {{ items.type }}</h1>

        <h1>- {{ items.date }}</h1>
      </Wrapper>
    </Wrapper>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import Wrapper from "../atoms/Wrapper.vue";
import { IIbgeProduct } from "@/utils/interface";

defineProps({
  headers: { type: Array as PropType<any[]>, required: true },

  content: { type: Array as PropType<IIbgeProduct[]>, required: true },
});
</script>
