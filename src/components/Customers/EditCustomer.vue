<template>
  <v-dialog v-model="dialog" max-width="600px">
    <v-card>
      <div class="d-flex justify-space-between align-center">
        <v-card-title>
          <span class="text-h5">Edit customer</span>
        </v-card-title>
        <v-btn icon @click="$emit('close')" class="pr-5">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>

      <v-col cols="12" class="mx-auto">
        <v-img
          v-if="editedItem.avatar"
          :src="file(editedItem.avatar)"
          class="rounded-circle mx-auto"
          height="92"
          width="92"
        />
        <v-img
          v-else
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
                  v-model="editedItem.first_name"
                  label="First Name"
                  :rules="required"
                  required
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  v-model="editedItem.last_name"
                  :rules="required"
                  label="Last Name"
                  required
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>
            <v-text-field
              v-model="editedItem.email"
              :rules="emailRules"
              label="Email Address"
              required
              outlined
            ></v-text-field>

            <v-text-field
              v-model="editedItem.phone_number"
              label="Phone number"
              required
              outlined
            ></v-text-field>

            <v-text-field
              v-model="editedItem.address"
              :rules="required"
              label="Location"
              required
              outlined
            ></v-text-field>

            <v-text-field
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="required"
              :type="show ? 'text' : 'password'"
              label="Password"
              v-model="editedItem.password"
              class="input-group--focused"
              outlined
              @click:append="show = !show"
            ></v-text-field>

            <v-text-field
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="required"
              :type="show2 ? 'text' : 'password'"
              label="Confirm Password"
              v-model="editedItem.password_confirmation"
              class="input-group--focused"
              outlined
              @click:append="show2 = !show2"
            ></v-text-field>

            <v-btn
              block
              :loading="loading"
              :disabled="loading"
              color="primary"
              @click="updateCustomer()"
            >
              SAVE CHANGES
            </v-btn>
          </v-container>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from "vuex";
import file from "@/mixins/file";
export default {
  mixins: [file],
  props: {
    editedItem: {
      type: Object,
      required: false,
      default: () => {},
    },
    dialog: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      loading: false,
      valid: false,
      show: false,
      show2: false,
      required: [(v) => !!v || "Field is required"],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) => v.length > 8 || "Password must be at least 8 characters",
      ],
      emailRules: [
        (v) => !!v || "Email is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  methods: {
    ...mapActions("admin", [
      "editCustomer",
    ]),
    updateCustomer() {
      this.loading = true;
      this.editCustomer(this.editedItem)
        .then(() => {
          this.$emit("edited");
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style></style>
