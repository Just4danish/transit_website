import { Container } from "react-bootstrap";
import Footer from "../../components/footer/Footer";
import HeaderNormalTow from "../../components/header/HeaderNormalTow";
import { Helmet } from "react-helmet";
import React from "react";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.css";
import "./certificatin.css";

const headerContent = {
  title: "Certifications",
};

const photos = [
  { src: "/assets/img/Certificates/certi-01.jpg" },
  { src: "/assets/img/Certificates/certi-02.jpg" },

  { src: "/assets/img/Certificates/certi-03.jpg" },
  { src: "/assets/img/Certificates/certi-04.jpg" },
  { src: "/assets/img/Certificates/certi-05.jpg" },
  { src: "/assets/img/Certificates/certi-017.jpg" },

  { src: "/assets/img/Certificates/certi-09.jpg" },
  { src: "/assets/img/Certificates/certi-010.jpg" },
  { src: "/assets/img/Certificates/certi-015.jpg" },
  { src: "/assets/img/Certificates/certi-07.jpg" },

  { src: "/assets/img/Certificates/certi-08.jpg" },

  { src: "/assets/img/Certificates/certi-011.jpg" },
  { src: "/assets/img/Certificates/certi-012.jpg" },
  { src: "/assets/img/Certificates/certi-013.jpg" },
  { src: "/assets/img/Certificates/certi-014.jpg" },

  { src: "/assets/img/Certificates/certi-016.jpg" },
];

export const Certifications = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Transit - Certifications </title>
      </Helmet>
      {/*Start Header*/}
      <HeaderNormalTow>{headerContent.title}</HeaderNormalTow>

      <Container>
        <LightgalleryProvider>
          <div className="Certifications">
            {photos &&
              photos.map((p, idx) => (
                <div key={idx}>
                  <LightgalleryItem group={"group"} src={p.src} thumb={p.src}>
                    <div className="photodiv">
                      <img
                        src={p.src}
                        loading="lazy"
                        className="photo"
                        alt=""
                      />
                    </div>
                  </LightgalleryItem>
                </div>
              ))}
          </div>
        </LightgalleryProvider>
      </Container>

      <Container>
        <Footer />
      </Container>
    </React.Fragment>
  );
};
