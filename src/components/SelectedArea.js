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
      className="selectedArea-container"
    >
      <ul className="selectedArea-options">
        <li>{props.character1}</li>
        <li>{props.character2}</li>
        <li>{props.character3}</li>
      </ul>
    </div>
  );
}

export default SelectedArea;
