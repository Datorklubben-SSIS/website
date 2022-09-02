import React from "react";
import logo from "../logga.png";

export default function Header() {
  return (
    <div
      style={{
        backgroundColor: "#5CDB95",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        padding: "0.25rem 0rem",
      }}
    >
      <img alt="Datorklubben logo" src={logo} height="100px" />
    </div>
  );
}
