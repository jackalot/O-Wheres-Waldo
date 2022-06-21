import "./App.css";
import SelectedArea from "./components/SelectedArea";
import BackgroundImage from "./components/BackGroundImage";
import { useState, useEffect } from "react";
function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [globalCoords, setGlobalCoords] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleWindowMouseMove = (event) => {
      setGlobalCoords({
        /* Subtracting these values centers the selection circle
         on one screen size, temporary fix */
        x: event.screenX - 20,
        y: event.screenY - 150,
      });
    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);
  return (
    <div className="App">
      <SelectedArea
        xPosition={globalCoords.x}
        yPosition={globalCoords.y}
      ></SelectedArea>
      <BackgroundImage></BackgroundImage>
    </div>
  );
}

export default App;
