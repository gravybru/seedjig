import "./index.css";
import { Button, Typography } from "@mui/material";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Home = () => {
  const { width, height } = useWindowDimensions();

  return (
    <div>
      <div className="hero-container">
        <div className="hero-text">
          <Typography variant={width < 700 || height < 450 ? "h4" : "h3"}>
            <br />
            Seed Jig 1.0
            <br />
            <br />
            The <span style={{ fontWeight: 600 }}>Robust</span> Seed Phrase
            Stamping Device
            <br />
            <br />
            Machined From <span style={{ fontWeight: 600 }}>
              Brass
            </span> And <span style={{ fontWeight: 600 }}>Steel</span>
            <br />
            <br />
          </Typography>
        </div>
      </div>

      <div className="pre-order-banner">
        <Button variant="contained" style={{ backgroundColor: "black" }}>
          <Typography variant="h6" color="common.white">
            PRE-ORDER (SHIPS APRIL 2022)
          </Typography>
        </Button>
      </div>
    </div>
  );
};

export default Home;
