import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import SplashScreen from "../components/molecules/Splash_screen.vue";
import Home from "@/container/homeContainer.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "splashScreen",
    component: SplashScreen,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
