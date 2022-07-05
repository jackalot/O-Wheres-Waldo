import { getByRole, render, screen } from "@testing-library/react";
import StartMenu from "../components/StartMenu";

describe("StartMenu component", () => {
  const characterArray = [
    {
      charName: "Bear",
      charDir: "../images/Bear.png",
    },
    {
      name: "Bird",
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
  it("The Bear image renders", () => {});
});
