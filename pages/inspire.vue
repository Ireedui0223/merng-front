<template>
  <v-container>
    <!-- <ApolloMutation
      :mutation="require('~/apollo/mutations/login')"
      :variables="{ username, password }"
      @done="onDone"
    >
      <template v-slot="{ mutate }">
        <v-text-field v-model="username"></v-text-field>
        <v-text-field v-model="password"></v-text-field>
        <v-btn @click="mutate()">signin</v-btn>
      </template>
    </ApolloMutation>-->
    <!-- <v-text-field type="file" v-model="userName"></v-text-field> -->
    <v-text-field v-model="userName"></v-text-field>
    <v-text-field v-model="password"></v-text-field>
    <v-btn @click="login({ userName, password })">signin</v-btn>
    <p v-if="error">error occured {{ error }}</p>
    {{ token }}
  </v-container>
</template>
<script>
import { mapActions } from "Vuex";

export default {
  data() {
    return {
      userName: "",
      password: "",
      error: null,
      succesfulData: null,
      submiting: false,
      token: "",
    };
  },
  props: {
    msg: String,
  },
  methods: {
    ...mapActions({
      login: "login",
    }),
  },
};
</script>
