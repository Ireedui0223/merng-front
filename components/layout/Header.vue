<template>
  <v-layout
    style="
      background-color: var(--v-textground-base);
      margin-left: -18px;
      margin-right: -18px;
    "
    class="d-flex flex-row justify-space-between align-center pa-2"
  >
    <v-card
      v-if="groups.find((c) => c.id === user)"
      class="pa-0 ma-0 d-flex flex-row"
      elevation="0"
      color="transparent"
    >
      <div class="d-flex flex-row justify-center">
        <v-card-actions>
          <div
            class="d-flex flex-row"
            v-for="group in groups.find((c) => c.id === user).members"
            :key="group.id"
          >
            <v-avatar
              class="pr-0"
              size="32"
              :style="
                $vuetify.theme.dark
                  ? 'border: 2px solid #212532;'
                  : 'border: 2px solid #f2eeed;'
              "
              style="margin-left: -15px"
            >
              <v-img contain :src="group.picture"></v-img>
            </v-avatar>
          </div>
        </v-card-actions>

        <v-card-text class="pa-0 my-0 d-flex flex-column justify-center">
          <v-card-title
            :class="
              $vuetify.theme.dark
                ? 'white--text'
                : 'blue-grey--text text-darken-2'
            "
            class="pa-0 text-body-1 pb-2"
          >
            {{ groups.find((c) => c.id === user).members[0].name }}
          </v-card-title>

          <v-card-subtitle class="pa-0 text-body-2 grey--text text-lighten-1"
            >{{ groups.find((c) => c.id === user).members.length }}
            participants
          </v-card-subtitle>
        </v-card-text>
      </div>
    </v-card>
    <v-card
      v-else
      class="pa-0 ma-0 d-flex flex-row"
      elevation="0"
      color="transparent"
    >
      <v-card-title class="text-body-1"> No members yet</v-card-title>
    </v-card>
    <!-- settings heseg -->
    <div class="d-flex flex-row align-center justify-center">
      <v-switch
        hide-details=""
        :prepend-icon="
          $vuetify.theme.dark ? 'mdi-white-balance-sunny' : 'mdi-weather-night'
        "
        validate-on-blur
        dense
        v-model="$vuetify.theme.dark"
      ></v-switch>
      <v-text-field
        :background-color="
          $vuetify.theme.dark ? '#31374b' : 'background: white'
        "
        solo
        type="text"
        prepend-inner-icon="mdi-magnify"
        placeholder="search messages"
        height="38px"
        :style="
          $vuetify.theme.dark
            ? 'border: 1px transparent'
            : 'border: 1px solid rgb(192, 187, 187, 0.6)'
        "
        hide-details=""
        dense
        filled
      ></v-text-field>
      <v-btn icon small class="mx-2">
        <v-icon color="grey"> mdi-cog-outline</v-icon>
      </v-btn>
      <v-menu offset-y v-model="menu">
        <template v-slot:activator="{ on, attrs }">
          <div class="userOuterRing rounded-pill">
            <v-badge color="primary" dot bordered offset-x="10" offset-y="10">
              <v-avatar
                min-width="40px"
                width="40px"
                height="40px"
                min-height="40px"
                v-bind="attrs"
                v-on="on"
                @click="open()"
              >
                <div class="rounded-pill">
                  <v-img
                    class="ma-1"
                    width="32px"
                    src="https://randomuser.me/api/portraits/med/women/1.jpg"
                  ></v-img>
                </div>
              </v-avatar>
            </v-badge>
          </div>
        </template>
        <v-list width="20vw">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Leanne Graham </v-list-item-title>
              <v-list-item-subtitle>{{
                $store.state.user
              }}</v-list-item-subtitle>
              <v-list-item-action
                class="d-flex flex-row pa-0 ml-1 align-center"
              >
                <v-switch
                  inset
                  dense
                  flat
                  color="danger"
                  v-model="focus"
                  class="pr-3"
                ></v-switch>
                <v-list-item-content>
                  <v-list-item-title> Busy Mode </v-list-item-title>
                  <v-list-item-subtitle>
                    Sets your status to busy
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item-action>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item-group>
            <v-list-item @click="clicked()">
              <v-list-item-action>
                <v-icon>mdi-file</v-icon></v-list-item-action
              >
              <v-list-item-content>
                <v-list-item-title> My files </v-list-item-title>
                <v-list-item-subtitle>
                  View all your files
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item @click="clicked()">
              <v-list-item-action
                ><v-icon>mdi-share</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title> Shared files </v-list-item-title>
                <v-list-item-subtitle>
                  Files shared with me
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
          <v-divider> </v-divider>
          <v-list-item-group>
            <v-list-item>
              <v-list-item-action
                ><v-icon>mdi-plus</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title> Add workspace </v-list-item-title>
                <v-list-item-subtitle>
                  Create a new workspace
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
          <v-divider> </v-divider>
          <v-list-item-group>
            <v-list-item @click="logout(), ($vuetify.theme.dark = false)">
              <v-list-item-action
                ><v-icon>mdi-logout</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title> Logout </v-list-item-title>
                <v-list-item-subtitle>
                  Logout from your account
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
    </div>
  </v-layout>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    user: Number,
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    open() {
      this.menu = true;
    },
    logout() {
      this.$store.commit("logout");
    },
    clicked() {
      this.$store.commit("setfileNavBar", true);
      console.log(this.$store.state.fileNavBar);
    },
  },
  computed: {
    menu: {
      set: function () {
        this.$store.commit("setmenu");
      },
      get: function () {
        return this.$store.state.menu;
      },
    },
    focus: {
      set: function () {
        this.$store.commit("setfocus");
      },
      get: function () {
        return this.$store.state.focus;
      },
    },
    ...mapState({
      groups: (state) => state.chat.groupchat,
    }),
  },
};
</script>

<style>
.user {
  max-width: 400px !important;
}
.v-list-item {
  border: none;
}
.userOuterRing {
  border: purple 1px solid;
}

.v-input--switch__thumb::after {
  display: none;
}
.v-input--selection-controls__ripple::after {
  display: none;
}
.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
  > .v-input__control
  > .v-input__slot {
  box-shadow: none;
}
.v-text-field.v-text-field--solo.v-input--dense > .v-input__control {
  /* border: 1px solid rgb(192, 187, 187, 0.6); */
  justify-content: center;
}
.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
  > .v-input__control
  > .v-input__slot {
  box-shadow: none !important;
}
</style>
