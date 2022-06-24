import cookies from "vue-cookies";
import router from "@/router";
import axios from "@/plugins/axios";

import { LOGIN, LOGOUT } from "@/api/auth";

export default {
  login({ commit }, payload) {
    return new Promise((resolve, reject) => {
      commit("AUTH_REQUEST");
      LOGIN(payload)
        .then((response) => {
          const token = response?.data?.data?.token;
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          commit("AUTH_SUCCESS", token);
          cookies.set("token", token);
          router.push("/customers");
          resolve(response);
        })
        .catch((error) => {
          commit("AUTH_ERROR", error);
          reject(error);
        });
    });
  },

  logout({ commit }) {
    return new Promise((resolve, reject) => {
      LOGOUT()
        .then(({ data }) => {
          commit("AUTH_LOGOUT");
          cookies.remove("token");
          delete axios.defaults.headers.common["Authorization"];
          if (router.currentRoute.path !== "/") {
            router.push("/");
          }
          localStorage.clear();
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
