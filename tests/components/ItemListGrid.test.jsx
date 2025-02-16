import { render, screen } from "@testing-library/react";
import ItemListGrid from "../../src/components/ItemListGrid";

describe("ItemListGrid Component Testing", () => {
  const items = [
    {
      id: 1,
      name: "Blueberry",
      price: "$2.99",
      quantity: 14,
      type: "food",
      src: "./src/assets/textures/blueberry.png",
    },
    {
      id: 2,
      name: "Tomato",
      price: "$1.99",
      quantity: 10,
      type: "food",
      src: "./src/assets/textures/tomato.png",
    },
  ];

  test("renders items correctly", () => {
    render(<ItemListGrid items={items} />);
    items.forEach(item => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByText(item.price)).toBeInTheDocument();
      expect(screen.getByText(`x${item.quantity}`)).toBeInTheDocument();
    });
  });
});
