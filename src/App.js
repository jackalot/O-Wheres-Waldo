import "./App.css";
import SelectedArea from "./components/SelectedArea";
import BackgroundImage from "./components/BackGroundImage";
import { useState, useEffect } from "react";
import CharacterList from "./components/CharacterList";
function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [globalCoords, setGlobalCoords] = useState({ x: 0, y: 0 });
  const [displaySelectedArea, setDisplaySelectedArea] = useState(false);
  useEffect(() => {
    const handleWindowMouseMove = (event) => {
      //  To prevent the selection circle from moving with the mouse
      if (displaySelectedArea === false) {
        setGlobalCoords({
          /* Subtracting these values centers the selection circle
         on one screen size, temporary fix */
          x: event.screenX - 40,
          y: event.screenY - 170,
        });
      }
      setMousePosition(globalCoords);
    };
    const handleMouseClick = (event) => {
      if (displaySelectedArea === false) {
        setDisplaySelectedArea(true);
      }
      if (displaySelectedArea === true) {
        setDisplaySelectedArea(false);
      }
    };
    window.addEventListener("mousemove", handleWindowMouseMove);
    window.addEventListener("click", handleMouseClick);
    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
      window.removeEventListener("click", handleMouseClick);
    };
  }, [globalCoords, displaySelectedArea]);
  if (displaySelectedArea === false) {
    return (
      <div className="App">
        <BackgroundImage></BackgroundImage>
      </div>
    );
  } else {
    return (
      <div className="App">
        <SelectedArea
          xPosition={globalCoords.x}
          yPosition={globalCoords.y}
        ></SelectedArea>
        <CharacterList
          xPosition={globalCoords.x + 80}
          yPosition={globalCoords.y}
          ourCharacters={[
            {
              name: "John",
            },
            {
              name: "Dave",
            },
          ]}
        ></CharacterList>
        <BackgroundImage></BackgroundImage>
      </div>
    );
  }
}

export default App;
