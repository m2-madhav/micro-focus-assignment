import React, { useState, useEffect } from "react";
import DisplayArea from "./components/displayArea";
import Footer from "./components/footer";
import Header from "./components/header";
import SecondPageComponent from "./components/SecondPageComponent";
import "./styles.css";

export default function App() {
  const [centerDiv, setDivCenter] = useState(false);
  const [lowerRightDiv, setDivLowerRight] = useState(false);
  const [showDiv, setShowDiv] = useState(true);
  const [key, setKey] = useState(Math.random().toString(36).substr(2, 5));
  const [showDifferentComponent, setShowDifferentComponent] = useState(
    "page-1"
  );

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        setShowDiv(true);
        setDivCenter(false);
        setDivLowerRight(false);
      } else if (event.key === "Escape") {
        event.preventDefault();
        setShowDiv(false);
        setDivCenter(false);
        setDivLowerRight(false);
      }
    };
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <>
      {showDifferentComponent == "page-1" && (
        <div className="App">
          <Header
            setDivCenter={setDivCenter}
            setDivLowerRight={setDivLowerRight}
            centerDiv={centerDiv}
            lowerRightDiv={lowerRightDiv}
            setKey={setKey}
          />
          <DisplayArea
            centerDiv={centerDiv}
            lowerRightDiv={lowerRightDiv}
            showDiv={showDiv}
            key={key}
          />
          <Footer setShowDifferentComponent={setShowDifferentComponent} />
        </div>
      )}
      {showDifferentComponent == "page-2" && (
        <SecondPageComponent
          setShowDifferentComponent={setShowDifferentComponent}
        />
      )}
    </>
  );
}
