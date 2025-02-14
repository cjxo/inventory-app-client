import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "../../src/routes/HomePage";

describe("HomePage Component Testing", () => {
  render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );

  test("renders correctly", () => {
    const heading = screen.getByRole("heading", { name: "Welcome to LootBox , an inventory management app for video game items" });
    const paragraph = screen.getByText("Easily organize, track, and manage your virtual loot with ease.");
    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    
    expect(screen.getByRole("link", { name: "See Items" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "See Categories" })).toBeInTheDocument();
  });
});
