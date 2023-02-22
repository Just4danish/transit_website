import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import FadeUpTrigger from "../../animation/FadeUpTrigger";

import HeaderNormal from "../../components/header/HeaderNormal";
import BoxRight from "../../components/box-right/BoxRight";
import TitleSection from "../../components/heading/TitleSection";

import Footer from "../../components/footer/Footer";

import { Helmet } from "react-helmet";
import ServiceOne from "../../components/services/ServiceOne";
import "./services.css";

const headerContent = {
  title: "What We Do",
  description: `We help you to find the right solution for your need....
  If you need to Plan or Deploy an ELV solution.... We are there..... 
  With the help of the leading names in world.....`,
};

function implementation() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Transit - Implementation </title>
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
        src="/assets/img/services/impliment.jpg"
        parallaxFrom={{ scale: 1.2 }}
        parallax={{ scale: 1 }}
        overlay={4}
      >
        <FadeUpTrigger>
          <h3>Implementation</h3>
          <p className="mt-30 m-w750 dsn-auto">
            Transit has a vast professional experience in implementing various
            solutions for all sectors like Government, Industries, Commercial
            building, Educational institutions etc. Qualified and experienced
            engineers / technicians are effectively deployed to ensure best
            practice solutions are implemented within the time period and
            maintaining the aesthetics of the building.
          </p>
        </FadeUpTrigger>
      </BoxRight>
      {/*End Box Right Info*/}

      {/* <NextPageContent className="section-margin" /> */}
      <Footer />
    </React.Fragment>
  );
}

export default implementation;
