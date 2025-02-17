import { render, screen } from "@testing-library/react";
import ItemListGrid, {
  filterItemsByCategory, sortByName, sortByPrice
} from "../../src/components/ItemListGrid";

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
  {
    id: 8,
    name: "Diamond",
    price: "$1699.99",
    quantity: 4,
    type: "gems",
    src: "./src/assets/textures/diamond.png",
  },
  {
    id: 9,
    name: "Ruby",
    price: "$999.99",
    quantity: 6,
    type: "gems",
    src: "./src/assets/textures/ruby.png",
  },
  {
    id: 6,
    name: "Luck Potion",
    price: "$7.99",
    quantity: 11,
    type: "potion",
    src: "./src/assets/textures/luck-potion.png",
  },
  {
    id: 7,
    name: "Poison Potion",
    price: "$5.99",
    quantity: 9,
    type: "potion",
    src: "./src/assets/textures/poison-potion.png",
  },
];

describe("ItemListGrid Component Testing", () => {
  test("renders items correctly", () => {
    render(
      <ItemListGrid
        items={items}
        nameSortOrder="none"
        priceSortOrder="none"
        categories={{food:false, gems:false, potion:false}}
      />
    );
    items.forEach(item => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByText(item.price)).toBeInTheDocument();
      expect(screen.getByText(`x${item.quantity}`)).toBeInTheDocument();
    });
  });
});

describe("filterItemsByCategory Test", () => {
  test("if no category is selected or all categories are selected, then return all items", () => {
    expect(filterItemsByCategory(items, { food: false, gems: false, potion: false })).toEqual(items);
    expect(filterItemsByCategory(items, { food: true, gems: true, potion: true })).toEqual(items);
  });
  
  test("if the potion category is selected, then return potion items", () => {
    const subset = [
      {
        id: 6,
        name: "Luck Potion",
        price: "$7.99",
        quantity: 11,
        type: "potion",
        src: "./src/assets/textures/luck-potion.png",
      },
      {
        id: 7,
        name: "Poison Potion",
        price: "$5.99",
        quantity: 9,
        type: "potion",
        src: "./src/assets/textures/poison-potion.png",
      },
    ];
    expect(filterItemsByCategory(items, { food: false, gems: false, potion: true })).toEqual(subset);
  });
  
  test("if the food category is selected, then return food items", () => {
    const subset = [
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
    expect(filterItemsByCategory(items, { food: true, gems: false, potion: false })).toEqual(subset);
  });
  
  test("if the food gems is selected, then return gem items", () => {
    const subset = [
      {
        id: 8,
        name: "Diamond",
        price: "$1699.99",
        quantity: 4,
        type: "gems",
        src: "./src/assets/textures/diamond.png",
      },
      {
        id: 9,
        name: "Ruby",
        price: "$999.99",
        quantity: 6,
        type: "gems",
        src: "./src/assets/textures/ruby.png",
      },
    ];
    expect(filterItemsByCategory(items, { food: false, gems: true, potion: false })).toEqual(subset);
  });
});

describe("sortByName Test", () => {
  test("if nameSortOrder = 'asc', then sort in ascending order", () => {
    const reordered = [
      {
        id: 1,
        name: "Blueberry",
        price: "$2.99",
        quantity: 14,
        type: "food",
        src: "./src/assets/textures/blueberry.png",
      },
       {
        id: 8,
        name: "Diamond",
        price: "$1699.99",
        quantity: 4,
        type: "gems",
        src: "./src/assets/textures/diamond.png",
      },
      {
        id: 6,
        name: "Luck Potion",
        price: "$7.99",
        quantity: 11,
        type: "potion",
        src: "./src/assets/textures/luck-potion.png",
      },
      {
        id: 7,
        name: "Poison Potion",
        price: "$5.99",
        quantity: 9,
        type: "potion",
        src: "./src/assets/textures/poison-potion.png",
      },
      {
        id: 9,
        name: "Ruby",
        price: "$999.99",
        quantity: 6,
        type: "gems",
        src: "./src/assets/textures/ruby.png",
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
    
    expect(sortByName(items, "asc")).toEqual(reordered);
  });
  
  test("if nameSortOrder = 'desc', then sort in descending order", () => {
    const reordered = [
      {
        id: 2,
        name: "Tomato",
        price: "$1.99",
        quantity: 10,
        type: "food",
        src: "./src/assets/textures/tomato.png",
      },
      {
        id: 9,
        name: "Ruby",
        price: "$999.99",
        quantity: 6,
        type: "gems",
        src: "./src/assets/textures/ruby.png",
      },
      {
        id: 7,
        name: "Poison Potion",
        price: "$5.99",
        quantity: 9,
        type: "potion",
        src: "./src/assets/textures/poison-potion.png",
      },
      {
        id: 6,
        name: "Luck Potion",
        price: "$7.99",
        quantity: 11,
        type: "potion",
        src: "./src/assets/textures/luck-potion.png",
      },
      {
        id: 8,
        name: "Diamond",
        price: "$1699.99",
        quantity: 4,
        type: "gems",
        src: "./src/assets/textures/diamond.png",
      },
      {
        id: 1,
        name: "Blueberry",
        price: "$2.99",
        quantity: 14,
        type: "food",
        src: "./src/assets/textures/blueberry.png",
      },
    ];
    
    expect(sortByName(items, "desc")).toEqual(reordered);
  });
});

describe("sortByPrice test", () => {
  test("if priceSortOrder = 'asc', then sort in ascending order", () => {
    const reordered = [
      {
        id: 2,
        name: "Tomato",
        price: "$1.99",
        quantity: 10,
        type: "food",
        src: "./src/assets/textures/tomato.png",
      },
      {
        id: 1,
        name: "Blueberry",
        price: "$2.99",
        quantity: 14,
        type: "food",
        src: "./src/assets/textures/blueberry.png",
      },
      {
        id: 7,
        name: "Poison Potion",
        price: "$5.99",
        quantity: 9,
        type: "potion",
        src: "./src/assets/textures/poison-potion.png",
      },
      {
        id: 6,
        name: "Luck Potion",
        price: "$7.99",
        quantity: 11,
        type: "potion",
        src: "./src/assets/textures/luck-potion.png",
      },
      {
        id: 9,
        name: "Ruby",
        price: "$999.99",
        quantity: 6,
        type: "gems",
        src: "./src/assets/textures/ruby.png",
      },
      {
        id: 8,
        name: "Diamond",
        price: "$1699.99",
        quantity: 4,
        type: "gems",
        src: "./src/assets/textures/diamond.png",
      },
    ];

    expect(sortByPrice(items, "asc")).toEqual(reordered);
  });

  test("if priceSortOrder = 'desc', then sort in descending order", () => {
    const reordered = [
      {
        id: 8,
        name: "Diamond",
        price: "$1699.99",
        quantity: 4,
        type: "gems",
        src: "./src/assets/textures/diamond.png",
      },
      {
        id: 9,
        name: "Ruby",
        price: "$999.99",
        quantity: 6,
        type: "gems",
        src: "./src/assets/textures/ruby.png",
      },
      {
        id: 6,
        name: "Luck Potion",
        price: "$7.99",
        quantity: 11,
        type: "potion",
        src: "./src/assets/textures/luck-potion.png",
      },
      {
        id: 7,
        name: "Poison Potion",
        price: "$5.99",
        quantity: 9,
        type: "potion",
        src: "./src/assets/textures/poison-potion.png",
      },
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

    expect(sortByPrice(items, "desc")).toEqual(reordered);
  });
});