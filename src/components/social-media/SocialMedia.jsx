import React, { useEffect, useRef } from "react";
import { dsnCN } from "../../hooks/helper";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { splittingItems } from "../../hooks/Spltting";

function SocialMedia({ className }) {
  const ref = useRef();
  const socialData = [
    { link: "https://www.facebook.com/technology.transit/", icon: faFacebookF },
    {
      link: "https://www.linkedin.com/company/transit-security-solutions-llc",
      icon: faLinkedin,
    },
    {
      link: "https://instagram.com/transitsecuritysolutionsllc?igshid=YmMyMTA2M2Y=",
      icon: faInstagram,
    },
  ];

  useEffect(() => {
    splittingItems(ref.current, "li");
  });

  return (
    <ul className={dsnCN("social-one", className)} ref={ref}>
      {socialData.map((item, index) => (
        <li key={index}>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={item.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialMedia;
