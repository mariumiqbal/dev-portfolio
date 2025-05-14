import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

describe("Header Component", () => {
  it("renders the header tag", () => {
    const { container } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
    expect(container.querySelector("header")).toBeInTheDocument(); // Just add it to use alternate way
  });

  it("renders the main heading", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // Query the main heading by role and accessible name
    const heading = screen.getByRole("heading", {
      name: /my portfolio/i,
      level: 1,
    });
    expect(heading).toBeInTheDocument();
  });

  it("renders the subheading", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // Query the subheading by text
    const subheading = screen.getByText(
      /welcome to my portfolio website built in react and typescript!/i
    );
    expect(subheading).toBeInTheDocument();
  });

  it("renders the navigation links", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // Query the navigation links by role and accessible name
    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");

    const projectsLink = screen.getByRole("link", { name: /projects/i });
    expect(projectsLink).toBeInTheDocument();
    expect(projectsLink).toHaveAttribute("href", "/projects");

    const contactLink = screen.getByRole("link", { name: /contact/i });
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute("href", "/contact");
  });

  it("renders the navigation bar", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // Query the navigation bar by role
    const navBar = screen.getByRole("navigation");
    expect(navBar).toBeInTheDocument();
  });
});
