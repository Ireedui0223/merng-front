<template>
  <div>
    <v-row v-if="!$apollo.queries.getPosts.loading">
      <!-- {{ Posts }}
    <br />
    {{ getPosts }} -->
      <!-- <v-progress-circular indeterminate color="red"></v-progress-circular> -->
      <v-col cols="6" v-for="(post, index) in getPosts || []" :key="index">
        <Dialog :post="post" :randomimage="randomimage + index" />
        <!-- <pre>{{ post }}</pre> -->
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { postsQuery } from "~/apollo/queries/post";

import Dialog from "~/components/dialog";
export default {
  components: {
    Dialog,
  },
  data() {
    return {
      randomimage: "https://picsum.photos/250/300?random=",
      Posts: [],
    };
  },

  apollo: {
    getPosts: {
      query: postsQuery,
      result({ data }) {
        // this.Posts = data.getPosts;
        // console.log(data);
      },
      error(err) {
        console.error(err);
      },
    },
  },
  name: "IndexPage",
};
</script>
