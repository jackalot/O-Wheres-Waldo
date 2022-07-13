import React from "react";
import "../css-components/StartMenu.css";
function StartMenu(props) {
  function changeClass() {
    const container = document.querySelector(".StartMenu-container");
    container.style.display = "none";
  }
  return (
    <div className="StartMenu-container">
      <table className="StarMenu-Table">
        <tr>
          <td className="StartMenu-HowToPlayTD">
            <p className="StartMenu-HowToPlayText">
              The images on the right will be spread throughout the image you'll
              see after you click 'Start!', good luck and have fun!
            </p>
            <button className="StartMenu-StartBtn" onClick={changeClass}>
              Start!
            </button>
          </td>
          <td></td>
        </tr>
      </table>
      <div className="StartMenu-ButtonContainer">
        <button className="StartMenu-StartBtn" onClick={changeClass}>
          Start!
        </button>
      </div>
      <div className="StartMenu-ImageList">
        <ul>
          {props.ourCharacters.map((character, char) => (
            <li key={char}>
              <img src={character.charDir} alt={character.charName}></img>
              {character.charName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default StartMenu;
