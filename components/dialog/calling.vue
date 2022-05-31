<template>
  <v-card
    color="var(--v-rightchat-base)"
    rounded="lg"
    class="py-8 px-10 d-flex flex-column justify-center align-center"
  >
    <v-avatar width="100px" height="100px">
      <v-img :src="$store.state.calling.user.image"> </v-img>
    </v-avatar>
    <v-card-text
      style="height: 100px"
      class="pa-0 d-flex flex-row justify-center align-center"
    >
      <div class="animating">
        <v-btn icon x-large>
          <v-icon>mdi-phone</v-icon>
        </v-btn>
      </div>
    </v-card-text>
    <v-card-title
      :style="$vuetify.theme.dark ? 'color: #aeaeae' : 'color: #515365'"
      class="font-weight-bold text-h6 pt-0"
    >
      Calling {{ $store.state.calling.user.name }}
    </v-card-title>
    <v-card-subtitle
      style="color: #757a91"
      class="px-3 text-center text-body-1"
      v-if="$store.state.calling.connected == false"
      >Looks like Kristie Brooks wasn't able to pick up the call. What would you
      like to do next?
    </v-card-subtitle>
    <v-card-subtitle
      v-else
      style="color: #757a91"
      class="text-body-1 text-center"
      >We'll connect you when Mike Baggio picks up.

      <!-- if not answered -->
      <v-card-actions class="mt-10">
        <v-btn width="11vw" color="transparent" elevation="0">
          <v-icon color="grey" small>mdi-phone-outgoing-outline</v-icon>
          <span class="pa-0 ma-0 grey--text text--darken-1 text-caption">
            Call again
          </span></v-btn
        >
        <v-btn
          @click="$store.commit('endcall')"
          width="11vw"
          color="transparent"
          elevation="0"
          ><v-icon color="grey" small>mdi-chat-outline</v-icon>
          <span class="pa-0 ma-0 grey--text text--darken-1 text-caption">
            sent message
          </span></v-btn
        >
      </v-card-actions>
    </v-card-subtitle>
    <v-card-actions>
      <v-btn
        width="20vw"
        color="var(--v-textground-base)"
        style="border: 1px solid rgb(197, 191, 191)"
        block
        class="py-6 text-body-2"
        @click="$store.commit('endcall')"
        ><v-icon color="grey--text text--darken-1"
          >mdi-phone-off-outline</v-icon
        >
        <p
          :class="
            $vuetify.theme.dark
              ? 'grey--text text--lighten-1'
              : 'grey--text text--darken-4'
          "
        >
          End Call
        </p></v-btn
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

<style>
.animating {
  background: green;
  border-radius: 50%;
  animation-name: call;
  animation-duration: 4s;
  animation-iteration-count: infinite;
}
@keyframes call {
  0% {
    background-color: rgb(22, 217, 9);
    z-index: 1;
  }
  25% {
    z-index: 2;
    padding: 4px;
    background-color: rgb(95, 248, 84);
  }
  50% {
    z-index: 3;
    padding: 8px;
    background-color: rgb(140, 250, 133);
  }
  100% {
    z-index: 4;
    padding: 12px;
    background-color: rgb(186, 252, 182);
  }
}
</style>
