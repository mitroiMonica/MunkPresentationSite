import { AppBar, Typography, useMediaQuery, useTheme } from "@mui/material";
import { animateScroll as scroller } from "react-scroll";
import HamburgerMenu from "./HamburgerMenu";
import { SToolbar } from "./NavbarStyle";
import DesktopMenu from "./DesktopMenu";

const Navbar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const logoHandler = () => {
    scroller.scrollToTop({
      smooth: "easeInOutQuint",
      duration: 2500,
    });
  };

  return (
    <>
      <AppBar position="fixed">
        <SToolbar>
          <Typography
            variant="subtitle1"
            sx={{ cursor: "pointer" }}
            onClick={logoHandler}
          >
            Munk
          </Typography>
          {isMatch ? <HamburgerMenu /> : <DesktopMenu />}
        </SToolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
