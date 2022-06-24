<template>
  <v-data-table
    :headers="headers"
    :items="customers"
    :loading="loading"
    class="elevation-1"
  >
    <template v-slot:top>
      <AddNewCustomer @created="getCustomers()" />
      <EditCustomer
        :dialog="dialog"
        :editedItem="editedItem"
        @edited="getCustomers()"
        @close="dialog = false"
      />
    </template>
    <template v-slot:[`item.full_name`]="{ item }">
      <tr>
        <td class="d-block d-sm-table-cell" style="width: 400px">
          <div class="d-flex align-center">
            <img
              v-if="item.avatar"
              :src="file(item.avatar)"
              class="mr-2 rounded-circle"
              contain
              height="44"
              width="44"
            />
            <img
              v-else
              :src="require('@/assets/person.svg')"
              class="mr-2 rounded-circle"
              contain
              height="44"
            />
            {{ item.first_name }} {{ item.last_name }}
          </div>
        </td>
      </tr>
    </template>
    <template v-slot:[`item.is_marketing`]="{ item }">
      <tr>
        <td class="d-block d-sm-table-cell">
          <v-chip dark :color="getColor(item.is_marketing)">
            {{ item.is_marketing === 0 ? "No" : "Yes" }}
          </v-chip>
        </td>
      </tr>
    </template>
    <template v-slot:[`item.created_at`]="{ item }">
      <tr>
        <td class="d-block d-sm-table-cell" style="width: 300px">
          {{ $filters.formatDate(item.created_at) }}
          <p class="icons mb-0">{{ $filters.formatTime(item.created_at) }}}</p>
        </td>
      </tr>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <div class="d-flex">
        <v-btn
          @click="editItem(item)"
          :style="{
            visibility:
              showMenus && !confirmDelete && selectedItem == item
                ? 'visible'
                : 'hidden',
          }"
          fab
          dark
          small
          color="white"
          class="mr-2"
        >
          <v-icon small class="icons"> mdi-pencil </v-icon>
        </v-btn>
        <v-btn
          v-if="confirmDelete && selectedItem == item"
          fab
          dark
          small
          color="white"
          class="mr-2"
        >
          <v-icon small @click="deleteItem(item)" class="icon-check">
            mdi-check
          </v-icon>
        </v-btn>
        <v-btn
          v-if="confirmDelete && selectedItem == item"
          fab
          dark
          small
          color="white"
          class="mr-2"
        >
          <v-icon small @click="confirmDelete = false" class="icon-close">
            mdi-close
          </v-icon>
        </v-btn>

        <v-btn
          :style="{
            visibility:
              showMenus && selectedItem == item ? 'visible' : 'hidden',
          }"
          fab
          dark
          small
          color="white"
          class="mr-2"
        >
          <v-icon small @click="confirmDelete = true" class="icons">
            mdi-delete
          </v-icon>
        </v-btn>
        <v-btn
          @click="
            (selectedItem = item),
              (showMenus = !showMenus),
              (confirmDelete = false)
          "
          icon
          small
          fab
          :color="selectedItem === item ? 'primary' : 'grey'"
        >
          <v-icon small>mdi-dots-vertical</v-icon>
        </v-btn>
      </div>
    </template>
  </v-data-table>
</template>

<script>
import { mapState, mapActions } from "vuex";
import AddNewCustomer from "./addNewCustomer.vue";
import EditCustomer from "./EditCustomer.vue";
import file from "@/mixins/file";
export default {
  mixins: [file],
  components: {
    AddNewCustomer,
    EditCustomer,
  },
  data: () => ({
    dialog: false,
    showMenus: false,
    selectedItem: "",
    confirmDelete: false,
    editedItem: {
      first_name: "",
      last_name: "",
      email: "",
      address: "",
      phone_number: "",
      password: "",
      password_confirmation: "",
    },
    headers: [
      {
        text: "Name",
        align: "start",
        value: "full_name",
      },
      { text: "Email", value: "email" },
      { text: "Phone", value: "phone_number" },
      { text: "Address", value: "address" },
      { text: "Date created", value: "created_at" },
      { text: "Marketing preferences", value: "is_marketing" },
      { text: "", value: "actions" },
    ],
    loading: false,
  }),

  mounted() {
    this.getCustomers();
  },

  computed: {
    ...mapState({
      customers: (state) => state?.admin?.customers?.data,
    }),
  },

  methods: {
    ...mapActions("admin", ["getAllCustomers", "deleteCustomer"]),
    getCustomers() {
      this.loading = true;
      this.getAllCustomers()
        .then(() => {
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },

    editItem(item) {
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.deleteCustomer(item.uuid)
        .then(() => {
          this.getCustomers();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    getColor(is_marketing) {
      if (is_marketing == 0) return "#F09E00";
      else return "primary";
    },
  },
};
</script>

<style>
.v-btn--fab.v-size--small {
  height: 30px;
  width: 30px;
}
.icons {
  color: rgba(0, 0, 0, 0.54) !important;
}
.icon-close {
  color: #f44336 !important;
}
.icon-check {
  color: #4caf50 !important;
}
/* .v-data-table >>> div > table {
  border-spacing: 0 15rem !important;
} */
</style>
