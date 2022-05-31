<template>
  <v-sheet
    height="100%"
    width="100%"
    class="px-4"
    color="var(--v-textground-base) "
    elevation="0"
  >
    <!-- tabiin header -->
    <v-tabs class="" background-color="transparent" v-model="tab">
      <v-tabs-slider :style="tab === 2 ? 'display: none' : ''"></v-tabs-slider>
      <div class="divid"></div>
      <v-tab
        :active-class="
          $vuetify.theme.dark ? 'white--text ' : 'grey--text text--darken-2'
        "
        :ripple="false"
        class="text-capitalize text-body-2 font-weight-regular"
        >People</v-tab
      >
      <v-tab
        :class="$vuetify.theme.dark ? '' : ''"
        :active-class="
          $vuetify.theme.dark ? 'white--text ' : 'grey--text text--darken-2'
        "
        :ripple="false"
        class="text-capitalize font-weight-regular text-body-2"
        >Activity</v-tab
      >

      <v-btn
        v-if="$store.state.profile.value == true"
        icon
        class="closetab"
        @click="$store.commit('closeprofile')"
        ><v-icon color="primary">mdi-close</v-icon></v-btn
      >
    </v-tabs>
    <Profile
      v-if="$store.state.profile.value == true"
      :class="$vuetify.theme.dark ? 'bg-darkblue' : ''"
    />
    <!-- tab hesgiin elementuud -->
    <v-tabs-items
      style="background: var(--v-textground-base)"
      :class="$vuetify.theme.dark ? '' : ''"
      v-model="tab"
      v-if="$store.state.profile.value == false"
    >
      <!-- hereglegchdiig haruulah tab -->
      <v-tab-item>
        <div class="d-flex pt-6 flex-row align-center justify-center">
          <p class="ma-0 pa-0 text-caption grey--text">STARTED BY</p>
          <v-divider></v-divider>
        </div>
        <!-- creatoriin medeelel -->
        <v-list outlined class="rounded-lg py-0 ma-2 my-4">
          <v-list-item
            class="rounded-lg"
            :style="
              $vuetify.theme.dark
                ? 'background: var(--v-background-base)'
                : 'box-shadow: 0px 0px 4px 0px rgba(182, 169, 169, 0.4)'
            "
          >
            <v-badge dot bordered color="primary" offset-x="20" offset-y="4">
              <v-list-item-avatar size="36" class="pa-0 ma-0 mr-4" rounded="lg">
                <v-img
                  :src="users.find((c) => c.id === user + 1).picture"
                ></v-img>
              </v-list-item-avatar>
            </v-badge>

            <v-list-item-content>
              <v-list-item-title class="text-body-2 grey--text text--darken-2">
                {{ users.find((c) => c.id === user + 1).name }}
              </v-list-item-title>
              <v-list-item-subtitle class="text-body-2"
                >S@april.biz</v-list-item-subtitle
              >
            </v-list-item-content>
            <v-list-item-action class="d-flex flex-row align-center">
              <v-tooltip
                transition="slide-y-reverse-transition"
                top
                :color="$vuetify.theme.dark ? '#212532' : 'black'"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="ml-1 hover pa-3"
                    x-small
                    v-bind="attrs"
                    v-on="on"
                    outlined
                    icon
                    @click="
                      setprofile({
                        picture:
                          'https://randomuser.me/api/portraits/med/women/1.jpg',
                        name: 'test',
                      })
                    "
                    ><v-icon>mdi-eye-outline</v-icon></v-btn
                  >
                </template>
                <span class="white--text">profile</span>
              </v-tooltip>
              <v-tooltip
                transition="slide-y-reverse-transition"
                top
                :color="$vuetify.theme.dark ? '#212532' : 'black'"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    v-bind="attrs"
                    v-on="on"
                    class="ml-1 hover pa-3"
                    @click="$store.commit('calluser', user)"
                    x-small
                    outlined
                    icon
                    ><v-icon>mdi-phone-outline</v-icon></v-btn
                  >
                </template>
                <span class="white--text">call</span>
              </v-tooltip>
              <v-tooltip
                transition="slide-y-reverse-transition"
                top
                :color="$vuetify.theme.dark ? '#212532' : 'black'"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="ml-1 hover pa-3"
                    v-bind="attrs"
                    v-on="on"
                    x-small
                    outlined
                    icon
                    @click="$store.commit('setfileNavBar', true)"
                    ><v-icon>mdi-file-outline</v-icon></v-btn
                  ></template
                ><span class="white--text">files</span>
              </v-tooltip>
            </v-list-item-action>
          </v-list-item>
        </v-list>
        <div class="d-flex flex-row align-center justify-center">
          <p class="ma-0 pa-0 text-caption grey--text">IN THE CONVERSATION</p>
          <v-divider></v-divider>
        </div>
        <!-- members list -->
        <div v-if="groupdchat.find((c) => c.id === user)">
          <v-list
            class="ma-1 py-0 rounded-lg"
            v-for="user in groupdchat.find((c) => c.id === user).members"
            :key="user.id"
          >
            <v-list-item
              :class="$vuetify.theme.dark ? 'darkhover' : 'borderhover'"
            >
              <v-list-item-avatar size="36" rounded="lg">
                <v-img :src="user.picture"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title
                  class="text-body-2 grey--text text--darken-3"
                >
                  {{ user.name }}
                </v-list-item-title>
                <v-list-item-subtitle class="text-body-2"
                  >Sincere@april.biz</v-list-item-subtitle
                >
              </v-list-item-content>
              <v-list-item-action class="d-flex flex-row align-center">
                <v-tooltip
                  transition="slide-y-reverse-transition"
                  top
                  :color="$vuetify.theme.dark ? '#212532' : 'black'"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      class="ml-1 hover pa-3"
                      x-small
                      v-bind="attrs"
                      v-on="on"
                      outlined
                      icon
                      @click="
                        setprofile({ picture: user.picture, name: user.name })
                      "
                      ><v-icon>mdi-eye-outline</v-icon></v-btn
                    >
                  </template>
                  <span class="white--text">profile</span>
                </v-tooltip>
                <v-tooltip
                  transition="slide-y-reverse-transition"
                  top
                  :color="$vuetify.theme.dark ? '#212532' : 'black'"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      class="ml-1 hover pa-3"
                      v-on="on"
                      v-bind="attrs"
                      @click="$store.commit('calluser', user)"
                      x-small
                      outlined
                      icon
                      ><v-icon>mdi-phone-outline</v-icon></v-btn
                    ></template
                  ><span class="white--text">call</span></v-tooltip
                >
                <v-tooltip
                  transition="slide-y-reverse-transition"
                  top
                  :color="$vuetify.theme.dark ? '#212532' : 'black'"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      class="ml-1 hover pa-3"
                      v-on="on"
                      v-bind="attrs"
                      x-small
                      @click="$store.commit('setfileNavBar', true)"
                      outlined
                      icon
                      ><v-icon>mdi-file-outline</v-icon></v-btn
                    ></template
                  ><span class="white--text">files</span></v-tooltip
                >
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </div>
        <div v-else>
          <v-card elevation="0">
            <v-card-title class="pt-8 grey--text text--darken-1">
              No members joined yet :')
            </v-card-title>
          </v-card>
        </div>
      </v-tab-item>
      <!-- activity haruulah tab -->
      <v-tab-item>
        <div class="d-flex pt-6 flex-row align-center justify-center">
          <p class="ma-0 pa-0 grey--text text--lighten-1">New</p>
          <v-divider></v-divider>
        </div>
        <v-list width="300px">
          <v-list-item>
            <v-list-item-avatar size="36" rounded="lg">
              <v-img :src="$store.state.randomUser + 2 + '.jpg'"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-subtitle class="overflow-visible text-wrap"
                >userName posted
                <a
                  ><tr />
                  an update
                </a>
                in a project's team space
              </v-list-item-subtitle>
              <v-list-item-subtitle> 5 min ago </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-avatar size="36" rounded="lg">
              <v-img :src="$store.state.randomUser + 4 + '.jpg'"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-subtitle class="overflow-visible text-wrap"
                >userName posted <a> an update </a> in a project's team space
              </v-list-item-subtitle>
              <v-list-item-subtitle> 5 min ago </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <div class="d-flex pt-6 flex-row align-center justify-center">
            <p class="ma-0 pa-0 grey--text text--lighten-1">Recent</p>
            <v-divider></v-divider>
          </div>
          <v-list-item>
            <v-list-item-avatar size="36" rounded="lg">
              <v-img :src="$store.state.randomUser + 4 + '.jpg'"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-subtitle class="overflow-visible text-wrap"
                >userName posted <a> an update </a> in a project's team space
              </v-list-item-subtitle>
              <v-list-item-subtitle> 5 min ago </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-tab-item>
    </v-tabs-items>
    <v-dialog v-model="dialog" width="33vw">
      <Calling />
    </v-dialog>
  </v-sheet>
