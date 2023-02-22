import React from "react";
import { dsnCN } from "../../hooks/helper";

function AddressFooter({ className, ...restProps }) {
  return (
    <div className={dsnCN("col-address", className)} {...restProps}>
      <p>
        Transit Security Solutions LLC
        <br />
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
  );
}

export default AddressFooter;
