<template>
  <v-snackbar
    v-model="$store.state.snackbar.value"
    :color="$store.state.snackbar.color"
    tile
    top
    fixed
    contered
    elevation="2"
  >
    {{ $store.state.snackbar.message }}
    <template v-slot:action="{ attrs }">
      <v-btn
        text
        :color="snackbar.color"
        v-bind="attrs"
        @click="
          $store.commit('setSnackbar', {
            value: false,
            message: null,
            color: null,
          })
        "
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapState, mapActions } from "Vuex";
export default {
  data() {
    return {};
  },
  computed: {
    snackbar() {
      return this.$store.getters["getSnackbar"];
    },
  },
  //   methods: {
  //     ...mapActions({
  //       getSnackbar: "getSnackbar",
  //       setSnackbar: "setSnackbar",
  //     }),
  //   },
  watch: {
    snackbar(newValue, oldValue) {
      if (newValue) {
        setTimeout(() => {
          this.$store.commit("setSnackbar", {
            value: false,
            message: null,
            color: null,
          });
        }, 5000);
      }
    },
  },
};
</script>

<style></style>
