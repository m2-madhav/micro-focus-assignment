import React, { useState } from "react";

function DisplayClock() {
  let time = new Date().toLocaleTimeString();
  const [timer, setTimer] = useState(time);
  const updateTimer = () => {
    time = new Date().toLocaleTimeString();
    setTimer(time);
  };
  setInterval(updateTimer, 1000);
  return <>{timer}</>;
}
export default DisplayClock;
