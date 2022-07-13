import "./App.css";
import { useState, useEffect } from "react";
/* Project Components */
import CharacterList from "./components/CharacterList";
import StartMenu from "./components/StartMenu";
import SelectedArea from "./components/SelectedArea";
import BackgroundImage from "./components/BackGroundImage";
/* FireBase imports */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getdoc } from "firebase/firestore/lite";
/* Images Player's will find */
import bear from "./images/Bear.png";
import bird from "./images/Bird.png";
import fishInABowl from "./images/Fish_In_A_bowl.png";
import floppyDisk from "./images/Floppy_Disk.png";
import jellyFish from "./images/JellyFish.png";
import keyLock from "./images/KeyLock.png";
import paperBoat from "./images/PaperBoat.png";
import pen from "./images/Pen.png";
import pufferFIsh from "./images/PufferFIsh.png";
import rollOfTape from "./images/Roll_of_Tape.png";
import skeleton from "./images/Skeleton.png";
import violin from "./images/Violin.png";
import windowImage from "./images/Window.png";
const firebaseConfig = {
  apiKey: "AIzaSyDcns6SyNj5Qm-cqQuytVqjW8INo-b34zU",

  authDomain: "o-where-s-waldo.firebaseapp.com",

  projectId: "o-where-s-waldo",

  storageBucket: "o-where-s-waldo.appspot.com",

  messagingSenderId: "362458937758",

  appId: "1:362458937758:web:eb3e24e0b0b8f355223e8f",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [globalCoords, setGlobalCoords] = useState({ x: 0, y: 0 });
  const [displaySelectedArea, setDisplaySelectedArea] = useState(false);
  const [startedGame, setStartedGame] = useState(false);
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
  /* this means we pressed the started game button */
  if (startedGame === true) {
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
            xPosition={globalCoords.x}
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
  } else if (startedGame === false) {
    return (
      <div className="App">
        <StartMenu
          ourCharacters={[
            {
              charName: "Bear",
              charDir: bear,
            },
            {
              charName: "Bird",
              charDir: bird,
            },
            {
              charName: "Fish In A Bowl",
              charDir: fishInABowl,
            },
            {
              charName: "floppyDisk",
              charDir: floppyDisk,
            },
            {
              charName: "jellyFish",
              charDir: jellyFish,
            },
            {
              charName: "keyLock",
              charDir: keyLock,
            },
            {
              charName: "paperBoat",
              charDir: paperBoat,
            },
            {
              charName: "pen",
              charDir: pen,
            },
            {
              charName: "pufferFIsh",
              charDir: pufferFIsh,
            },
            {
              charName: "rollOfTape",
              charDir: rollOfTape,
            },
            {
              charName: "skeleton",
              charDir: skeleton,
            },
            {
              charName: "violin",
              charDir: violin,
            },
            {
              charName: "window",
              charDir: windowImage,
            },
          ]}
        ></StartMenu>
      </div>
    );
  }
}

export default App;
