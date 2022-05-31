<template>
  <v-row class="pa-0 ma-0" style="height: 100%">
    <v-col
      cols="8"
      class="d-flex justify-center align-center"
      style="background: #f5f5f0"
    >
      <v-img
        height="66%"
        contain
        src="https://moebius.cssninja.io/img/illustrations/screen-1.png"
      ></v-img
    ></v-col>
    <v-col cols="4" class="d-flex flex-column justify-center">
      <div class="d-flex justify-center align-center">
        <NuxtLogo style="height: 52px; position: absolute; top: 25px" />
      </div>
      <v-card class="px-8" elevation="0">
        <v-card-title
          class="pt-10 pb-13 d-flex flex-column justify-start align-start"
          ><p class="text-h4 pt-2 black--text text-lighten-3 font-weight-light">
            Welcome Back.
          </p>
          <p class="pb-1 grey--text text-body-1 font-weight-light">
            Please sign in to your account
          </p>

          <p>
            <nuxt-link
              to="auth/register"
              class="text-decoration-none text-body-2 font-weight-light"
              >i do not have an account yet</nuxt-link
            >
          </p>
        </v-card-title>
        <v-card-text class="pb-0">
          <v-text-field
            height="40px"
            outlined
            class="pb-3"
            dense
            :rules="[rules.required, rules.email]"
            v-model="userName"
            hide-details=""
            prepend-inner-icon="mdi-email-outline"
          ></v-text-field>
          <v-text-field
            height="40px"
            v-model="password"
            type="password"
            dense
            hide-details=""
            outlined
            prepend-inner-icon="mdi-lock-outline"
          ></v-text-field>
        </v-card-text>
        <v-card-actions class="d-flex flex-column px-4 pt-0 align-start">
          <div class="d-flex flex-row align-center pb-3">
            <v-switch
              color="primary"
              inset
              background-color="transparent"
              dense
            ></v-switch>
            <p class="text-body-1 font-weight-light pa-0 ma-0">Remember Me</p>
          </div>
          <v-btn
            color="primary"
            class="text-body-1 text-capitalize white--text"
            block
            @click="login(userName, password)"
            >Sign in</v-btn
          >
          <nuxt-link
            class="pt-2 text-body-1 font-weight-light text-decoration-none grey--text"
            to="/auth/forgotpassword"
          >
            Forgot Password?</nuxt-link
          >
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import NuxtLogo from "~/components/NuxtLogo";
export default {
  data() {
    return {
      userName: "Ireedui@gmail.com",
      password: "91853040",
      rules: {
        required: (value) => !!value || "Required.",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },
  created() {
    this.$vuetify.theme.dark = false;
  },
  methods: {
    login(userName, password) {
      this.$store.commit("setUser", userName);
      this.$router.push("/inspire");
    },
  },
  //   computed: {
  //     userName: {
  //       get: function () {
  //         return this.$store.state.userName;
  //       },
  //       set: function (newValue) {
  //         this.$store.commit("setUser", newValue);
  //       },
  //     },
  //     password: {
  //       get: function () {
  //         return this.$store.state.password;
  //       },
  //       set: function (newValue) {
  //         this.$store.commit("setPassword", newValue);
  //       },
  //     },
  //   },
  components: {
    NuxtLogo,
  },
};
</script>

<style>
p {
  margin: 0 !important;
  padding: 0 !important;
}
</style>
