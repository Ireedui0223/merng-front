export const state = () => ({
  users: [],
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
  snackbar: {
    color: "danger",
    message: "Login required to access workspace",
    value: true,
  },
  uploadedImage: [{}],
  randomUser: "https://randomuser.me/api/portraits/med/women/",
});

export const getters = {
  getSnackBar: (state) => {
    return state.snackbar;
  },
};
export const mutations = {
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
