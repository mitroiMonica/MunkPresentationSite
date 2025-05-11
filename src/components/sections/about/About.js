import { Button, Container } from "@mui/material";
import SVGTask1 from "./../../../assets/svgs/tasks1.svg";
import classes from "./About.module.css";
import { animateScroll as scroller } from "react-scroll";
import { STypography } from "./AboutStyle.js";

const About = () => {
  return (
    <Container id="about" fixed>
      <div className={classes.aboutContainer}>
        <div>
          <STypography variant="overline">Join us</STypography>
          <STypography variant="h3">Solution proposed</STypography>
          <STypography variant="body1">
            A user-friendly platform that simplifies and accelerates the job
            search process by providing personalized, skill-based job matching.
            It reduces the time spent searching for relevant opportunities and
            creates a more efficient, intuitive experience for both candidates
            and employers.
          </STypography>
          <Button variant="contained" onClick={scroller.scrollToTop}>
            Start now
          </Button>
        </div>
        <img
          src={SVGTask1}
          alt="Laptop with tasks"
          className={classes.svgTask}
        />
      </div>
    </Container>
  );
};

export default About;
