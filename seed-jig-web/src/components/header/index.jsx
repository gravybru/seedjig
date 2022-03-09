import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";
import NavLinks from "../navlinks";
import NavLinksMini from "../navlinks_mini";
import "./index.css";
import logo from "../../images/logo.png";

const Header = () => {
  let { push } = useHistory();

  const [show, toggleShow] = useState(false);

  return (
    <>
      <div className="header-container">
        <div
          className="title-container"
          onClick={() => {
            push("home");
            toggleShow(false);
          }}
        >
          <img className="logo" src={logo} alt="seed jig logo" />
          <div className="title-text">
            <Typography
              variant="h2"
              style={{ marginLeft: "40px", fontWeight: 600 }}
            >
              Seed Jig
            </Typography>
          </div>
        </div>
        <div className="navlinks-hide">
          <NavLinks />
        </div>
        <div className="menu-container">
          <IconButton
            onClick={() => {
              toggleShow(!show);
            }}
            style={{ marginRight: "5vw", color: "black" }}
            size="large"
          >
            <MenuIcon />
          </IconButton>
        </div>
      </div>
      {!!show && <NavLinksMini onPress={() => toggleShow(false)} />}
    </>
  );
};

export default Header;
