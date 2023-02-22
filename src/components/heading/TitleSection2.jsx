import React from "react";
import { dsnCN } from "../../hooks/helper";

function TitleSection2({ className, tag: Tag = "h2", children, description }) {
  return (
    <div className={dsnCN("section-heading", className)}>
      {children && <Tag className="title-section">{children}</Tag>}
    </div>
  );
}

export default TitleSection2;
