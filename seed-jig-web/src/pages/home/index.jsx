import "./index.css";
import Hero from "../../components/hero";
import ThreeCanvas from "../../three/ThreeCanvas";

const Home = () => {
  return (
    <>
      <div className="model-container">
        <ThreeCanvas />
        <Hero />
      </div>
    </>
  );
};

export default Home;
