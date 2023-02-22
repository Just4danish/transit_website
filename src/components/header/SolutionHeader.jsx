import React, { useEffect, useRef } from "react";
import style from "./style.module.scss";
import { Container } from "react-bootstrap";
import { BsPrefixRefForwardingComponent } from "react-bootstrap/helpers";
import { ContainerProps } from "react-bootstrap/Container";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";
import { dsnCN } from "../../hooks/helper";
import styled from "styled-components";

interface SolutionHeaderProps
  extends BsPrefixRefForwardingComponent<"div", ContainerProps> {
  description?: string;
}

function SolutionHeader({
  link_to,
  link_to1,
  link_to2,
  link_to3,
  link_to4,
  link_to5,
  link_to6,
  link_to7,
  link_to8,

  className,
  description,
  children,
  ...restProps
}: SolutionHeaderProps) {
  const head = useRef();
  const dot = useRef();

  useEffect(() => {
    gsap.fromTo(
      dot.current,
      { yPercent: 60, autoAlpha: 0.05 },
      {
        yPercent: 100,
        autoAlpha: 0,
        scrollTrigger: {
          trigger: head.current,
          start: "top top",
          scrub: true,
        },
      }
    );
  });

  const element = document.querySelector(link_to);
  const element2 = document.querySelector(link_to1);
  const element3 = document.querySelector(link_to2);
  const element4 = document.querySelector(link_to3);
  const element5 = document.querySelector(link_to4);
  const element6 = document.querySelector(link_to5);
  const element7 = document.querySelector(link_to6);
  const element8 = document.querySelector(link_to7);
  const element9 = document.querySelector(link_to8);

  const section1 = () => {
    element.scrollIntoView({ behavior: "smooth" });
  };

  const section2 = () => {
    element2.scrollIntoView({ behavior: "smooth" });
  };
  const section3 = () => {
    element3.scrollIntoView({ behavior: "smooth" });
  };
  const section4 = () => {
    element4.scrollIntoView({ behavior: "smooth" });
  };
  const section5 = () => {
    element5.scrollIntoView({ behavior: "smooth" });
  };
  const section6 = () => {
    element6.scrollIntoView({ behavior: "smooth" });
  };
  const section7 = () => {
    element7.scrollIntoView({ behavior: "smooth" });
  };
  const section8 = () => {
    element8.scrollIntoView({ behavior: "smooth" });
  };
  const section9 = () => {
    element9.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={dsnCN(style.hn, className)} ref={head}>
      <Container {...restProps}>
        <h1 className={`title-heading ${style.ht} `}>{children}</h1>
        {description && (
          <p className="mt-30 m-w570" style={{ letterSpacing: "1.2px" }}>
            {description}
          </p>
        )}
        <div className={`${style.mainhead}`}>
          <p
            onClick={section1}
            className={`view-case ${style.sd} mt-30 ${style.navigation}`}
          >
            Visual Surveillance Systems (CCTV) and Video Analytics (VCA)
            <FontAwesomeIcon icon={faArrowDown} />
          </p>
          <a
            onClick={() => {
              section2(element);
            }}
            className={`view-case ${style.sd} mt-30 ${style.navigation}  ${style.headleft}`}
          >
            Building Access Control System
            <FontAwesomeIcon icon={faArrowDown} />
          </a>
        </div>
        <div className={`${style.mainhead}`}>
          <a
            className={`view-case ${style.sd} mt-30 ${style.navigation}`}
            onClick={section3}
          >
            Indtuder Alarm System <FontAwesomeIcon icon={faArrowDown} />
          </a>
          <a
            onClick={section4}
            className={`view-case ${style.sd} mt-30 ${style.navigation}  ${style.headleft} `}
          >
            EAS Antitheft System <FontAwesomeIcon icon={faArrowDown} />
          </a>
          <a
            onClick={section5}
            className={`view-case ${style.sd} mt-30 ${style.navigation}  ${style.headleft}`}
          >
            Public Adressing-Audio/Visual System
            <FontAwesomeIcon icon={faArrowDown} />
          </a>
        </div>
        <div className={`${style.mainhead}`}>
          <a
            className={`view-case ${style.sd} mt-30 ${style.navigation}`}
            onClick={section6}
          >
            Audio / Video Intercom System
            <FontAwesomeIcon icon={faArrowDown} />
          </a>
          <a
            onClick={section7}
            className={`view-case ${style.sd} mt-30 ${style.navigation} ${style.headleft}`}
          >
            Trafic Control / Parking Mangement & Gate Barriers
            <FontAwesomeIcon icon={faArrowDown} />
          </a>
        </div>
        <div className={`${style.mainhead}`}>
          <a
            className={`view-case ${style.sd} mt-30 ${style.navigation}`}
            onClick={section8}
          >
            Structured Cabling Systems (SCS)
            <FontAwesomeIcon icon={faArrowDown} />
          </a>
          <a
            onClick={section9}
            className={`view-case ${style.sd} mt-30 ${style.navigation}  ${style.headleft}`}
          >
            Home Automation / Lighting Contol
            <FontAwesomeIcon icon={faArrowDown} />
          </a>
        </div>
      </Container>
      <div className={style.bcd} ref={dot} />
    </header>
  );
}

export default SolutionHeader;
