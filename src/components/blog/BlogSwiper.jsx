import React from "react";
import "./style.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import BlogItem from "./BlogItem";
import { Pagination, SwiperOptions } from "swiper";

const BlogDetails = [
  {
    title: "Visual Surveillance Systems (CCTV) and Video Analytics (VCA)",
    // category: ["Photography" , "Brand"],
    img: "/assets/img/Solutions/24.jpg",
    description:
      "Our intelligent Visual Management Systems (Digital CCTV) are the basic backbone of your building security...",
  },
  {
    title: "Building Access Control System",
    // category: "Photography",
    img: "/assets/img/Solutions/27.jpg",
    description:
      "Controlling the access to any premises is the most basic and important requirement of a well-designed security system...",
  },
  {
    title: "Intruder Alarm Systems",
    description:
      "This system ensures foolproof security at homes, offices or industrial establishments...",
    img: "/assets/img/Solutions/22.png",
  },
  {
    title: "Traffic Control / Parking Management & Gate Barriers",
    description:
      "A complete range of high quality automatic or manual gates and barriers, boom barriers, motorized trackless gates...",
    img: "/assets/img/Solutions/trafic.jpg",
  },
  {
    title: "EAS Antitheft System",
    description:
      "An anti-theft system is any device or method used to prevent or deter the unauthorized appropriation of items considered valuable.",
    img: "/assets/img/Solutions/theft.jpg",
  },
  {
    title: "Public Adressing-Audio/Visual System",
    description:
      "   Public Address System is a pre-requisite for effective communication within a facility.",
    img: "/assets/img/Solutions/audio.jpg",
  },
  {
    title: "Audio / Video Intercom System",
    description:
      "Audio & video intercom phone systems play an important role in access control for security purposes. ",
    img: "/assets/img/Solutions/intercom.jpg",
  },
  {
    title: " Home Automation / Lighting Control",
    description:
      "Convert your home into smart home with SmartNode Lighting Automation module No Renovation Required.",
    img: "/assets/img/Solutions/home.jpg",
  },
  {
    title: "Structured Cabling Systems (SCS)",
    description:
      " Connecting to the Internet or to a local Intranet is essential to any business office. We offer a full suite of services for  local-area networks (LAN) and wide-area networks (WAN)",
    img: "/assets/img/Solutions/cable.jpg",
  },
];

const BlogSwiper = ({
  desktop,
  mobile,
  tablet,
  ...restProps
}: SwiperOptions) => {
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
      {BlogDetails.map((item, index) => (
        <SwiperSlide key={index}>
          <BlogItem
            src={item.img}
            title={item.title}
            category={item.category}
            description={item.description}
            to="/blog-details"
          />
        </SwiperSlide>
      ))}
      <div className="swiper-pagination" />
    </Swiper>
  );
};

BlogSwiper.defaultProps = {
  desktop: {
    slidesPerView: 2.5,
  },
  tablet: {
    slidesPerView: 1.5,
  },
  mobile: {
    slidesPerView: 1.5,
  },
};

export default BlogSwiper;
