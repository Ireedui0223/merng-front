<template>
  <!-- <v-container>{{ Posts }} </v-container>
   -->
  <v-card class="d-flex flex-row" elevation="4" v-if="post">
    <v-row class="pa-2">
      <!-- {{ post }} -->
      <v-col cols="6">
        <v-img :src="randomimage"> </v-img>
      </v-col>
      <v-col cols="6" class="d-flex flex-column justify-space-around">
        <v-card-title class="pl-0 text-h4 text-capitalize">
          {{ post.userName }}
        </v-card-title>
        <v-card-subtitle class="px-0 text-body-1">
          {{ post.body }}
        </v-card-subtitle>
        <!-- <v-card-subtitle>{{ post.body }}</v-card-subtitle> -->
        <v-card-text class="d-flex flex-row justify-start pa-0 pr-2">
          <p class="text-body-1 mr-5">
            <v-btn icon><v-icon>mdi-heart</v-icon></v-btn>
            {{ post.likeCount }}
          </p>
          <p class="text-body-1">
            <v-btn
              @click="
                (postDialog = true),
                  (currentPost = post),
                  (currentImage = randomimage)
              "
              icon
              class=""
              ><v-icon>mdi-comment</v-icon>
            </v-btn>
            {{ post.commentCount }}
          </p>
        </v-card-text>
        <v-card-actions class="pl-0 full-width"> </v-card-actions>
        <v-dialog v-model="postDialog" width="70VW">
          <v-card elevation="0" class="pa-2 pt-5">
            <v-row class="mb-1 mx-0">
              <v-col cols="5" class="pa-0">
                <v-img height="100%" width="100%" :src="currentImage"> </v-img>
              </v-col>
              <v-col
                cols="7"
                class="pa-0 d-flex flex-column justify-space-around"
              >
                <div class="mainpost">
                  <v-card-title class="text-capitalize text-h4">{{
                    currentPost.userName
                  }}</v-card-title>
                  <v-card-subtitle class="text-h6">{{
                    currentPost.body
                  }}</v-card-subtitle>

                  <v-card-text v-if="currentPost.commentCount > 0">
                    <v-list-item
                      v-for="(comment, index) in currentPost.comments"
                      :key="index"
                    >
                      <v-list-item-avatar
                        :color="randomcolor"
                        class="black--text"
                        >c</v-list-item-avatar
                      >

                      <v-list-item-content>
                        <v-list-item-subtitle
                          class="d-flex flex-row justify-space-between"
                        >
                          <div
                            class="text-h5 font-weight-bold sky--text text-capitalize"
                          >
                            {{ comment.userName }}
                          </div>
                          <p class="date pa-0 ma-0 text-body-2 grey--text">
                            {{ comment.createdAt }}
                          </p>
                        </v-list-item-subtitle>
                        <v-list-item-title class="">
                          {{ comment.body }}
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card-text>
                  <v-card-text v-else
                    ><p>no comments yet 😞leave comment now</p></v-card-text
                  >
                </div>
                <v-card-actions class="full-width">
                  <v-text-field
                    outlined
                    placeholder="comment"
                    full-width
                    v-model="postreply"
                    hide-details=""
                    append-icon="mdi-reply"
                    @click:append="comment"
                  >
                  </v-text-field>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: ["post", "randomimage"],
  data() {
    return {
      randomcolor: "",
      currentImage: "",
      postDialog: false,
      currentPost: {},
      postreply: "",
    };
  },
  methods: {
    comment() {
      console.log(this.postreply);
      this.postDialog = false;
      this.randomcolor = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
    },
  },
  async mounted() {
    this.randomcolor = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
  },
};
</script>

<style></style>
