<template>
  <Container type="loadingContainer" v-if="showLoading">
    <Wrapper type="modal">
      <div class="flex flex-col items-center justify-around">
        <VueSpinnerFade size="60" color="#fff" />
        <h1 class="mt-3 text-[1.5rem] text-white">{{ message }}</h1>
      </div>
    </Wrapper>
  </Container>
</template>

<script lang="ts" setup>
/* eslint-disable no-undef */
import Container from "../atoms/Container.vue";
import Wrapper from "../atoms/Wrapper.vue";
import { VueSpinnerFade } from "vue3-spinners";
import { ref } from "vue";

defineProps({
  showLoading: { type: Boolean, required: true },
});

let message = ref("Aguarde, estamos reunindo suas informações");

setTimeout(() => {
  message.value = "Validando as informações...";
}, 10000);

setTimeout(() => {
  message.value = "Estamos preparando tudo...";
}, 20000);

setTimeout(() => {
  message.value = "Só mais um momento, estamos quase lá!";
}, 30000);
</script>
