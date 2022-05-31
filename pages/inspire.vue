<template>
  <v-layout>
    <v-app-bar
      outlined
      app
      clipped-right
      flat
      height="60px"
      class="pa-0 ma-0"
      style=""
    >
      <Header :user="user + 1" />
    </v-app-bar>

    <v-navigation-drawer
      disable-resize-watcher
      permanent
      disable-route-watcher
      style="background-color: var(--v-textground-base); z-index: inherit"
      v-model="drawer"
      app
      height="100vh"
      class="pa-0 ma-0"
      width="60px"
    >
      <nuxt-link to="/" class="d-flex align-center justify-center">
        <NuxtLogo class="my-3" />
      </nuxt-link>
      <v-list class="d-flex pa-0 ma-0 flex-column justify-center">
        <v-list-item-group
          mandatory
          v-model="user"
          aria-hidden=""
          style="height: 60vh"
        >
          <v-list-item
            class="pa-0 ma-0"
            v-for="user in users"
            :key="user.id"
            aria-hidden=""
          >
            <v-list-item-avatar size="34px" class="pa-0 ma-3">
              <v-img :src="user.picture"> </v-img>
            </v-list-item-avatar>
            <v-list-item-content> </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <template v-slot:append>
        <div class="d-flex flex-row pb-4 justify-center align-center">
          <v-btn class="plusbtn hover pa-5" icon>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <!-- file navbariin heseg -->
    <v-navigation-drawer
      v-model="fileNavBar"
      :color="$vuetify.theme.dark ? '#0d0e14' : '#fff'"
      right
      fixed
      temporary
      width="31vw"
      class="px-4 pr-6"
    >
      <v-list-item>
        <v-list-item-title
          class="text-h6 pt-2"
          style="font-weight: 400; color: #757a91"
        >
          Shared Files
        </v-list-item-title>
        <v-list-item-action>
          <v-btn icon @click="$store.commit('setfileNavBar', false)">
            <v-icon small>mdi-close</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-list v-for="user in users" :key="user.id" class="pt-8">
        <v-list-item>
          <v-list-item-title class="d-flex flex-row align-center justify-start">
            <div
              class="d-flex justify-center align-center mr-2"
              style="
                border: 1px solid rgba(182, 169, 169, 0.6);
                box-shadow: 0px 0px 3px 0px rgba(182, 169, 169, 0.3);
                padding: 3px;
                border-radius: 50%;
              "
            >
              <v-list-item-avatar width="40px" height="40px" class="ma-0 pa-0">
                <v-img :src="user.picture"></v-img>
              </v-list-item-avatar>
            </div>
            <span class="text-body-1 font-weight-bold" style="color: #515365">
              {{ user.name }}
            </span>
            <!-- <v-list-item-title class="">
            </v-list-item-title> -->

            <v-divider class="ml-4"></v-divider>
          </v-list-item-title>
          <!-- hereglechiin file messaguud -->
        </v-list-item>
        <v-list
          v-for="chat in user.chatlog"
          :key="chat.id"
          class="ma-0 ml-4 mt-2 pa-0"
        >
          <v-list-item v-if="chat.message.attached.url" class="borderhover">
            <v-list-item-avatar
              class="pa-2 rounded-lg text-center"
              style="background: var(--v-textground-base)"
              :class="$vuetify.theme.dark ? ' hover' : 'borderhover'"
            >
              <v-icon v-if="chat.message.attached.url.substr(-4) == 'file'">
                mdi-xml
              </v-icon>
              <v-icon v-else>mdi-image-outline </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title
                style="color: #444f60"
                class="font-weight-light"
              >
                {{ chat.message.attached.title }}
              </v-list-item-title>
              <v-list-item-subtitle class="font-weight-thin">
                {{ chat.message.attached.size / 1000 }} mb
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action class="d-flex flex-row">
              <v-btn
                icon
                outlined
                width="30px"
                height="30px"
                @click="
                  $store.commit(
                    'downloadimage',
                    (chat.message.attached.url, chat.message.attached.title)
                  )
                "
              >
                <v-icon small>mdi-cloud-download-outline</v-icon>
              </v-btn>
              <v-btn
                class="mx-1"
                icon
                outlined
                @click="
                  removeChat({
                    user: user.id,
                    message: chat.message_id,
                  })
                "
                width="30px "
                height="30px"
                ><v-icon small> mdi-close</v-icon></v-btn
              >
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-list>
    </v-navigation-drawer>
    <Chatlist :user="user + 2" class="set" />
    <v-navigation-drawer
      permanent
      disable-resize-watcher
      disable-route-watcher
      height="100%"
      app
      clipped
      right
      width="400px"
    >
      <Sidebar :user="user + 1" />
    </v-navigation-drawer>
    <v-footer
      :style="$vuetify.theme.dark ? 'background:#212532' : 'background:#f2eeed'"
      fixed
      height="60"
      inset
      app
    >
      <Sentmessage :user="user + 2" />
    </v-footer>
  </v-layout>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Header from "~/components/layout/Header";
import Chatlist from "~/components/chat/chatlist";
import Sidebar from "~/components/layout/sidebar";
import Sentmessage from "~/components/chat/message";
export default {
  components: {
    Sentmessage,
    Header,
    Chatlist,
    Sidebar,
  },
  data: () => ({ drawer: null }),
  data() {
    return {
      user: 0,
      page: "",
      drawer: null,
    };
  },
  methods: {
    ...mapMutations({
      removeChat: "chat/removeChat",
    }),
  },
  computed: {
    ...mapState({
      users: (state) => state.chat.friends,
    }),
    fileNavBar: {
      set: function (newValue) {
        this.$store.commit("setfileNavBar", newValue);
      },
      get: function () {
        return this.$store.state.fileNavBar;
      },
    },
  },
  created() {
    if (this.$store.state.user === null) {
      this.$router.push("/");
    }
  },
};
</script>

<style scoped>
.plusbtn {
  border: 1px dotted rgba(168, 157, 157, 0.6);
}
.set {
  width: 100%;
  min-height: 100vh;
  background: var(--v-background-base);
}
</style>
