<template>
  <v-card
    class="mt-8"
    elevation="0"
    width="100%"
    color="var(--v-textground-base)"
  >
    <v-card-actions class="px-0 d-flex flex-row justify-space-between"
      ><v-btn icon @click="$store.commit('closeprofile')"
        ><v-icon color="#888da8" small>mdi-arrow-left</v-icon></v-btn
      >
      <div class="d-flex flex-row justify-end">
        <v-btn icon>
          <v-icon small color="#888da8"> mdi-camera </v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon small color="#888da8"> mdi-video</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon color="#888da8" small> mdi-microphone </v-icon>
        </v-btn>
      </div>
    </v-card-actions>
    <v-card-title class="px-0 d-flex flex-row align-end justify-center">
      <v-avatar width="110px" height="110px">
        <v-img class="rounded-circle" :src="profile.user.image"></v-img>
      </v-avatar>
      <div class="ring rounded-circle">
        <v-btn
          fab
          class="rounded-circle stylebtn"
          width="45px"
          height="45px"
          color="primary"
          ><v-icon>mdi-phone</v-icon></v-btn
        >
      </div>
    </v-card-title>
    <v-card-subtitle
      class="px-0 pt-2 d-flex flex-column justify-center align-center"
    >
      <h3 class="text-h5 ma-0 pa-0">{{ profile.user.name }} Ipsum</h3>
      <p class="text-body-1 ma-0 pa-0">Software Engineer</p>
      <div>
        <v-btn
          style="border: 1px solid #31374b"
          icon
          class="hover"
          :style="$vuetify.theme.dark ? 'background: #292e3f' : ''"
        >
          <v-icon :color="$vuetify.theme.dark ? '#757a91' : '#888da8'" small>
            mdi-plus
          </v-icon>
        </v-btn>
        <v-btn
          class="hover"
          style="border: 1px solid #31374b"
          icon
          :style="$vuetify.theme.dark ? 'background: #292e3f' : ''"
        >
          <v-icon
            @click="$store.commit('calluser', profile)"
            :color="$vuetify.theme.dark ? '#757a91' : '#888da8'"
            small
          >
            mdi-phone-outline</v-icon
          >
        </v-btn>
        <v-btn
          class="hover"
          style="border: 1px solid #31374b"
          icon
          :style="$vuetify.theme.dark ? 'background: #292e3f' : ''"
        >
          <v-icon :color="$vuetify.theme.dark ? '#757a91' : '#888da8'" small>
            mdi-email-outline
          </v-icon>
        </v-btn>
        <v-btn
          class="hover"
          style="border: 1px solid #31374b"
          icon
          :style="$vuetify.theme.dark ? 'background: #292e3f' : ''"
        >
          <v-icon :color="$vuetify.theme.dark ? '#757a91' : '#888da8'" small>
            mdi-bell-outline
          </v-icon>
        </v-btn>
      </div>
    </v-card-subtitle>
    <v-card-text>
      <v-row>
        <v-col cols="6">
          <v-card
            elevation="0"
            height="80px"
            color="var(--v-chatground-base)"
            outlined
            style="border: 1px solid #31374b"
            class="text-center d-flex flex-column justify-center align-center"
          >
            <v-card-title
              class="grey--text text-body-1 text-body-1 text-lighten-1 justify-center"
            >
              project
            </v-card-title>
            <v-card-subtitle class="text-h5 font-weight-bold">
              82
            </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card
            height="80px"
            elevation="0"
            color="var(--v-chatground-base)"
            outlined
            style="border: 1px solid #31374b"
            class="text-center d-flex flex-column justify-center align-center"
          >
            <v-card-title
              class="grey--text text-body-1 text-lighten-1 justify-center"
            >
              teams
            </v-card-title>
            <v-card-subtitle class="text-h5 font-weight-bold">
              4
            </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card
            height="80px"
            elevation="0"
            color="var(--v-chatground-base)"
            outlined
            style="border: 1px solid #31374b"
            class="text-center d-flex flex-column justify-center align-center"
          >
            <v-card-title
              class="grey--text text-body-1 text-lighten-1 justify-center"
            >
              posts
            </v-card-title>
            <v-card-subtitle class="text-h5 font-weight-bold">
              10
            </v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card
            height="80px"
            elevation="0"
            color="var(--v-chatground-base)"
            outlined
            style="border: 1px solid #31374b"
            class="text-center d-flex flex-column justify-center align-center"
          >
            <v-card-title
              class="grey--text text-body-1 text-lighten-1 justify-center"
            >
              comments
            </v-card-title>
            <v-card-subtitle class="text-h5 font-weight-bold">
              192
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      profile: (state) => state.profile,
    }),
  },
};
</script>

<style>
.stylebtn {
  margin: 4px !important;
}
.ring {
  z-index: 200;
  background: white !important;
  margin-left: -30px;
}
</style>
