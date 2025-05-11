import { IconButton } from "@mui/material";
import { SList, SDrawer, SIconButton, SMenuIcon } from "./NavbarStyle.js";
import { useState } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { PAGES } from "./NavbarStyle.js";
import { Link } from "react-scroll";
import classes from "./Navbar.module.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SDrawer anchor="top" open={isOpen} transitionDuration={600}>
        <SIconButton onClick={menuHandler}>
          <HighlightOffIcon color="primary" fontSize="large" />
        </SIconButton>
        <SList>
          {PAGES.map((page, index) => (
            <Link
              key={index}
              to={page.toLowerCase().replace(/\s/g, "")}
              smooth="easeOutQuint"
              exact="true"
              offset={-80}
              onClick={menuHandler}
              className={classes.desktopStyle}
            >
              {page}
            </Link>
          ))}
        </SList>
      </SDrawer>
      <IconButton onClick={menuHandler}>
        <SMenuIcon />
      </IconButton>
    </>
  );
};

export default HamburgerMenu;
