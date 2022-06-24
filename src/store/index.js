import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import auth from "./auth";
import admin from "./admin";

export default createStore({
  modules: {
    auth,
    admin
  },

  plugins: [
    createPersistedState({
      paths: ["auth"],
    }),
  ],
});
