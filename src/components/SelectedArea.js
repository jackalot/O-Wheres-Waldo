import React from "react";
import "../css-components/SelectedArea.css";
import CharacterList from "./CharacterList";
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
      <CharacterList></CharacterList>
    </div>
  );
}

export default SelectedArea;
