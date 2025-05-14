import { render, screen } from "@testing-library/react";
import Projects from "../components/Projects";

describe("Projects Component", () => {
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
      level: 4, //level 4 for h4
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
