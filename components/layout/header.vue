<template>
  <v-container class="d-flex flex-row justify-space-between">
    <v-row class="d-flex align-center">
      <v-col cols="5">
        <a
          class="text-decoration-none"
          target="_"
          href="https://www.facebook.com/"
        >
          <v-icon class="mr-2">mdi-facebook</v-icon>
        </a>
        <a
          class="text-decoration-none"
          target="_"
          href="https://www.instagram.com/"
        >
          <v-icon class="mr-2">mdi-instagram</v-icon>
        </a>
        <a
          class="text-decoration-none"
          target="_"
          href="https://www.twitter.com/"
        >
          <v-icon class="mr-2">mdi-twitter</v-icon>
        </a>
      </v-col>
      <v-col cols="2">
        <nuxt-link to="/">
          <v-img
            :src="
              $vuetify.theme.dark
                ? require('~/assets/logo.svg')
                : require('~/assets/logohire.svg')
            "
          >
          </v-img
        ></nuxt-link>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="5" class="d-flex flex-row justify-end">
        <v-btn @click="logdialog" class="mx-2"
          ><v-icon>mdi-account</v-icon> login</v-btn
        >
        <v-btn @click="regdialog" class="mr-2">register</v-btn>
        <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark"
          ><v-icon v-if="$vuetify.theme.dark == true"
            >mdi-white-balance-sunny</v-icon
          >
          <v-icon v-else>mdi-brightness-3</v-icon></v-btn
        >
        <v-dialog v-model="logindialog" width="40vw">
          <Dialog />
        </v-dialog>
        <v-dialog v-model="registerdialog" width="40vw">
          <Register />
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Dialog from "~/components/layout/logindialog";
import Register from "~/components/layout/registerdialog";
export default {
  data() {
    return {
      currentColor: "#ffffff",
    };
  },
  components: {
    Dialog,
    Register,
  },
  computed: {
    logindialog: {
      get: function () {
        return this.$store.state.logindialog;
      },
      set: function () {
        this.$store.commit("togglelogin");
      },
    },
    registerdialog: {
      get: function () {
        return this.$store.state.registerdialog;
      },
      set: function () {
        this.$store.commit("toggleregister");
      },
    },
  },
  methods: {
    logdialog() {
      this.$store.commit("togglelogin");
    },
    regdialog() {
      this.$store.commit("toggleregister");
    },
  },
};
</script>

<style></style>
