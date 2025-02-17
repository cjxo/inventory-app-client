import { render, screen } from "@testing-library/react";
import SortOptionsWide from "../../src/components/SortOptionsWide";

describe("SortOptionsWide Component Testing", () => {
  beforeEach(() => {
    render(<SortOptionsWide />);
  });
  
  test("renders name sort correctly", () => {
    expect(screen.getByRole("heading", { name: "Sort By Name" }));
    expect(screen.getAllByRole("radio", { name: "Ascending" })[0]).toHaveAttribute("id", "name-asc");
    expect(screen.getAllByRole("radio", { name: "Descending" })[0]).toHaveAttribute("id", "name-desc");
    expect(screen.getAllByRole("radio", { name: "None" })[0]).toHaveAttribute("id", "name-none");
  });

  test("renders price sort correctly", () => {
    expect(screen.getByRole("heading", { name: "Sort By Price" }));
    expect(screen.getAllByRole("radio", { name: "Ascending" })[1]).toHaveAttribute("id", "price-asc");
    expect(screen.getAllByRole("radio", { name: "Descending" })[1]).toHaveAttribute("id", "price-desc");
    expect(screen.getAllByRole("radio", { name: "None" })[1]).toHaveAttribute("id", "price-none");
  });

  test("renders category filter correctly", () => {
    expect(screen.getByRole("heading", { name: "Filter By Category" }));
    expect(screen.getByRole("checkbox", { name: "Potion" })).toBeInTheDocument();
    expect(screen.getByRole("checkbox", { name: "Food" })).toBeInTheDocument();
    expect(screen.getByRole("checkbox", { name: "Gems" })).toBeInTheDocument();
  });
});
