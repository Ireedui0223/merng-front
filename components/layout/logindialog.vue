<template>
  <v-card elevation="6" class="d-flex flex-column justify-center align-center">
    <v-card-title class="text-h4 ma-8"> Login Form </v-card-title>
    <v-card-subtitle>
      userName or Phone
      <v-text-field
        v-model="userName"
        outlined
        filled
        prepend-inner-icon="mdi-account"
        full-width
        :rules="[rules.required]"
      ></v-text-field>
      Password
      <v-text-field
        v-model="password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required]"
        :type="show1 ? 'text' : 'password'"
        @click:append="show1 = !show1"
        outlined
        hint="At least 8 characters"
        filled
        prepend-inner-icon="mdi-lock"
        full-width
      ></v-text-field>
    </v-card-subtitle>
    <v-card-actions>
      <v-btn width="17vw" @click="login({ userName, password })"> Login </v-btn>
    </v-card-actions>
    <v-card-text class="text-center">
      Бүртгэл үүсгэх үү? <nuxt-link to="/">Бүртгэл үүсгэх </nuxt-link>
    </v-card-text>
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
      rules: {
        required: (value) => !!value || "Required.",
        // min: (v) => v.length >= 8 || "Min 8 characters",
      },
    };
  },
  computed: {
    form() {
      return {
        userName: this.userName,
        password: this.password,
      };
    },
  },
  methods: {
    submit() {
      this.formHasErrors = false;

      Object.keys(this.form).forEach((f) => {
        if (!this.form[f]) this.formHasErrors = true;
        this.$refs[f]?.validate(true);
      });
      if (this.formHasErrors == false) {
        this.$store.commit("togglelogin");
      }
      console.log(this.password), console.log(this.userName);
    },
    ...mapActions({
      login: "login",
    }),
  },
};
</script>

<style>
img {
  padding-bottom: 1000px !important;
}
</style>
