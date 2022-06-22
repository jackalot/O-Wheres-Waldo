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
});
