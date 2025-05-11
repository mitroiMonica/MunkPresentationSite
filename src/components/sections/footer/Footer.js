import { Typography, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import classes from "./Footer.module.css";
import { animateScroll as scroller } from "react-scroll";

const SOCIAL_MEDIA = [<InstagramIcon />, <FacebookIcon />, <LinkedInIcon />];

const Footer = () => {
  const logoHandler = () => {
    scroller.scrollToTop({
      smooth: "easeInOutQuint",
      duration: 2500,
    });
  };
  return (
    <div className={classes.footer}>
      <Typography
        variant="h6"
        color="secondary"
        sx={{ cursor: "pointer" }}
        onClick={logoHandler}
      >
        Munk
      </Typography>
      <Typography variant="body2" color="secondary">
        &#169; 2025 All rights reserved
      </Typography>
      <div>
        {SOCIAL_MEDIA.map((el, index) => (
          <IconButton key={index} color="secondary">
            {el}
          </IconButton>
        ))}
      </div>
    </div>
  );
};

export default Footer;
