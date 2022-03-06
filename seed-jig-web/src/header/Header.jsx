import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import NavLinks from "./NavLinks";
import "./index.css";
import { Typography } from "@mui/material";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <div className="header-container">
      <div className="title-container">
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
      <NavLinks />
      <div className="menu-container">
        <IconButton style={{ marginRight: "5vw", color: "black" }} size="large">
          <MenuIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
