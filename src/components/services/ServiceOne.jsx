import React from "react";
import "./style.scss";

import DsnGrid from "../DsnGrid";
import type { DsnGridProps } from "../DsnGrid";
import { dsnCN } from "../../hooks/helper";
import LazyImg from "../LazyImg";

const ServicesDetails = [
  {
    icon: "assets/img/About/mission1.png",
    title: "Mission",
    description:
      "To maintain a pioneer position in providing Integrated Solutions for building automation,fire,safety,security and enhanced solutions.",
  },
  {
    icon: "assets/img/About/vision.png",
    title: "Vision",
    description:
      "To develop indigenous products and services and lead as one of the leaders in Extra-low voltage industry such that others will follow our proven practice and principles",
  },
  {
    icon: "assets/img/About/value.png",
    title: "Value",
    description:
      "Our value lies in the fact that we offer flexible solutions suitable to the varying needs of our customers. We will always focus on quality and innovations.",
  },
];

const ServiceOne = ({ className, ...restProps }) => {
  return (
    <DsnGrid
      className={dsnCN("dsn-services service-one", className)}
      {...restProps}
    >
      {ServicesDetails.map((item, index) => (
        <div className="service-item" key={index}>
          <span className="icon mb-20">
            <LazyImg src={item.icon} alt={item.title} />
          </span>
          <h4 className="title-block mb-20">{item.title}</h4>
          <p className="mt-15 dsn-auto" style={{ textAlign: "revert" }}>
            {item.description}
          </p>
        </div>
      ))}
    </DsnGrid>
  );
};

export default ServiceOne;
