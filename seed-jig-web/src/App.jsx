import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import ApplicationRouter from "./routes";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <ApplicationRouter />
      </Router>
    </ThemeProvider>
  );
};

export default App;
