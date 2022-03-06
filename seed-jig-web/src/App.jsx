import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import Header from "./header/Header";
import Home from "./pages/Home";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div className="routes">
        <Home />
      </div>
    </ThemeProvider>
  );
};

export default App;
