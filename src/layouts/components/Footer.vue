<template>
  <v-footer color="secondary">
    <v-container class="px-0 py-10">
      <div class="d-flex justify-center">
        <v-row>
          <!-- Logo -->
          <v-col>
            <div>
              <v-img
                alt="Petson Logo"
                class="mx-auto"
                contain
                src="/logo-green.svg"
                transition="scale-transition"
                width="55"
              />

              <v-img
                alt="Petson Name"
                class="shrink mt-3 mx-auto"
                contain
                min-width="99"
                src="/petson-green.svg"
                width="99"
              />
            </div>
          </v-col>

          <!-- Footer menus -->
          <v-col class="py-0" v-for="item in items" :key="item.name">
            <h3 class="mb-4">{{ item.name }}</h3>
            <p v-for="menu in item.links" :key="menu.name">
              <a href="#" class="text-secondary text-decoration-none">
                {{ menu.name }}
              </a>
            </p>
          </v-col>

          <v-col class="px-0 mt-md-8"
            ><p class="text-secondary">
              If you can’t find answer to your question, please contact our
              <a href="#" class="text-decoration-none" style="color: #1976d2"
                >customer service.</a
              >
            </p></v-col
          >
        </v-row>
      </div>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        name: "Petson",
        links: [
          {
            name: "About us",
          },
          {
            name: "Blog",
          },
          {
            name: "Store locator",
          },
        ],
      },
      {
        name: "Contact",
        links: [
          {
            name: "contact@petson.com",
          },
          {
            name: "+385 000 000",
          },
          {
            name: "35 Shnauzer avenue, Dogville AL",
          },
        ],
      },
      {
        name: "Information",
        links: [
          {
            name: "Ordering and shipping",
          },
          {
            name: "FAQ",
          },
          {
            name: "GDPR statement",
          },
        ],
      },
    ],
  }),
};
</script>

<style scoped>
.text-secondary {
  color: #131212 !important;
}
</style>
