import React from "react";
import { dsnCN } from "../../hooks/helper";

function ContentFooter({ className, ...restProps }) {
  return (
    <div className={dsnCN("col-menu", className)} {...restProps}>
      <p>
        <strong>Phone</strong> <span>:</span> +971-2-5538502
      </p>
      <p className="mt-2">
        <strong>Fax</strong> <span>:</span> +971-2-5538503
      </p>
      <p className="mt-2">
        <strong>Email </strong> <span>:</span>{" "}
        <a href="mailto:mail@transituae.com"> mail@transituae.com</a>
      </p>
    </div>
  );
}

export default ContentFooter;
