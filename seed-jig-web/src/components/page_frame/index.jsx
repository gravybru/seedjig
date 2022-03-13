import "./index.css";
import Typography from "@mui/material/Typography";

const PageFrame = ({ children, title = "" }) => {
  return (
    <div className="page-outer">
      <Typography variant="h4">{title}</Typography>
      <div className="page-frame">{children}</div>
    </div>
  );
};

export default PageFrame;
