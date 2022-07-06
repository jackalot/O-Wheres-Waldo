import {
  fireEvent,
  getByRole,
  getByTestId,
  render,
  screen,
} from "@testing-library/react";
import { createElement } from "react";
import StartMenu from "../components/StartMenu";

describe("StartMenu component", () => {
  const characterArray = [
    {
      charName: "Bear",
      charDir: "../images/Bear.png",
    },
    {
      charName: "Bird",
      charDir: "../images/Bird.png",
    },
  ];
  it("The StartGame button renders", () => {
    const { getByRole } = render(
      <StartMenu ourCharacters={characterArray}></StartMenu>
    );
    expect(getByRole("button").classList.contains("StartMenu-StartBtn")).toBe(
      true
    );
  });
  it("A mock button hides the container div when clicked", () => {
    function mockChangeClass() {
      const container = document.getByRole(".Startmenu-container");
      container.style.display = "none";
    }
    const { getByRole } = render(
      <StartMenu ourCharacters={characterArray}></StartMenu>
    );
    /* We use a new, mock button instead of the Start button
    as trying to test the start button would give errors with 
    container.style.display */
    const mockButton = createElement("button");
    mockButton.onclick(mockChangeClass);
    fireEvent.click(mockButton);
  });
  it("The Bear image has the correct alt and src", () => {
    const { getByAltText } = render(
      <StartMenu ourCharacters={characterArray}></StartMenu>
    );
    expect(getByAltText("Bear").src).toContain("images/Bear.png");
  });
  it("The Bird image has the correct alt and src", () => {
    const { getByAltText } = render(
      <StartMenu ourCharacters={characterArray}></StartMenu>
    );
    expect(getByAltText("Bird").src).toContain("images/Bird.png");
  });
});
