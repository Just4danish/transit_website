import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import FadeUpTrigger from "../animation/FadeUpTrigger";

import HeaderNormal from "../components/header/HeaderNormal";
import BoxRight from "../components/box-right/BoxRight";
import TitleSection from "../components/heading/TitleSection";
import ServiceTow from "../components/services/ServiceTow";
import Team from "../components/team/Team";
import BrandClient from "../components/brand-client/BrandClient";
import NextPageContent from "../components/next/NextPageContent";
import Footer from "../components/footer/Footer";
import TestimonialTow from "../components/testimonial/TestimonialTow";
import { Helmet } from "react-helmet";
import ServiceOne from "../components/services/ServiceOne";
import "./AboutStyle.css";

const headerContent = {
  title: "Who We Are",
  description: `At Transit, we innovate and integrate the cutting edge technology to cater our customers….`,
};

function About() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Transit - About Us </title>
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
        src="/assets/img/About/about.jpg"
        parallaxFrom={{ scale: 1.2 }}
        parallax={{ scale: 1 }}
        overlay={4}
      >
        <FadeUpTrigger>
          <h3>Transit Security Solutions LLC</h3>
          <p className="mt-30 m-w750 dsn-auto">
            TRANSIT specializes in low voltage and telecommunication systems and
            offers full service to its customers from consulting, designing,
            installing and commissioning as well as maintenance of those
            systems. Transit has built up an impeccable reputation for quality
            and service; a reputation built through constant development,
            innovation, and investment in staff and new technology, and driven
            by a desire to provide the best possible service for our clients.
          </p>
        </FadeUpTrigger>
      </BoxRight>
      {/*End Box Right Info*/}

      {/*Start Service Section*/}

      <Container className="section-margin">
        <p>
          Our customer base is wide and varied, from the smallest residential
          property to Oil & Gas platforms, from a fledgling start-up businesses
          to government contracts, whatever level, you can be assured of the
          same quality of service throughout. Transit has developed a high level
          of expertise in consultancy, design, implementation, and maintenance
          of simple to highly complex ELV systems. Transit places a high value
          on the integrity of the company and follows our Code of Business
          Conduct. To meet our market sector criteria and industry demands, all
          projects are managed in accordance with the ISO9001-2008 standards.
        </p>
        <br />
        <TitleSection description=""></TitleSection>
        <ServiceOne
          className="text-center"
          col={3}
          colMobile={1}
          colGap={0}
          colGapTablet={30}
        />
      </Container>
      {/*End Service Section*/}

      {/*Start Team*/}
      {/* <section className="section-margin background-section section-padding">
        <Container className="dsn-right-container">
          <TitleSection description="our team">
            The best team ever!
          </TitleSection>
          <Team loop grabCursor />
        </Container>
      </section> */}
      {/*End Team*/}

      {/*Start Service Section*/}
      {/* <Container className="section-margin">
        <TitleSection description="Client see">
          Feedback from our clients.
        </TitleSection>
        <TestimonialTow grabCursor loop />
      </Container> */}
      {/*End Service Section*/}

      {/*Start Brand*/}
      {/* <Container className="section-margin">
        <TitleSection description="Our clients">
          Your successful, our <br /> reputation
        </TitleSection>
        <BrandClient col={3} colTablet={2} colGap={2} rowGap={2} />
      </Container> */}
      {/*End Brand*/}
      {/*CEO Greetings*/}
      <Card
        style={{
          hieght: "400px",
          width: "100%",
          backgroundColor: "#4A4A4A",
        }}
      >
        <Container className="section-margin">
          <div className="aboutCeoandTeamCard">
            <img src="/assets/img/About/ceo-pic.jpg" className="ceoimage" />

            <div className="ceo_p">
              <TitleSection>CEO Greetings</TitleSection>
              <p style={{ marginTop: "-20px" }}>
                At Transit Security Solutions, you will find that our integrated
                solutions are at the core of our customer’s missions. We are
                helping them solve their most complex problems. Each day our
                employees strive to earn the respect of our customers by being
                innovative in their thinking and accountable for their actions.
                Our dedication and commitment towards improvement and integrity
                are what continues to make Transit’s trusted partner of choice.
                We are smart, hard-working people who know how to meet the
                rigorous demands of both the public and the private sector. Our
                success starts with our personnel, and we make it a point to
                hire the best. We remain agile so that we can adapt to meet the
                evolving needs of our clients and our employees. We are
                motivated to remain an innovative market leader, surpassing our
                customer’s expectations, and at the same time inspiring and
                uplifting the communities in which we operate.
              </p>
              <p>
                I am delighted to introduce you to Transit Security Solutions
                LLC and invite you to browse our website (www.transituae.com) to
                learn more about our proven capabilities and how we might serve
                you.
              </p>
              <i
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                Alsayd Jaafar A.Sheber
              </i>
            </div>
          </div>
        </Container>
      </Card>
      {/*CEO Greetings*/}
      {/*Code of conduct*/}
      <Container className="section-margin">
        <div className="conduct">
          <TitleSection>Code Of Conduct</TitleSection>

          <p>
            Transit places a high value on reputation and the brand name. The
            company will comply with all laws and regulations to reflect highest
            ethical and professional standards in the countries where we do
            business. All employee’s and representatives have an obligation to
            abide by the Code of Business Conduct. Employees will maintain
            principles of transparency and openness conducting their
            responsibilities with integrity and fairness. Transit adopts strict
            safety standards for our employee’s by identifying and controlling
            hazards or unsafe situations.
          </p>
        </div>
      </Container>
      {/*Code of conduct*/}
      {/*team*/}
      <Container className="section-margin">
        <div className="aboutCeoandTeamCard">
          <img src="/assets/img/About/team.jpg" className="team-image" />

          <div className="teamCard">
            <TitleSection>Our Team</TitleSection>
            <p style={{ marginTop: "-30px" }}>
              At Transit, we employ dynamic individuals with a passion for
              change management and depth in their respective area of expertise.
              Our employees are dedicated team players who bring energy, ideas
              and pride to their work. We view Transit’s culture as a
              competitive advantage and strive to create an environment where
              smart, motivated and creative people succeed.
            </p>
          </div>
        </div>
      </Container>

      {/*team*/}

      {/* <NextPageContent className="section-margin" /> */}
      <Footer />
    </React.Fragment>
  );
}

export default About;
