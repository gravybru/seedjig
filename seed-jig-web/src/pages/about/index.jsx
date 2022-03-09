import Typography from "@mui/material/Typography";
import PageFrame from "../../components/page_frame";
import "./index.css";

const About = () => {
  return (
    <PageFrame>
      <Typography variant="h3">About</Typography>

      <div className="photo-carousel">photo gallery will go here</div>
      <br />
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Typography>
    </PageFrame>
  );
};

export default About;
