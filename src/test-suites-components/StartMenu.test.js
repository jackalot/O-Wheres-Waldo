import { getByRole, render, screen } from "@testing-library/react";
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
