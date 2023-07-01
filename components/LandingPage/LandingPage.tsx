import LeftSide from "./LeftSide/LeftSide";
import RightAligned from "./RightSide/RightSide";
import Services from "./PageServices/Services";
import React from "react";
import LandingHeader from "./LandingHeader/LandingHeader";
import Footer from "../FooterPage/Footer";
import Testimonials from "./PageTestimonials/Testimonials";
import classes from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={classes.landingpage} id="landing__page">
      <LandingHeader />
      <LeftSide />
      <RightAligned />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
};
export default LandingPage;
