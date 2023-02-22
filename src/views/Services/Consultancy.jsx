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

function consultancy() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Transit - Consultancy </title>
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
        src="/assets/img/services/consultancy.jpg"
        parallaxFrom={{ scale: 1.2 }}
        parallax={{ scale: 1 }}
        overlay={4}
      >
        <FadeUpTrigger>
          <h3>Consultancy</h3>
          <p className="mt-30 m-w750 dsn-auto">
            We have the right blend of technical and business experts to guide
            you through the requirement analysis. Whether you have everything in
            black and white or just an idea, we can gather, identify and analyze
            them to compile the right documentation. This documentation can be
            provided as an RFP or Technical Analysis Briefing. We receive
            feedback from our clients, that according to the analysis study we
            provided, they are able to find out the right vendor and solutions
            as per their business objects and processes.
          </p>
        </FadeUpTrigger>
      </BoxRight>
      {/*End Box Right Info*/}

      {/* <NextPageContent className="section-margin" /> */}
      <Footer />
    </React.Fragment>
  );
}

export default consultancy;
