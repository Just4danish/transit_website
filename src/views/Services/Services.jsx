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

function Services() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Transit - Services </title>
      </Helmet>

      {/*Start Header*/}
      <HeaderNormal
        className="background-section"
        description={headerContent.description}
        link_to={"#end"}
      >
        {headerContent.title}
      </HeaderNormal>

      <Container className="section-margin">
        <div className="serviceCard">
          <img
            src="/assets/img/services/consultancy.jpg"
            className="service-images"
            alt=""
          />

          <div className="services-p">
            <TitleSection>Consultancy</TitleSection>
            <p style={{ marginTop: "-30px" }}>
              We have the right blend of technical and business experts to guide
              you through the requirement analysis. Whether you have everything
              in black and white or just an idea, we can gather, identify and
              analyze them to compile the right documentation. This
              documentation can be provided as an RFP or Technical Analysis
              Briefing. We receive feedback from our clients, that according to
              the analysis study we provided, they are able to find out the
              right vendor and solutions as per their business objects and
              processes.
            </p>
          </div>
        </div>
      </Container>
      <Card style={{ backgroundColor: "#2A2828" }}>
        <Container className="section-margin">
          <div className="serviceCard2">
            <div className="services-p2">
              <TitleSection>Design</TitleSection>
              <p style={{ marginTop: "-30px" }}>
                Our professional team ensures that we offer the best design for
                ELV/IT solutions to meet our customer’s requirements with the
                latest technology, high quality, reliability &
                cost-effectiveness. We customize solutions for the specific
                environments to provide high-value technology services.
              </p>
            </div>
            <img
              src="/assets/img/services/design.jpg"
              className="service-images2"
              alt=""
            />
          </div>
        </Container>
      </Card>

      <Container className="section-margin">
        <div className="serviceCard">
          <img
            src="/assets/img/services/project.jpg"
            className="service-images"
            alt=""
          />
          <div className="services-p">
            <TitleSection>Project Management</TitleSection>
            <p style={{ marginTop: "-30px" }}>
              Plans are worthless. Planning is essential. Transit has a highly
              skilled team for planning, organizing, securing, managing,
              leading, and controlling resources to achieve specific goals and
              to serve our clients with the right solutions at right time.
              Project Managers approach relevant projects with lean, iterative,
              incremental, and phased approach. They handle both internal and
              external project scheduling, budgeting, and coordination using a
              wide range of software and PM applications. Our project managers
              are certified in relevant domains of expertise to be more
              confident at work and more competitive in the job market.
            </p>
          </div>
        </div>
      </Container>

      <Card style={{ backgroundColor: "#2A2828" }}>
        <Container className="section-margin">
          <div className="serviceCard2">
            <div className="services-p2">
              <TitleSection>Implementation</TitleSection>
              <p style={{ marginTop: "-30px" }}>
                Transit has a vast professional experience in implementing
                various solutions for all sectors like Government, Industries,
                Commercial building, Educational institutions etc. Qualified and
                experienced engineers / technicians are effectively deployed to
                ensure best practice solutions are implemented within the time
                period and maintaining the aesthetics of the building.
              </p>
            </div>
            <img
              src="/assets/img/services/impliment.jpg"
              className="service-images3"
              alt=""
            />
          </div>
        </Container>
      </Card>

      <Container className="section-margin" id="end">
        <div className="serviceCard">
          <img
            src="/assets/img/services/integration.jpg"
            className="service-images"
            alt=""
          />
          <div className="services-p">
            <TitleSection>System Integration</TitleSection>
            <p style={{ marginTop: "-30px" }}>
              Transit is specialized in creating an integrated system that
              includes designing, building a customized application, integration
              with the new or existing system. With professional expertise in
              network planning, integration, and implementation, we provide
              proven network operating and management systems and a host of
              customer oriented services.
            </p>
          </div>
        </div>
      </Container>

      <Card style={{ backgroundColor: "#2A2828" }}>
        <Container className="section-margin">
          <div className="serviceCard2">
            <div className="services-p2">
              <TitleSection> System Maintenance</TitleSection>
              <p style={{ marginTop: "-30px" }}>
                We endeavor to provide a complete maintenance package to ensure
                that the safety and security of our customer’s premises are
                never compromised. And assures our best support and service to
                our clients before as well as after sales
              </p>
            </div>
            <img
              src="/assets/img/services/maintenance.jpg"
              className="service-images2"
              alt=""
            />
          </div>
        </Container>
      </Card>
      {/*CEO Greetings*/}

      {/* <NextPageContent className="section-margin" /> */}
      <Footer />
    </React.Fragment>
  );
}

export default Services;
