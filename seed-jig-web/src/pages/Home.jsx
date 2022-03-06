import "./index.css";
import { Button, Typography } from "@mui/material";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Home = () => {
  const { width } = useWindowDimensions();

  return (
    <>
      <div className="hero-container">
        <div className="hero-text">
          <Typography variant={width < 700 ? "h4" : "h3"}>
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
      <div className="buffer" />
    </>
  );
};

export default Home;