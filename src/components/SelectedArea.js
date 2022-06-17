import React from "react";
import "../css-components/SelectedArea.css";
function SelectedArea(props) {
  return (
    <div
      style={{
        position: "absolute",
        left: `${props.xPosition - 20}px`,
        top: `${props.yPosition - 20}px`,
      }}
      className="selectedArea-container"
    ></div>
  );
}

export default SelectedArea;
