import React from "react";
import { dsnCN } from "../../../hooks/helper";

function MenuContent({ className }) {
  const socialData = [
    { link: "https://www.facebook.com/technology.transit/", name: "Facebook." },
    {
      link: "https://instagram.com/transitsecuritysolutionsllc?igshid=YmMyMTA2M2Y=",
      name: "Instagram.",
    },
    {
      link: "https://www.linkedin.com/company/transit-security-solutions-llc",
      name: "Linkedin.",
    },
  ];
  return (
    <div
      className={dsnCN(
        "container-content  d-flex flex-column justify-content-center",
        className
      )}
    >
      <div className="nav__info">
        <div className="nav-content">
          <h5 className="sm-title-block mb-10">
            Transit Security Solutions LLC
          </h5>
          <p>
            Office No 104 <br />
            1st Floor <br />
            B3 Building Cubes Park
            <br />
            Musaffah M25
            <br />
            PO Box 133702
            <br />
            Abu Dhabi,UAE
          </p>
        </div>
        <div className="nav-content mt-30">
          <h5 className="sm-title-block mb-10">Contact</h5>

          <p className="links over-hidden mb-1">
            <a
              className="link-hover"
              href="tel:+971-2-5538502"
              data-hover-text="+971-2-5538502"
            >
              +971-2-5538502
            </a>
          </p>

          <p className="links over-hidden mb-1">
            <a
              className="link-hover"
              href="tel:+971-2-5538503"
              data-hover-text="+971-2-5538503"
            >
              +971-2-5538503
            </a>
          </p>
          <p className="links over-hidden">
            <a
              className="link-hover"
              href="mailto:mail@transituae.com"
              data-hover-text="mail@transituae.com"
            >
              mail@transituae.com
            </a>
          </p>
        </div>
      </div>
      <div className="nav-social nav-content mt-30">
        <div className="nav-social-inner p-relative">
          <h5 className="sm-title-block mb-10">Follow us</h5>
          <ul>
            {socialData.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MenuContent;
