<template>
  <div>
    <div class="pb-5">
      <h2>Customers</h2>
      <v-breadcrumbs :items="items"></v-breadcrumbs>
    </div>

    <v-divider></v-divider>
    <CustomersTable class="mt-6"/>
  </div>
</template>

<script>
import CustomersTable from "./CustomerTable.vue";
export default {
  components: {
    CustomersTable,
  },
  data() {
    return {
      items: [
        {
          text: "Dashboard",
          disabled: false,
          href: "breadcrumbs_dashboard",
        },
        {
          text: "",
        },
      ],
    };
  },
};
</script>

<style>
.v-application ul,
.v-application ol {
  padding-left: 0px;
}
.v-breadcrumbs {
  padding: 0px !important;
}
.v-application a {
  color: #2196f3;
}
</style>
