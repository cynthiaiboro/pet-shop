import axios from "axios";
import store from "../store";

const apiConfig = axios.create({
  baseURL: "https://pet-shop.buckhill.com.hr/api/v1",
});

apiConfig.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error?.response?.status === 401) {
      store.dispatch("auth/logout");
    }
    return Promise.reject(error);
  }
);

export default apiConfig;
