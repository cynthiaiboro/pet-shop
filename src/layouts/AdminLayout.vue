<template>
  <v-app id="inspire">
    <Navbar />
    <Sidebar />
    <v-main class="pl-4 pt-4">
      <v-container class="py-2 px-6" fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Sidebar from './components/Sidebar.vue';
export default {
  components: {
    Navbar,
    Sidebar
  },
};
</script>
