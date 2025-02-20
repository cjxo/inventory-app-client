import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import AddItemPage from "../../src/routes/AddItemPage";

describe("AddItemPage Test", () => {
  test("it renders correctly", () => {
    render(
      <BrowserRouter>
        <AddItemPage />
      </BrowserRouter>
    );
    const header = screen.getByRole("heading", { name: "Add Item" });
    expect(header).toBeInTheDocument();
    
    const name = screen.getByRole("textbox", { name: "Name" });
    expect(name).toBeInTheDocument();
    
    /*
    TODO: Learn how to test requests, because these may vary.
    const food = screen.getByRole("radio", { name: "Food" });
    const potion = screen.getByRole("radio", { name: "Potion" });
    const gems = screen.getByRole("radio", { name: "Gems" });
    expect(food).toBeInTheDocument();
    expect(potion).toBeInTheDocument();
    expect(gems).toBeInTheDocument();
    */
    
    const price = screen.getByRole("spinbutton", { name: "Price ($)" });
    const quantity = screen.getByRole("spinbutton", { name: "Quantity" });
    expect(price).toBeInTheDocument();
    expect(quantity).toBeInTheDocument();
    
    const button = screen.getByRole("button", { name: "Submit" });
    expect(button).toBeInTheDocument();
  });
});