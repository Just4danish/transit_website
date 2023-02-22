import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import FadeUpTrigger from "../../animation/FadeUpTrigger";

import TitleSection from "../../components/heading/TitleSection";
import SolutionHeader from "../../components/header/SolutionHeader";

import Footer from "../../components/footer/Footer";

import { Helmet } from "react-helmet";

import "./solutions.css";

const headerContent = {
  title: "Solutions",
};

function Solutions() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Transit - Services </title>
      </Helmet>

      {/*Start Header*/}
      <SolutionHeader
        className="background-section"
        link_to={"#hash-section-1"}
        link_to1={"#hash-section-2"}
        link_to2={"#hash-section-3"}
        link_to3={"#hash-section-4"}
        link_to4={"#hash-section-5"}
        link_to5={"#hash-section-6"}
        link_to6={"#hash-section-7"}
        link_to7={"#hash-section-8"}
        link_to8={"#hash-section-9"}
      >
        {headerContent.title}
      </SolutionHeader>

      <Container className="section-margin" id="hash-section-1">
        <TitleSection>
          Visual Surveillance Systems (CCTV) and Video Analytics (VCA)
        </TitleSection>
        <div className="solutionCard">
          <img src="/assets/img/Solutions/24.jpg" className="image1" alt="" />

          <div className="solution-p">
            <p style={{ marginTop: "-20px" }}>
              Our intelligent Visual Management Systems (Digital CCTV) are the
              basic backbone of your building security. These are widely used
              for monitoring of strategic location within and around a building
              or within a large campus. At Transit, we not only use the CCTV for
              your surveillance, but we can offer a wide variety of value-added
              services to your CCTV System using Video content analysis. Video
              content analysis is the capability of automatically analyzing
              video to detect and determine temporal and spatial events. This
              technical capability is used in a wide range of domains including
              entertainment, health-care, retail, automotive, transport, home
              automation, flame and smoke detection and safety and security. The
              algorithms can be implemented as software on general purpose
              machines, or as hardware in specialized video processing units
            </p>
          </div>
        </div>
      </Container>
      <Card style={{ backgroundColor: "#2A2828" }} id="hash-section-2">
        <Container
          id="hash-section-2"
          className="section-margin"
          style={{ paddingTop: "50px", paddingBottom: "50px" }}
        >
          <TitleSection>Building Access Control System</TitleSection>
          <div className="solutionCard2">
            <div className="solution-p2">
              <p style={{ marginTop: "-20px" }}>
                Controlling the access to any premises is the most basic and
                important requirement of a well-designed security system. Access
                Control System provides the valuable information about the
                personnel accessed in / out.
              </p>
              <p>
                Our Access Control Systems is an excellent security system for
                small applications such as an office or big applications such as
                Airport Terminal or a University Campus that requires a larger
                number of entry control points. Our most advanced access control
                solutions can integrate with Time and Attendance Systems as well
                and support even your payrolls.
              </p>
              <div style={{ marginLeft: "20px" }}>
                <ul>
                  <li style={{ listStyleType: "circle" }}>
                    Access Control System Features
                  </li>
                  <li style={{ listStyleType: "circle" }}>
                    Multi - site - Client/Server - LAN/WAN configuration
                  </li>
                  <li style={{ listStyleType: "circle" }}>
                    Integrated MAPS & BADGING
                  </li>
                  <li style={{ listStyleType: "circle" }}>
                    Dial-up,TCP/IP Multi controller architecture
                  </li>
                  <li style={{ listStyleType: "circle" }}>
                    Global one-cardmigration paths
                  </li>
                  <li style={{ listStyleType: "circle" }}>
                    Quality, confidence and consistency
                  </li>
                  <li style={{ listStyleType: "circle" }}>
                    Configurable Database.
                  </li>
                </ul>
              </div>
            </div>
            <img
              alt=""
              src="/assets/img/Solutions/27.jpg"
              className="images2"
            />
          </div>
        </Container>
      </Card>

      <Container className="section-margin" id="hash-section-3">
        <TitleSection>Indtuder Alarm System</TitleSection>
        <div className="solutionCard">
          <img alt="" src="/assets/img/Solutions/22.png" className="image1" />
          <div className="solution-p">
            <p style={{ marginTop: "-20px" }}>
              Public Address System is a pre-requisite for effective
              communication within a facility. Transit not only offers the
              latest of technologies available today in background music systems
              but it also offers paging system that can be integrated into a
              security or management system for door control, access control and
              employees control in your facilities.
            </p>
            <p>
              Our Audio Management Systems are individually configured to match
              the appropriate facility.We carry extensive on-site surveys to
              understand your needs. Depending on these needs we offer you the
              appropriate solution Whenever you need to communicate, think of us
            </p>
          </div>
        </div>
      </Container>

      <Card style={{ backgroundColor: "#2A2828" }} id="hash-section-4">
        <Container
          className="section-margin"
          style={{ paddingTop: "50px", paddingBottom: "50px" }}
        >
          {" "}
          <TitleSection>EAS Antitheft System</TitleSection>
          <div className="solutionCard2">
            <div className="solution-p2">
              <p style={{ marginTop: "-20px" }}>
                An anti-theft system is any device or method used to prevent or
                deter the unauthorized appropriation of items considered
                valuable. Theft is one of the most common and oldest criminal
                behaviors. Where the ownership of a physical possession can be
                altered without the rightful owner's consent, theft prevention
                has been introduced to assert the ownership whenever the
                rightful owner is physically absent. Anti-theft systems have
                been around since individuals began stealing other people's
                property and have evolved accordingly to thwart increasingly
                complex methods of theft.
              </p>
              <p>
                Transit provides the best solutions for EAS antitheft systems
                with RFID for Supermarkets.
              </p>
            </div>
            <img
              alt=""
              src="/assets/img/Solutions/theft.jpg"
              className="images2"
            />
          </div>
        </Container>
      </Card>

      <Container className="section-margin" id="hash-section-5">
        <TitleSection>Public Adressing-Audio/Visual System</TitleSection>
        <div className="solutionCard">
          <img
            alt=""
            src="/assets/img/Solutions/audio.jpg"
            className="image1"
          />

          <div className="solution-p">
            <p>
              Public Address System is a pre-requisite for effective
              communication within a facility. Transit not only offers the
              latest of technologies available today in background music systems
              but it also offers paging system that can be integrated into a
              security or management system for door control, access control and
              employees control in your facilities.
            </p>
            <p>
              Our Audio Management Systems are individually configured to match
              the appropriate facility.
            </p>
            <p>
              We carry extensive on-site surveys to understand your needs.
              Depending on these needs we offer you the appropriate solution
            </p>
            <p>
              We carry extensive on-site surveys to understand your needs.
              Depending on these needs we offer you the appropriate
              solutionWhenever you need to communicate, think of us.
            </p>
          </div>
        </div>
      </Container>

      <Card style={{ backgroundColor: "#2A2828" }} id="hash-section-6">
        <Container
          className="section-margin"
          style={{ paddingTop: "50px", paddingBottom: "50px" }}
        >
          <TitleSection>Audio / Video Intercom System</TitleSection>

          <div className="solutionCard2">
            <div className="solution-p2">
              <p style={{ marginTop: "-20px" }}>
                Our core team of professionals leaves nothing to chance when it
                comes to our Intercom System.
              </p>
              <p>
                Transit has the most suitable system for small to large-sized
                buildings and residential areas with floor distribution. Villas,
                offices, buildings, and towers will have the right solution from
                us.
              </p>
              <p>
                Transit offers the most complete system with the highest
                management capacity and incorporating most additional features.
                It can be for independent blocks and residential areas, besides,
                it can be combined with other systems. Our engineer’s study of
                the latest codes and industry trends, and work with
                manufacturers who meet our stringent demands. At Transit we
                offer only the best and the accent is forever on providing a
                high-quality system that significantly ensures maximum savings
                for our customers.
              </p>
            </div>
            <img
              alt=""
              src="/assets/img/Solutions/intercom.jpg"
              className="images2"
            />
          </div>
        </Container>
      </Card>

      <Container className="section-margin" id="hash-section-7">
        <TitleSection>
          Trafic Control/Parking Management & Gate Barriers
        </TitleSection>
        <div className="solutionCard">
          <img src="/assets/img/Solutions/trafic.jpg" className="image1" />
          <div className="solution-p">
            <p style={{ marginTop: "-20px" }}>
              A complete range of high quality automatic or manual gates and
              barriers, boom barriers, motorized trackless gates, and surface
              mounted road blockers are offered to compliment the range of
              electronic security system offered by us. These barriers may have
              card, tag or remote control.
            </p>
            <p>
              A range of hydraulic, heavy-duty roadblocks are also available to
              protect strategic buildings and other facilities from terrorist
              attacks. These systems can be operated with a card access control
              or other pass systems including vehicle proximity sensors
            </p>
          </div>
        </div>
      </Container>

      <Card style={{ backgroundColor: "#2A2828" }} id="hash-section-8">
        <Container
          className="section-margin"
          style={{ paddingTop: "50px", paddingBottom: "50px" }}
        >
          <TitleSection> Home Automation / Lighting Control</TitleSection>
          <div className="solutionCard2">
            <div className="solution-p2">
              <p style={{ marginTop: "-20px" }}>
                We have a comprehensive range of products that monitor and
                control every aspect of your smart home, office or business,
                from individually zoned heating, lighting, and curtains, to
                audio and security system integration.
              </p>
              <p>
                we promise you full control of your surroundings. Our team will
                convert your environment, whether office or home, into an
                automated digital extension of your living or work area. We
                bring with us an in-depth understanding of the product-
                manufacturer mix combined with a deep-rooted passion for
                technology. Get a free consultation from us for your home or
                office. Choose from a variety of Smart devices at an affordable
                range. We integrate your Automation devices, Security devices,
                Audiovisual etc to make your home a “Smart home”.
              </p>
            </div>
            <img
              alt=""
              src="/assets/img/Solutions/home.jpg"
              className="images2"
            />
          </div>
        </Container>
      </Card>
      <Container className="section-margin" id="hash-section-9">
        <TitleSection>Structured Cabling Systems (SCS)</TitleSection>
        <div className="solutionCard">
          <img
            alt=""
            src="/assets/img/Solutions/cable.jpg"
            className="image1"
          />
          <div className="solution-p">
            <p style={{ marginTop: "-20px" }}>
              Whether you need one (1) or 1,000 drops installed at your campus
              location or at multiple locations, we are at your service. Our
              in-house multi-state, OEM certified and experienced field
              technicians, and Project Managers are capable of planning,
              designing and installing your wired network infrastructure. Once
              installed, we can also maintain, troubleshoot and upgrade your
              system as needed. Our services include Cat5E, Cat6 & Cat6A cable
              installations, coaxial cable Installations, and fiber optic cable
              installations as well.
            </p>
            <p>
              Connecting to the Internet or to a local Intranet is essential to
              any business office. We offer a full suite of services for
              local-area networks (LAN) and wide-area networks (WAN). Our
              technicians can install a new network or make changes to an
              existing one. We work with our business clients to provide the
              best solution custom tailored to their needs. One great advantage
              offered to our clients is a price per line. This allows clients to
              accurately budget for a project and to avoid any hidden charges.
            </p>
          </div>
        </div>
      </Container>
      {/*CEO Greetings*/}

      {/* <NextPageContent className="section-margin" /> */}
      <Footer />
    </React.Fragment>
  );
}

export default Solutions;
