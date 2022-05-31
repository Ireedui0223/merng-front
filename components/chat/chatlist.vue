<template>
  <!-- no message display -->
  <v-sheet
    height="80vh"
    class="d-flex justify-center align-center flex-column"
    v-if="chats.find((c) => c.id === user).chatlog.length === 0"
  >
    <Nomessage />
    <div class="message">
      <p class="text-left text-h6 font-weight-light grey--text text-darken-2">
        No Messages
      </p>
      <p
        class="text-left text-body-1 font-weight-light blue-grey--text text-darken-5"
      >
        No messages in this conversation yet
      </p>
    </div>
  </v-sheet>
  <!-- message display -->
  <v-sheet v-else height="100%">
    <!-- <v-skeleton-loader loading type="card-avatar, article, actions">
    </v-skeleton-loader> -->
    <div
      v-for="chat in chats.find((c) => c.id === user).chatlog"
      :key="chat.message_id"
      class="d-flex flex-column px-16"
    >
      <div
        class="d-flex flex-row"
        :class="chat.side === 'left' ? 'justify-start' : 'justify-end'"
        style="width: 100%"
      >
        <v-avatar
          size="36"
          v-if="chat.side === 'left'"
          class="mr-3 mt-5"
          rounded="lg"
        >
          <v-img :src="chats.find((c) => c.id === user).picture"></v-img>
        </v-avatar>
        <div class="chat-recieved py-2" style="width: 45%">
          <!-- hugtsaa haruulah heseg -->
          <span
            class="d-flex text-body-2 grey--text text-lighten-2"
            :class="chat.side === 'left' ? 'justify-end' : 'justify-start'"
            >{{ chat.timestamp }}</span
          >
          <!-- file baival haruulah card -->
          <v-card
            elevation="0"
            class="px-2 py-3"
            :style="
              chat.side === 'left'
                ? 'background:var(--v-leftchat-base)'
                : 'background:var(--v-rightchat-base)'
            "
            v-if="chat.message.attached.url.substr(-4) == 'file'"
          >
            <v-list-item
              class="rounded-lg"
              :class="$vuetify.theme.dark ? '' : 'borderstl'"
              :style="
                chat.side === 'left'
                  ? 'background: var(--v-leftfilechat-base); '
                  : 'background: var(--v-rightfilechat-base)'
              "
            >
              <v-list-item-avatar
                class="rounded-lg"
                style="background: var(--v-chatground-base)"
              >
                <v-icon color="#9195a8">mdi-file-outline</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title
                  class="text-body-2 text-wrap"
                  style="font-weight: 400"
                >
                  {{ chat.message.attached.title }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ chat.message.attached.size / 1000 }}mb
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-icon class="iconhover" @click="download()"
                  >mdi-cloud-download-outline</v-icon
                >
              </v-list-item-action>
            </v-list-item>
            <v-card-text class="px-1 pb-0 text-body-2" style="font-weight: 400">
              {{ chat.message.text }}
            </v-card-text>
          </v-card>
          <!-- engiin chat yvuulsan heseg -->
          <v-card
            v-else
            elevation="0"
            :style="
              chat.side === 'left'
                ? 'background:var(--v-leftchat-base)'
                : 'background:var(--v-rightchat-base)'
            "
          >
            <v-card-title v-if="chat.message.attached.url" class="px-2">
              <v-img :src="chat.message.attached.url"></v-img>
            </v-card-title>

            <v-card-subtitle
              class="text-body-1 py-2 px-4 font-weight-light"
              :class="$vuetify.theme.dark ? '' : 'grey--text text--darken-3'"
              >{{ chat.message.text }}</v-card-subtitle
            >
          </v-card>
        </div>
        <v-avatar
          size="36"
          rounded="lg"
          v-if="chat.side === 'right'"
          class="ml-3 mt-5"
        >
          <v-img :src="$store.state.randomUser + 1 + '.jpg'"></v-img>
        </v-avatar>
      </div>
    </div>
  </v-sheet>
</template>

<script>
import Nomessage from "~/components/chat/nomessage";
import { mapState } from "vuex";
export default {
  components: {
    Nomessage,
  },
  props: {
    user: Number,
  },

  data() {
    return {};
  },
  methods: {
    download() {
      const url = "/users/download";
      window.location.href = url;
    },
  },
  computed: {
    ...mapState({
      images: (state) => state.image,
      chats: (state) => state.chat.friends,
    }),
  },
};
</script>

<style></style>
