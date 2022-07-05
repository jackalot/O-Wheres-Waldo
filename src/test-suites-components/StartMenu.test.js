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
  it("The Bear image has the correct src", () => {
    render(<StartMenu ourCharacters={characterArray}></StartMenu>);
    const bearImage = document.querySelector("img");
    expect(bearImage.src).toContain("images/Bear.png");
  });
  it("The Bear image has the correct alt", () => {
    render(<StartMenu ourCharacters={characterArray}></StartMenu>);
    const bearImage = document.querySelector("img");
    expect(bearImage.alt).toContain("Bear");
  });
  it("The Bird image has the correct alt and src", () => {
    render(<StartMenu ourCharacters={characterArray}></StartMenu>);
    const birdImage = document.querySelector("img");
    expect(birdImage.src).toContain("images/Bird.png");
    expect(birdImage.alt).toContain("Bird");
  });
});
