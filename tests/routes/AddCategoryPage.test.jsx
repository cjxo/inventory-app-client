import { render, screen } from "@testing-library/react";
import AddCategoryPage from "../../src/routes/AddCategoryPage";

describe("AddCategoryPage Component Testing", () => {
  test("renders correctly", () => {
    render(<AddCategoryPage />);
    expect(screen.getByRole("heading", { name: "Add Category" })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "Name" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();

    // for some reason, I cannot do getByRole for this
    const color = screen.getByLabelText("Color");
    expect(color).toBeInTheDocument();
    expect(color).toHaveAttribute("type", "color");
  });
});