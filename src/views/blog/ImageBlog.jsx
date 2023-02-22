import React from "react";
import "./blogs.css";
import { HiUser } from "react-icons/hi2";
import { BiTimeFive } from "react-icons/bi";
const ImageBlog = (props) => {
  return (
    <React.Fragment>
      <div className="container1">
        <img src={props.image} alt="" class="image" />

        <div class="content">
          <h6>{props.heading}</h6>
        </div>
        <div class="middle">
          <div class="text">{props.desc}</div>
          <div style={{ marginTop: "40px" }}>
            <span style={{ fontSize: "10px" }}>
              <BiTimeFive />
              {props.date}
            </span>
            <span style={{ fontSize: "10px" }}>
              <HiUser /> Transit Security Solutions
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ImageBlog;
