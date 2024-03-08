<template>
  <Container type="page" class="!items-center">
    <Wrapper type="animationArea">
      <Vue3Lottie :animation-data="calendar" />

      <h1 class="text-[2rem] mt-2">Calendário IBGE</h1>

      <p class="text-v_orange">@SalesHunter</p>
    </Wrapper>
  </Container>
</template>

<script setup lang="ts">
import Container from "../atoms/Container.vue";
import Wrapper from "../atoms/Wrapper.vue";
import { Vue3Lottie } from "vue3-lottie";
import calendar from "@/assets/calendar.json";
import { onMounted } from "vue";
import router from "@/router";

onMounted(() => {
  setTimeout(() => {
    router.push("/home");
  }, 3000);
});
</script>
