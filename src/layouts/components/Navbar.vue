<template>
  <v-app-bar color="primary" app class="navbar">
    <v-container class="pa-0 fill-height">
      <div class="d-flex align-center">
        <router-link to="/">
          <div class="d-flex align-center">
            <v-img
              alt="Petson Logo"
              class="mx-auto"
              contain
              src="/logo.svg"
              transition="scale-transition"
              width="55"
            />

            <v-img
              alt="Petson Name"
              class="shrink mt-3 mx-auto"
              contain
              min-width="99"
              src="/petson.svg"
              width="99"
            />
          </div>
        </router-link>
        <v-btn variant="text" color="white">
          PRODUCTS
          <v-icon right> mdi-chevron-down </v-icon>
        </v-btn>
        <v-btn variant="text" color="white"> PROMOTIONS </v-btn>
        <v-btn variant="text" color="white"> BLOG </v-btn>
        <v-btn class="ma-2" variant="outlined" color="white">
          <v-icon left> mdi-cart</v-icon>CART (0)
        </v-btn>
        <Login v-if="!isAuthenticated" />
        <v-btn
          v-else
          :loading="loading"
          :disabled="loading"
          lass="ma-2"
          outlined
          color="white"
          @click="logoutAdmin"
        >
          LOGOUT
        </v-btn>
        <img
          v-if="isAuthenticated"
          :src="require('@/assets/image.svg')"
          height="48"
          class="ml-3"
        />
      </div>

      <v-spacer></v-spacer>
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Login from "../../components/Login.vue";
export default {
  components: {
    Login,
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    ...mapGetters("auth", ["isAuthenticated"]),
  },
  methods: {
    ...mapActions("auth", ["logout"]),
    async logoutAdmin() {
      this.loading = true;
      try {
        const res = await this.logout();
        this.loading = false;
      } catch (error) {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.v-system-bar {
  height: 4rem !important;
}
</style>
