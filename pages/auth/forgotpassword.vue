<template>
  <!-- <v-row class="d-flex flex-column align-center"> -->
  <v-layout
    column
    align-center
    style="background: var(--v-background-base)"
    fill-height
  >
    <v-snackbar
      v-model="snackbar.value"
      :timeout="snackbar.timeout"
      color="success"
      >{{ snackbar.message }}
    </v-snackbar>
    <div class="logo pb-16 pt-2">
      <NuxtLogo style="height: 56px" />
    </div>
    <v-card
      elevation="0"
      width="400px"
      color="transparent"
      class="d-flex pt-16 flex-column justify-center align-center"
    >
      <!-- <v-card-text class="pt-1 pb-5 d-flex justify-center align-center">
      </v-card-text> -->
      <v-card-title class="text-h4 font-weight-light">
        Forgot Password?
      </v-card-title>
      <v-card-subtitle>
        Enter your email and follow the instructions
      </v-card-subtitle>
      <v-card-text
        class="d-flex flex-column pa-16 rounded-lg"
        style="background: white; border: rgb(191, 191, 191, 0.5) 1px solid"
      >
        <v-text-field
          hide-spin-buttons
          aria-hidden=""
          full-width
          dense
          v-model="recovermail"
          hide-details=""
          outlined
          class="pb-4"
          :rules="[rules.gmail]"
          prepend-inner-icon="mdi-email-outline"
          placeholder="Email Address"
        >
        </v-text-field>
        <v-btn
          block
          color="primary"
          @click="
            recovered({
              message: 'An email has been sent',
              color: 'success',
              value: true,
            })
          "
        >
          Recover Password
        </v-btn>
      </v-card-text>
      <nuxt-link
        class="text-left text-decoration-none grey--text text-darken-1"
        style="width: 100%"
        to="/"
        ><p class=" ">Go back to login</p></nuxt-link
      >
    </v-card>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      snackbar: {
        color: null,
        message: null,
        value: false,
        timeout: 2000,
      },
      formaterror: false,
      recovermail: null,
      rules: {
        gmail: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },
  computed: {
    form() {
      return {
        recovermail: this.recovermail,
      };
    },
  },
  methods: {
    recovered(newValue) {
      (this.snackbar.message = newValue.message),
        (this.snackbar.color = newValue.color),
        (this.snackbar.value = newValue.value);
    },
  },
};
</script>

<style>
.v-application .error--text {
  color: #c7c5bf !important;
  caret-color: #c7c5bf !important;
}
.v-input__icon--prepend-inner {
  margin-top: -4px !important;
}
</style>
