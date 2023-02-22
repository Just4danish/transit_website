import React from "react";

import FadeUpTrigger from "../../animation/FadeUpTrigger";

import HeaderNormal from "../../components/header/HeaderNormal";
import BoxRight from "../../components/box-right/BoxRight";
// import TitleSection from "../../components/heading/TitleSection";

import Footer from "../../components/footer/Footer";

import { Helmet } from "react-helmet";
// import ServiceOne from "../../components/services/ServiceOne";
import "./services.css";

const headerContent = {
  title: "What We Do",
  description: `We help you to find the right solution for your need....
  If you need to Plan or Deploy an ELV solution.... We are there..... 
  With the help of the leading names in world.....`,
};

function SystemMaintenance() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Transit - System Maintenance </title>
      </Helmet>

      {/*Start Header*/}
      <HeaderNormal
        className="background-section"
        description={headerContent.description}
        link_to={"#hash-section-1"}
      >
        {headerContent.title}
      </HeaderNormal>
      {/*Start Box Right Info*/}
      <BoxRight
        className="mb-section text-center"
        src="/assets/img/services/maintenance.jpg"
        parallaxFrom={{ scale: 1.2 }}
        parallax={{ scale: 1 }}
        overlay={4}
      >
        <FadeUpTrigger>
          <h3>System Maintenance</h3>
          <p className="mt-30 m-w750 dsn-auto">
            We endeavor to provide a complete maintenance package to ensure that
            the safety and security of our customer’s premises are never
            compromised. And assures our best support and service to our clients
            before as well as after sales
          </p>
        </FadeUpTrigger>
      </BoxRight>
      {/*End Box Right Info*/}

      {/* <NextPageContent className="section-margin" /> */}
      <Footer />
    </React.Fragment>
  );
}

export default SystemMaintenance;
