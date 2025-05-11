import { Container } from "@mui/material";
import SVGAI from "./../../../assets/svgs/undraw_firmware.svg";
import classes from "./WhyNow.module.css";
import { STypography } from "./WhyNowStyle.js";

const WhyNow = () => {
  return (
    <Container id="whynow" fixed>
      <div className={classes.whyNowContainer}>
        <div>
          <STypography variant="overline">More</STypography>
          <STypography variant="h3">Why now</STypography>
          <STypography variant="body1">
            The rapid advancement of AI technology presents a unique opportunity
            to rethink how we connect talent with opportunity. Now is the
            perfect time to leverage AI-driven tools to deliver smarter job
            matching, real-time feedback, and a more human hiring experience —
            all in a single, intuitive platform.
          </STypography>
        </div>
        <img src={SVGAI} alt="Laptop with tasks" className={classes.svgTask} />
      </div>
    </Container>
  );
};

export default WhyNow;
