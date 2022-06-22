import React from "react";
function CharacterList(props) {
  return (
    <div className="character-list">
      <ul>
        {props.ourCharacters.map((character, char) => (
          <li key={char}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default CharacterList;
