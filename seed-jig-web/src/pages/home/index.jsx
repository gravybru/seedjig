import "./index.css";
import Typography from "@mui/material/Typography";
import Hero from "../../components/hero";
import Model from "../../three/Model";

const Home = () => {
  return (
    <>
      <div className="model-container">
        <Model />
        <Hero />
      </div>
      <div className="additional-text">
        <Typography>
          Some other important text here. Possibly some links.
        </Typography>
      </div>
    </>
  );
};

export default Home;
