import { Button, Typography } from "@mui/material";
import "./index.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-inner">
        <Typography variant="h5">
          <span style={{ fontWeight: 600 }}>Seed Jig 1.0.</span>
          <br />
          <br />
          The <span style={{ fontWeight: 600 }}>Robust</span> Seed Phrase
          Stamping Device.
          <br />
          <br />
          Machined From <span style={{ fontWeight: 600 }}>Brass</span> And{" "}
          <span style={{ fontWeight: 600 }}>Steel</span>.
          <br />
          <br />
        </Typography>
        <div className="order-button-container">
          <Button variant="outlined" color="default" size="large">
            <Typography>PRE ORDER</Typography>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
