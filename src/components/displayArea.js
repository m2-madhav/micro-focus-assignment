import React from "react";
import Draggable from "react-draggable";
import "../styles.css";

function DisplayArea({ centerDiv, lowerRightDiv, showDiv, key }) {
  return (
    <>
      <section
        style={
          centerDiv
            ? {
                height: "400px",
                backgroundColor: "lightgray",
                position: "fixed",
                top: "100px",
                left: "0",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }
            : {
                height: "400px",
                backgroundColor: "lightgray",
                position: "fixed",
                top: "100px",
                left: "0",
                width: "100%"
              }
        }
      >
        {showDiv && (
          <Draggable bounds="parent">
            <div
              className={
                lowerRightDiv ? "drag-n-drop-lower-right" : "drag-n-drop"
              }
            >
              <div className="dnd-item-text">
                {" "}
                {centerDiv
                  ? "Center "
                  : lowerRightDiv
                  ? "Lower Right"
                  : "Floating.."}{" "}
              </div>
              <div className="dnd-item">Drag me around ...</div>
            </div>
          </Draggable>
        )}
      </section>
    </>
  );
}
export default DisplayArea;
