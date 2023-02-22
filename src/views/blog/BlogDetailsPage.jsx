import React, { useEffect, useState } from "react";

import { Container } from "react-bootstrap";
// import FadeUpTrigger from "../../animation/FadeUpTrigger";

import HeaderNormal from "../../components/header/HeaderNormal";
// import BoxRight from "../../components/box-right/BoxRight";
import TitleSection from "../../components/heading/TitleSection";

import Footer from "../../components/footer/Footer";

import { Helmet } from "react-helmet";
import "./blogs.css";

import { useParams } from "react-router-dom";
const headerContent = {
  title: "Transit Blogs",
  description: `The Cyber Trap is a new approach that has been developed by researchers from Ukraine, 
  and it has alreadyshown promising results in terms of detecting data disclosure attempts.`,
};

const test = [
  {
    title:
      "Retail technology that delivers customer insight - Axis Communications",
    name: "test1",
    image: "/assets/img/blogs/third.jpg",
    head1: "Back to basics",
    head2: "Adding actionable insight",
    content3:
      "Counting visitors is just the beginning, and retailers know that there are many factors that can impact – positively or negatively – the in-store visitor experience and overall profitability.Long queues are just one example of how retailers can lose a sale or a loyal customer, after having successfully enticed them into the store and placed the product in their hands (and research in the UK has pointed to the high cost of this). For this reason more large grocery and home goods stores are abandoning manual monitoring and adopting automated queue analytics that can trigger a silent alarm to retailers to open additional tills or re-direct customers to a shorter check-out line.While store optimization analytics are a great way to improve retailers’ bottom line, that additional profitability can still be eroded by loss and shrinkage, which, per the Global Retail Theft Barometer 2014-2015, amounts to over $123 billion and on the rise.Retailers are therefore looking for intelligent technology solutions to prevent and mitigate loss. One example is grocery store chains who supplement their one-way traffic flow systems with direction detection analytics, to alert staff of a visitor exiting from the store entrance rather than the check-out area. Another points to a growing number of round-the-clock open membership clubs and gyms who use tailgating analytics to detect when members bring non-paying friends with them after regular working hours.By combining a clear retail business goal with video analytic technology and expertise, retailers can improve profitability and maintain a competitive advantage. And in an increasingly competitive retail environment, such insight can be the difference between success and failure.",
    content1:
      "How can analytics help improve the retail customer experience and ultimately drive sales? What additional customer insight can they provide? How can retailers use this information? And where should they start? These are some of the fundamental questions retailers have when considering analytics to optimize their business.",
    content2:
      "The obvious starting point for most retailers is people counting. It’s straightforward  knowing how many people have visited their store and when. It’s accurate: video-based analytics has come a long way with consistent accuracy of 95% or higher. It’s extremely cost-effective using standardized IP cameras. And it’s intuitive for retailers to cross-reference with other data such as point of sales transactions, promotional campaigns, and even weather reports, to pinpoint the factors driving people in-store.In fact, visitor traffic is a primary KPI for most fashion and global chain retailers – second only to sales. And it’s vital to measuring sales conversion, evaluating marketing campaigns, assessing store performance, and developing employee incentive programs. Ultimately, it’s a metric that determines whether a store opens or closes.",
  },

  {
    title: "The Benefits of IP Video Surveillance",
    image: "/assets/img/blogs/ipcam.jpg",

    head2: "10 Ten Reasons",
    content1:
      "The advantage of IP Video Surveillance includes superior image quality, remote accessibility, distributed intelligent video capabilities, easy installation and integration, and better scalability, flexibility and cost-effectiveness.The benefits of an IP-based system are clear to understand, After all, the whole point of a Video Surveillance System is to see exactly what is going on. But there are far more benefits than a crisp digital picture. Below are the top ten benefits and reasons for why IP-based video surveillance systems are taking over from analogue CCTV solutions.",
  },
  // { title: "things3", name: "test3" },
  // { title: "things4", name: "test4" },
];

