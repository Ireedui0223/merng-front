<template>
  <v-text-field
    full-width
    style="background: var(--v-textground-base)"
    v-model="text"
    solo
    :style="
      $vuetify.theme.dark
        ? 'border: 1px transparent'
        : 'border: 1px solid rgb(192, 187, 187, 0.6)'
    "
    slot="prepend-inner, append, append-inner"
    append-icon="mdi-close"
    hide-details=""
    aria-hidden=""
    dense
    placeholder="Send a message in this conversation"
    class="ma-0 mx-10 d-flex align-center justify-center"
  >
    <template v-slot:prepend-inner>
      <Fileinput slot="prepend-inner" :user="user" />
    </template>
    <template v-slot:append class="d-flex flex-row align-center">
      <v-btn icon>
        <v-icon class="hoveron" color="rgba(214, 211, 211, 0.8)"
          >mdi-emoticon-outline</v-icon
        >
      </v-btn>
      <v-btn
        style="margin-top: 2px"
        width="30px "
        height="30px"
        color="primary"
        @click="sentChat()"
      >
        Send
      </v-btn>
    </template>
    <!-- <v-btn><v-icon>mdi-close</v-icon></v-btn> -->
  </v-text-field>
</template>

<script>
import Fileinput from "~/components/chat/fileinput";
import { mapState, mapMutations } from "vuex";
export default {
  components: {
    Fileinput,
  },
  props: {
    user: Number,
  },
  data() {
    return {
      text: "",
      file: [],
    };
  },
  computed: {
    ...mapState({
      chat: (state) => state.data.chat.friends,
    }),
  },
  methods: {
    sentChat() {
      this.upload({
        message: {
          text: this.text,
          attached: {
            url: "",
            type: "",
            size: "",
            title: "",
          },
        },
        id: this.user,
      });
      this.text = "";
    },
    ...mapMutations({
      upload: "chat/sentChat",
    }),
  },
};
</script>

<style>
.v-btn__content {
  width: 28px !important;
}
.hoveron:hover {
  color: var(--v-primary-base) !important;
}
/* .v-input__prepend-inner {
  margin: 0 !important;
}
.v-input__append-inner {
  margin: 0 !important;
} */
</style>
