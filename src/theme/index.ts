import { createTheme } from "@mui/material/styles";

const colorLightMain = "#F9F9FA";
const colorLightSecond = "#E6EDF5";

const colorDarkMain = "#272935";
const colorDarkSecond = "#8B8F9C";

const themeLight = createTheme({

  palette: {
    mode: "light",
    background: {
      default: colorLightMain,
    },
    common: {
      black: colorDarkMain,
      white: colorLightMain,
    },
    primary: {
      dark: colorDarkMain,
      light: colorLightMain,
      main: "#0452EA",
    },
    secondary: {
      dark: colorDarkSecond,
      light: colorLightSecond,
      main: colorLightSecond,
    },

  },


});

const themeDark = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: colorDarkMain,
    },
    primary: {
      dark: colorDarkMain,
      light: colorLightMain,
      main: "#0452EA",
    },
    secondary: {
      dark: colorDarkSecond,
      light: colorLightSecond,
      main: colorDarkSecond,
    },
  },
});

// eslint-disable-next-line import/no-anonymous-default-export
export { themeLight, themeDark };
export default { themeLight, themeDark };
