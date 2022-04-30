<template>
  <v-card elevation="6" class="d-flex flex-column justify-center align-center">
    <v-card-title class="text-h4 ma-4"> Login Form </v-card-title>
    <v-card-subtitle>
      User Name
      <v-text-field
        v-model="userName"
        outlined
        filled
        prepend-inner-icon="mdi-account"
        full-width
      ></v-text-field>
      Email
      <v-text-field
        v-model="email"
        outlined
        filled
        prepend-inner-icon="mdi-email"
        full-width
      ></v-text-field>
      Password
      <v-text-field
        v-model="password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show1 ? 'text' : 'password'"
        @click:append="show1 = !show1"
        outlined
        hint="At least 8 characters"
        filled
        prepend-inner-icon="mdi-lock"
        full-width
      ></v-text-field>
      Confirm Password
      <v-text-field
        v-model="confirmPassword"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show1 ? 'text' : 'password'"
        @click:append="show1 = !show1"
        outlined
        hint="At least 8 characters"
        filled
        prepend-inner-icon="mdi-lock-plus"
        full-width
      ></v-text-field>
    </v-card-subtitle>
    <v-card-actions>
      <v-btn
        width="17vw"
        @click="register({ userName, password, confirmPassword, email })"
      >
        Login
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from "Vuex";
export default {
  data() {
    return {
      show1: false,
      formHasErrors: false,
      password: "",
      userName: "",
      email: "",
      confirmPassword: "",
      rules: {
        required: (value) => !!value || "Required.",
        // min: (v) => v.length >= 8 || "Min 8 characters",
      },
    };
  },

  methods: {
    ...mapActions({
      register: "register",
    }),
  },
};
</script>

<style></style>
