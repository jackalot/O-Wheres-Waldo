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
        x: event.screenX,
        y: event.screenY,
      });
    };
    window.addEventListener("mousemove", handleWindowMouseMove);
  });
  return (
    <div className="App">
      <SelectedArea></SelectedArea>
      <BackgroundImage></BackgroundImage>
    </div>
  );
}

export default App;
