import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";
import "./index.css";

const NavLinksMini = ({ onPress = () => {} }) => {
  let history = useHistory();
  return (
    <div className={"navlinks-mini"}>
      {["ABOUT", "PURCHASE", "CONTACT"].map((link) => (
        <div key={link} className="navlink-button-container">
          <Button
            size="small"
            color="default"
            onClick={() => {
              history.push(link.toLowerCase());
              onPress();
            }}
            style={{
              justifyContent: "flex-start",
              padding: "2px 10px",
            }}
            fullWidth
          >
            <Typography variant="h6" style={{ fontWeight: 300 }}>
              {link}
            </Typography>
          </Button>
        </div>
      ))}
    </div>
  );
};

export default NavLinksMini;
