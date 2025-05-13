import { render, screen } from "@testing-library/react";
import Home from "../components/Home";

describe("Home Component", () => {
  it("renders the main heading", () => {
    render(<Home />);

    // Query the main heading by role and accessible name
    const heading = screen.getByRole("heading", { name: /i'm Marium/i });
    expect(heading).toBeInTheDocument();
  });

  it("renders the subheading", () => {
    render(<Home />);

    // Query the subheading by role and accessible name
    const subheading = screen.getByRole("heading", {
      name: /Website front-end and Automation developer/i,
    });
    expect(subheading).toBeInTheDocument();
  });

  it("renders the 'HIRE ME' link", () => {
    render(<Home />);

    // Query the link by role and accessible name
    const hireMeLink = screen.getByRole("link", { name: /hire me/i });
    expect(hireMeLink).toBeInTheDocument();
    expect(hireMeLink).toHaveAttribute("href", "/dev-portfolio/contact");
  });

  it("renders the GitHub link", () => {
    render(<Home />);

    // Query the GitHub link by role and accessible name
    const githubLink = screen.getByRole("link", {
      name: /my profile on github/i,
    });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/mariumiqbal"
    );
  });

  it("renders the LinkedIn link", () => {
    render(<Home />);

    // Query the LinkedIn link by role and accessible name
    const linkedInLink = screen.getByRole("link", {
      name: /my profile on linkedin/i,
    });
    expect(linkedInLink).toBeInTheDocument();
    expect(linkedInLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/marium-iqbal-07728139"
    );
  });
});
