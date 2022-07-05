import { getByRole, render, screen } from "@testing-library/react";
import StartMenu from "../components/StartMenu";

describe("StartMenu component", () => {
  it("The StartGame button renders", () => {
    const { getByRole } = render(<StartMenu></StartMenu>);
  });
});
