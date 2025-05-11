import { Container } from "@mui/material";
import SVGTask1 from "./../../../assets/svgs/undraw_fitting_piece_re_pxay.svg";
import classes from "./Mission.module.css";
import { STypography } from "./MissionStyle.js";

const Mission = () => {
  return (
    <Container id="mission" fixed>
      <div className={classes.missionContainer}>
        <img
          src={SVGTask1}
          alt="Laptop with tasks"
          className={classes.svgTask}
        />
        <div>
          <STypography variant="overline">Mission</STypography>
          <STypography variant="h3">Increase your efficiency</STypography>
          <STypography variant="body1">
            Our mission is to transform the hiring experience by significantly
            reducing the time and effort spent in the recruitment process. We
            aim to achieve this by leveraging intelligent, skill-based matching
            that connects candidates and employers not just faster, but smarter.
            Through advanced AI technologies and a user-centric design, Munk
            empowers individuals to discover roles tailored to their true
            potential while enabling companies to attract the right talent with
            ease and precision — all in a single, efficient platform.
          </STypography>
        </div>
      </div>
    </Container>
  );
};

export default Mission;
