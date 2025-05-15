import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import Projects from "../components/Projects";

expect.extend(toHaveNoViolations);

describe("Projects Component", () => {
  it("has no accessibility violations", async () => {
    const { container } = render(<Projects />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Projects />); //if jsx change then run command npm test -- -u to update snapshot
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the main heading", () => {
    render(<Projects />);

    // Query the main heading by role and accessible name
    const heading = screen.getByRole("heading", { name: /projects/i });
    expect(heading).toBeInTheDocument();
  });

  it("renders the title pf project", () => {
    render(<Projects />);

    const title = screen.getByRole("heading", {
      name: /weather app in wix/i,
      level: 2, //level 2 for h2
    });
    expect(title).toBeInTheDocument();
  });

  it("renders the description pf project", () => {
    render(<Projects />);

    const description = screen.getByText(/This project is built in/i);
    expect(description).toBeInTheDocument();
  });

  it("renders the View Project Link", () => {
    render(<Projects />);

    const projectLinks = screen.getAllByRole("link", {
      name: /View Project/i,
    });
    expect(projectLinks).toHaveLength(2);
    expect(projectLinks[0]).toHaveAttribute(
      "href",
      "https://mariumdeu.wixsite.com/weather"
    );
  });
});
