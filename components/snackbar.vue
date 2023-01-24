<template>
  <v-snackbar
    transition="slide-x-transition"
    class="pa-10 text-h2"
    v-model="snackBar"
    color="danger"
    rounded="lg"
    fixed
    bottom
    right
    timeout="2000"
  >
    <v-icon>mdi-alert</v-icon>
    <strong class="font-weight-light">{{ snackBar.message }}</strong>
    <template v-slot:action="{ attrs }">
      <v-btn icon v-bind="attrs" @click="close()">
        <v-icon> mdi-close</v-icon>
      </v-btn>
    </template>
    <!-- <v-progress-linear value="6" indeterminate></v-progress-linear> -->
    <div class="line"></div>
  </v-snackbar>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      value: "",
      color: "",
      timeout: "",
      message: "",
    };
  },
  computed: {
    snackBar: {
      get: function () {
        return this.$store.getters["getSnackBar"];
      },
      set: function () {
        // this.setsnack({ value: false });
      },
    },
  },

  methods: {
    ...mapMutations({
      setsnack: "setSnackbar",
    }),
    close() {
      this.value = false;
    },
  },
};
</script>

<style>
strong {
  font-size: 16px !important;
}
.line {
  height: 6px;
  border-bottom-left-radius: 6px;
  position: relative;
  bottom: -14px;
  padding: 0px !important;
  margin-left: -14px !important;
  margin-right: -12px !important;
  animation-name: drawline;
  animation-duration: 3000ms;
  background-color: #e64a88;
}
@keyframes drawline {
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
}
</style>
