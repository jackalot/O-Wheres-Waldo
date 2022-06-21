import { getByRole, render, screen } from "@testing-library/react";
import SelectedArea from "../components/SelectedArea";

describe("SelectedArea component", () => {
  test("Selected Area div is rendered", () => {
    const { container } = render(<SelectedArea></SelectedArea>);
    expect(container).toMatchSnapshot();
  });
});
