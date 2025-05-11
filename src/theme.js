import { createTheme } from "@mui/material/styles";

export const appColors = {
  primary: "#000000",
  secondary: "#ffffff",
  success: "#4caf50",
  info: "#00a2ff",
  text1: "#fff",
  text2: "#000",
};

export const appFonts = {
  primary: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  secondary: "arial",
};

const appTheme = createTheme({
  palette: {
    primary: {
      main: appColors.primary,
    },
    secondary: {
      main: appColors.secondary,
    },
  },
  typography: {
    fontFamily: appFonts.primary,
    title: {
      fontSize: "2rem",
    },
    subtitle1: {
      fontSize: "1.5rem",
    },
    subtitle2: {
      fontSize: "1.2rem",
    },
  },
});

export default appTheme;
