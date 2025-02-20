import {
  useState,
  createContext,
  useContext,
  useEffect,
} from "react";

const ItemsContext = createContext({
  items: [],
  addItem: async (name, type, price, quantity, buffer) => {},
});

const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    // api.item.getAll();
    setItems([
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
        id: 3,
        name: "Ramen",
        price: "$10.99",
        quantity: 3,
        type: "food",
        src: "./src/assets/textures/ramen.png",
      },
      {
        id: 4,
        name: "Health Potion",
        price: "$5.99",
        quantity: 6,
        type: "potion",
        src: "./src/assets/textures/health-potion.png",
      },
      {
        id: 5,
        name: "Speed Potion",
        price: "$5.99",
        quantity: 6,
        type: "potion",
        src: "./src/assets/textures/speed-potion.png",
      },
      {
        id: 6,
        name: "Luck Potion",
        price: "$5.99",
        quantity: 6,
        type: "potion",
        src: "./src/assets/textures/luck-potion.png",
      },
      {
        id: 7,
        name: "Poison Potion",
        price: "$5.99",
        quantity: 6,
        type: "potion",
        src: "./src/assets/textures/poison-potion.png",
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
        quantity: 4,
        type: "gems",
        src: "./src/assets/textures/ruby.png",
      },
    ]);
  }, []);
  
  const addItem = async (name, type, price, quantity, buffer) => {
    setItems((prev) => [...prev, { id: prev[prev.length - 1].id + 1, name, type, price, quantity, src: buffer }]);
  };
  
  return (
    <ItemsContext.Provider value={ {items,addItem} }>
      {children}
    </ItemsContext.Provider>
  );
};

const useItems = () => useContext(ItemsContext);
export default useItems;
export { ItemsProvider, ItemsContext };