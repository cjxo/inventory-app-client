import { render, screen } from "@testing-library/react";
import NarrowSortDropdown from "../../src/components/NarrowSortDropdown";

describe("NarrowSortDropdown Component Testing", () => {
  beforeEach(() => {
    render(<NarrowSortDropdown />)
  });

  test("renders name sort correctly", () => {
    const heading = screen.getByRole("heading", { name: "Sort By Name" });
    const asc = screen.getByTestId("name-asc");
    const desc = screen.getByTestId("name-desc");

    expect(heading).toBeInTheDocument();
    expect(asc).toBeInTheDocument();
    expect(desc).toBeInTheDocument();
  });

  test("renders price sort correctly", () => {
    const heading = screen.getByRole("heading", { name: "Sort By Price" });
    const asc = screen.getByTestId("price-asc");
    const desc = screen.getByTestId("price-desc");

    expect(heading).toBeInTheDocument();
    expect(asc).toBeInTheDocument();
    expect(desc).toBeInTheDocument();
  });

  test("renders category filter correctly", () => {
    const heading = screen.getByRole("heading", { name: "Filter By Category" });
    
    expect(heading).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Potion" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Food" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Gems" })).toBeInTheDocument();
  });
});
