import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";
import "./index.css";

const NavLinks = ({ onPress = () => {} }) => {
  let history = useHistory();
  return (
    <div className={"navlinks-container"}>
      {["ABOUT", "PURCHASE", "CONTACT"].map((link) => (
        <Button
          size={"large"}
          color={"default"}
          key={link}
          onClick={() => {
            history.push(link.toLowerCase());
            onPress();
          }}
          style={{ justifyContent: "flex-start" }}
        >
          <Typography variant="h6" style={{ fontWeight: 600 }}>
            {link}
          </Typography>
        </Button>
      ))}
    </div>
  );
};

export default NavLinks;
