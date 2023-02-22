import React from "react";
// import { Card, Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
// import FadeUpTrigger from "../../animation/FadeUpTrigger";

import HeaderNormal from "../../components/header/HeaderNormal";
// import BoxRight from "../../components/box-right/BoxRight";
// import TitleSection from "../../components/heading/TitleSection";

import Footer from "../../components/footer/Footer";

import { Helmet } from "react-helmet";
import "./blogs.css";
import ImageBlog from "./ImageBlog";

import { useNavigate } from "react-router-dom";
// import { baseUrl } from "../../baseUrl";
const headerContent = {
  title: "Transit Blogs",
  description: `The Cyber Trap is a new approach that has been developed by researchers from Ukraine, 
  and it has alreadyshown promising results in terms of detecting data disclosure attempts.`,
};

const data = [
  {
    image: "/assets/img/blogs/ipcam4.jpg",
    head: "The Benefits of IP Video Surveillance",
    date: " Dec 30, 2016",
    desc: "The advantage of IP Video Surveillance includes superior image quality, remote accessibility.",
    linkId: 1,
  },
  {
    image: "/assets/img/blogs/second.jpg",
    head: "Security chip design",
    date: " Dec 10, 2022",
    linkId: 2,
    desc: "Chip design is a process of designing a chip and is an essential part of electronics engineering. This process of chip design involves the knowledge of circuit design and its logic formation.",
  },
  {
    image: "/assets/img/blogs/four.jpg",
    head: "IOT Based Access Control System",
    date: "jan 1, 2023",
    linkId: 3,
    desc: "The Internet of Things precisely known as IoT is an integrated network of intelligent computing devices connected through the internet to communicate with each other without any human interference.",
  },
  {
    image: "/assets/img/blogs/five.jpg",
    head: "Building a Modern Business securiy",
    date: "jan 10, 2023",
    linkId: 4,
    desc: "Although cyber threats commanly make the headlines,digital hazards are only a small part of security landscape for businesses in a time where surveilance.",
  },
];
const firstBlog = {
  image: "/assets/img/blogs/first.jpg",
  head: "Retail technology that delivers customer insight - Axis Communications",
  date: " May 21, 2017",
  desc: "How can analytics help improve the retail customer experience and ultimately drive sales?",
};

function Blog() {
  const navigate = useNavigate();
  const navFunction = (id) => {
    if (id <= "1") {
      navigate(`${id}`);
    }
  };
  return (
    <React.Fragment>
      <Helmet>
        <title>Transit -Blogs </title>
      </Helmet>

      {/*Start Header*/}
      <HeaderNormal
        className="background-section"
        description={headerContent.description}
        // link_to={"#hash-section-1"}
      >
        {headerContent.title}
      </HeaderNormal>
      <Container>
        <div className="main">
          <div
            style={{ marginRight: "20px", marginTop: "20px" }}
            onClick={() => {
              navFunction(0);
            }}
          >
            <ImageBlog
              image={firstBlog.image}
              heading={firstBlog.head}
              date={firstBlog.date}
              desc={firstBlog.desc}
              bloglink={firstBlog.bloglink}
            />
          </div>
          <div className="blogs">
            {data.map((blog, index) => (
              <div
                key={index}
                onClick={() => {
                  navFunction(blog.linkId);
                }}
              >
                <ImageBlog
                  image={blog.image}
                  heading={blog.head}
                  date={blog.date}
                  desc={blog.desc}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* <NextPageContent className="section-margin" /> */}
      <Footer />
    </React.Fragment>
  );
}

export default Blog;
