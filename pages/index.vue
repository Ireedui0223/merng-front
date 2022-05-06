<template>
  <v-row v-if="!$apollo.queries.getPosts.loading">
    <!-- <p v-if="$fetchState.pending">loading...</p>
    <v-row v-else> -->
    <!-- {{ Posts }}
    <br />
    {{ getPosts }} -->
    <!-- <v-progress-circular indeterminate color="red"></v-progress-circular> -->
    <v-col v-if="currentUser">
      <v-card height="100%" class="d-flex flex-column justify-space-around">
        <v-card-title class="text-h4"> Create post </v-card-title>
        <v-card-text>
          <v-text-field
            outlined
            hide-details=""
            clearable
            placeholder="post body"
            v-model="body"
          ></v-text-field>
          <v-card-actions class="px-0">
            <v-btn @click="createPost({ body })">create post</v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="6" v-for="(post, index) in posts || []" :key="index">
      <Dialog :post="post" :randomimage="randomimage + index" />
      <!-- <pre>{{ post }}</pre> -->
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapActions } from "Vuex";
import { postsQuery } from "~/apollo/queries/post";
import { userQuery } from "~/apollo/queries/user";

import Dialog from "~/components/dialog";
export default {
  components: {
    Dialog,
  },
  data() {
    return {
      posts: [],
      body: "",
      randomimage: "https://picsum.photos/250/300?random=",
    };
  },

  apollo: {
    getPosts: {
      query: postsQuery,
      result({ data }) {
        this.posts = data.getPosts;
        console.log(data);
      },
      error(err) {
        console.error(err);
      },
    },
    currentUser: {
      query: userQuery,
    },
  },

  // async fetch() {
  //   await this.getPosts();
  //   .then(({ data: { post } }) => {
  //     console.log("test ");
  //     console.log(post);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // },
  computed: {
    name() {
      return this.data;
    },
  },
  methods: {
    ...mapActions({
      createPost: "createPost",
      getPosts: "getPosts",
    }),
    // deletePost(id) {
    //   // await mutaet
    //   // then {
    //     this.$apollo.queries.getPosts.refetch()
    //   }
  },
  // },
  name: "IndexPage",
};
</script>
