<template>
  <v-dialog v-model="dialog" max-width="500px">
    <!-- Login button -->
    <template v-slot:activator="{ props }">
      <v-btn color="white" v-bind="props" variant="outlined"> LOGIN </v-btn>
    </template>

    <!-- Form card -->
    <v-card class="pa-5">
      <div class="d-flex justify-end">
        <v-btn icon @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>

      <v-col cols="12">
        <v-img
          :src="require('../assets/circle-logo.svg')"
          class="my-1"
          contain
          height="92"
        />
      </v-col>
      <p class="text-center text-h5">Login</p>

      <v-form @submit.prevent="loginAdmin()">
        <v-container>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            type="email"
            label="Email Address *"
            required
            variant="outlined"
          ></v-text-field>

          <v-text-field
            :rules="passwordRules"
            type="password"
            label="Password *"
            v-model="password"
            class="input-group--focused"
            variant="outlined"
          ></v-text-field>

          <!-- Remember me check box -->
          <v-checkbox
            v-model="checkbox"
            label="Remember me"
            class="mt-0"
          ></v-checkbox>

          <!-- Login button -->
          <v-btn
            block
            :loading="loading"
            :disabled="loading"
            color="primary"
            type="submit"
          >
            LOG IN
          </v-btn>

          <v-row
            justify="space-between"
            :loading="loading"
            :disabled="loading"
            class="mt-6 body-2"
          >
            <v-col>
              <a href="#" class="text-decoration-none" style="color: #1976d2"
                >Forgot password?</a
              >
            </v-col>

            <v-col class="text-right">
              <a href="#" class="text-decoration-none" style="color: #1976d2"
                >Don’t have an account? Sign Up</a
              >
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    show: false,
    dialog: false,
    loading: false,
    valid: false,
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => v.length > 0 || "Input a valid password",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "Email is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    checkbox: false,
  }),

  methods: {
    ...mapActions("auth", ["login"]),
    async loginAdmin() {
      this.loading = true;
      try {
        const res = await this.login({
          email: this.email,
          password: this.password,
        });
        this.loading = false;
      } catch (error) {
        this.loading = false;
      }
    },
  },
};
</script>

<style>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
