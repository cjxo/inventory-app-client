import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import TopBar from "../../src/components/TopBar";

describe("TopBar Component Testing", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <TopBar />
      </BrowserRouter>
    );
  });

  test("renders heading", () => {
    const titleH1 = screen.getByRole("heading", { name: "LootBox" });
    expect(titleH1).toBeInTheDocument();
  });

  test("renders nav links", () => {
    expect(screen.getByRole("link", { name: "LootBox" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Items" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Categories" })).toBeInTheDocument();
  });

  test("allows user to search",  async () => {
    const user = userEvent.setup();

    const input = screen.getByRole("searchbox");
    await user.type(input, "Hello, ");
    expect(input).toHaveValue("Hello, ");
  });
});
