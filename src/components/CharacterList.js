import React from "react";
import "../css-components/CharacterList.css";
function CharacterList(props) {
  return (
    <div
      style={{
        position: "absolute",
        /** Add 80 as this needs to be next to the Selected Area component */
        left: `${props.xPosition + 80}px`,
        top: `${props.yPosition}px`,
      }}
      className="character-list"
    >
      <ul>
        {props.ourCharacters.map((character, char) => (
          <li key={char}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default CharacterList;
