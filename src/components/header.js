import React from "react";
import DisplayClock from "./timer/displayClock";

function Header({
  setDivCenter,
  setDivLowerRight,
  centerDiv,
  lowerRightDiv,
  setKey
}) {
  const handleCenterDiv = () => {
    setDivCenter(true);
    setDivLowerRight(false);
    setKey(Math.random().toString(36).substr(2, 5));
  };
  const handleLowerRightDiv = () => {
    setDivLowerRight(true);
    setDivCenter(false);
    setKey(Math.random().toString(36).substr(2, 5));
  };
  return (
    <>
      <header
        style={{
          height: "100px",
          backgroundColor: "black",
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          display: "table",
          tableLayout: "fixed"
        }}
      >
        <div style={{ display: "table-cell", color: "white" }}>
          <div
            style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
          >
            <p>Position : </p>
            <div>
              <input
                type="radio"
                name="position"
                id="center"
                value="center"
                checked={centerDiv}
                onClick={handleCenterDiv}
              />
              <label htmlFor="center">Center </label>
            </div>
            <div>
              <input
                type="radio"
                name="position"
                id="lowerRight"
                value="lowerRight"
                checked={lowerRightDiv}
                onClick={handleLowerRightDiv}
              />
              <label htmlFor="lowerRight"> Lower Right</label>
            </div>
          </div>
        </div>
        <div style={{ display: "table-cell", color: "gold" }}>
          Press ESC key to hide the window.Enter to show it again
        </div>
        <div style={{ display: "table-cell", color: "white", float: "right" }}>
          {" "}
          <DisplayClock />
        </div>
      </header>
    </>
  );
}
export default Header;
