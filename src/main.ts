import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";

import { setupClient } from "./clients/AxiosClient";

setupClient(process.env.VUE_APP_API);

createApp(App).use(router).mount("#app");
