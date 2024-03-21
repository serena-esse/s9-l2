import App from "../App";
import { fireEvent, render, screen } from "@testing-library/react";

describe("General mounting items", () => {
  it("mounts the Welcome Alert", () => {
    render(<App />);
    const welcomeAlert = screen.getByText(/benvenuti in epibooks/i);
    expect(welcomeAlert).toBeInTheDocument();
  });
  //   it("mounts the Navbar and Footer", () => {
  //     render(<App />);
  //     const navItems = screen.getAllByRole("navigation");
  //     expect(navItems).toHaveClass("Nav");
  //   });
});

describe("fetching Items", () => {
  it("correctly identifies how many cards have been fetched", async () => {
    render(<App />);
    const Cards = await screen.findAllByAltText(/book-cover/i);
    expect(Cards).toHaveLength(150);
  });
  it("mounts the CommentArea", async () => {
    render(<App />);
    const sendButton = await screen.findByText(/invia/i);
    expect(sendButton).toBeInTheDocument();
  });
});
describe("conditional styling", () => {
  it("checks if there is correct styling on a selected book", async () => {
    render(<App />);
    const selectedBook = await screen.findByTestId(/0316389706/i);
    fireEvent.click(selectedBook);
    expect(selectedBook).toHaveClass("border-danger");
  });
  it("checks if the previous book as returned in its default state when another book is selected", async () => {
    render(<App />);
    const selectedBook = await screen.findByTestId(/0316389706/i);
    const anotherBook = await screen.findByTestId("0316389706");
    fireEvent.click(anotherBook);
    expect(selectedBook).not.toHaveClass("border-danger");
  });
});
