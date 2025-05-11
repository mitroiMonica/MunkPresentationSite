import { Link } from "react-scroll";
import { PAGES } from "./NavbarStyle.js";
import classes from "./Navbar.module.css";

const DesktopMenu = () => {
  return (
    <>
      <div>
        {PAGES.map((page, index) => (
          <Link
            key={index}
            to={page.toLowerCase().replace(/\s/g, "")}
            smooth="easeOutQuint"
            spy={true}
            exact="true"
            offset={-75}
            className={classes.linkStyle}
            activeClass={classes.activeLink}
          >
            {page}
          </Link>
        ))}
      </div>
    </>
  );
};

export default DesktopMenu;
