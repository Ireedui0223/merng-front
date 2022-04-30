import { loginMutation, registerMutation } from "../apollo/mutations/login";

export const state = () => ({
  logindialog: false,
  registerdialog: false,
});

export const mutations = {
  togglelogin: (state) => {
    state.logindialog = !state.logindialog;
    console.log("toggle called");
  },
  toggleregister: (state) => {
    state.registerdialog = !state.registerdialog;
  },
};

export const actions = {
  async login(_, { userName, password }) {
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
          console.log(token);
        }
      )
      .catch((err) => {
        console.log(err);
      });
  },

  async register(_, { userName, password, confirmPassword, email }) {
    const client = this.app.apolloProvider.defaultClient;

    await client
      .mutate({
        mutation: registerMutation,
        variables: {
          userName,
          password,
          confirmPassword,
          email,
        },
      })
      .then(
        async ({
          data: {
            register: { token },
          },
        }) => {
          console.log(token);
        }
      )
      .catch((err) => {
        console.log(err);
      });
  },
};
