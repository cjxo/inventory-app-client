import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import TopBarNarrow from "../../src/components/TopBarNarrow";
import TopBarWide from "../../src/components/TopBarWide";

describe("TopBarNarrow Component Testing", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <TopBarNarrow />
      </BrowserRouter>
    );
  });

  test("does not render H1 LootBox heading", () => {
    const titleH1 = screen.queryByRole("heading", { name: "LootBox" });
    expect(titleH1).not.toBeInTheDocument();
  });

  test("renders drop-down button-img", () => {
    const img = screen.getByRole("img", { name: "drop down links" });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', './src/assets/svgrepo/menu-svgrepo-com.svg');
  });

  test("does not render nav links when dropdown not active", () => {
    expect(screen.queryByRole("link", { name: "Home" })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "Items" })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "Categories" })).not.toBeInTheDocument();
  });

  test("renders nav links when dropdown is active", async () => {
    const user = userEvent.setup();

    const button = screen.getByRole("button");
    await user.click(button);
    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Items" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Categories" })).toBeInTheDocument();

    await user.click(button);
    expect(screen.queryByRole("link", { name: "Home" })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "Items" })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "Categories" })).not.toBeInTheDocument();
  });

  /*
  test("allows user to search",  async () => {
    const user = userEvent.setup();

    const input = screen.getByRole("searchbox");
    await user.type(input, "Hello, ");
    expect(input).toHaveValue("Hello, ");
  });*/
});

describe("TopBarWide Component Testing", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <TopBarWide />
      </BrowserRouter>
    );
  });

  test("renders H1 LootBox heading", () => {
    const titleH1 = screen.getByRole("heading", { name: "LootBox" });
    expect(titleH1).toBeInTheDocument();
  });

  test("does not render drop-down button-img", () => {
    expect(screen.queryByRole("button", { name: "drop down links" })).not.toBeInTheDocument();
    expect(screen.queryByRole("img", { name: "drop down links" })).not.toBeInTheDocument();
  });
});
