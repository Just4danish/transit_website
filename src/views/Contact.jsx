import React, { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import DsnGrid from "../components/DsnGrid";

import HeaderNormalTow from "../components/header/HeaderNormalTow";
import Footer from "../components/footer/Footer";
import Map, { optionTransitMap } from "../components/Map/Map";
import InfoBox from "../components/contact/InfoBox";
import ContactForm from "../components/contact/ContactForm";
import NextPage from "../components/next/NextPage";
import { Helmet } from "react-helmet";
import "./contact.css";
import HeaderNormal from "../components/header/HeaderNormal";
const headerContent = {
  title: "Contact Us",
  description: `Let's Talk`,
};

function Contact(props) {
  const center = { lat: 30.0489206, lng: 31.258553 };

  const [map, setMap] = useState("1stMap");
  // const [map2,setMap2]=useState(false);
  // const [map3,setMap3]=useState(false);

  const maptoggle = (name) => {
    setMap(name);
  };
  // }
  // const maptogle2=()=>{
  //   setMap2(!map2)
  //   setMap1(false)
  //   setMap3(false)

  //  }
  //  const maptogle3=()=>{
  //   setMap3(!map3)
  //   setMap1(false)
  //   setMap2(false)

  //  }
  useEffect(() => {
    console.log(map);
  }, [map]);

  return (
    <React.Fragment>
      <Helmet>
        <title>Transit - Contact Us </title>
      </Helmet>

      {/*Start Header*/}
      <HeaderNormalTow description={headerContent.description}>
        {headerContent.title}
      </HeaderNormalTow>

      {/*Start Map*/}
      {/* <Map
        googleMapKey=""
        defaultZoom={10}
        options={optionTransitMap}
        height="80vh"
        defaultCenter={center}
        showMarker
      /> */}

      <Container>
        <h3 className="mb-30">Visit Our Office At</h3>
      </Container>

      <Card
        style={{
          display: "flex",
          marginBottom: "20px",
          marginTop: "30px",
        }}
      >
        {map === "1stMap" ? (
          <>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5215.058240863645!2d54.52351057592397!3d24.355733753784115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e4127a4ba61a5%3A0x9161a9fa2cc36f5e!2sTransit%20Security%20Solutions%20LLC!5e0!3m2!1sen!2sin!4v1676090363989!5m2!1sen!2sin"
              width="100%"
              height="800px"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="map"
            />
          </>
        ) : map === "2ndMap" ? (
          <>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.0817068865426!2d55.17009911639068!3d24.99733944027729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f728445a7e171%3A0x888f1f9bbe3532b9!2sTransit%20Security%20Solutions%20LLC%20-%20Dubai%20Branch!5e0!3m2!1sen!2sin!4v1676213389256!5m2!1sen!2sin"
              width="100%"
              height="800px"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="map"
            />
          </>
        ) : (
          <>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.1844165389525!2d75.83194821524282!3d11.247840353389684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65b54f4f34113%3A0xa8dd969c31fdef70!2sTransit%20Security%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1676264008722!5m2!1sen!2sin"
              width="100%"
              height="800px"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="map"
            />
          </>
        )}
      </Card>

      <Container>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="div-width">
            <span className="head">Head office - Abu Dhabi</span>
            <Card
              className="mapCard"
              onMouseOver={() => {
                maptoggle("1stMap");
              }}
            >
              <p className="head2">Transit Security Solutions LLC</p>
              <p className="content">
                Office No 104, 1st Floor, B3 Building, Cubes Park, Musaffah M25
                <br />
                PO Box 133702, Abu Dhabi, UAE
                <br />
                Fax: +971-2-5538503 <br /> Phone: +971-2-5538502 <br />
                Email: mail@transituae.com
              </p>
            </Card>
          </div>
        </div>
        <div className="branch">
          <div className="div-width">
            <span className="head">Branch office - Dubai</span>
            <Card
              className="mapCard"
              onMouseOver={() => {
                maptoggle("2ndMap");
              }}
            >
              <p className="head2">Transit Security Solutions LLC</p>
              <p className="content">
                Office No 304, 3rd Floor, CEO Building
                <br />
                Dubai Investment Park First,Dubai, UAE
                <br />
                Fax: +971-4-8820029
                <br />
                Phone: +971-4-8820027
                <br />
                Email: mail@transituae.com
              </p>
            </Card>
          </div>
          <div className="div-width">
            <span className="head">Branch office - Calicut</span>
            <Card
              className="mapCard"
              onMouseOver={() => {
                maptoggle("3rdMap");
              }}
            >
              <p className="head2">Transit Security Solutions Pvt Ltd</p>
              <p className="content">
                Office No 1421, 4rd Floor, HiLITE Business Park, Poovangal,
                <br />
                Pantheeramkavu, Kerala 673014
                <br />
                Fax:+91 495 2436503
                <br />
                Phone:+91 495 2436502
                <br />
                Email:mail@transituae.com
              </p>
            </Card>
          </div>
        </div>
      </Container>

      {/*Start Contact Form && Info Box*/}
      <Container className="section-margin">
        <DsnGrid col={2} colTablet={1}>
          {/* <InfoBox className="background-section p-30" /> */}
          <ContactForm />
        </DsnGrid>
      </Container>

      <Footer />
    </React.Fragment>
  );
}

export default Contact;
