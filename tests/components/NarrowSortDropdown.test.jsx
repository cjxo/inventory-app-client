import { render, screen } from "@testing-library/react";
import MobileSortDropdown from "../../src/components/MobileSortDropdown";

describe("MobileSortDropdown", () => {
  beforeEach(() => {
    render(<MobileSortDropdown />)
  });

  test("renders name sort correctly", () => {
    const heading = screen.getByRole("heading", { name: "Name" });
    const asc = screen.getByTestId("name-asc");
    const desc = screen.getByTestId("name-desc");

    expect(heading).toBeInTheDocument();
    expect(asc).toBeInTheDocument();
    expect(desc).toBeInTheDocument();
  });

  test("renders price sort correctly", () => {
    const heading = screen.getByRole("heading", { name: "Price" });
    const asc = screen.getByTestId("price-asc");
    const desc = screen.getByTestId("price-desc");

    expect(heading).toBeInTheDocument();
    expect(asc).toBeInTheDocument();
    expect(desc).toBeInTheDocument();
  });

  test("renders category filter correctly", () => {
    expect(screen.getByRole("button", { name: "Potion" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Food" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Gems" })).toBeInTheDocument();
  });
});
