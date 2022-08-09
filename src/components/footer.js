import React from "react";

function Footer({ setShowDifferentComponent }) {
  return (
    <>
      <footer
        style={{
          position: "fixed",
          bottom: "0",
          left: "0",
          width: "100%",
          height: "100px",
          backgroundColor: "black"
        }}
      >
        <h2
          style={{
            backgroundColor: "white",
            position: "relative",
            display: "inline-block"
          }}
          onClick={() => setShowDifferentComponent("page-2")}
        >
          Go To Page 2 {">"}{" "}
        </h2>
      </footer>
    </>
  );
}
export default Footer;
