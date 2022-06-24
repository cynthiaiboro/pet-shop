<template>
  <div>
    <v-toolbar flat>
      <v-toolbar-title class="text-subtitle-2">All customers</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" tile class="mb-2" v-bind="attrs" v-on="on">
            <v-icon left> mdi-plus </v-icon>
            ADD NEW CUSTOMER
          </v-btn>
        </template>

        <v-card>
          <div class="d-flex justify-space-between align-center">
            <v-card-title>
              <span class="text-h5">Add new customer</span>
            </v-card-title>
            <v-btn icon @click="dialog = false" class="pr-5">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>

          <v-col cols="12">
            <v-img
              :src="require('@/assets/person.svg')"
              class="my-1"
              contain
              height="92"
            />
          </v-col>

          <v-card-text>
            <v-form v-model="valid">
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="customer.first_name"
                      label="First Name"
                      :rules="required"
                      required
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="customer.last_name"
                      :rules="required"
                      label="Last Name"
                      required
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-text-field
                  v-model="customer.email"
                  :rules="emailRules"
                  label="Email Address"
                  required
                  outlined
                ></v-text-field>

                <v-text-field
                  v-model="customer.phone_number"
                  :rules="required"
                  label="Phone number"
                  required
                  outlined
                ></v-text-field>

                <v-text-field
                  v-model="customer.address"
                  :rules="required"
                  label="Location"
                  required
                  outlined
                ></v-text-field>

                <v-text-field
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="passwordRules"
                  :type="show ? 'text' : 'password'"
                  label="Password"
                  v-model="customer.password"
                  class="input-group--focused"
                  outlined
                  @click:append="show = !show"
                ></v-text-field>

                <v-text-field
                  :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="confirmPasswordRules"
                  :type="show2 ? 'text' : 'password'"
                  label="Confirm Password"
                  v-model="customer.password_confirmation"
                  class="input-group--focused"
                  outlined
                  @click:append="show2 = !show2"
                ></v-text-field>

                <v-btn
                  block
                  :loading="loading"
                  :disabled="loading"
                  color="primary"
                  @click="addNewCustomer()"
                >
                  ADD NEW CUSTOMER
                </v-btn>
              </v-container>
            </v-form>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-divider></v-divider>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    dialog: false,
    show: false,
    show2: false,
    loading: false,
    valid: false,
    customer: {
      first_name: "",
      last_name: "",
      email: "",
      address: "",
      phone_number: "",
      password: "",
      password_confirmation: "",
    },
    required: [(v) => !!v || "Field is required"],
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => v.length > 8 || "Password must be at least 8 characters",
    ],
    emailRules: [
      (v) => !!v || "Email is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    confirmPasswordRules: [(v) => !!v || "Confirm password is required"],
  }),
  methods: {
    ...mapActions("admin", ["createNewCustomer"]),
    addNewCustomer() {
      this.loading = true;
      this.createNewCustomer(this.customer)
        .then(() => {
          this.loading = false;
          this.dialog = false;
          this.$emit("created");
        })
        .catch(() => {
          (this.dialog = false), (this.loading = false);
        });
    },
  },
};
</script>

<style></style>
