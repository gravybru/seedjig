import { Route, Switch, useLocation, useHistory } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Purchase from "../pages/purchase";
import Contact from "../pages/contact";

const allowedPaths = ["/", "/home", "/about", "/contact", "/purchase"];

const ApplicationRouter = () => {
  const { pathname } = useLocation();
  const { push } = useHistory();

  if (!allowedPaths.includes(pathname)) {
    push("home");
  }

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/purchase">
        <Purchase />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
};

export default ApplicationRouter;
