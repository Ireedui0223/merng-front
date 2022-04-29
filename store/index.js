export const state = () => ({
  logindialog: false,
});

export const mutations = {
  togglelogin: (state) => {
    state.logindialog = !state.logindialog;
    console.log("toggle called");
  },
};
