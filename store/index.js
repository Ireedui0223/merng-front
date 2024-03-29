import { loginMutation, registerMutation } from "../apollo/mutations/login";
import { userQuery, logoutMutation } from "../apollo/queries/user";
import {
  createPostMutation,
  deletePostMutation,
} from "../apollo/mutations/createpost";
import { postsQuery } from "../apollo/queries/post";
export const state = () => ({
  users: [],
  logindialog: false,
  registerdialog: false,
  snackbar: {
    value: false,
    message: null,
    color: null,
  },
  post: [],

  user: null,
  menu: false,
  focus: false,
  fileNavBar: false,
  calling: {
    value: false,
    user: {
      image: "",
      name: "",
    },
    connected: false,
  },
  profile: {
    value: false,
    user: {
      image: "",
      name: "",
    },
  },

  snackbar: {
    color: "danger",
    message: "Login required to access workspace",
    value: true,
  },
  uploadedImage: [{}],
  randomUser: "https://randomuser.me/api/portraits/med/women/",
});
export const mutations = {
  setPost: (state, payload) => {
    state.post = payload;
  },
  togglelogin: (state) => {
    state.logindialog = !state.logindialog;
    console.log("toggle called");
  },
  toggleregister: (state) => {
    state.registerdialog = !state.registerdialog;
  },
  setSnackbar: (state, payload) => {
    state.snackbar = payload;
  },
  downloadimage(url, fileName) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onload = function () {
      var urlCreator = window.URL || window.webkitURL;
      var imageUrl = urlCreator.createObjectURL(this.response);
      var tag = document.createElement("a");
      tag.href = imageUrl;
      tag.download = fileName;
      document.body.appendChild(tag);
      tag.click();
      document.body.removeChild(tag);
    };
    xhr.send();
  },
  setfileNavBar(state, payload) {
    state.fileNavBar = payload;
  },
  setmenu(state) {
    state.menu = !state.menu;
  },
  logout(state) {
    this.$router.push("/");
    console.log("logout");
    state.user = null;
  },
  setfocus(state) {
    state.focus = !state.focus;
  },
  endcall(state) {
    state.calling.value = false;
    state.calling.user.name = "";
    state.calling.user.image = "";
    state.calling.connected = false;
    console.log("call ended");
  },
  calluser(state, payload) {
    state.calling.value = true;
    state.calling.user.name = payload.name;
    state.calling.user.image = payload.picture;
    state.calling.connected = true;
    console.log("call started");
  },
  openprofile(state, payload) {
    state.profile.value = true;
    // console.log(payload);
    state.profile.user.image = payload.picture;
    state.profile.user.name = payload.name;
    // console.log("opened");
  },
  closeprofile(state) {
    console.log("closed");
    state.profile.value = false;
    state.profile.user.image = "";
    state.profile.user.name = "";
  },
  setSnackbar(state, payload) {
    state.snackbar = payload;
  },
  setUsers: (state, payload) => {
    state.users = payload;
  },
  setUser: (state, payload) => {
    state.user = payload;
  },
  setPassword: (state, payload) => {
    state.password = payload;
  },
};

export const getters = {
  getSnackbar: (state) => {
    return state.snackbar.value;
  },
};

export const actions = {
  //dispatch ni async deer bichigden method
  async nuxtServerInit({ dispatch }, { app }) {
    // await dispatch("setCurrentUser", app.$cookiz.get("apollo-token") || "");
  },
  async login({ state, commit, dispatch }, { userName, password }) {
    const client = this.app.apolloProvider.defaultClient;

    await client
      .mutate({
        mutation: loginMutation,
        variables: {
          userName,
          password,
        },
      })
      .then(
        async ({
          data: {
            // login: { token },
            login: { token },
            // val = token,
          },
        }) => {
          setTimeout(async () => {
            await dispatch("setCurrentUser", token);
          }, 1000);
          console.log(token);
          this.app.$apolloHelpers.onLogin(token);
          commit("setSnackbar", {
            value: true,
            message: "successfully login",
            color: "success",
          });
        }
      )
      .catch((err) => {
        console.log(err);
        commit("setSnackbar", {
          value: true,
          message: err?.graphQLErrors[0]?.message || "",
          color: "red accent-2",
        });
      });
  },

  async register(
    { state, commit, dispatch },
    { userName, email, password, confirmPassword }
  ) {
    const client = this.app.apolloProvider.defaultClient;

    await client
      .mutate({
        mutation: registerMutation,
        variables: {
          userName,
          email,
          password,
          confirmPassword,
          // registerInput,
        },
      })
      .then(
        ({
          data: {
            register: { token },
          },
        }) => {
          console.log(token);
          commit("setSnackbar", {
            value: true,
            message: "successfully login",
            color: "success",
          });
        }
      )
      .catch((err) => {
        console.log(err);
        commit("setSnackbar", {
          value: true,
          message: err?.graphQLErrors[0]?.message || "",
          color: "red accent-2",
        });
      });
  },
  async setCurrentUser({ state, commit }, token) {
    const client = this.app.apolloProvider.defaultClient;

    await client
      .query({
        query: userQuery,
        context: {
          headers: {
            authorization: "Bearer" + token,
          },
        },
      })
      .then(({ data: { currentUser } }) => {
        if (currentUser?._id) {
          commit("setUser", currentUser);
        } else {
          // this.app.$apolloHelpers.onLogout();
          // this.app.$cookiz.remove("x-token");
          // this.app.$cookiz.remove("token");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  //post hesgiinh mutation
  async nuxtServerInit({ dispatch }, { app }) {
    // await dispatch("setCurrentUser", app.$cookiz.get("apollo-token") || "");
  },

  async createPost({ state, commit, dispatch }, { body }) {
    const client = this.app.apolloProvider.defaultClient;

    await client
      .mutate({
        mutation: createPostMutation,
        variables: {
          body,
        },
      })
      .then(
        async ({
          data: {
            createPost: { body },
          },
        }) => {
          commit("setSnackbar", {
            value: true,
            message: "post have created",
            color: "success",
          });
          //   console.log(body);
        }
      )
      .catch((err) => {
        // console.log("test");
        commit("setSnackbar", {
          value: true,
          message: err?.graphQLErrors[0]?.message || "",
          color: "red accent-2",
        });
        console.log(err?.graphQLErrors[0]?.message || "");
        console.log(err);
      });
  },

  //deletepost
  async deletePost({ state, commit, dispatch }, postId) {
    const client = this.app.apolloProvider.defaultClient;
    console.log(postId);
    await client
      .mutate({
        mutation: deletePostMutation,
        variables: {
          postId,
        },
      })
      .then(
        async ({
          data: {
            deletePost: { postId },
          },
        }) => {
          console.log(postId);
          commit("setSnackbar", {
            value: true,
            message: "post have deleted",
            color: "success",
          });
          commit("removePostFromArray");
        }
      )
      .catch((err) => {
        console.log(err);
        commit("setSnackbar", {
          value: true,
          message: err?.graphQLErrors[0]?.message || "",
          color: "red accent-2",
        });
      });
  },

  async getPosts({ commit, dispatch, state }, _) {
    const client = this.app.apolloProvider.defaultClient;

    await client
      .query({
        query: postsQuery,
      })
      .then(({ data: { post } }) => {
        commit("setPost", post);
      })
      .catch();
  },
};
