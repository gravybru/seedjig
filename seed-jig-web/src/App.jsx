import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import Header from "./components/header";
import Home from "./pages/Home";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Home />
    </ThemeProvider>
  );
};

export default App;
