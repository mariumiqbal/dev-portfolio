import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

describe("App Component", () => {
  test("matches snapshot", () => {
    const { asFragment } = render(
      //if jsx change then run command npm test -- -u to update snapshot
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the main title", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    const mainHeading = screen.getAllByText(/My Portfolio/i);
    const description =
      "Welcome to my portfolio website built in React and TypeScript!";

    expect(screen.getByText(new RegExp(description, "i"))).toBeInTheDocument();
    expect(mainHeading.length).toBeGreaterThan(0);
  });

  it("renders the navigation links", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Projects/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  });

  it("navigates to the Home component when clicking the Home link", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    const homeLink = screen.getByText(/Home/i);
    await userEvent.click(homeLink);
    expect(
      screen.getByText(/Website Front-end and Automation Developer/i)
    ).toBeInTheDocument();
  });

  it("navigates to the Projects component when clicking the Projects link", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    const projectsLink = screen.getByText(/Projects/i);
    await userEvent.click(projectsLink);
    expect(await screen.getByText(/Weather App in Wix/i)).toBeInTheDocument();
  });

  it("navigates to the Contact component when clicking the Contact link", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    const contactLink = screen.getByText(/Contact/i);
    await userEvent.click(contactLink);
    expect(
      screen.getByText(/If you want to get ahold of m/i)
    ).toBeInTheDocument();
  });
});
