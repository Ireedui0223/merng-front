import colors from "vuetify/es5/util/colors";

export default {
  theme: {
    options: {
      customProperties: true,
    },
    dark: false,
    themes: {
      dark: {
        primary: "#16d991",
        accent: "#c7c1c1",
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3,
        danger: "#e6196b",
        background: "#212532",
        textground: "#191c26",
        chatground: "#292e3f",
        leftchat: "#31374b",
        rightchat: "#0d0e14",
        leftfilechat: "#1d212c",
        rightfilechat: "#1d212c",
        inputtext: "#ffffff",
      },
      light: {
        textground: "#ffffff",
        background: "#f5f3f2",
        primary: "#16d991",
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3,
        danger: "#e6196b",
        chatground: "#eef0f7",
        leftchat: "#ebebeb",
        rightchat: "#ffffff",
        leftfilechat: "#ffffff",
        rightfilechat: "#ffffff",
        inputtext: "#757070",
      },
    },
  },
};
