<template>
  <v-card
    rounded="lg"
    class="py-8 px-10 d-flex flex-column justify-center align-center"
  >
    <v-avatar width="100px" height="100px">
      <v-img :src="$store.state.calling.user.image"> </v-img>
    </v-avatar>
    <v-card-title
      class="font-weight-bold text-h6 pt-8 grey--text text--darken-3"
    >
      {{ $store.state.calling.user.name }}
    </v-card-title>
    <v-card-subtitle
      class="px-3 text-center text-body-1"
      v-if="$store.state.calling.connected == false"
      >Looks like Kristie Brooks wasn't able to pick up the call. What would you
      like to do next?
    </v-card-subtitle>
    <v-card-subtitle v-else class="text-body-1 text-center"
      >We'll connect you when Mike Baggio picks up.
      <v-card-actions>
        <v-btn width="50%" color="transparent" elevation="0">
          <v-icon color="grey">mdi-phone-outgoing-outline</v-icon>
          <p class="pa-0 ma-0 grey--text text--darken-1">Call again</p></v-btn
        >
        <v-btn width="50%" color="transparent" elevation="0"
          ><v-icon color="grey">mdi-chat-outline</v-icon>
          <p class="pa-0 ma-0 grey--text text--darken-1">Call again</p></v-btn
        >
      </v-card-actions>
      <!-- <div class="d-flex flex-row justify-center pt-8">
        <v-btn class="pr-2 text-h5" color="transparent" elevation="0"
          ><v-icon>mdi-phone-outgoing-outline</v-icon>Call again</v-btn
        ><v-btn class="pl-2 text-h5" color="transparent" elevation="0"
          ><v-icon>mdi-chat-outline</v-icon>Call again</v-btn
        >
      </div> -->
    </v-card-subtitle>
    <v-card-actions class="pt-16">
      <v-btn
        width="20vw"
        color="transparent"
        style="border: 1px solid rgb(197, 191, 191)"
        block
        class="py-6 text-body-2"
        @click="$store.commit('endcall')"
        ><v-icon color="grey--text text--darken-1"
          >mdi-phone-off-outline</v-icon
        >
        <p class="grey--text text--darken-4">End Call</p></v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style></style>
