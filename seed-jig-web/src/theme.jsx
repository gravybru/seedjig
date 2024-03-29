import { createTheme } from "@mui/material/styles";
import amber from "@mui/material/colors/amber";

const theme = createTheme({
  typography: {
    fontFamily: ['"League Spartan"', "Sans-Serif"].join(","),
  },
  palette: {
    primary: amber,
    secondary: {
      main: "#ece3ca",
    },
    default: {
      main: "#000000",
    },
  },
});

export default theme;
