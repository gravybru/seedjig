import "./index.css";
import { Button, Typography } from "@mui/material";
import Hero from "../components/hero";
import Model from "../three/Model";

const Home = () => {
  return (
    <div>
      <div className="model-container">
        <Model />
        <Hero />
      </div>
      <div className="additional-text">
        <Typography>
          Some other important text here. Possibly some links.
        </Typography>
      </div>
    </div>
  );
};

export default Home;
