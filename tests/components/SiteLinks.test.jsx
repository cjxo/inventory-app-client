import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SiteLinks from "../../src/components/SiteLinks";

describe("SiteLinks Component Testing", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <SiteLinks />
      </BrowserRouter>
    );
  });

  test("renders nav links", () => {
    expect(screen.queryByRole("link", { name: "LootBox" })).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Items" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Categories" })).toBeInTheDocument();
  });
});
