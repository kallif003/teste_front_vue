<template>
  <div class="h-screen">
    <router-view :key="$router.currentRoute.value.path.split('/')[0]">
    </router-view>
  </div>
</template>

<style>
::-webkit-scrollbar {
  height: 0.5rem;
  width: 0.25rem;
  background-color: #e7e7e7;
}

::-webkit-scrollbar-thumb {
  background-color: #ffa042;
}

thead {
  background: #fc8e2b;
  color: #fff;
  font-size: 1rem;
}
</style>
