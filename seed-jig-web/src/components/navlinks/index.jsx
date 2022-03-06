import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import "./index.css";

const NavLinks = () => {
  return (
    <div className="navlinks-container">
      {["ABOUT", "PURCHASE", "CONTACT"].map((link) => (
        <Button size="large" color="default" key={link}>
          <Typography variant="h6" style={{ fontWeight: 600 }}>
            {link}
          </Typography>
        </Button>
      ))}
    </div>
  );
};

export default NavLinks;