const reason = [
  {
    title:
      "Resolution: A typical analog camera equates to about 0.4 MP (megapixels), whereas a standard IP camera offers 2 MP, which is more than five times the analog resolution. With some IP cameras ranging up to 10MP, it’s easy to see how the technology can cut down on the overall number of cameras required. A typical example would be replacing pan, tilt and zoom cameras (PTZs) on a garage forecourt with one IP/MP camera.",
  },
  {
    title:
      "Remote Access: You can login into a secure server remotely, using a web-based interface to view real-time footage on PCs or Macs, as well as on mobile devices such as the iPhone, iPad, and Android-based devices. Programs such as TeamViewer also allow for remote support and end-user training.",
  },
  {
    title:
      "Analytics: The dramatic improvements in hardware have been matched by powerful analytics software. Video Management Systems (VMS) can be combined with other software to allow for applications such as licence plate recognition, people counting, and motion detection.",
  },
  {
    title:
      "No New Wires: Existing coaxial cables that are used by the analog system can connect IP cameras to the network video recorder (NVR). AXIS T8640 PoE+ over Coax Adapter Kit. AXIS T8640 PoE+ over Coax Adapter Kit lets you reuse hard-to-replace or long-range Coax cabling when you replace your analog cameras with Axis network cameras. And you can integrate Power over Ethernet over Coax for efficient power management.",
  },
  {
    title:
      "Power: IP cameras can be powered by a number of methods. If the IP camera is replacing an analog camera, the existing power source can be reused or Ethernet cables which allow for Power over Ethernet (PoE) can be deployed. Furthermore, if re-wiring would prove too costly, then a device which can allow data and PoE over coax cable can be used.",
  },
  {
    title:
      "Hybrid: High-end NVRs, allow existing CCTV cameras to be incorporated into the IP system. This can significantly reduce the initial costs, and allow a phased approach towards a complete IP Surveillance solution.",
  },
  {
    title:
      "Scalability: Utilising edge processing, and individual camera licensing, it is possible to scale from a single camera up to thousands.",
  },
  {
    title:
      "Redundancy: It is possible to record simultaneously to a NVR. This offers an additional safety net to recover footage in the event of damage/corruption to data on the main NVR.",
  },
  {
    title:
      "Lossless Playback: Footage can be reviewed with multiple zoom on playback, even on fixed lens cameras, with no degradation of the image. This alleviates a common problem with analog systems, where high levels of compression can often leave the image unreadable.",
  },
  {
    title:
      "Wireless: If it’s possible to get a line-of-sight between the camera and the server’s location, it is possible to reduce cabling costs by transmitting the data wirelessly.",
  },
];

function BlogDetailsPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (id) {
      setData(test[id]);
    }
  }, [id]);

  return (
    <React.Fragment>
      <Helmet>
        <title>Transit -Blog Detais </title>
      </Helmet>

      {/*Start Header*/}
      <HeaderNormal
        className="background-section"
        description={headerContent.description}
        link_to={"#hash-section-1"}
      >
        {headerContent.title}
      </HeaderNormal>
      {/* <Container>
        <Card
          style={{
            backgroundColor: "gray",
            width: "100%",
            height: "30%",
            borderRadius: "10px",
          }}
        >
          <Card
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "40%",
              backgroundColor: "black",
            }}
          >
            <img className="images1" src="/assets/img/blogs/ipcam.jpg" alt="" />
            <p style={{ marignLeft: "30px" }}>
              The advantage of IP Video Surveillance includes superior image
              quality, remote accessibility,
            </p>
          </Card>
        </Card>
      </Container> */}
      <Container className="section-margin" id="hash-section-1">
        <TitleSection>{data && data?.title}</TitleSection>
        <div className="blogsCard">
          <img src={data && data?.image} className="images" alt="" />

          <div className="blogs-p">
            <p style={{ marginTop: "-20px" }}>{data && data?.content1}</p>
          </div>
        </div>
      </Container>
      <Container>
        <h3>{data && data?.head1}</h3>
        <p style={{ marginTop: "20px" }}>{data && data?.content2}</p>
        <h3>{data && data?.head2}</h3>
        <p style={{ marginTop: "20px" }}>{data && data?.content3}</p>
        {id === "1" ? (
          <>
            <ul>
              {reason.map((data) => (
                <li
                  style={{
                    listStyleType: "circle",
                    marginLeft: "20px",
                    marginTop: "10px",
                  }}
                >
                  {data && data?.title}
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </Container>

      {/* <NextPageContent className="section-margin" /> */}
      <Footer />
    </React.Fragment>
  );
}

export default BlogDetailsPage;
