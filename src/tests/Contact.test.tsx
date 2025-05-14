import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";

describe("Contact Component", () => {
  it("renders the main heading", () => {
    render(<Contact />);

    // Query the main heading by role and accessible name
    const heading = screen.getByRole("heading", { name: /Contact/i });
    expect(heading).toBeInTheDocument();
  });

  it("renders the emailaddress heading", () => {
    render(<Contact />);

    const emailContent = screen.getByText(/send me an email /i);
    expect(emailContent).toBeInTheDocument();

    const emailLink = screen.getByRole("link", {
      name: /marium.deu@gmail.com/i,
    });

    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", "mailto:marium.deu@gmail.com");
  });

  it("renders the linkedIn content", () => {
    render(<Contact />);

    // Query the p element
    const linkedInContent = screen
      .getByText(/reach me on LinkedIn/i)
      .closest("p");

    // Verify the <p> element exist
    expect(linkedInContent).toBeInTheDocument();

    //Query the <a> element within the <p> element
    const linkedInLink = linkedInContent?.querySelector("a");
    expect(linkedInLink).toBeInTheDocument();
    expect(linkedInLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/marium-iqbal-07728139"
    );
    expect(linkedInLink).toHaveTextContent("in/marium-iqbal");
  });

  it("renders the GitHub Profile Content", () => {
    render(<Contact />);

    const gitHubContent = screen.getByText(/GitHub profile /i);
    expect(gitHubContent).toBeInTheDocument();

    const gitHubLink = screen.getByRole("link", {
      name: /mariumiqbal/i,
    });
    expect(gitHubLink).toBeInTheDocument();
    expect(gitHubLink).toHaveAttribute(
      "href",
      "https://github.com/mariumiqbal"
    );
  });
});
