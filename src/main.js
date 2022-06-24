import { createApp } from 'vue'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import apiConfig from "./plugins/axios";
import VueCookies from "vue-cookies";
import AdminLayout from "@/layouts/AdminLayout.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import { loadFonts } from './plugins/webfontloader'

loadFonts()
const app = createApp(App)

app.config.globalProperties.$filters = {
  formatDate(value) {
    if (!value) return "";
    return moment(value).format("MMMM d, YYYY");
  },
  formatTime(value) {
    if (!value) return "";
    return moment.utc(value).format("h:mm A");
  }
}
const token = VueCookies.get("token");
if (token) {
  apiConfig.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

app.config.globalProperties.$axios = apiConfig;
app.config.productionTip = false;

app.use(router)
app.use(store)
app.component('admin-layout', AdminLayout)
app.component('default-layout', DefaultLayout)
app.use(vuetify)
app.mount('#app')
