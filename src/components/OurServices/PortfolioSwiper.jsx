import React from "react";
import "./style.scss";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, SwiperOptions } from "swiper";

import PortfolioItem from "./PortfolioItem";
import { getPortfolioData } from "../../api/portfolio/PortfolioData";

const PortfolioSwiper = ({
  desktop,
  mobile,
  tablet,
  ...restProps
}: SwiperOptions) => {
  const dataPortfolio = [
    {
      id: 1,
      title: " Consultancy",
      slug: "consultancy",
      src: "/assets/img/ServiceImage/14.jpg",
      //   srcSlider: "/assets/img/FrontPage/1.jpg",
      // category: ["Photography"],
      //   description:
      //     "An Innovative Solutions Provider Committed To High-Quality and Cost Effective.",
      overlay: 2,
      // component: (props) => <Consultancy {...props} />,
    },
    {
      id: 2,
      title: " Design",
      slug: "design",
      src: "/assets/img/ServiceImage/12.jpg",
      // category: ["Photography"],
      //   description:
      //     "An Innovative Solutions Provider Committed To High-Quality and Cost Effective.",
      overlay: 2,
      // component: (props) => <ReStyling {...props} />,
    },
    {
      id: 3,
      title: " Project Management",
      slug: "project-management",
      src: "/assets/img/FrontPage/1.jpg",
      src: "/assets/img/ServiceImage/21.jpg",
      // category: ["Photography"],
      //   description:
      //     "An Innovative Solutions Provider Committed To High-Quality and Cost Effective.",
      overlay: 2,
      // component: (props) => <ReStyling {...props} />,
    },
    {
      id: 4,
      title: " Implimentation",
      slug: "implementation",
      src: "/assets/img/ServiceImage/15.jpg",
      // category: ["Photography"],
      //   description:
      //     "An Innovative Solutions Provider Committed To High-Quality and Cost Effective.",
      overlay: 2,
      // component: (props) => <ReStyling {...props} />,
    },
    {
      id: 5,
      title: " System Integration",
      slug: "system-integration",

      src: "/assets/img/ServiceImage/19.jpg",
      //   description:
      //     "An Innovative Solutions Provider Committed To High-Quality and Cost Effective.",
      overlay: 2,
      // component: (props) => <ReStyling {...props} />,
    },
    {
      id: 6,
      title: "System Maintenance",
      slug: "system-maintenance",

      src: "/assets/img/ServiceImage/18.jpg",
      // category: ["Photography"],
      //   description:
      //     "An Innovative Solutions Provider Committed To High-Quality and Cost Effective.",
      overlay: 2,
      // component: (props) => <ReStyling {...props} />,
    },
  ];

  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true, el: ".swiper-pagination" }}
      spaceBetween={30}
      slidesPerView={1}
      breakpoints={{
        992: desktop,
        768: tablet,
        576: mobile,
      }}
      {...restProps}
    >
      {dataPortfolio.map((item, index) => (
        <SwiperSlide key={index}>
          <PortfolioItem portoDetails={item} textButton="View Case" />
        </SwiperSlide>
      ))}

      <div className="swiper-pagination" />
    </Swiper>
  );
};

PortfolioSwiper.defaultProps = {
  desktop: {
    slidesPerView: 3,
  },
  tablet: {
    slidesPerView: 2,
  },
  mobile: {
    slidesPerView: 2,
  },
};

export default PortfolioSwiper;
