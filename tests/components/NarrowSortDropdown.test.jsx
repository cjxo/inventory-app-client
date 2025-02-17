import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NarrowSortDropdown from "../../src/components/NarrowSortDropdown";

const defaultFilters = {
  nameSortOrder: "none",
  priceSortOrder: "none",
  categories: {
    potion: false,
    food: false,
    gems: false,
  },
};

describe("NarrowSortDropdown Component Testing", () => {
  describe("Rendering test", () => {  
    test("renders name sort correctly", () => {
      render(<NarrowSortDropdown defaultFilters={defaultFilters} />);
      const heading = screen.getByRole("heading", { name: "Sort By Name" });
      const asc = screen.getByTestId("name-asc");
      const desc = screen.getByTestId("name-desc");
      const none = screen.getByTestId("name-none");
  
      expect(heading).toBeInTheDocument();
      expect(asc).toBeInTheDocument();
      expect(desc).toBeInTheDocument();
      expect(none).toBeInTheDocument();
    });
  
    test("renders price sort correctly", () => {
      render(<NarrowSortDropdown defaultFilters={defaultFilters} />);
      const heading = screen.getByRole("heading", { name: "Sort By Price" });
      const asc = screen.getByTestId("price-asc");
      const desc = screen.getByTestId("price-desc");
      const none = screen.getByTestId("price-none");
  
      expect(heading).toBeInTheDocument();
      expect(asc).toBeInTheDocument();
      expect(desc).toBeInTheDocument();
      expect(none).toBeInTheDocument();
    });
  
    test("renders category filter correctly", () => {
      render(<NarrowSortDropdown defaultFilters={defaultFilters} />);
      const heading = screen.getByRole("heading", { name: "Filter By Category" });
            
      expect(heading).toBeInTheDocument();
      expect(screen.getByRole("button", { name: "Potion" })).toBeInTheDocument();
      expect(screen.getByRole("button", { name: "Food" })).toBeInTheDocument();
      expect(screen.getByRole("button", { name: "Gems" })).toBeInTheDocument();
    });
  });
  
  describe("onFiltersChanged Callback Test", () => {
    test("calls onFiltersChanged when buttons for sorting by name are clicked", async () => {
      const onFiltersChanged = vi.fn();
      const user = userEvent.setup();

      render(<NarrowSortDropdown onFiltersChanged={onFiltersChanged} defaultFilters={defaultFilters} />);
      
      const asc = screen.getByTestId("name-asc");
      const desc = screen.getByTestId("name-desc");
      const none = screen.getByTestId("name-none");
      
      await user.click(desc);
      expect(onFiltersChanged).toHaveBeenCalledWith({ nameSortOrder: "desc", priceSortOrder: "none", categories: { potion: false, food: false, gems: false } });
      
      await user.click(asc);
      expect(onFiltersChanged).toHaveBeenCalledWith({ nameSortOrder: "asc", priceSortOrder: "none", categories: { potion: false, food: false, gems: false } });
      
      await user.click(none);
      expect(onFiltersChanged).toHaveBeenCalledWith({ nameSortOrder: "none", priceSortOrder: "none", categories: { potion: false, food: false, gems: false } });
    });
    
    test("calls onFiltersChanged when buttons for sorting by price are clicked", async () => {
      const onFiltersChanged = vi.fn();
      const user = userEvent.setup();

      render(<NarrowSortDropdown onFiltersChanged={onFiltersChanged} defaultFilters={defaultFilters} />);
      
      const asc = screen.getByTestId("price-asc");
      const desc = screen.getByTestId("price-desc");
      const none = screen.getByTestId("price-none");
      
      await user.click(desc);
      expect(onFiltersChanged).toHaveBeenCalledWith({ nameSortOrder: "none", priceSortOrder: "desc", categories: { potion: false, food: false, gems: false } });
      
      await user.click(asc);
      expect(onFiltersChanged).toHaveBeenCalledWith({ nameSortOrder: "none", priceSortOrder: "asc", categories: { potion: false, food: false, gems: false } });
      
      await user.click(none);
      expect(onFiltersChanged).toHaveBeenCalledWith({ nameSortOrder: "none", priceSortOrder: "none", categories: { potion: false, food: false, gems: false } });
    });
    
    test("calls onFiltersChanged when buttons for sorting by price are clicked", async () => {
      const onFiltersChanged = vi.fn();
      const user = userEvent.setup();

      render(<NarrowSortDropdown onFiltersChanged={onFiltersChanged} defaultFilters={defaultFilters} />);
      
      const potion = screen.getByRole("button", { name: "Potion" });
      const food = screen.getByRole("button", { name: "Food" });
      const gems = screen.getByRole("button", { name: "Gems" });
      
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
});