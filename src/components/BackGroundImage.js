import React from "react";
import "../css-components/BackgroundImage.css";
function BackGroundImage() {
  return (
    <div>
      <img
        className="backgroundImage"
        src={require("../images/TheVoidIsCallingByAfros2000.jpg")}
        alt="The Birds, The Bees, & The Monkees by Dukepinball"
      ></img>
    </div>
  );
}
export default BackGroundImage;
