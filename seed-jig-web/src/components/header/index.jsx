import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, IconButton, Popover, Typography } from "@mui/material";
import NavLinks from "../navlinks";
import "./index.css";
import logo from "../../images/logo.png";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
      <div className="navlinks-hide">
        <NavLinks />
      </div>
      <div className="menu-container">
        <IconButton
          onClick={handleClick}
          style={{ marginRight: "5vw", color: "black" }}
          size="large"
        >
          <MenuIcon />
        </IconButton>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <div className="navigation">
            {["ABOUT", "PURCHASE", "CONTACT"].map((link) => (
              <Button
                size="small"
                color="default"
                key={link}
                fullwidth
                style={{ justifyContent: "flex-end" }}
              >
                <Typography variant="h6">{link}</Typography>
              </Button>
            ))}
          </div>
        </Popover>
      </div>
    </div>
  );
};

export default Header;
