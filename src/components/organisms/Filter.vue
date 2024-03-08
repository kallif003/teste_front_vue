<template>
  <div class="flex space-x-5">
    <v-menu
      transition="slide-y-transition"
      :close-on-content-click="false"
      v-model="closeMenu"
    >
      <template v-slot:activator="{ props }">
        <div class="flex space-x-8">
          <button v-bind="props" class="flex" id="btn">
            <p
              class="text-v_white underline underline-offset-[14px] decoration-2"
            >
              Filtro
            </p>
            <v-icon
              icon="mdi-filter-outline"
              class="text-v_white underline underline-offset-[10px]"
            />
          </button>
        </div>
      </template>

      <v-list>
        <v-list-item>
          <div
            class="mb-5 text-v_dark_gray bg-gray-100 py-2 text-left rounded-md mx-1"
          >
            <p class="mb-2 opacity-75 ml-4">Data inicial</p>

            <input
              min="2020-01-01"
              v-model="filterSelected.initialDate"
              :disabled="false"
              type="date"
              class="w-[95%] bg-white shadow-none px-4 font-[100] rounded-md outline-[#e1e4ed] input mx-1"
            />
          </div>

          <div
            class="mb-5 text-v_dark_gray bg-gray-100 py-2 text-left rounded-md mx-1"
          >
            <p class="mb-2 opacity-75 ml-4">Data final</p>

            <input
              v-model="filterSelected.finalDate"
              :disabled="false"
              type="date"
              class="w-[95%] bg-white shadow-none px-4 font-[100] rounded-md outline-[#e1e4ed] input mx-1"
            />
          </div>

          <Button
            @click="
              getNacionalAccountsByDate(filterSelected), (closeMenu = false)
            "
            btn-type="filterButton"
            :disabled="!showButton"
            :class="
              showButton
                ? 'bg-v_orange text-white mb-2'
                : 'bg-v_medium_gray text-white'
            "
          >
            Buscar
          </Button>
        </v-list-item>
      </v-list>
    </v-menu>

    <button class="mt-2" @click="clearFilter" v-if="showClearButton">
      Limpar
      <v-icon icon="mdi-close" />
    </button>
  </div>
</template>

<script setup lang="ts">
/* eslint-disable no-undef */
import { PropType, ref, watch } from "vue";
import Button from "../atoms/Button.vue";
import Input from "@/components/atoms/Input.vue";
import { IFilter } from "@/utils/interface";

let closeMenu = ref(false);

let showButton = ref(false);

let filterSelected = ref<IFilter>({
  initialDate: "",
  finalDate: "",
});

defineProps({
  getNacionalAccountsByDate: {
    type: Function as PropType<(filter: IFilter) => void>,
    required: true,
  },

  showClearButton: {
    type: Boolean,
    required: true,
  },

  clearFilter: {
    type: Function as PropType<() => void>,
    required: true,
  },
});

watch(closeMenu, () => {
  if (!closeMenu.value) {
    filterSelected.value.initialDate = "";
    filterSelected.value.finalDate = "";
  }
});

watch(filterSelected.value, () => {
  const { initialDate, finalDate } = filterSelected.value;

  if (initialDate < finalDate) {
    showButton.value = true;
  } else {
    showButton.value = false;
  }
});
</script>
