<template>
  <v-app dark>
    <Header />
    <Snackbar />

    <v-divider></v-divider>
    <v-main>
      <v-container>
        <pre v-if="currentUser">{{ currentUser }}</pre>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { userQuery } from "~/apollo/queries/user";
import Header from "~/components/layout/header";
import Snackbar from "~/components/layout/snackbar";
export default {
  name: "DefaultLayout",
  components: {
    Header,
    Snackbar,
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
  apollo: {
    currentUser: {
      query: userQuery,
    },
  },
};
</script>
