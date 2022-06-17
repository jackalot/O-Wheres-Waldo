import "./App.css";
import SelectedArea from "./components/SelectedArea";
import BackgroundImage from "./components/BackGroundImage";
import { useState } from "react";
function App() {
  const [mousePosition, setMousePosition] = useState();
  return (
    <div className="App">
      <SelectedArea></SelectedArea>
      <BackgroundImage></BackgroundImage>
    </div>
  );
}

export default App;
