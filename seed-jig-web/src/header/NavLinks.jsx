import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const links = ["SPEC", "PURCHASE", "CONTACT"];

const NavLinks = () => {
  return (
    <div className="navlinks-container">
      {links.map((link) => (
        <Button size="large" key={link}>
          <Typography
            variant="h6"
            color="common.black"
            style={{ fontWeight: 600 }}
          >
            {link}
          </Typography>
        </Button>
      ))}
    </div>
  );
};

export default NavLinks;
