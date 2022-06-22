import React from "react";
import "../css-components/SelectedArea.css";
function SelectedArea(props) {
  return (
    <div
      style={{
        position: "absolute",
        left: `${props.xPosition}px`,
        top: `${props.yPosition}px`,
      }}
      className="selectedArea-OuterContainer"
    >
      <div className="selectedArea-OuterContainer"></div>
    </div>
  );
}

export default SelectedArea;
