<template>
  <v-navigation-drawer v-model="drawer" app color="secondary">
    <v-list text-color="#69817B" class="pa-0">
      <v-list-item
        v-for="[icon, text, url] in links"
        :key="icon"
        :to="url"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      links: [
        ["mdi-tune", "Dashboard"],
        ["mdi-subtitles", "All tickets"],
        ["mdi-map-marker", "Shipment Locator"],
        ["mdi-account-multiple-outline", "Customers", "/customers"],
        ["mdi-folder-outline", "Products"],
      ],
    };
  },
};
</script>

<style scoped>
.v-list-item--active {
  background-color: #2db479;
  color: #fff !important;
}
</style>
