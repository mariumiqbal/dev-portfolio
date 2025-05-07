import { screen, render } from "@testing-library/react";
import Home from "../components/Home";

describe("Home Component", () => {
  test("renders Heading ", () => {
    render(<Home />);
    const heading = screen.getByText(/I'm Marium/i);
    expect(heading).toBeInTheDocument();
  });
});
