import Typography from "@mui/material/Typography";
import Carousel from "react-material-ui-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import PageFrame from "../../components/page_frame";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import c1 from "/assets/carousel/1.jpeg";
import c2 from "/assets/carousel/2.jpeg";
import c3 from "/assets/carousel/3.jpeg";
import c4 from "/assets/carousel/4.jpeg";
import c5 from "/assets/carousel/5.jpeg";
import c6 from "/assets/carousel/6.jpeg";
import c7 from "/assets/carousel/7.jpeg";
import c8 from "/assets/carousel/8.jpeg";
import "./index.css";
import "../pages.css";

const images = [c1, c2, c3, c4, c5, c6, c7, c8];

const About = () => {
  const { width, height } = useWindowDimensions();

  return (
    <PageFrame title="About">
      <div className="page-section">
        <Carousel
          animation="slide"
          className="carousel-root"
          indicators={false}
          navButtonsAlwaysInvisible={width < 700 || height < 500}
          navButtonsProps={{
            style: {
              width: "30px",
              height: "30px",
              opacity: "0.3",
            },
          }}
        >
          {images.map((image, index) => (
            <div key={"slide-" + index} className="carousel-slide">
              <img src={image} alt="an image of Seed Jig 1.0" />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="page-section">
        <div className="text-frame">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </div>
      </div>
    </PageFrame>
  );
};

export default About;