</template>

<script>
import { mapState } from "vuex";
import Profile from "~/components/layout/profile";
import Calling from "~/components/dialog/calling";
export default {
  props: {
    user: Number,
  },
  components: {
    Profile,
    Calling,
  },
  data() {
    return {
      focused: false,
      tab: "",
    };
  },
  computed: {
    ...mapState({
      groupdchat: (state) => state.chat.groupchat,
      users: (state) => state.chat.friends,
      profile: (state) => state.profile,
    }),
    // profile: {
    //   get: function () {
    //     return this.$store.state.profile;
    //   },
    //   set: function (payload) {
    //     this.$store.commit("openprofile", payload);
    //   },
    // },
    dialog: {
      get: function () {
        return this.$store.state.calling.value;
      },
      set: function () {
        this.$store.commit("endcall");
      },
    },
  },
  methods: {
    setprofile(payload) {
      this.tab = 2;
      this.$store.commit("openprofile", payload);
      // console.log(this.tab);
    },
  },
};
</script>

<style>
.v-list-item {
  border: 1px solid transparent;
}
.closetab {
  position: absolute !important;
  right: 10px;
  top: 10px;
}
.closetab:active {
  border: none;
}
.border {
  border: 1px #bdbdb7 solid;
}
.v-tab::before {
  display: none;
}
.v-tab::after {
  display: none;
}
</style>
