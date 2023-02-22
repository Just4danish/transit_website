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

function ProjectManagement() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Transit - Project Management </title>
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
        src="/assets/img/services/project.jpg"
        parallaxFrom={{ scale: 1.2 }}
        parallax={{ scale: 1 }}
        overlay={4}
      >
        <FadeUpTrigger>
          <h3>Project Management</h3>
          <p className="mt-30 m-w750 dsn-auto">
            Plans are worthless. Planning is essential. Transit has a highly
            skilled team for planning, organizing, securing, managing, leading,
            and controlling resources to achieve specific goals and to serve our
            clients with the right solutions at right time. Project Managers
            approach relevant projects with lean, iterative, incremental, and
            phased approach. They handle both internal and external project
            scheduling, budgeting, and coordination using a wide range of
            software and PM applications. Our project managers are certified in
            relevant domains of expertise to be more confident at work and more
            competitive in the job market.
          </p>
        </FadeUpTrigger>
      </BoxRight>
      {/*End Box Right Info*/}

      {/* <NextPageContent className="section-margin" /> */}
      <Footer />
    </React.Fragment>
  );
}

export default ProjectManagement;
