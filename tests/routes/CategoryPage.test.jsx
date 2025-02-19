import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CategoryPage from "../../src/routes/CategoryPage";

describe("CategoryPage Component Testing", () => {
  test("renders correctly", () => {
    render(
      <BrowserRouter>
        <CategoryPage />
      </BrowserRouter>
    );
    
    expect(screen.getByRole("heading", { name: "Categories" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Add Category" })).toBeInTheDocument();
  });
});