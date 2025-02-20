import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SortOptionsWide from "../../src/components/SortOptionsWide";

const defaultFilters = {
  nameSortOrder: "none",
  priceSortOrder: "none",
  categories: {
    potion: false,
    food: false,
    gems: false,
  },
};

describe("SortOptionsWide Component Testing", () => {  
  test("renders name sort correctly", () => {
    render(<SortOptionsWide defaultFilters={defaultFilters} />);
    expect(screen.getByRole("heading", { name: "Sort By Name" }));
    expect(screen.getAllByRole("radio", { name: "Ascending" })[0]).toHaveAttribute("id", "name-asc");
    expect(screen.getAllByRole("radio", { name: "Descending" })[0]).toHaveAttribute("id", "name-desc");
    expect(screen.getAllByRole("radio", { name: "None" })[0]).toHaveAttribute("id", "name-none");
  });

  test("renders price sort correctly", () => {
    render(<SortOptionsWide defaultFilters={defaultFilters} />);
    expect(screen.getByRole("heading", { name: "Sort By Price" }));
    expect(screen.getAllByRole("radio", { name: "Ascending" })[1]).toHaveAttribute("id", "price-asc");
    expect(screen.getAllByRole("radio", { name: "Descending" })[1]).toHaveAttribute("id", "price-desc");
    expect(screen.getAllByRole("radio", { name: "None" })[1]).toHaveAttribute("id", "price-none");
  });

  
  test.skip("renders category filter correctly", () => {
    render(<SortOptionsWide defaultFilters={defaultFilters} />);
    expect(screen.getByRole("heading", { name: "Filter By Category" }));
    expect(screen.getByRole("checkbox", { name: "Potion" })).toBeInTheDocument();
    expect(screen.getByRole("checkbox", { name: "Food" })).toBeInTheDocument();
    expect(screen.getByRole("checkbox", { name: "Gems" })).toBeInTheDocument();
  });

  // my first time mocking, do not laugh at me PLES  
  test("calls onFiltersChanged when radio buttons for sorting by name are clicked", async () => {
    const onFiltersChanged = vi.fn();
    const user = userEvent.setup();
    
    render(<SortOptionsWide onFiltersChanged={onFiltersChanged} defaultFilters={defaultFilters} />);
    
    const asc = screen.getAllByRole("radio", { name: "Ascending" })[0];
    const desc = screen.getAllByRole("radio", { name: "Descending" })[0];
    const none = screen.getAllByRole("radio", { name: "None" })[0];
    
    await user.click(desc);
    expect(onFiltersChanged).toHaveBeenCalledWith({ nameSortOrder: "desc", priceSortOrder: "none", categories: { potion: false, food: false, gems: false } });
    
    await user.click(asc);
    expect(onFiltersChanged).toHaveBeenCalledWith({ nameSortOrder: "asc", priceSortOrder: "none", categories: { potion: false, food: false, gems: false } });
    
    await user.click(none);
    expect(onFiltersChanged).toHaveBeenCalledWith({ nameSortOrder: "none", priceSortOrder: "none", categories: { potion: false, food: false, gems: false } });
  });
  
  test("calls onFiltersChanged when radio buttons for sorting by price are clicked", async () => {
    const onFiltersChanged = vi.fn();
    const user = userEvent.setup();
    
    render(<SortOptionsWide onFiltersChanged={onFiltersChanged} defaultFilters={defaultFilters} />);
    
    const asc = screen.getAllByRole("radio", { name: "Ascending" })[1];
    const desc = screen.getAllByRole("radio", { name: "Descending" })[1];
    const none = screen.getAllByRole("radio", { name: "None" })[1];
    
    await user.click(desc);
    expect(onFiltersChanged).toHaveBeenCalledWith({ nameSortOrder: "none", priceSortOrder: "desc", categories: { potion: false, food: false, gems: false } });
    
    await user.click(asc);
    expect(onFiltersChanged).toHaveBeenCalledWith({ nameSortOrder: "none", priceSortOrder: "asc", categories: { potion: false, food: false, gems: false } });
    
    await user.click(none);
    expect(onFiltersChanged).toHaveBeenCalledWith({ nameSortOrder: "none", priceSortOrder: "none", categories: { potion: false, food: false, gems: false } });
  });
  
  test.skip("calls onFiltersChanged when checkbox categories are toggled", async () => {
    const onFiltersChanged = vi.fn();
    const user = userEvent.setup();
    
    render(<SortOptionsWide onFiltersChanged={onFiltersChanged} defaultFilters={defaultFilters} />);

    const potion = screen.getByRole("checkbox", { name: "Potion" });
    const food = screen.getByRole("checkbox", { name: "Food" });
    const gems = screen.getByRole("checkbox", { name: "Gems" });
    
    await user.click(potion);
    expect(onFiltersChanged).toHaveBeenCalledWith({ nameSortOrder: "none", priceSortOrder: "none", categories: { potion: true, food: false, gems: false } });
    
    await user.click(food);
    expect(onFiltersChanged).toHaveBeenCalledWith({ nameSortOrder: "none", priceSortOrder: "none", categories: { potion: true, food: true, gems: false } });
    
    await user.click(gems);
    expect(onFiltersChanged).toHaveBeenCalledWith({ nameSortOrder: "none", priceSortOrder: "none", categories: { potion: true, food: true, gems: true } });
    
    await user.click(gems);
    expect(onFiltersChanged).toHaveBeenCalledWith({ nameSortOrder: "none", priceSortOrder: "none", categories: { potion: true, food: true, gems: false } });
    
    await user.click(food);
    expect(onFiltersChanged).toHaveBeenCalledWith({ nameSortOrder: "none", priceSortOrder: "none", categories: { potion: true, food: false, gems: false } });
    
    await user.click(potion);
    expect(onFiltersChanged).toHaveBeenCalledWith({ nameSortOrder: "none", priceSortOrder: "none", categories: { potion: false, food: false, gems: false } });
  });
});