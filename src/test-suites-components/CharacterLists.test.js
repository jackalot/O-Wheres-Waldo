import { getByRole, render, screen } from "@testing-library/react";
import CharacterList from "../components/CharacterList";

describe("CharacterList component", () => {
  const characterArray = [
    {
      name: "John",
    },
    {
      name: "Dave",
    },
  ];
  it("John renders as an LI element", () => {
    const { getByText } = render(
      <CharacterList ourCharacters={characterArray}></CharacterList>
    );
    const johnTest = getByText("John");
    expect(johnTest.textContent).toContain("John");
  });
  it("John and Dave both render", () => {
    const { getByText } = render(
      <CharacterList ourCharacters={characterArray}></CharacterList>
    );
    const johnTest = getByText("John");
    expect(johnTest.textContent).toContain("John");
    const DaveTest = getByText("Dave");
    expect(DaveTest.textContent).toContain("Dave");
  });
});
