import React from "react";

function StartMenu() {
  return (
    <div className="StartMenu-container">
      <div className="StartMenu-ButtonContainer">
        <p className="StartMenu-HowToPlayText">
          The images on the right will be spread throughout the image you'll see
          after you click 'Start!', good luck and have fun!
        </p>
        <button className="StartMenu-StartBtn">Start!</button>
      </div>
    </div>
  );
}
export default StartMenu;
