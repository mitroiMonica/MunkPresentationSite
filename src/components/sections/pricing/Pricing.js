import { Container, Divider } from "@mui/material";
import SVGDesigner from "./../../../assets/svgs/undraw_designer.svg";
import classes from "./Pricing.module.css";
import { STypography } from "./PricingStyle.js";

const Pricing = () => {
  return (
    <Container id="pricing" fixed>
      <div className={classes.missionContainer}>
        <img
          src={SVGDesigner}
          alt="Laptop with tasks"
          className={classes.svgTask}
        />
        <div>
          <STypography variant="overline">Business Model</STypography>
          <STypography variant="h3">Pricing</STypography>
          <STypography>
            <Divider textAlign="left">for candidates</Divider>
            <STypography variant="body1">
              &#10148; all platform features are free for job seekers
            </STypography>
            <Divider textAlign="left">for employers</Divider>
            <STypography variant="body1">
              <div>
                &#10148; ad posting is priced dynamically based on key factors
              </div>
              <div>&#10148; companies are charged per application received</div>
            </STypography>
          </STypography>
        </div>
      </div>
    </Container>
  );
};

export default Pricing;
