<template>
  <Container type="itemsPerPageContainer">
    <h1 class="text-v_orange text-[1.2rem] sm:text-[1rem]">Exibir mais</h1>

    <Select
      type="itemsPerPage"
      v-model="perPage"
      @click="getPerPage"
      id="itemsPerPage"
    >
      <option v-for="(item, index) in items" :value="item" :key="index">
        {{ item }}
      </option>
    </Select>
  </Container>
</template>
<script setup lang="ts">
/* eslint-disable no-undef */
import Container from "../atoms/Container.vue";
import Select from "../atoms/Select.vue";
import { ref } from "vue";

const items: any[] = [5, 10, 25];
const perPage = ref(5);
const emit = defineEmits(["setItemsPerPage"]);

const getPerPage = () => {
  emit("setItemsPerPage", perPage.value);
};
</script>
