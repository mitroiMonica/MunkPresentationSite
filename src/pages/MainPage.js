import Footer from "./../components/sections/footer/Footer.js";
import Main from "./../components/sections/main/Main.js";
import Features from "./../components/sections/features/Features.js";
import Navbar from "../components/navbar/Navbar.js";
import About from "./../components/sections/about/About.js";
import Mission from "./../components/sections/mission/Mission.js";
import WhyNow from "../components/sections/whyNow/WhyNow.js";
import Pricing from "../components/sections/pricing/Pricing.js";
import { Divider } from "@mui/material";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Features />
      <Mission />
      <Divider variant="middle">&#9829;</Divider>
      <WhyNow />
      <Divider variant="middle">&#9829;</Divider>
      <Pricing />
      <Footer />
    </>
  );
};

export default MainPage;
