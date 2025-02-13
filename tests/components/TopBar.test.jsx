import { render, screen } from "@testing-library/react";
import TopBar from "../../src/components/TopBar";

describe("TopBar Component Testing", () => {
  test("Renders content", () => {
    render(<TopBar />);

    const titleH1 = screen.getByRole("heading", { name: "LootBox" });
    expect(titleH1).toBeInTheDocument();
  }) 
});
