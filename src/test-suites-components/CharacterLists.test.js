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
  const { getByText } = render(
    <CharacterList ourCharacters={characterArray}></CharacterList>
  );
});
