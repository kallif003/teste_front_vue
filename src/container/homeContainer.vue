<template>
  <Container type="page">
    <Loading :showLoading="showLoading" />

    <div class="w-full flex items-center justify-between mb-2">
      <Reports />

      <div class="flex flex-col items-center">
        <h1 style="font-size: 4rem">IBGE</h1>
        <p class="-mt-8" style="margin-top: -1.5rem">Calendário Nacional</p>
      </div>
    </div>

    <div class="rounded-lg shadow-[0_0.3rem_0.62rem_rgba(252,142,43,0.3)]">
      <v-data-table-virtual
        :headers="headers"
        :items="items"
        height="500"
      ></v-data-table-virtual>
    </div>

    <WrapperPagination :totalPages="totalPages" :itemsPerPage="itemsPerPage">
      <ItemsPerPage @setItemsPerPage="setItemsPerPage" />

      <Pagination
        :current-page="page"
        :pageCount="totalPages.length"
        :items="totalPages"
        @paginate="setPagination"
      />
    </WrapperPagination>
  </Container>
</template>

<script setup lang="ts">
import Container from "@/components/atoms/Container.vue";
import Filter from "@/components/organisms/Filter.vue";
import Loading from "@/components/molecules/Loading.vue";
import Wrapper from "@/components/atoms/Wrapper.vue";
import { useHead } from "@unhead/vue";
import WrapperPagination from "@/components/molecules/WrapperPagination.vue";
import Pagination from "@/components/organisms/Pagination.vue";
import ItemsPerPage from "@/components/molecules/ItemsPerPage.vue";
import { getNacionalAccountsApi } from "@/api/api_ibge";
import { onMounted, ref } from "vue";
import { IApiResponse, IIbgeProduct, IResponse } from "@/utils/interface";

const headers: any = [
  { title: "Id", align: "start", key: "product_id" },
  { title: "Nome", align: "start", key: "product_name" },
  { title: "Titulo", align: "start", key: "titlo" },
  { title: "tipo", align: "start", key: "type" },
  { title: "Data", align: "start", key: "date" },
];

let totalPages = ref<number[]>([1, 1, 1]);
let showLoading = ref(false);
let itemsPerPage = ref(5);
let page = ref(1);
let items = ref<IIbgeProduct[]>([]);

useHead({
  title: "Teste front end Vue.js - Home",
});

const setPagination = (currentPage: number) => {
  if (page.value != currentPage) {
    page.value = currentPage;

    getNacionalAccounts(currentPage, itemsPerPage.value);
  }
};

const setItemsPerPage = (value: number) => {
  if (itemsPerPage.value != value) {
    itemsPerPage.value = value;

    getNacionalAccounts(page.value, value);
  }
};

const setTotalPages = (pages: number): number[] => {
  const totalPages = [];

  for (let i = 0; i <= pages - 1; i++) {
    totalPages.push(i);
  }

  return totalPages;
};

const getNacionalAccounts = async (page: number, itemsPerPage: number) => {
  showLoading.value = true;

  const res: IResponse = await getNacionalAccountsApi({
    page,
    itemsPerPage,
  });

  if (res?.status == 200) {
    items.value = parserData(res.data.items);

    totalPages.value = setTotalPages(res?.data.totalPages);
  }

  showLoading.value = false;
};

const parserData = (data: IApiResponse[]): Array<IIbgeProduct> => {
  return data.map((d: IApiResponse) => ({
    titlo: d.titulo,
    product_id: d.produto_id,
    product_name: d.nome_produto,
    date: d.data_divulgacao.split(" ")[0],
    type: d.tipo,
  }));
};

onMounted(() => {
  getNacionalAccounts(page.value, itemsPerPage.value);
});
</script>
