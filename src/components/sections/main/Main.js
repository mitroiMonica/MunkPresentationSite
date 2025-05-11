import { useNavigate } from "react-router-dom";
import VideoMP4 from "./../../../assets/videos/mainVideo.mp4";
import Image from "./../../../assets/images/imag_poster.png";
import classes from "./Main.module.css";
import { STypography, SButton } from "./MainStyle.js";

const Main = () => {
  const navigate = useNavigate();
  const connectHandler = () => {
    navigate("/app");
  };
  return (
    <>
      <div className={classes.sectionContainer}>
        <div className={classes.videoContainer}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className={classes.videoElement}
            poster={Image}
          >
            <source src={VideoMP4} type="video/mp4"></source>
          </video>
          <div className={classes.overlay} />
          <div className={classes.contentContainer}>
            <STypography variant="h1">
              Smart hiring starts with better matching
            </STypography>
            <STypography variant="h6">
              Find the right job or candidate faster with intelligent,
              skill-based matchmaking designed to save time and deliver real
              results.
            </STypography>
            <SButton
              variant="contained"
              color="secondary"
              disableElevation={true}
              onClick={connectHandler}
            >
              GET STARTED
            </SButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
