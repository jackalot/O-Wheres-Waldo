import React from "react";
function CharacterList(props) {
  return (
    <div className="character-list">
      <ul>
        <li>{props.character1}</li>
        <li>{props.character2}</li>
        <li>{props.character3}</li>
      </ul>
    </div>
  );
}
export default CharacterList;
