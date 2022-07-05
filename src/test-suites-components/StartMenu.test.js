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
    const { getByRole } = render(<StartMenu></StartMenu>);
  });
});
